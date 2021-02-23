import React from 'react';
import {
  Image,
  Container,
  EmpytTitle,
  EmpytText,
  BtnFovorite
} from './components/Favorites';
import astronaut from '../../assets/astronaut.svg';

const Favorites: React.FC = () => {
  return (
    <Container>
      <Image src={astronaut} />
      <EmpytTitle>Está meio vazio por aqui!</EmpytTitle>
      <EmpytText>
        Procure por pokémons para adicioná-los aos seus favoritos.
      </EmpytText>
      <BtnFovorite to="/search">Procurar pokémons</BtnFovorite>
    </Container>
  );
};

export default Favorites;
