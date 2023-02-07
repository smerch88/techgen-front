import { Box, styled } from '@mui/material';

export const StyledPost = styled(Box)(({ theme }) => ({
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  padding: '30px 24px',
  marginBottom: '52px',
  width: '100%',
  borderRadius: '16px',
  background: theme.palette.colorList.boulder,
  transition: 'all 0.2s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.up('xs')]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));
