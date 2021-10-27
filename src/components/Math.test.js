import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Math from './Math';

describe('Math component tests', () => {
  test('Should render Home component correctly' , () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Math />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  test("Renders Let's do some math! as an h1", () => {
    const component = render(<Math />);
    component.getByText("Let's do some math!");
  });
});
