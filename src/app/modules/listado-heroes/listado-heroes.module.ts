import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListadoHeroesRoutingModule } from './listado-heroes-routing.module';

// components.
import { ListadoDeHeroesComponent } from '../../components/listado-de-heroes/listado-de-heroes.component';
// servives.
import { HeroService } from '../../services/hero.service';

@NgModule({
  declarations: [ 
    ListadoDeHeroesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ListadoHeroesRoutingModule
  ],
  providers: [ HeroService ]
})
export class ListadoHeroesModule {}
