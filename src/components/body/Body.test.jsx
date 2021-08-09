import React from 'react';
import Body from '../body/Body';

import { render, cleanup } from '@testing-library/react';

describe('Body component', () => {
  afterEach(() => cleanup());
  it('Body component is functional', () => {
    const { asFragment } = render(<Body />);
    expect(asFragment()).toMatchSnapshot();
  });
});


