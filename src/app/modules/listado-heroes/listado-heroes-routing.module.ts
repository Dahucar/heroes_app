import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListadoDeHeroesComponent } from '../../components/listado-de-heroes/listado-de-heroes.component';

const PanelRouter: Routes = [
  {path: '', component: ListadoDeHeroesComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(PanelRouter)],
  exports: [RouterModule]
})

export class ListadoHeroesRoutingModule { }
