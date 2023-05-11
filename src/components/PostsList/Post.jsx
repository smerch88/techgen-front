import React from 'react';

import { StyledLink, StyledPost, Title } from './post.styled';

const Post = ({ name, id }) => {
  return (
    <StyledLink href={`posts/${id}`}>
      <StyledPost>
        <Title name={name} />
      </StyledPost>
    </StyledLink>
  );
};

export default Post;
