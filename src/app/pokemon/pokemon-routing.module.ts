import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonListViewComponent} from './views/pokemon-list-view/pokemon-list-view.component';
import {PokemonDetailViewComponent} from './views/pokemon-detail-view/pokemon-detail-view.component';

const routes: Routes = [
  {
    path: ':pokemonName',
    component: PokemonDetailViewComponent
  },
  {
    path: '',
    component: PokemonListViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
