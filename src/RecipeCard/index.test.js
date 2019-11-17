import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import { RecipeCard } from '.';

describe('RecipeCard', () => {
  const props = {
    title: "Beef stew",
    field_images: "/images/test/blah.jpeg",
    field_summary: "Easy to make beef stew"
  }
  it('renders without crashing', () => {
    const wrapper = shallow(<RecipeCard { ...props } />)
    expect(wrapper).toBeDefined()
  })

  test('has a valid snapshot', () => {
    const component = renderer.create(
    <RecipeCard { ...props } />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    });
})