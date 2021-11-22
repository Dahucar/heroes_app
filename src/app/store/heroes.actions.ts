import { createAction, props } from '@ngrx/store';

export const saveHeroes = createAction(
    '[Hero Component] SaveHeroes',
    props<{ payload }>()
);

export const addHeroTeam = createAction(
    '[Hero Component] AddHeroes',
    props<{ payload }>()
);

export const findHeroById = createAction(
    '[Hero Component] FindHero',
    props<{ payload }>()
);
