import { Box, styled } from '@mui/material';
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
))(({ theme }) => ({
  position: 'absolute',
  bottom: '12px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '3px',

  [theme.breakpoints.up('xs')]: {
    right: '12px',
    fontSize: '14px',
  },

  [theme.breakpoints.up('md')]: {
    right: '40px',
  },
}));
