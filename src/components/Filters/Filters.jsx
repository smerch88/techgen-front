import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import FiltersContent from './FilterContent';

const Filters = () => {
  const theme = useTheme();
  const isMobileVersion = useMediaQuery(theme.breakpoints.between('xs', 'md'));
  return (
    <Grid item sx={{ mb: { md: '80px', xs: '40px' } }} lg={12} md={12}>
      <Grid item md={3}></Grid>
      <FiltersContent isMobileVersion={isMobileVersion} />
    </Grid>
  );
};

export default Filters;
