import React from 'react';
import { MdExitToApp } from 'react-icons/md';
import {
  Content,
  Logo,
  Nav,
  NavBar,
  NavItem,
  NavItemLink,
  BtnLogout
} from './Navbar';
import pokeLogoWrite from '../../assets/pokeLogo-write.svg';
import { useAuth } from '../../context/auth';

const Navbar: React.FC = () => {
  const { logout } = useAuth();
  return (
    <NavBar>
      <Logo src={pokeLogoWrite} alt="logo" />
      <Content>
        <Nav>
          <NavItem>
            <NavItemLink to="/favorites" activeClassName="active">
              Favoritos
            </NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink to="/search" activeClassName="active">
              Procurar
            </NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink exact to="/home" activeClassName="active">
              Ver todos
            </NavItemLink>
          </NavItem>
        </Nav>
      </Content>
      <BtnLogout onClick={() => logout()}>
        Sair <MdExitToApp size={15} />
      </BtnLogout>
    </NavBar>
  );
};

export default Navbar;
