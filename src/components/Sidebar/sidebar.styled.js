import { styled } from '@mui/material/styles';
import theme from 'styles/theme';
import { NavLink } from 'react-router-dom';
export const List = styled('ul')({
  marginTop: '83px',
});
export const Item = styled('li')({
  display: 'flex',
  marginBottom: '23px',
  listStyle: 'none',
  '&:nth-last-of-type(1)': {
    marginBottom: '0px',
  },
});

export const Link = styled(NavLink)({
  textDecoration: 'none',
  marginLeft: ' 12px',
  color: theme.palette.text.primary,
  '&:hover': {
    color: theme.palette.text.secondary,
  },
});
