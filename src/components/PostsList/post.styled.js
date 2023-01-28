import styled from 'styled-components';
import { Box } from '@mui/material';
import theme from 'styles/theme';

export const StyledPost = styled(Box)`
  cursor: pointer;
  position: relative;
  display: flex;
  padding: 30px 24px;
  margin-bottom: 52px;
  width: 100%;
  border-radius: 16px;
  background: ${theme.palette.colorList.boulder};
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.05);
  }
  ${theme.breakpoints.up('xs')} {
    flex-direction: column;
  }
  ${theme.breakpoints.up('md')} {
    flex-direction: row;
  }
`;
