import * as React from 'react';
import * as style from './style.css';
import { ArticleModel } from 'app/models';
import { Link } from 'react-router-dom';

export namespace ArticleItem {
  export interface Props {
    article: ArticleModel;
    id: number;
    country: string;
    category: string;
  }
}

export class ArticleItem extends React.Component<ArticleItem.Props> {
  render() {
    const { article, id, country, category } = this.props;
    
    return (
      <li>
        <span>{id}. </span>
        <span className={style.label}>{article.title}</span>
        <Link to={`/news/${country}/${category}/article/${id}`} className={style.link}>read more</Link>
      </li>
    );
  }
}
