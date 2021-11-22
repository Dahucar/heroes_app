import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../../services/hero.service';
import { Heroe } from  '../../models/hero';
import { ModalPollComponent } from '../modal-poll/modal-poll.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteSelectedHero } from '../../store/heroes.actions';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.css'],
  providers: [ HeroService ]
})
export class HeroProfileComponent implements OnInit {
  @ViewChild('modal') modal: ModalPollComponent;
  public subscrip;
  public heroe: Heroe;
  public question_modal: string;
  public team:string = "";
  public heroes$: Observable<Array<Heroe>> = this._heroesStore.select('heroes');

  constructor(
    private _location: Location,
    private _activeRouter: ActivatedRoute,
    private _heroService: HeroService,
    private _heroesStore: Store<{ heroes: Array<Heroe> }>
  ) { }

  ngOnInit(): void {
    this._activeRouter.params.subscribe(params => this._heroService.getHeroeWithState(params['id']));
    this.subscrip = this.heroes$.subscribe(({ selectedHero, teamHeroes }: any) => {
      if(selectedHero !== null){
        this.heroe = selectedHero;
        this.team = teamHeroes[this.heroe.id]
          ? teamHeroes[this.heroe.id]
          : '';
      }
    });
  }

  ngOnDestroy(){
    this._heroesStore.dispatch(deleteSelectedHero({ payload: true }));
    this.subscrip.unsubscribe();
  }

  getHeroService(){
    return this._heroService;
  }

  getTeam(team):void{
    this.team = team;
    this._heroService.teams.set(this.heroe.id, this.team);
  }

  launchModal():void{
    this.question_modal="¿En cual grupo quieres colocar a tu súper héroe?";
    this.modal.toggle_modal();
  }

  goBack(){
    this._location.back();
  }

}
