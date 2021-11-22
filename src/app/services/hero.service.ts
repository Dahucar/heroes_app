import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { saveHeroes, findHeroById } from '../store/heroes.actions';
import { Heroe } from '../models/hero';

@Injectable()
export class HeroService {
    public page = 0;
    public step = 20;
    public total = 0;
    public group_colors = {
        "azul":     "#1f8ff7",
        "violeta":  "#a43de3",
        "naranjo":  "#df5c0f",
        "verde":    "#0ea521"
    }

    public teams = new Map();
    private apiKey: string = '56d2cc44b1c84eb7c6c9673565a9eb4b';
    private apiUrl: string = 'https://gateway.marvel.com:443/v1/public';

    constructor(
        private _http: HttpClient,
        private _heroesStore: Store<{ heroes: Array<Heroe> }>
    ){}

    getHeroes(nameStartsWith?: string, page?: number){
        this.page = (page || page === 0) ? page : this.page;
        const offset: number = this.page * this.step;
        const nameStart: string = nameStartsWith ? `&nameStartsWith=${nameStartsWith}` : '';
        const url: string = `${this.apiUrl}/characters?apikey=${this.apiKey}&offset=${offset}${nameStart}`;

        this._http.get<any>(url).subscribe(response => {
            this.total = Math.ceil(response.data.total / this.step);
            const data = response.data.results.map(result => 
                new Heroe(
                    result.id,
                    result.name,
                    result.description,
                    result.modified,
                    result.thumbnail,
                    result.resourceURI,
                    this.getTeamColor(result.id)
                )
            );

            this._heroesStore.dispatch(saveHeroes({ payload: data }));
        });
    }

    getHeroe(id: string) {
        const url: string = `${this.apiUrl}/characters/${id}?apikey=${this.apiKey}`;
        return this._http.get<any>(url);
    }

    getHeroeWithState(id: string) {
        const url: string = `${this.apiUrl}/characters/${id}?apikey=${this.apiKey}`;
        this._http.get<any>(url).subscribe(response => {
            const heroById = response.data.results[0];
            const hero = new Heroe(
                heroById.id, 
                heroById.name, 
                heroById.description, 
                heroById.modified, 
                heroById.thumbnail, 
                heroById.resourceURI, 
                this.getTeamColor(heroById.id)
            );
            this._heroesStore.dispatch(findHeroById({ payload: hero }));
        });
    }

    getTeamColor(id: string): string {
        return this.teams.get(id) !== undefined ? this.teams.get(id) : '';
    }

    resetPager() {
        this.page = 0;
    }
}