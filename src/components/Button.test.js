import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Buttons from './Buttons';

describe('Buttons component', () => {
  test('should render Buttons component correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Buttons />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  test('Clicking a buttons and testing the inner HTML', () => {
    render(<Buttons />);

    const buttonOne = screen.queryByText(/AC/i);

    expect(buttonOne).toBeInTheDocument();
  });
});
