import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoDeHeroesComponent } from './components/listado-de-heroes/listado-de-heroes.component';
import { HeroProfileComponent } from './components/hero-profile/hero-profile.component';
import { ModalPollComponent } from './components/modal-poll/modal-poll.component';

const appRoutes: Routes = [
    {path: 'listado-heroes', component: ListadoDeHeroesComponent},
    {path: 'heroe/:id', component: HeroProfileComponent},
    {path: 'modal-poll', component: ModalPollComponent},
    {path: '**', redirectTo: '/listado-heroes'}
];

// const routes: Routes = [
//     { path: 'listado-heroes', loadChildren: () => import('./modules/listado-heroes/listado-heroes.module').then(m => m.ListadoHeroesModule)},
//     { path: 'heroe/:id', loadChildren: () => import('./modules/hero-profile/hero-profile-routing.module').then(m => m.HeroProfileRoutingModule)},
//     { path: '**', redirectTo: '/listado-heroes' }
// ]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class appRouting {}