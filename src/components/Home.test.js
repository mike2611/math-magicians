import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Home from './Home';

describe('Home component', () => {
  test('should render Home component correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Home />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  test('renders Welcome to our Page! in the DOM', () => {
    render(<Home />);

    const welcomeText = screen.queryByText('Welcome to our Page!');

    expect(welcomeText).toBeInTheDocument();
  });
});
