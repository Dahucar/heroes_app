import { async, ComponentFixture, ComponentFixtureAutoDetect, inject, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { heroReducer } from '../../store/heroes.reducer';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from "@angular/router/testing";
import { HeroService } from '../../services/hero.service';
import { HeroServiceMock } from '../../services/heroMock';

import { HeroProfileComponent } from './hero-profile.component';
import { RouterModule } from '@angular/router';

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
        RouterTestingModule,
        StoreModule.forRoot({ heroes: heroReducer }),
        RouterModule.forRoot([])
      ],
      declarations: [ HeroProfileComponent ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
        { provide: HeroService, useClass: HeroServiceMock },
        { provide: Location, useClass: LocationMock},
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    heroesService = TestBed.inject(HeroService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    heroesService = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
