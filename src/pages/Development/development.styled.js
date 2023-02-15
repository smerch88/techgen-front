import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const Item = styled('li')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '16px',
  padding: '24px',
  marginBottom: '52px',
  background: theme.palette.colorList.boulder,
  cursor: 'pointer',
  [theme.breakpoints.up('xs')]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));
export const List = styled('ul')({
  paddingLeft: '0px',
  marginTop: '80px',
});
export const Wrapper = styled('div')({
  display: 'flex',
});
export const BoxWrapper = styled(Box)({
  marginLeft: '52px',
});
export const Image = styled('img')({
  borderRadius: '16px',
});
export const Div = styled('div')({
  float: 'right',
});
