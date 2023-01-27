import { Button, Grid, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ReactComponent as FilterIcon } from 'images/icons/filter.svg';
import { ReactComponent as NewestIcon } from 'images/icons/newest.svg';
import { ReactComponent as RatedIcon } from 'images/icons/rated.svg';

const Filters = () => {
  const theme = useTheme();
  const isMobileVersion = useMediaQuery(theme.breakpoints.between('xs', 'md'));
  return (
    <Grid item sx={{ mb: { md: '80px', xs: '40px' } }} lg={12} md={12}>
      <Grid item md={3}></Grid>
      <Grid
        item
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: '12px', md: '24px' },
          marginLeft: 'auto',
        }}
        lg={12}
        md={9}
        xs={12}
      >
        <Grid item>
          <Button size="small" endIcon={<FilterIcon />}>
            Filter
          </Button>
        </Grid>
        <Grid item>
          <Button size="small" endIcon={<NewestIcon />}>
            {isMobileVersion ? 'New' : 'Newest'}
          </Button>
        </Grid>
        <Grid item>
          <Button size="small" endIcon={<RatedIcon />}>
            {isMobileVersion ? 'Top' : 'TopRated'}
          </Button>
        </Grid>
        <Grid item xl={9} lg={6}>
          <TextField
            sx={{
              display: { xs: 'none', lg: 'block' },
              borderRadius: '16px',
              border: `1px solid ${theme.palette.colorList.sanMarino}`,
              filter: 'drop-shadow(0 7px 12px rgba(0, 0, 0, 0.25))',
            }}
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
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Filters;
