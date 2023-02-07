import { Box, Typography, styled } from '@mui/material';

const H2 = styled(({ title, ...props }) => (
  <Typography variant="h2" {...props}>
    {title}
  </Typography>
))(() => ({
  marginBottom: '12px !important',
  lineHeight: '24px',
}));

export const Content = styled(({ title, content }) => (
  <Box>
    <H2 title={title} />
    <Box>{`${content.slice(0, 100)}...`}</Box>
  </Box>
))(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    width: '100%',
    marginBottom: '25px',
  },

  [theme.breakpoints.up('md')]: {
    width: '62%',
    marginBottom: 0,
  },
}));
