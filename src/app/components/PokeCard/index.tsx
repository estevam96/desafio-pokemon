/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { IPokemon } from '../../../types.d';
import { findPokemon } from '../../api';
import {
  Card,
  CardText,
  CardTitle,
  Sprite,
  Type,
  TypeContainer,
  BtnDetails,
  FovoriteIcon
} from './PokeCard';

interface PokeCardProps {
  titulo: string;
}

const PokeCard: React.FC<PokeCardProps> = ({ titulo }) => {
  const [pokemon, setPokemon] = useState<IPokemon>();

  const getPomemon = async () => {
    const { id, name, types, sprites } = await findPokemon({ pokemon: titulo });
    setPokemon({ id, name, types, sprites });
  };

  useEffect(() => {
    getPomemon();
  }, [titulo]);

  return (
    <Card>
      <FovoriteIcon size={23} />
      <Sprite>
        <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
      </Sprite>
      <CardTitle>{pokemon?.name}</CardTitle>
      <CardText>id: {pokemon?.id}</CardText>
      <TypeContainer>
        {pokemon?.types?.map(({ type }) => (
          <Type variant={type.name === 'fire' ? 'danger' : ''} key={type.name}>
            {type.name}
          </Type>
        ))}
      </TypeContainer>
      <BtnDetails>Ver detalhes</BtnDetails>
    </Card>
  );
};

export default PokeCard;
