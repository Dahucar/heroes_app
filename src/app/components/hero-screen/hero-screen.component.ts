import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'hero-screen',
  templateUrl: './hero-screen.component.html',
  styleUrls: ['./hero-screen.component.css'],
  providers: [HeroService]
})
export class HeroScreenComponent implements OnInit {

  public title: string = "HeroScreen";
  constructor(
    private heroService: HeroService,
  ) {}

  ngOnInit(): void {
    this.title = this.heroService.testMethod();
  }

}
