import { takeUntil } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {PokemonModel} from '../../models/pokemon-model';
import {PokemonDataService} from '../../services/pokemon-data/pokemon-data.service';
import {ActivatedRoute} from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'pkmn-pokemon-detail-view',
  templateUrl: './pokemon-detail-view.component.html',
  styleUrls: ['./pokemon-detail-view.component.scss']
})
export class PokemonDetailViewComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();

  pokemonModel: PokemonModel;

  constructor(
    private pokemonDataService: PokemonDataService,
    private activatedRouted: ActivatedRoute
  ) { }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.loadPokemonInfo(this.getUrlPokemonName());
  }

  getUrlPokemonName(): string {
    return this.activatedRouted.snapshot.paramMap.get('pokemonName');
  }

  loadPokemonInfo(pokemonName: string): void {
    this.pokemonDataService.getPokemonByName(pokemonName)
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      pokemon => {
        this.pokemonModel = pokemon;
      });
  }

}
