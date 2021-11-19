import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, saveHeroes } from './heroes.actions';
import { Heroe } from '../models/hero'; 

type heroStateType = {
  heroes: Array<Heroe>
}

export const initialState = 0;
export const heroInitialState: heroStateType = { heroes: [] }
 
const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

const _heroReducer = createReducer(
  heroInitialState,
  on(saveHeroes, (state, props) => {
    return { ...state, heroes: props.payload}
  })
);
 
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}

export function heroReducer(state, action) {
  return _heroReducer(state, action);
}