import { Box, styled } from '@mui/material';
import { ReactComponent as ArrowUp } from 'images/icons/arrowUp.svg';

export const BackTop = styled(props => (
  <Box {...props}>
    <ArrowUp width="30" height="26" />
  </Box>
))(({ theme }) => ({
  position: 'fixed',
  bottom: '40px',
  [theme.breakpoints.up('xs')]: {
    right: '16px',
  },

  [theme.breakpoints.up('md')]: {
    right: '32px',
  },

  [theme.breakpoints.up('lg')]: {
    right: '180px',
  },
}));
