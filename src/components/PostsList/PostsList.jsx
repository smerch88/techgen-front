import React from 'react';
import Post from './Post';
import { Box } from '@mui/material';

import { usePosts } from './usePosts';
import { PostSkeleton } from './post.styled';

const PostsList = () => {
  const { data, isLoading } = usePosts();

  return (
    <Box sx={{ marginBottom: '324px' }}>
      {isLoading
        ? [...Array(4)].map(() => <PostSkeleton />)
        : data?.map(post => <Post key={post?.id} name={post?.name} />)}
    </Box>
  );
};

export default PostsList;
