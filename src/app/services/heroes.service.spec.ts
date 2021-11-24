import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { HeroService } from './hero.service';
import { heroReducer } from '../store/heroes.reducer';

describe('HeroesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoreModule.forRoot({ heroes: heroReducer }),
      ],
      providers: [HeroService]
      
    });
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));

  it('La página debe ser 0', inject([HeroService], (service: HeroService) => {
    const spy = spyOn(service, 'resetPager');
    expect(service.page).toBe(0);
  }));

});
