import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { RecipeCard } from '.';

describe('RecipeCard', () => {
  const props = {
    title: "Beef stew",
    field_images: "/images/test/blah.jpeg",
    field_summary: "Easy to make beef stew"
  }
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RecipeCard { ...props } />, div)
    ReactDOM.unmountComponentAtNode(div);
  })

  test('has a valid snapshot', () => {
    const component = renderer.create(
    <RecipeCard { ...props } />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    });
})