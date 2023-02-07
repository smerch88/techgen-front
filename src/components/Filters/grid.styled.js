import { Grid, styled } from '@mui/material';

export const StyledGrid = styled(props => (
  <Grid item lg={12} md={9} xs={12} {...props}></Grid>
))(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginLeft: 'auto !important',
  [theme.breakpoints.up('md')]: {
    gap: '24px',
  },
}));
