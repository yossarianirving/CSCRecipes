
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import { HomePage } from '.';

describe('HomePage', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<HomePage />)
    expect(wrapper).toBeDefined()
  })

  test('has a valid snapshot', () => {
    const component = renderer.create(
    <HomePage/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    });
})