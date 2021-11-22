import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { appRouting } from '../app/app.routing'; 

// store.
import { StoreModule } from '@ngrx/store';
import { heroReducer } from './store/heroes.reducer';

// components.
import { AppComponent } from './app.component';
import { ListadoDeHeroesComponent } from './components/listado-de-heroes/listado-de-heroes.component';
import { HeroProfileComponent } from './components/hero-profile/hero-profile.component';
import { ModalPollComponent } from './components/modal-poll/modal-poll.component';

// services.
import { HeroService } from './services/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    ListadoDeHeroesComponent,
    HeroProfileComponent,
    ModalPollComponent,
  ],
  imports: [
    BrowserModule, 
    StoreModule.forRoot({ heroes: heroReducer }),
    appRouting,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
