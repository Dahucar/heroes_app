import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroScreenComponent } from './components/hero-screen/hero-screen.component';

const appRoutes: Routes = [
    {path: '', component: HeroScreenComponent},
    {path: 'inicio', component: HeroScreenComponent},
    {path: '**', component: HeroScreenComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class appRouting {}