import React from 'react';
import { useTheme } from '@mui/system';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import PostsList from 'components/PostsList/PostsList';

const Blog = () => {
  const theme = useTheme();
  return (
    <Box sx={{ maxWidth: 880, margin: '0 auto' }}>
      <Grid container md={12}>
        <Grid item md={1}></Grid>
        <Grid item container md={11} space={0}>
          <Typography variant="h3" sx={{ marginBottom: '40px' }}>
            Blog
          </Typography>
          <Grid sx={{ marginBottom: '80px' }} container item>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Button
                style={{
                  backgroundColor: theme.palette.colorList.boulder,
                }}
                variant="contained"
                size="small"
                onClick={event =>
                  (event.target.style.backgroundColor =
                    theme.palette.colorList.darkPearl)
                }
              >
                Filter
              </Button>
              <Button size="small">Newest</Button>
              <Button size="small">TopRated</Button>
              <TextField
                sx={{
                  width: '53%',
                  borderRadius: 16,
                  border: '1px solid #4c58a2',
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
            </Box>
          </Grid>
          <Grid item container>
            <PostsList />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Blog;
