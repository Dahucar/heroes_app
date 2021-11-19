import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { appRouting } from '../app/app.routing'; 

// store.
import { StoreModule } from '@ngrx/store';
import { counterReducer, heroReducer } from './store/heroes.reducer';

// components.
import { AppComponent } from './app.component';
import { ListadoDeHeroesComponent } from './components/listado-de-heroes/listado-de-heroes.component';

// services.
import { HeroService } from './services/hero.service';
import { HeroProfileComponent } from './components/hero-profile/hero-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoDeHeroesComponent,
    HeroProfileComponent,
  ],
  imports: [
    BrowserModule, 
    StoreModule.forRoot({ count: counterReducer, heroes: heroReducer }),
    appRouting,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
