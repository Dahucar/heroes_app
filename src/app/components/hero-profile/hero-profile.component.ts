import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../../services/hero.service';
import { Heroe } from  '../../models/hero';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.css'],
  providers: [ HeroService ]
})
export class HeroProfileComponent implements OnInit {
  @ViewChild('modal') modal;
  public heroe: Heroe;
  public question_modal: string;
  public team:string = "";

  constructor(
    private _location: Location,
    private _activeRouter: ActivatedRoute,
    private _heroService: HeroService,
  ) { }

  ngOnInit(): void {
    this._activeRouter.params.subscribe(params => {
      const id = params['id'];
      this._heroService.getHeroe(id).subscribe(response => {
        const temp = response.data.results[0];
        this.heroe = new Heroe(
          temp.id, 
          temp.name, 
          temp.description, 
          temp.modified, 
          temp.thumbnail, 
          temp.resourceURI, 
          this._heroService.getTeamColor(temp.id)
        );

        this.team = this.heroe.teamColor;
      });
    });
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
