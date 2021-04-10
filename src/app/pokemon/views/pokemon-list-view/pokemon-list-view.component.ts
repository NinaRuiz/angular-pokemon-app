import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokemonDataService } from '../../services/pokemon-data/pokemon-data.service';
import { PokemonDetail } from '../../models/pokemon-model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'pkmn-pokemon-list-view',
  templateUrl: './pokemon-list-view.component.html',
  styleUrls: ['./pokemon-list-view.component.scss']
})
export class PokemonListViewComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();

  pokemonList: PokemonDetail[] = [];
  hoverPokemon: boolean[] = [];
  searchName: string;

  constructor(
    public pokemonDataService: PokemonDataService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.loadPokemonList();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadPokemonList(): void {
    this.pokemonDataService.getFirstGenerationList()
    .pipe(takeUntil(this.destroy$))
    .subscribe(apiResponse => {
      if (apiResponse) {
        this.pokemonList = apiResponse.results;
        for (const pokemon of this.pokemonList) {
          this.hoverPokemon[pokemon.name] = false;
        }
      }
      });
  }

  onSearch(): void {
    if (this.searchName === ''){
      this.loadPokemonList();
    }

    this.pokemonList = this.pokemonList
    .filter(pokemon => pokemon.name.includes(
      this.searchName.toLocaleLowerCase()));

  }

}
