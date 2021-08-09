import React from 'react';
import Buttons from './Buttons';
import { render, cleanup } from '@testing-library/react';

describe('Buttons component functionality', () => {
  afterEach(() => cleanup());
  it('returns Buttons', () => {
    const { asFragment } = render(<Buttons />);
    expect(asFragment()).toMatchSnapshot();
  });
});

