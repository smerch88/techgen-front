import { Box } from '@mui/material';
import styled from 'styled-components';
import theme from 'styles/theme';
import { ReactComponent as ViewNumbersIcon } from 'images/icons/views.svg';

export const ViewsNumber = styled(({ isMobileVersion, ...props }) => (
  <Box {...props}>
    {isMobileVersion ? (
      <ViewNumbersIcon width="14px" height="14px" />
    ) : (
      <ViewNumbersIcon width="22px" height="22px" />
    )}
    2
  </Box>
))`
  position: absolute;
  bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;

  ${theme.breakpoints.up('xs')} {
    right: 12px;
    font-size: 14px;
  }

  ${theme.breakpoints.up('md')} {
    right: 40px;
  }
`;
