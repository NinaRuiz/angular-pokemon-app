import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonDetailViewComponent } from './pokemon-detail-view.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonDataService } from '../../services/pokemon-data/pokemon-data.service';

describe('PokemonDetailViewComponent', () => {
  let component: PokemonDetailViewComponent;
  let fixture: ComponentFixture<PokemonDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDetailViewComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        PokemonDataService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
