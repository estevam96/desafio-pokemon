import React, { useState } from 'react';
import {
  Container,
  SearchIcon,
  SearchInput,
  FormSearch,
  EmpytMensage
} from './components/Search';
import { findPokemon } from '../../api';
import { IPokemon } from '../../../types.d';
import Grid from '../../components/Grid';
import PokeCard from '../../components/PokeCard';

const Search: React.FC = () => {
  const [text, setText] = useState('');
  const [pokemon, setPokemon] = useState<IPokemon>({ name: '' });
  const [isEmpyt, setIsEmpyt] = useState(false);

  const handleSearch = async () => {
    await findPokemon({ pokemon: text.toLowerCase() })
      .then(({ name }) => {
        setPokemon({ name });
      })
      .catch(() => {
        setIsEmpyt(true);
        setPokemon({ name: '' });
      });
  };

  return (
    <Container>
      <FormSearch
        autoComplete="off"
        onSubmit={e => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <SearchInput
          placeholder="Procure por pokémons"
          onChange={e => setText(e.target.value)}
        />
        <SearchIcon size={30} onClick={() => handleSearch()} />
      </FormSearch>

      <Grid>{pokemon.name ? <PokeCard titulo={pokemon.name} /> : null}</Grid>
      {isEmpyt ? <EmpytMensage>Pokemon não encontrado :(</EmpytMensage> : null}
    </Container>
  );
};

export default Search;
