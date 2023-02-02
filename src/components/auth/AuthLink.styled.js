import { Link, styled } from '@mui/material';

const AuthLink = styled(Link)(({ theme }) => ({
  color: theme.palette.colorList.sanMarino,
  textDecoration: 'none',
  marginLeft: '10px',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export default AuthLink;
