import * as React from 'react';
import * as style from './style.css';
import Button from '@material-ui/core/Button';
import { Filter } from 'app/components';

export namespace Filters {
  export interface Props {
    countries: Map<string, string>;
    categories: Map<string, string>;
    country: string;
    category: string;
    fetchArticles: any;
    history: any;
  }

  export interface State {
    country: string;
    category: string;
  }
}

export class Filters extends React.Component<Filters.Props, Filters.State> {
  constructor(props: Filters.Props) {
    super(props);
    this.state = {
      country: this.props.country,
      category: this.props.category,
    };
  }
  
  componentWillReceiveProps(nextProps: any) {
    if (nextProps.country !== this.state.country || nextProps.category !== this.state.category) {
      this.setState({ country: nextProps.country, category: nextProps.category });
    }
  }

  handleChangeCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ country: event.target.value });
  }

  handleChangeCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ category: event.target.value });
  }

  handleClick = () => {
    const { country, category } = this.state;
    const newPath = `/news/${country}/${category}`;
    if (newPath !== this.props.history.location.pathname) {
      this.props.history.push(newPath);
    } else {
      this.props.fetchArticles(this.state);
    }
  }
  
  render() {
    const { countries, categories } = this.props;
    const { country, category } = this.state;
    return (
      <div className={style.normal}>
        <Filter title="Filter by country"
          values={countries}
          value={country}
          onChange={this.handleChangeCountry}
          />
        <Filter title="Filter by category"
          values={categories}
          value={category}
          onChange={this.handleChangeCategory}
          />
        <div className={style.center}>
          <Button variant="raised" onClick={this.handleClick}>Get List</Button>
        </div>
      </div>
    );
  }
}
