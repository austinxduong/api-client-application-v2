
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Display from '../display/Display';

describe('Display Component', () => {
  afterEach(() => cleanup());
  it('displays the display component', () => {
    const { asFragment } = render(<Display />);
    expect(asFragment()).toMatchSnapshot();
    
  });

});
