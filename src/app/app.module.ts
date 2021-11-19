import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { appRouting } from '../app/app.routing'; 

// components.
import { AppComponent } from './app.component';
import { ListadoDeHeroesComponent } from './components/listado-de-heroes/listado-de-heroes.component';

// services.
import { HeroService } from './services/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    ListadoDeHeroesComponent,
  ],
  imports: [
    BrowserModule, 
    appRouting,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
