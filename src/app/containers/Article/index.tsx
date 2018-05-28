import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from 'app/reducers';
import { ArticleModel } from 'app/models';
import { ArticleView } from 'app/components';


export namespace Article {
  export interface Props extends RouteComponentProps<void> {
    articles: ArticleModel[];
    match: any;
  }
}

@connect(
  (state: RootState): Pick<Article.Props, 'articles'> => {
    return { articles: state.news.articles };
  },
)
export class Article extends React.Component<Article.Props> {
  render() {
    const { id } = this.props.match.params;
    const { articles } = this.props;
    const article = articles[id];

    if (article) {
      return (
        <ArticleView article={article} />
      );
    } else {
      return null;
    }
  }
}
