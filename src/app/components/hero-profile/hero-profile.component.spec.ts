import { async, ComponentFixture, ComponentFixtureAutoDetect, inject, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { heroReducer } from '../../store/heroes.reducer';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from "@angular/router/testing";
import { HeroService } from '../../services/hero.service';
import { HeroServiceMock } from '../../services/heroMock';

import { HeroProfileComponent } from './hero-profile.component';
import { RouterModule } from '@angular/router';
import { ModalPollComponent } from '../modal-poll/modal-poll.component';
import { Heroe } from 'src/app/models/hero';

class LocationMock {
  back():void {}
}

describe('HeroProfileComponent', () => {
  let component: HeroProfileComponent;
  let fixture: ComponentFixture<HeroProfileComponent>;
  let heroesService: HeroService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes(
          [{path: 'heroe/:id', component: HeroProfileComponent}]
        ),
        StoreModule.forRoot({ heroes: heroReducer }),
        RouterModule.forRoot([])
      ],
      declarations: [ HeroProfileComponent, ModalPollComponent ],
      providers: [
        HeroService,HeroServiceMock,
        { provide: ComponentFixtureAutoDetect, useValue: true },
        { provide: HeroService, useClass: HeroServiceMock },
        { provide: Location, useClass: LocationMock},
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    heroesService = TestBed.inject(HeroService);
    // heroesService = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test getHeroService function', () => {
    spyOn(component, 'getHeroService').and.callThrough();
    component.getHeroService();
    expect(component.getHeroService).toHaveBeenCalled();
    expect(component.getHeroService).toBeDefined();
  });

  it('should test getTeam function', () => {
    spyOn(component, 'getTeam').and.callThrough();
    component.heroe = new Heroe('1', '', '', new Date(), '', '', '');
    component.getTeam('1011334');
    expect(component.getTeam).toHaveBeenCalled();
    expect(component.getTeam).toBeDefined();
  });

  it('should test launchModal function', () => {
    spyOn(component, 'launchModal').and.callThrough();
    component.launchModal();
    expect(component.launchModal).toHaveBeenCalled();
    expect(component.launchModal).toBeDefined();
  });

  it('should test goBack function', () => {
    spyOn(component, 'goBack').and.callThrough();
    component.goBack();
    expect(component.goBack).toHaveBeenCalled();
    expect(component.goBack).toBeDefined();
  });

});
