import * as React from 'react';
import { Route, Switch } from 'react-router';
import * as style from './style.css';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from 'app/reducers';
import { NewsActions } from 'app/actions';
import { Header, Filters } from 'app/components';
import { News, Article } from 'app/containers';


export namespace App {
  export interface Props extends RouteComponentProps<void> {
    country: string;
    category: string;
    fetchNews: any;
    countries: Map<string, string>;
    categories: Map<string, string>;
  }
}

@connect(
  (state: RootState): Pick<App.Props, 'country' | 'category' | 'countries' | 'categories'> => {
    return {
      country: state.news.country,
      category: state.news.category,
      countries: state.filters.countries,
      categories: state.filters.categories,
    };
  },
  (dispatch: Dispatch): Pick<App.Props, 'fetchNews'> => ({
    fetchNews: bindActionCreators(NewsActions.fetchNews, dispatch)
  })
)
export class App extends React.Component<App.Props> {
  render() {
    const { country, category, fetchNews, countries, categories, history } = this.props;

    return (
      <div className={style.normal}>
        <Header />
        <Filters
          countries={countries}
          categories={categories}
          country={country}
          category={category}
          fetchArticles={fetchNews}
          history={history}
        />
        <Switch>
          <Route path="/news/:country/:category" exact component={News} />
          <Route path="/news/:country/:category/article/:id" exact component={Article} />
        </Switch>
      </div>
    );
  }
}
