import { createReducer, on } from '@ngrx/store';
import { saveHeroes, addHeroTeam, findHeroById } from './heroes.actions';
import { Heroe } from '../models/hero'; 

type heroStateType = {
  heroes: Array<Heroe>,
  teamHeroes: Object,
  selectedHero: Heroe,
}

export const heroInitialState: heroStateType = { heroes: [], teamHeroes: {}, selectedHero: null }
 
const _heroReducer = createReducer(
  heroInitialState,
  on(
    saveHeroes, 
    addHeroTeam,
    findHeroById, 
    (state, { type, payload }) => {
      switch (type) {
        case '[Hero Component] SaveHeroes':
          return {
            ...state,
            heroes: payload
          };
        case '[Hero Component] AddHeroes':
          return {
            ...state, 
            teamHeroes: {
              ...state.teamHeroes, 
              [payload.heroId]: payload.color
            }
          };
        case '[Hero Component] FindHero':
          return {
            ...state, 
            selectedHero: payload
          };
      
        default:
          return { ...state };
      }
    }
  ),
);
 
export function heroReducer(state: heroStateType, action) {
  return _heroReducer(state, action);
}