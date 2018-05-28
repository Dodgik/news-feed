// tslint:disable-next-line no-unused-variable
import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import { Header } from '../../Header';

describe('components/Header', () => {
  it('renders', () => {
    const renderer = createRenderer();
    expect(renderer.render(
      <Header />
    )).toMatchSnapshot();
  });
});
