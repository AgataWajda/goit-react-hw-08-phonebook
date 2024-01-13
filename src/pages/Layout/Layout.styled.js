import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  color: #202020;
  font-family: 'Ubutu', sans-serif;
  &.active {
    color: #0855ca;
  }
`;
