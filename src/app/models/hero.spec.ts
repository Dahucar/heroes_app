import { Heroe } from './hero';
describe('Test diccionarioDatos getters and setters.', () => { 
    it("diccionarioDatos's dummy var is true", () => {
        let id: string = "1";
        let name: string = 'Spiderman';
        let description: string = 'El hombre que araña';
        let modified: Date = new Date(1518417160);
        let thumbnail: Object = {
            'path': 'https://i.pinimg.com/originals/c2/93/56/c293563aa553250601d8cb768c044d4b',
            'extension': 'jpg'
        };
        let resourceURI: string = 'http://gateway.marvel.com/v1/public/characters/1011334';
        let teamColor: string = "yellow";
        const heroe = new Heroe(id,name,description,modified,thumbnail,resourceURI, teamColor);
        expect(heroe).toBeTruthy(); 
    });
});