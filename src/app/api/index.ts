import { IPokemon } from '../../types.d';

/* eslint-disable camelcase */
const baseUrl = 'https://pokeapi.co/api/v2/';

interface RequestParams {
  url?: string;
  pokemon: string;
}

interface ResPokemon {
  results: {
    name: string;
  }[];
}
export const findPokemon = async ({
  url = baseUrl,
  pokemon
}: RequestParams): Promise<IPokemon> => {
  const response = await fetch(`${url}pokemon/${pokemon}`);
  return response.json();
};

export const listPokemon = async (url?: string): Promise<ResPokemon> => {
  const response = await fetch(`${baseUrl}${url}`);
  return response.json();
};
