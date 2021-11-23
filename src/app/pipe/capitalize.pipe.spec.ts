import { CapitalizePipe } from './capitalize.pipe';
import { TestBed, inject, async } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { ModalPollComponent } from '../components/modal-poll/modal-poll.component';
import { HeroProfileComponent } from '../components/hero-profile/hero-profile.component';

describe('CapitalizePipe', () => {
  let pipe;

  //setup
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [CapitalizePipe],
      declarations: [
        AppComponent,
        ModalPollComponent,
        HeroProfileComponent,
        CapitalizePipe,
      ],
    })
  );

  beforeEach(inject([CapitalizePipe], (p: CapitalizePipe) => {
    pipe = p;
  }));

  //specs
  it('crea la instancia', () => {
    expect(pipe).toBeTruthy();
  });

  it('debería funcionar con un string vacío', () => {
    expect(pipe.transform('')).toEqual('');
  });

  it('debería realizar la transformación de Capitalize', () => {
    expect(pipe.transform('wow')).toEqual('WOW');
  });

  it('debería lanzar error por valores inválidos', () => {
    //must use arrow function for expect to capture exception
    expect(() => pipe.transform(undefined)).toThrow();
    expect(() => pipe.transform()).toThrow();
    expect(() => pipe.transform()).toThrowError(
      'No hay un string que transformar'
    );
  });
});
