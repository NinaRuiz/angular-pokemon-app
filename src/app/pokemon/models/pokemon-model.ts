export interface PokemonModel {
  abilities: any[];
  baseExperience: number;
  forms: any[];
  height: number;
  heldItems: any[];
  id: number;
  isDefault: boolean;
  moves: any[];
  name: string;
  order: number;
  pastTypes: any[];
  species: {};
  sprites: {};
  stats: any[];
  types: any[];
  weight: number;
}

export interface ApiResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonDetail[];
}

export interface PokemonDetail {
  name: string;
  url: string;
}
