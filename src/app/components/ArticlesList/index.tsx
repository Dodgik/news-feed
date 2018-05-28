import * as React from 'react';
import * as style from './style.css';
import { ArticleItem } from '../ArticleItem';
import { ArticleModel } from 'app/models/ArticleModel';

import List from '@material-ui/core/List';

export namespace ArticlesList {
  export interface Props {
    articles: ArticleModel[];
    country: string;
    category: string;
  }
}

export class ArticlesList extends React.Component<ArticlesList.Props> {
  render() {
    const { articles, country, category } = this.props;
    return (
      <section className={style.main}>
        {country && (<h2 className={style.center}>News from {country.toUpperCase()} and {category.toUpperCase()} category</h2>)}
        <List className={style.normal}>
          {articles.map((article: ArticleModel, i: number) => (
            <ArticleItem key={i} article={article} id={i + 1} country={country} category={category} />
          ))}
        </List>
      </section>
    );
  }
}
