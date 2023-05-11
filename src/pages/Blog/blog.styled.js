import { Box, Grid, styled } from '@mui/material';
import { BackTop } from './backTop.styled';
import Heading from 'components/Heading/Heading';
import Filters from 'components/Filters/Filters';
import PostsList from 'components/PostsList/PostsList';

const StyledBlog = styled(props => (
  <Grid container {...props}>
    <Grid item xl={0} lg={1} md={0}></Grid>
    <Grid item xl={12} lg={11} md={12}>
      <Heading />
      <Filters />
      <Box>
        <PostsList />
      </Box>
    </Grid>
    <BackTop />
  </Grid>
))(({ theme }) => ({
  display: 'flex',
  margin: '30px auto 0px auto',

  [theme.breakpoints.up('xs')]: {
    padding: '0 16px',
  },

  [theme.breakpoints.up('md')]: {
    padding: '0 32px',
  },

  [theme.breakpoints.up('lg')]: {
    maxWidth: '944px',
  },

  [theme.breakpoints.up('xl')]: {
    maxWidth: '1264px',
  },
}));

export default StyledBlog;
