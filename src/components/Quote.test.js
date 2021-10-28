import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Quote from './Quote';

describe('Quote component tests', () => {
  test('Should render Quote component correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Quote />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  test('Renders William Pault Thurston', () => {
    const component = render(<Quote />);
    component.getByText('-William Pault Thurston');
  });
});
