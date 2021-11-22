## Heroes Store.

### acciones disponibles.
- **[Hero Component] SaveHeroes:** acción que permite guardar el listado de héroes obtenidos desde la API, esta acción será llamada cada vez que se cargue el componente **Listado-de-Heroes** mediante el metodo **ngOnInit** el cúal ejecuta el servicio encargado de realizar la petición HTTP, cuya respuesta será enviada al Store mediante esta acción.
    ```
    this._heroesStore.dispatch(saveHeroes({ payload: data }));
    ```

- **[Hero Component] AddHeroes:** acción que permite añadir el team de un hére al Store, esto con la finalidad de tener un objeto con todos los hérores a los cuales se les halla asignado un team. El objetivo de usar un objeto para asignar el team, es facilitar la lectura de estas propiedades al momento de cargar el listado de héroes. A este objeto se le añadira la estructura siguiente cada vez que se seleccione el team de un héroe.
    ```
    {
        [hero-id]: hero-color
    }
    ```
    la acción será llamada de con la siguinte estructura

    ```
    this._heroesStore.dispatch(
      addHeroTeam({ 
        payload: {
          heroId: this.hero.id,
          color: team
        } 
      })
    );
    ```

- **[Hero Component] FindHero:** acción para guardar el héroe seleccionado desde el listado principal de héroes. Este valor será asingado a una propiedad del Store.

### estado inicial.
```
export const heroInitialState = { 
    heroes: [],
    teamHeroes: {},
    selectedHero: null 
}
```

### creación de acciones.
Para añadir la definición de nuevas acciones, se debe importar la librería **@ngrx/store**

```
import { createAction, props } from '@ngrx/store';

export const saveHeroes = createAction(
    '[Hero Component] SaveHeroes',
    props<{ payload }>()
);
```

### reducer.
reducer donde se controlan las acciones definidas y se define que modificaciones hacer al state en caso de ejecutarse algúna de ellas.
En este caso **type** corresponde al nombre de la acción asingnado en la creación de esta y **payload** corresponde a las props definidas, que quiere decir los datos que serán enviados para modificar el state.
```
const _heroReducer = createReducer(
  heroInitialState,
  on(
    saveHeroes, 
    (state, { type, payload }) => {
      switch (type) {
        case '[Hero Component] SaveHeroes':
          return { ...state };
      
        default:
          return { ...state };
      }
    }
  ),
);
```

### Configuración del Store.
Para poder usar el store creado se debe importar tanto el **StoreModule** desde la librería instalada **@ngrx/store** e igualmente el reducer creado con anterioridad. 

```
import { StoreModule } from '@ngrx/store';
import { heroReducer } from './store/heroes.reducer';
```
Estos deberán ser añadidos en el **AppModule**, donde se deberá añadir la siguinte instrucción en el array de **imports**, de esa forma estará disponbile para su consumo desde los componentes.
Igualmente es posible añadir más reducers para manejar multiples estados, para ello se debe asignar una 'llave' con la cual seleccionar el estado con el que se desea trabajar. para este caso 'heroes' 

```
@NgModule({
  imports: [
    StoreModule.forRoot({ heroes: heroReducer }),
  ],
})
```

### dispatch de acciones.
Para comenzar a 'disparar' acciones hacia el reducer es preciso importar tanto el Store (con el cúal se seleccionar el reducer con el que trabajar) y las acciones.

```
import { Store } from '@ngrx/store';
import { saveHeroes, findHeroById } from '../store/heroes.actions';
```

Para comenzar, es necesario definir una propiedad donde almacenar el store, ya sea en una clase o servicio.

```
constructor(
    private _heroesStore: Store<{ heroes: Array<Heroe> }>
){}
```

Una vez añadida, mediante ella se podrá realizar los siguiente.
```
this._heroesStore.dispatch(saveHeroes({ payload: data }));
```
Donde en la función 'disparch' se envia accion creada e importada con anterioridad, y en este caso se envian mediante las props definidas en la creacción de la acción