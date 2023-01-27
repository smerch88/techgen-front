import React from 'react';
import { Container, Box, Grid } from '@mui/material';
import PostsList from 'components/PostsList/PostsList';
import Filters from 'components/Filters/Filters';
import Heading from 'components/Heading/Heading';

import { ReactComponent as ArrowUp } from 'images/icons/arrowUp.svg';

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
      <Box
        sx={{
          position: 'fixed',
          right: { lg: '180px', md: '32px', xs: '16px' },
          bottom: '40px',
        }}
      >
        <ArrowUp width="30" height="26" />
      </Box>
    </Grid>
  );
};

export default Blog;
