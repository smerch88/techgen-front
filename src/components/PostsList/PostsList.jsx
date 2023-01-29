import React, { useEffect, useState } from 'react';
import Post from './Post';
import { Box } from '@mui/material';
import axios from 'axios';

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        'https://63cecea06d27349c2b76151b.mockapi.io/blogs'
      );
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