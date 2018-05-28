import * as React from 'react';
import * as style from './style.css';
import { ArticleModel } from 'app/models';

export namespace ArticleView {
  export interface Props {
    article: ArticleModel;
  }
}

export class ArticleView extends React.Component<ArticleView.Props> {
  
  render() {
    const { article } = this.props;
    
    return (
      <div>
        <h2>{article.title}</h2>
        <div><img className={style.image} src={article.urlToImage} /></div>
        <h4>{article.description}</h4>
        <div>URL: <a href={article.url} target="_blank">{article.url}</a></div>
      </div>
    );
  }
}
