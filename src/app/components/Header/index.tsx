import * as React from 'react';
import * as moment from 'moment';
import * as style from './style.css';

export class Header extends React.Component {

  render() {
    return (
      <header className={style.header}>
        <h2>Top news of {moment().format('dddd L')}</h2>
      </header>
    );
  }
}
