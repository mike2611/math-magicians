import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';

import '@testing-library/jest-dom';

import App from './App';

describe('App.js component', () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>,
    );
  });
  test('testing navigation to home page', () => {
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/Home/i), leftClick);
    expect(screen.getByText(/Welcome to our Page!/i)).toBeInTheDocument();
  });

  test('testing navigation to calculator page', () => {
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/Calculator/i), leftClick);

    expect(screen.getByText(/Let's do some math!/i)).toBeInTheDocument();
  });

  test('testing navigation to quote page', () => {
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/Quote/i), leftClick);

    expect(screen.getByText(/William Pault Thurston/i)).toBeInTheDocument();
  });
});
