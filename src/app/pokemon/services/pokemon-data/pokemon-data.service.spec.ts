import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../models/pokemon-model';
import { PokemonDataService } from './pokemon-data.service';

describe('PokemonDataService', () => {
  let service: PokemonDataService;
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(PokemonDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getFirstGenerationList', () => {
    spyOn(service.httpClient, 'get').and.returnValue(new Observable(x => {
      x.next(apiResponse);
      x.complete();
    }));
    service.getFirstGenerationList()
    .subscribe(response => {
      expect(response.results.length).toEqual(3);
    });
  });

  it('should getPokemonByName', () => {
    spyOn(service.httpClient, 'get').and.returnValue(new Observable(x => {
      x.next(apiResponse.results[0]);
      x.complete();
    }));
    service.getPokemonByName('pokemon 1')
    .subscribe(response => {
      expect(response.name).toEqual('pokemon 1');
    });
    expect(service).toBeTruthy();
  });
});
