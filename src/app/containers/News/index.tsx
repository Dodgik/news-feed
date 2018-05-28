import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, match } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import * as style from './style.css';
import { RootState } from 'app/reducers';
import { ArticleModel } from 'app/models';
import { ArticlesList } from 'app/components';
import { NewsActions } from 'app/actions';


export namespace News {
  interface MatchParams {
    country: string;
    category: string;
  }

  export interface Props extends RouteComponentProps<MatchParams> {
    match: match<MatchParams>;
    articles: ArticleModel[];
    country: string;
    category: string;
    fetchNews: any;
    isFetching: boolean;
    error: string;
  }
}

@connect(
  (state: RootState): Pick<News.Props, 'articles' | 'country' | 'category' | 'category' | 'isFetching' | 'error'> => {
    return {
      articles: state.news.articles,
      country: state.news.country,
      category: state.news.category,
      isFetching: state.news.isFetching,
      error: state.news.error,
    };
  },
  (dispatch: Dispatch): Pick<News.Props, 'fetchNews'> => ({
    fetchNews: bindActionCreators(NewsActions.fetchNews, dispatch),
  })
)
export class News extends React.Component<News.Props> {

  componentWillReceiveProps(nextProps: any) {
    const params = nextProps.match.params;
    if (nextProps.country !== params.country || nextProps.category !== params.category) {
      this.props.fetchNews({ country: params.country, category: params.category });
    }
  }

  componentDidMount() {
    const params = this.props.match.params;
    const { country, category, fetchNews } = this.props;    
    if (country !== params.country || category !== params.category) {
      fetchNews({ country: params.country, category: params.category });
    }
  }

  render() {
    const { articles, country, category, isFetching, error } = this.props;

    if (isFetching) {
      return <div className={style.loader}>Loading</div>
    } else if (error) {
      return <div className={style.error}>{error}</div>
    } else {
      return <ArticlesList articles={articles} country={country} category={category} />;
    }
  }
}
