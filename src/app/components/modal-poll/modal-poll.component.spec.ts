import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { heroReducer } from '../../store/heroes.reducer';
import { ModalPollComponent } from './modal-poll.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

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
});
