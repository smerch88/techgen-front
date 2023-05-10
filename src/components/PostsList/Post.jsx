import React from 'react';

import { StyledPost, Title } from './post.styled';

const Post = ({ name }) => {
  return (
    <StyledPost>
      <Title name={name} />
    </StyledPost>
  );
};

export default Post;
