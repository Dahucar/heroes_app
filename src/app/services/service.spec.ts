//imports
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HeroService } from '../services/hero.service';
import { HeroServiceMock } from '../services/heroMock';
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpXhrBackend } from '@angular/common/http';
import { Location } from '@angular/common';

class LocationMock {
    back():void {}
}

describe('AppComponent', () => {
    let service: HeroService;
    let serviceMock: HeroServiceMock;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HeroService, HeroServiceMock]
        });
        
        service = TestBed.get(HeroService);
        serviceMock = TestBed.get(HeroServiceMock);
    });
    
    afterEach(() => { 
        service = null;
        serviceMock = null;
    });

    it('should test getHeroes function', () => {
        spyOn(serviceMock, 'getHeroe').and.callThrough();
        serviceMock.getHeroe();
        expect(serviceMock.getHeroe).toHaveBeenCalled();
        expect(serviceMock.getHeroe).toBeDefined();
    });

    it('should test getHeroe function',
    inject([HeroService, HttpXhrBackend], (hservice, mockBackend) => {
        const mockResponse = { 
            results: {
                id:'1',
                name:'Spiderman1',
                description: 'El hombre que araña',
                modified:new Date(1518417160),
                thumbnail: {
                    'path': 'https://i.pinimg.com/originals/c2/93/56/c293563aa553250601d8cb768c044d4b',
                    'extension': 'jpg'
                },
                resourceURI:'http://gateway.marvel.com/v1/public/characters/1011334',
                teamColor:'yellow'
            }
        };

        // mockBackend.connections.subscribe((connection) => {
        //     connection.mockRespond(new Response(new ResponseOptions({
        //       body: {data: JSON.stringify(mockResponse)}
        //     })));
        // });
          
        hservice.getHeroe('1').subscribe((heroe) => { 
            expect(heroe.data.results.length).toBe(1);
            expect(heroe.data.results[0].name).toEqual('Spiderman1');
        });

    }));

    it('Se debe llamar a la función go back', inject([Location], (loc: Location) => {
        const spy = spyOn(loc, 'back');
        // component.goBack();
        expect(spy).toHaveBeenCalled();
    }));

});
