import { createAction, props } from '@ngrx/store';
import { Heroe } from '../models/hero'; 

// ngrx example.
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
export const saveHeroes = createAction('[Hero Component] SaveHeroes', props<{ payload }>());