// tslint:disable-next-line no-unused-variable
import * as React from 'react';
import * as ReactShallowRenderer from 'react-test-renderer/shallow';

import { Header } from '../../Header';

describe('components/Header', () => {
  it('renders', () => {
    const renderer = new ReactShallowRenderer();
    expect(renderer.render(
      <Header />
    )).toMatchSnapshot();
  });
});
