import React from 'react';
import { Container, Box, Grid } from '@mui/material';
import PostsList from 'components/postsList/PostsList';
import Filters from 'components/filters/Filters';
import Heading from 'components/heading/Heading';
import { BackTop } from './backTop.styled';

const Blog = () => {
  return (
    <Grid container xs={12} sx={{ margin: '0 auto' }}>
      <Grid item lg={1} md={0}></Grid>
      <Container xl={11} lg={11} md={12}>
        <Heading />
        <Filters />
        <Box>
          <PostsList />
        </Box>
      </Container>
      <BackTop />
    </Grid>
  );
};

export default Blog;
