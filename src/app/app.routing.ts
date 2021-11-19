import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoDeHeroesComponent } from './components/listado-de-heroes/listado-de-heroes.component';

const appRoutes: Routes = [
    {path: '', component: ListadoDeHeroesComponent},
    {path: 'inicio', component: ListadoDeHeroesComponent},
    {path: '**', component: ListadoDeHeroesComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class appRouting {}