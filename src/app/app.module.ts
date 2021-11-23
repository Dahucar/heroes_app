import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { appRouting } from '../app/app.routing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
// store.
import { StoreModule } from '@ngrx/store';
import { heroReducer } from './store/heroes.reducer';
// components.
import { AppComponent } from './app.component';
// services.
import { HeroService } from './services/hero.service';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ heroes: heroReducer }),
    appRouting,
    FormsModule,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [
    HeroService,
    // { provide: HttpXhrBackend, useClass: HttpClientTestingModule },
    // { provide: Location, useClass: LocationMock },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
