import styled from 'styled-components';
import theme from 'styles/theme';
import { ReactComponent as SearchIcon } from 'images/icons/search.svg';

export const StyledSearchIcon = styled(SearchIcon)`
    marginBottom: '-13px',
    display: block;
    ${theme.breakpoints.up('md')}{
        display: none;
    }
`;
