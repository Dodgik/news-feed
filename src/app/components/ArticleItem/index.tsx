import * as React from 'react';
import * as style from './style.css';
import { ArticleModel } from 'app/models';
import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
      <ListItem className={style.item}>
        <span>{id}. </span>
        <ListItemText  className={style.label} primary={article.title} />
        <Link to={`/news/${country}/${category}/article/${id}`} className={style.link}>read more</Link>
      </ListItem>
    );
  }
}
