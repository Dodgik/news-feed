import * as React from 'react';
import * as style from './style.css';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


export namespace Filter {
  export interface Props {
    values: Map<string, string>;
    value?: string;
    title: string;
    onChange?: any;
  }
}

export class Filter extends React.Component<Filter.Props> {
  getList = (values: Map<string, string>) => {
    let list: any[] = [];
    values.forEach((value, key) => {
      list.push(<FormControlLabel key={key} value={value} control={<Radio />} label={key} />);
    });
    return list;
  }

  render() {
    const { value, values, title, onChange } = this.props;
    return (
      <div className={style.normal}>
        <FormControl component="fieldset">
          <FormLabel component="legend">{title}</FormLabel>
          <RadioGroup style={{ flexDirection: 'row' }} value={value} onChange={onChange} >
            {this.getList(values)}
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}
