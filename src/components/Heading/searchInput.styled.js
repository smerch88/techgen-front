import styled from 'styled-components';
import SearchInput from './SearchInput';
import theme from 'styles/theme';

export const StyledSearchInput = styled(props => <SearchInput {...props} />)`
  .MuiInput-root {
    width: 100%;

    ${theme.breakpoints.up('lg')} {
      display: none;
    }
  }

  ${theme.breakpoints.up('xs')} {
      border-bottom: 1px solid transparent;
      border-image: linear-gradient(to right, ${
        theme.palette.colorList.sanMarino
      }, ${theme.palette.colorList.blackPearl});
      border-image-slice: 1;
  }

  ${theme.breakpoints.up('md')} {
    width: 75%;
    border-radius: 16px;
    border: 1px solid ${theme.palette.colorList.sanMarino}
    
  }

  ${theme.breakpoints.up('lg')} {
    display: none;
    width: 100%;
  }

  filter drop-shadow(0 7px 12px rgba(0, 0, 0, 0.25))
`;
