import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// services.
import { HeroService } from '../../services/hero.service';
import { Heroe } from 'src/app/models/hero';

@Component({
  selector: 'app-listado-de-heroes',
  templateUrl: './listado-de-heroes.component.html',
  styleUrls: ['./listado-de-heroes.component.css'],
  providers: [ HeroService ]
})
export class ListadoDeHeroesComponent implements OnInit {

  heroes$: Observable<Array<Heroe>>;
  public title: string = "";
  public searchString: string = "";
  public heroesList: Array<Heroe> = [];

  constructor(
    private heroService: HeroService,
    private heroesStore: Store<{ heroes: Array<Heroe> }>
  ) {
    this.heroes$ = this.heroesStore.select('heroes');
    this.heroService.getHeroes();
  }

  getHeroService(){
    return this.heroService;
  }

  ngOnInit(): void {
    this.heroes$.subscribe((data: any) => this.heroesList = data.heroes);
  }

  prevPage() {
    this.heroService.getHeroes(this.searchString, this.heroService.page - 1);
  }

  nextPage() {
    this.heroService.getHeroes(this.searchString, this.heroService.page + 1);
  }

}
