import { combineReducers } from 'redux';
import { RootState } from './state';
import { newsReducer } from './news';
import { filtersReducer } from './filters';
import { routerReducer, RouterState } from 'react-router-redux';

export { RootState, RouterState };

export const rootReducer = combineReducers<RootState>({
  news: newsReducer as any,
  filters: filtersReducer as any,
  router: routerReducer as any,
});
