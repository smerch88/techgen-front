import React from 'react';
import { Button, Grid } from '@mui/material';
import { ReactComponent as FilterIcon } from 'images/icons/filter-icon.svg';
import { ReactComponent as NewestIcon } from 'images/icons/newest-icon.svg';
import { ReactComponent as RatedIcon } from 'images/icons/top-rated-icon.svg';
import { AddCircle } from '@mui/icons-material';
import { StyledLink } from 'components/PostsList/post.styled';

const FiltersButton = ({ isMobileVersion }) => {
  return (
    <>
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
      <Grid item>
        <StyledLink href="posts/new">
          <Button size="small" endIcon={<AddCircle />}>
            {isMobileVersion ? 'Add' : 'Create'}
          </Button>
        </StyledLink>
      </Grid>
    </>
  );
};

export default FiltersButton;
