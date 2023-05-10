import { Box, Skeleton, Typography, styled } from '@mui/material';

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

export const PostSkeleton = styled(Skeleton)({
  height: '200px',
  margin: ' 0 0 5px 0',
  borderRadius: '16px',
});

export const Title = styled(({ name, ...props }) => (
  <Typography variant="h2" {...props}>
    {name}
  </Typography>
))(() => ({
  marginBottom: '12px !important',
  lineHeight: '24px',
}));
