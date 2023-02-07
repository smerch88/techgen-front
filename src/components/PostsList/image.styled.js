import { Box, styled } from '@mui/material';

export const Image = styled(props => (
  <Box component="img" alt="post's image" src={props.thumbnail} {...props} />
))(({ theme }) => ({
  marginRight: '60px',
  borderRadius: '16px',
  [theme.breakpoints.up('xs')]: {
    marginBottom: '24px',
    width: '100%',
  },

  [theme.breakpoints.up('md')]: {
    marginBottom: 0,
    width: '142px',
  },
}));
