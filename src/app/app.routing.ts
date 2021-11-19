import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoDeHeroesComponent } from './components/listado-de-heroes/listado-de-heroes.component';
import { HeroProfileComponent } from './components/hero-profile/hero-profile.component';

const appRoutes: Routes = [
    {path: 'listado-heroes', component: ListadoDeHeroesComponent},
    {path: 'heroe/:id', component: HeroProfileComponent},
    {path: '**', redirectTo: '/listado-heroes'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class appRouting {}