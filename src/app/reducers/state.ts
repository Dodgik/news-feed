import { ArticlesModel, FiltersModel } from 'app/models';
import { RouterState } from 'react-router-redux';

export interface RootState {
  news: RootState.NewsState;
  filters: RootState.FiltersState;
  router: RouterState;
}

export namespace RootState {
  export type NewsState = ArticlesModel;
  export type FiltersState = FiltersModel;
}
