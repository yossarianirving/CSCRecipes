import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Header } from '.';
import { mount, shallow } from 'enzyme';

describe('Header', () => {
  const openPage = () => {

  }
  it('renders without crashing', () => {
    const wrapper = shallow(<Header openPage={openPage}/>)
    expect(wrapper).toBeDefined()
  })

  test('has a valid snapshot', () => {
    const component = renderer.create(
    <Header openPage={openPage}/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    });
})