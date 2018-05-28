import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { FiltersModel } from 'app/models';

const initialState: RootState.FiltersState = {
  countries: new Map([['all', ''], ['de','de'], ['ru', 'ru'], ['us', 'us']]),
  categories: new Map([['all', ''], ['business','business'], ['health', 'health'], ['technology', 'technology']]),
};

export const filtersReducer = handleActions<RootState.FiltersState, FiltersModel>(
  {},
  initialState
);
