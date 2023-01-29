import styled from 'styled-components';
import { Box } from '@mui/material';
import theme from 'styles/theme';

export const Image = styled(props => (
  <Box component="img" alt="post's image" src={props.thumbnail} {...props} />
))`
  margin-right: 60px;
  border-radius: 16px;
  ${theme.breakpoints.up('xs')} {
    margin-bottom: 24px;
    width: 100%;
  }

  ${theme.breakpoints.up('md')} {
    margin-bottom: 0;
    width: 142px;
  }
`;
