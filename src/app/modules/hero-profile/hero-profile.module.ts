import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroProfileRoutingModule } from './hero-profile-routing.module';

// component
import { HeroProfileComponent } from '../../components/hero-profile/hero-profile.component';
import { ModalPollComponent } from '../../components/modal-poll/modal-poll.component';
// servives.
import { HeroService } from '../../services/hero.service';

@NgModule({
  declarations: [
    HeroProfileComponent,
    ModalPollComponent
  ],
  exports: [
    HeroProfileComponent,
    ModalPollComponent
  ],
  imports: [
    CommonModule,
    HeroProfileRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [ HeroService ]
})
export class HeroProfileModule { }
