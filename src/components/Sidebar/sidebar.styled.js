import styled from 'styled-components';
import theme from 'styles/theme';
import { NavLink } from 'react-router-dom';
export const Item = styled.li`
  display: flex;
  margin-bottom: 23px;
  list-style: none;
  &:nth-last-child(1) {
    margin-bottom: 0px;
  }
`;
export const Link = styled(NavLink)`
  color: ${theme.palette.text.primary};
  text-decoration: none;
  margin-left: 12px;
  &:hover {
    color: ${theme.palette.text.secondary};
  }
`;
