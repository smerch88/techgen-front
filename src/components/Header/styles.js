import { styled } from '@mui/system';
import { Box, AppBar, IconButton, Typography } from '@mui/material';
import { Link as ReactLink } from 'react-router-dom';
import theme from 'styles/theme';
import { CaretDown } from 'phosphor-react';
export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  zIndex: theme.zIndex.drawer + 1,
  [theme.breakpoints.up('xs')]: {
    padding: '0 16px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '0 24px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '0 32px',
  },
  [theme.breakpoints.up('xl')]: {
    padding: '0 64px',
  },
}));

export const LanguageDropDown = styled(props => (
  <Box {...props}>
    <Typography variant="h2">EN</Typography>
    <CaretDown weight="bold" />
  </Box>
))({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  '&:hover': {
    cursor: 'pointer',
  },
});

export const Link = styled(ReactLink)({
  textDecoration: 'none',
  color: theme.palette.text.primary,
});

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  width: '30px',
  height: '30px',
  overflow: 'hidden',
  borderRadius: '8px',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.colorList.darkBlue,
  fontSize: '1rem',
  textTransform: 'uppercase'
}));
