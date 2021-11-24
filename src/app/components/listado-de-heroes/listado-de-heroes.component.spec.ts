import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { heroReducer } from '../../store/heroes.reducer';

import { ListadoDeHeroesComponent } from './listado-de-heroes.component';
import { RouterTestingModule } from "@angular/router/testing";

describe('ListadoDeHeroesComponent', () => {
  let component: ListadoDeHeroesComponent;
  let fixture: ComponentFixture<ListadoDeHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        RouterModule.forRoot([]),
        StoreModule.forRoot({ heroes: heroReducer }),
        HttpClientModule,
      ],
      providers: [
        {provide: Location, useClass: Location},
      ],
      declarations: [ ListadoDeHeroesComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDeHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
