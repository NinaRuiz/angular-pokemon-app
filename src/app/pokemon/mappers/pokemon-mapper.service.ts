import { Injectable } from '@angular/core';
import { PokeAPIPokemon } from '../models/pokeapi-model';
import { PokemonModel} from '../models/pokemon-model';

@Injectable({
  providedIn: 'root'
})
export class PokemonMapperService {

  constructor() { }

  mapPokemonFromPokeApiPokemon(data: PokeAPIPokemon): PokemonModel {
    return {
      abilities: data.abilities,
      baseExperience: data.base_experience,
      forms: data.forms,
      height: data.height,
      heldItems: data.held_items,
      id: data.id,
      isDefault: data.is_default,
      moves: data.moves,
      name: data.name,
      order: data.order,
      pastTypes: data.past_types,
      species: data.species,
      sprites: data.sprites,
      stats: data.stats,
      types: data.types,
      weight: data.weight
    };
  }
}
