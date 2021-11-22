import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
export class ListadoDeHeroesComponent implements OnInit, OnDestroy {
  public subscrip: any;
  public searchString: string = "";
  public heroesList: Array<Heroe> = [];
  public currentPage: number = this._heroService.page;
  public heroes$: Observable<Array<Heroe>> = this._heroesStore.select('heroes');

  constructor(
    private _router: Router,
    private _heroService: HeroService,
    private _heroesStore: Store<{ heroes: Array<Heroe> }>
  ) {}

  ngOnInit(): void {
    this._heroService.getHeroes();
    this.subscrip = this.heroes$.subscribe(({ heroes, teamHeroes }: any) => {
      this.heroesList = heroes.map((hero: Heroe) => {
        let teamColor = teamHeroes[hero.id] ? teamHeroes[hero.id] : '';
        return { ...hero, teamColor }
      });
    });
  }

  ngOnDestroy(){
    this.subscrip.unsubscribe();
  }

  submitSearch() {
    this._heroService.resetPager();
    this._heroService.getHeroes(this.searchString);
  }

  go_to(id: string){
    this._router.navigateByUrl('/heroe/'+id);
  }

  getHeroService(){
    return this._heroService;
  }

  prevPage() {
    this._heroService.getHeroes(this.searchString, this._heroService.page - 1);
  }

  nextPage() {
    this._heroService.getHeroes(this.searchString, this._heroService.page + 1);
  }

}
