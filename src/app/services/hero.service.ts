import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
    constructor(){}

    testMethod(){
        return 'testMethod!!.';
    }

}