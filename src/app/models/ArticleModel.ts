export interface ArticleModel {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

export namespace ArticleModel {
  export enum Filter {
    SHOW_ALL = 'all',
    SHOW_ACTIVE = 'active',
    SHOW_COMPLETED = 'completed'
  }
}
