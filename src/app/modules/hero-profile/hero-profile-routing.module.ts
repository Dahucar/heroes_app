import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroProfileComponent } from '../../components/hero-profile/hero-profile.component';
import { ModalPollComponent } from '../../components/modal-poll/modal-poll.component';

const routes: Routes = [
  {
    path: '', 
    children: [
      { path: '', component: HeroProfileComponent },
      { path: 'modal-poll', component: ModalPollComponent }
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroProfileRoutingModule { }
