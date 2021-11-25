import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { heroReducer } from '../../store/heroes.reducer';
import { ModalPollComponent } from './modal-poll.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Heroe } from 'src/app/models/hero';

describe('ModalPollComponent', () => {
  let component: ModalPollComponent;
  let fixture: ComponentFixture<ModalPollComponent>;

  beforeEach(async(() => {    TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      RouterTestingModule,
      StoreModule.forRoot({ heroes: heroReducer }),
      RouterModule.forRoot([])
    ],
    declarations: [ ModalPollComponent ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
  })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test toggle_modal function', () => {
    spyOn(component, 'toggle_modal').and.callThrough();
    component.toggle_modal();
    expect(component.toggle_modal).toHaveBeenCalled();
    expect(component.toggle_modal).toBeDefined();
  });

  it('should test send_team function', () => {
    spyOn(component, 'send_team').and.callThrough();
    component.hero = new Heroe('1', '', '', new Date(), '', '', '');
    component.send_team('');
    expect(component.send_team).toHaveBeenCalled();
    expect(component.send_team).toBeDefined();
  });

});
