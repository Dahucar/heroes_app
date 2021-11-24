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

  it('should test submitSearch function', () => {
    spyOn(component, 'submitSearch').and.callThrough();
    component.submitSearch();
    expect(component.submitSearch).toHaveBeenCalled();
    expect(component.submitSearch).toBeDefined();
  });

  it('should test prevPage function', () => {
    spyOn(component, 'prevPage').and.callThrough();
    component.prevPage();
    expect(component.prevPage).toHaveBeenCalled();
    expect(component.prevPage).toBeDefined();
  });

  it('should test nextPage function', () => {
    spyOn(component, 'nextPage').and.callThrough();
    component.nextPage();
    expect(component.nextPage).toHaveBeenCalled();
    expect(component.nextPage).toBeDefined();
  });

  // TODO: error match route
  it('should test go_to function', () => {
    spyOn(component, 'go_to').and.callThrough();
    component.go_to('');
    expect(component.go_to).toHaveBeenCalled();
    expect(component.go_to).toBeDefined();
  });

  // it('las funciones deben estar definidas', () => {
  //   expect(component.submitSearch).toBeDefined();
  //   expect(component.go_to).toBeDefined();
  //   expect(component.nextPage).toBeDefined();
  //   expect(component.prevPage).toBeDefined();
  // });
});
