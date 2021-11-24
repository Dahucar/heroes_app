import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { HeroService } from './hero.service';
import { heroReducer } from '../store/heroes.reducer';

describe('HeroesService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoreModule.forRoot({ heroes: heroReducer }),
      ],
      providers: [HeroService]
      
    });
    service = TestBed.inject(HeroService);
  });

  afterEach(() => { 
    service = null;
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));

  it('should test getHeroe function',
    inject([HeroService, HttpXhrBackend], (hservice) => {
      hservice.getHeroe('1').subscribe((heroe: any) => {
        expect(heroe.data.results.length).toBe(1);
        expect(heroe.data.results[0].name).toEqual('Spiderman1');
      });
  }));

  it('should test resetPager function', () => {
    spyOn(service, 'resetPager').and.callThrough();
    service.resetPager();
    expect(service.resetPager).toHaveBeenCalled();
    expect(service.resetPager).toBeDefined();
  });

  it('should test getTeamColor function', () => {
    spyOn(service, 'getTeamColor').and.callThrough();
    service.getTeamColor('');
    expect(service.getTeamColor).toHaveBeenCalled();
    expect(service.getTeamColor).toBeDefined();
  });

  // it('should test getHeroes function', () => {
  //   spyOn(service, 'getHeroes').and.callThrough();
  //   service.getHeroes();
  //   expect(service.getHeroes).toHaveBeenCalled();
  //   expect(service.getHeroes).toBeDefined();
  // });

});
