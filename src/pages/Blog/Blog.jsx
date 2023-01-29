import React from 'react';
import { Container, Box, Grid } from '@mui/material';
import { BackTop } from './backTop.styled';
import Heading from 'components/Heading/Heading';
import Filters from 'components/Filters/Filters';
import PostsList from 'components/PostsList/PostsList';

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
