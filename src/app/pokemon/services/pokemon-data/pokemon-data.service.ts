import { PokeAPIPokemon } from './../../models/pokeapi-model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import { Observable } from 'rxjs';
import {PokemonMapperService} from '../../mappers/pokemon-mapper.service';
import {map} from 'rxjs/operators';
import {ApiResponse, PokemonModel} from '../../models/pokemon-model';

@Injectable({
  providedIn: 'root',
})
export class PokemonDataService {

  constructor(
    public httpClient: HttpClient,
    public pokemonMapperService: PokemonMapperService,
  ) { }

  getFirstGenerationList(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(environment.apiUrl + 'pokemon', {
      params: {
        limit: environment.apiFirstGenerationLimit,
      }
    });
  }

  getPokemonByName(pokemon: string): Observable<PokemonModel> {
    return this.httpClient.get(environment.apiUrl + 'pokemon/' + pokemon)
      .pipe(map((response: PokeAPIPokemon) => this.pokemonMapperService.mapPokemonFromPokeApiPokemon(response)));
  }
}
