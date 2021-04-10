import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonListViewComponent } from './pokemon-list-view.component';
import { ApiResponse } from '../../models/pokemon-model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

describe('PokemonListViewComponent', () => {
  let component: PokemonListViewComponent;
  let fixture: ComponentFixture<PokemonListViewComponent>;
  const apiResponse: ApiResponse = {
    count: 3,
    next: '',
    previous: '',
    results: [{
      name: 'pokemon 1',
      url: 'http://pokemon.url.com'
    },
    {
      name: 'pokemon 2',
      url: 'http://pokemon.url.com'
    },
    {
      name: 'pokemon 3',
      url: 'http://pokemon.url.com'
    }]
  };
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonListViewComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListViewComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should loadPokemonList', () => {
    spyOn(component.pokemonDataService, 'getFirstGenerationList')
    .and.returnValue(new Observable(x => {
      x.next(apiResponse);
      x.complete();
    }));
    component.loadPokemonList();
    expect(component.pokemonList.length).toEqual(3);
  });

  it('should loadPokemonList and no results', () => {
    spyOn(component.pokemonDataService, 'getFirstGenerationList')
    .and.returnValue(new Observable(x => {
      x.next();
      x.complete();
    }));
    component.loadPokemonList();
    expect(component.pokemonList.length).toEqual(0);
  });

  it('should onSearch and find one pokemon ', () => {
    spyOn(component.pokemonDataService, 'getFirstGenerationList')
    .and.returnValue(new Observable(x => {
      x.next(apiResponse);
      x.complete();
    }));
    component.loadPokemonList();
    component.searchName = 'Pokemon 1';
    component.onSearch();
    expect(component.pokemonList.length).toEqual(1);
  });

  it('should onSearch and loadPokemonList ', () => {
    spyOn(component.pokemonDataService, 'getFirstGenerationList')
    .and.returnValue(new Observable(x => {
      x.next(apiResponse);
      x.complete();
    }));
    component.searchName = '';
    component.onSearch();
    expect(component.pokemonList.length).toEqual(3);
  });
});
