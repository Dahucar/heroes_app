import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../models/hero';

@Injectable()
export class HeroService {

    // basic config
    private apiKey: string = '56d2cc44b1c84eb7c6c9673565a9eb4b';
    private apiUrl: string = 'https://gateway.marvel.com:443/v1/public';

    constructor(private http: HttpClient){}

    testMethod(){
        return 'testMethod!!.';
    }

    getHeroes(){
        console.log('getHeroes');

        const url: string = `${this.apiUrl}/characters?apikey=${this.apiKey}`;

        this.http.get(url).subscribe(response => {
            console.log(response);
        });
    }

}