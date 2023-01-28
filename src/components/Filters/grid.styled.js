import styled from 'styled-components';
import { Grid } from '@mui/material';
import theme from 'styles/theme';

export const StyledGrid = styled(props => (
  <Grid item lg={12} md={9} xs={12} {...props}></Grid>
))`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto !important;
  ${theme.breakpoints.up('md')} {
    gap: 24px;
  }
`;
