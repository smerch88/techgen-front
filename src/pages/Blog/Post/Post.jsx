import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Container, Stack } from '@mui/material';
import api from 'api/api';
import ActionsDropdown, {
  Action,
  DeleteDialog,
  PostHeader,
  PostTitle,
} from 'pages/Blog/Post/post.styled';
import TextEditor from 'components/TextEditor/TextEditor';
import { USER_ROLES } from 'helpers/roles';
import { useAuth } from 'hooks';
import { history } from 'helpers/history';
import { Pencil } from 'phosphor-react';

const Post = () => {
  const { id } = useParams();
  const { user, isAuthorized } = useAuth();

  const [post, setPost] = useState(null);
  const [isReadOnly, setIsReadOnly] = useState(true);

  const titleRef = useRef();
  const editorRef = useRef();

  useEffect(() => {
    if (id === 'new') {
      if (!isAuthorized || user?.role !== USER_ROLES.admin) {
        return history.navigate('/sign-in');
      }

      setIsReadOnly(false);
      return;
    }

    try {
      (async function getPost(_id) {
        const resp = (await api.post.getPost(_id)).data;
        console.log('resp', resp);
        setPost(resp.data);
      })(id);
    } catch (e) {
      console.error(e);
    }
  }, [id, isAuthorized, user?.role]);

  const handleDeletePost = async () => {
    try {
      const resp = (await api.admin_post.deletePost(post.id)).data;
      if (resp.statusCode === 200) {
        alert(resp.data.message);
        return history.navigate('/blog');
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleSave = async e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const postText = editorRef.current.getContent();
    formData.append('text', postText);

    try {
      if (id === 'new') {
        const resp = (await api.admin_post.createPost(formData)).data;
        return history.navigate('/post/' + resp.data.id);
      }

      const resp = (await api.admin_post.updatePost(post.id, formData)).data;
      if (resp.statusCode === 200) {
        alert('Post successfully updated');
      }
    } catch (e) {
      alert('Something went wrong please try again later');
      console.error(e);
    } finally {
      setIsReadOnly(true);
    }
  };

  const handleCancel = () => {
    titleRef.current.value = post.name || '';
    editorRef.current.setContent(post.text || '');
    setIsReadOnly(true);
  };

  return (
    <Container>
      <Stack sx={{ rowGap: '24px', padding: '60px 0' }}>
        <PostHeader>
          {id !== 'new' && user?.role === USER_ROLES.admin && (
            <ActionsDropdown>
              <Action onClick={() => setIsReadOnly(false)}>
                <Pencil size={18} weight="bold" /> Edit
              </Action>
              <DeleteDialog onConfirm={handleDeletePost} />
            </ActionsDropdown>
          )}
        </PostHeader>

        {id !== 'new' && !post ? (
          'loading...'
        ) : (
          <form
            onSubmit={handleSave}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <PostTitle
              ref={titleRef}
              name="name"
              defaultValue={post?.name || ''}
              minRows={1}
              placeholder="Title"
              required
              disabled={isReadOnly || user?.role !== USER_ROLES.admin}
              style={{
                border:
                  isReadOnly || user?.role !== USER_ROLES.admin
                    ? 'none'
                    : '1px solid #ffffff80',
              }}
            />

            <TextEditor
              ref={editorRef}
              readOnly={isReadOnly || user?.role !== USER_ROLES.admin}
              defaultValue={post?.text || ''}
              name="text"
            />

            {!isReadOnly && (
              <Box style={{ display: 'flex', gap: '24px' }}>
                {id !== 'new' && (
                  <Button
                    type="button"
                    color="transparent"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                )}
                <Button type="submit" color="gradient">
                  {id === 'new' ? 'Create' : 'Update'} post
                </Button>
              </Box>
            )}
          </form>
        )}
      </Stack>
    </Container>
  );
};

export default Post;
