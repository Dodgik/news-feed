import { ArticleModel } from './ArticleModel';

export interface ArticlesModel {
  articles: ArticleModel[],
  country: string,
  category: string,
  isFetching: boolean,
  error: string,
}
