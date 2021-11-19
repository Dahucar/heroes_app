import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  public heroe: Heroe;
  public team:string = "";

  constructor(
    private router: Router,
    private location: Location,
    private activeRouter: ActivatedRoute,
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(params => {
      const id = params['id'];
      console.log({ id })

      this.heroService.getHeroe(id).subscribe(response => {
        
        const temp = response.data.results[0];
        console.log(temp);

        this.heroe = new Heroe(
          temp.id, 
          temp.name, 
          temp.description, 
          temp.modified, 
          temp.thumbnail, 
          temp.resourceURI, 
          this.heroService.getTeamColor(temp.id)
        );
        this.team = this.heroe.teamColor;

      });
    });
  }

  goBack(){
    this.location.back();
  }

}
