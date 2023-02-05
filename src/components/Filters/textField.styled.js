import styled from 'styled-components';
import { Grid, TextField } from '@mui/material';
import theme from 'styles/theme';

export const StyledTextField = styled(props => (
  <Grid item lg={9} md={0} xs={0}>
    <TextField
      id="outlined-basic"
      placeholder="search"
      variant="standard"
      inputProps={{
        style: {
          padding: '10px 15px',
        },
      }}
      InputProps={{
        disableUnderline: true,
      }}
      fullWidth
      {...props}
    />
  </Grid>
))`
  display: none !important;
  border-radius: 16px !important;
  border: 1px solid ${theme.palette.colorList.sanMarino} !important;
  filter: drop-shadow(0 7px 12px rgba(0, 0, 0, 0.25)) !important;
  ${theme.breakpoints.up('lg')} {
    display: block !important;
  }
`;
