/* eslint-disable max-len */
import React from 'react';
import Resty from './Resty';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Container', () => {
  it('to make sure Resty Container works in App.jsx', async () => {
    render(<MemoryRouter><Resty /></MemoryRouter>);

    const testUrl = screen.getByPlaceholderText('URL');
    userEvent.type(testUrl);
    fireEvent.change(testUrl, { target: { value: 'https://rickandmortyapi.com/api/character' } });
    expect(testUrl).toHaveDisplayValue('https://rickandmortyapi.com/api/character');


    const testButton = screen.getByLabelText('GET');
    userEvent.click(testButton);
    fireEvent.change(testButton, 
      { target: { value: 'GET' }  });
    expect(testButton).toBeChecked('GET');


    const testSubmitButton = screen.getByRole('button');
    const display = screen.getByTestId('display');
    userEvent.click(testSubmitButton);
    expect(display).not.toBeEmptyDOMElement();

  });

});

