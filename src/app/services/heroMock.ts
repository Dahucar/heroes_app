import { HeroService } from '../services/hero.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { from, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { concatMap } from 'rxjs/internal/operators';

export class HeroServiceMock {
  public teams = new Map().set('1', 'yellow');
  public heroesService: HeroService;
  public HEROE_OBJECT = {
    id: '1',
    name: 'Spiderman',
    description: 'El hombre que araña',
    modified: new Date(1518417160),
    thumbnail: {
      path: 'https://i.pinimg.com/originals/c2/93/56/c293563aa553250601d8cb768c044d4b',
      extension: 'jpg',
    },
    resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
    teamColor: 'yellow',
  };

  public getHeroe() {
    const data = [ this.HEROE_OBJECT ]
    return from(data).pipe(concatMap( item => of(item).pipe ( delay( 1000 ) )))
  }

  public getTeamColor() {
    return 'yellow';
  }
}
