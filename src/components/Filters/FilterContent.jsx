import React from 'react';
import FiltersButton from './FilterButtons';
import { StyledTextField } from './textField.styled';
import { StyledGrid } from './grid.styled';

const FiltersContent = ({ isMobileVersion }) => {
  return (
    <StyledGrid>
      <FiltersButton isMobileVersion={isMobileVersion} />
      <StyledTextField />
    </StyledGrid>
  );
};

export default FiltersContent;
