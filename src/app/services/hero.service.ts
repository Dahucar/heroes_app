import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { saveHeroes } from '../store/heroes.actions';
import { Heroe } from '../models/hero';

@Injectable()
export class HeroService {

    private apiKey: string = '56d2cc44b1c84eb7c6c9673565a9eb4b';
    private apiUrl: string = 'https://gateway.marvel.com:443/v1/public';

    constructor(
        private http: HttpClient,
        private heroesStore: Store<{ heroes: Array<Heroe> }>
    ){}

    getHeroes(){
        const url: string = `${this.apiUrl}/characters?apikey=${this.apiKey}`;
        this.http.get<any>(url).subscribe(response => {
            this.heroesStore.dispatch(saveHeroes({ payload: response.data.results }));
        });
    }

}