
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { SingleRecipe } from '.';

describe('HomePage', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SingleRecipe />, div)
    ReactDOM.unmountComponentAtNode(div);
  })

  test('has a valid snapshot', () => {
    const component = renderer.create(
    <SingleRecipe/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    });
})