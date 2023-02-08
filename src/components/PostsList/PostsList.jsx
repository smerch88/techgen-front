import React, { useEffect, useState } from 'react';
import Post from './Post';
import { Box } from '@mui/material';

import { blogInstance } from 'api';

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await blogInstance.get();
      setPosts(response.data);
    })();
  }, []);

  return (
    <Box sx={{ marginBottom: '324px' }}>
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </Box>
  );
};

export default PostsList;
