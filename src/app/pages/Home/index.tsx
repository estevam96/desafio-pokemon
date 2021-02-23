import React, { useEffect, useState } from 'react';
import { listPokemon } from '../../api';
import Grid from '../../components/Grid';
import PokeCard from '../../components/PokeCard';
import { BtnFilter, Container, FilteNav } from './components/Home';

interface IPokemons {
  name: string;
}

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemons[]>([]);

  const getPokemons = async (url = 'pokemon?limit=20&offset=0') => {
    const { results } = await listPokemon(url);
    setPokemons(results);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <Container>
      <FilteNav>
        <BtnFilter active>Todos</BtnFilter>
        <BtnFilter active={false}>Fire</BtnFilter>
        <BtnFilter active={false}>Eletric</BtnFilter>
        <BtnFilter active={false}>Water</BtnFilter>
      </FilteNav>
      <Grid>
        {pokemons.map(pokemon => (
          <PokeCard key={pokemon.name} titulo={pokemon.name} />
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
