import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroProfileComponent } from '../../components/hero-profile/hero-profile.component';

const routes: Routes = [
  {path: '', component: HeroProfileComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroProfileRoutingModule { }
