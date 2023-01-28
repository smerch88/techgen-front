import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import theme from 'styles/theme';

const H2 = styled(({ title, ...props }) => (
  <Typography variant="h2" {...props}>
    {title}
  </Typography>
))`
  margin-bottom: 12px !important;
  line-height: 24px;
`;

export const Content = styled(({ title, content }) => (
  <Box>
    <H2 title={title} />
    <Box>{`${content.slice(0, 100)}...`}</Box>
  </Box>
))`
  ${theme.breakpoints.up('xs')} {
    width: 100%;
    margin-bottom: 25px;
  }

  ${theme.breakpoints.up('md')} {
    width: 62%;
    margin-bottom: 0;
  }
`;
