import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListadoHeroesRoutingModule } from './listado-heroes-routing.module';

// components.
import { ListadoDeHeroesComponent } from '../../components/listado-de-heroes/listado-de-heroes.component';
// import { HeroProfileComponent } from '../../components/hero-profile/hero-profile.component';
// import { ModalPollComponent } from '../../components/modal-poll/modal-poll.component';

// servives.
import { HeroService } from '../../services/hero.service';

@NgModule({
  declarations: [ 
    ListadoDeHeroesComponent,
    // HeroProfileComponent,
    // ModalPollComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ListadoHeroesRoutingModule
  ],
  providers: [ HeroService ]
})
export class ListadoHeroesModule {}
