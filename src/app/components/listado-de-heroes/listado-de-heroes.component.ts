import { Component, OnInit } from '@angular/core';
// services.
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-listado-de-heroes',
  templateUrl: './listado-de-heroes.component.html',
  styleUrls: ['./listado-de-heroes.component.css'],
  providers: [ HeroService ]
})
export class ListadoDeHeroesComponent implements OnInit {

  public title: string;
  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    const heroes = this.heroService.getHeroes();
    console.log(heroes);
  }

}
