import React from 'react';
import { useTheme } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import { StyledPost } from './post.styled';
import { Image } from './image.styled';
import { Content } from './content.styled';
import { ViewsNumber } from './viewsNumber.styled';

const Post = props => {
  const theme = useTheme();
  const isMobileVersion = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  return (
    <StyledPost>
      <Image thumbnail={props.thumbnail} />
      <Content {...props} />
      <ViewsNumber isMobileVersion={isMobileVersion} />
    </StyledPost>
  );
};

export default Post;
