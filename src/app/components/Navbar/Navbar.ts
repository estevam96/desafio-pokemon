import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';

const activeClassName = 'active';

export const NavBar = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled.img`
  width: 75px;
  height: 30px;
  left: 138px;
  top: 8px;
`;

export const Content = styled.nav`
  display: flex;
  justify-content: center;
  align-self: center;
`;

export const Nav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const NavItem = styled.li`
  float: left;
  color: #1e1e1f;
`;

export const NavItemLink = styled(NavLink)`
  display: block;
  padding: 15px;
  color: #1e1e1f;
  height: 50px;
  max-height: 100%;
  text-decoration: none;
  &.${activeClassName} {
    border-bottom: 1px solid #1e1e1f;
  }
`;

export const BtnLogout = styled(Button)`
  margin: 0;
  width: 89px;
  height: 30px;
  border: 1px solid black;
  padding: 3px 10px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
