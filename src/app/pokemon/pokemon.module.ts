import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonListViewComponent } from './views/pokemon-list-view/pokemon-list-view.component';
import { PokemonDetailViewComponent } from './views/pokemon-detail-view/pokemon-detail-view.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        PokemonListViewComponent,
        PokemonDetailViewComponent,
        SpinnerComponent
    ],
    exports: [
        SpinnerComponent
    ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    FormsModule
  ]
})
export class PokemonModule { }
