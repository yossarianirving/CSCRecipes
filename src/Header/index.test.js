import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Header } from '.';
import { mount, shallow } from 'enzyme';

describe('Header', () => {
  var page
  const openPage = (p) => {
    page = p
  }
  it('renders without crashing', () => {
    const wrapper = shallow(<Header openPage={openPage}/>)
    expect(wrapper).toBeDefined()
  })
  
  it('opens page', () => {
    const wrapper = shallow(<Header openPage={openPage}/>)
    wrapper.find('#to-home').simulate('click')
    expect(page).toEqual('home-page')

  })

  test('has a valid snapshot', () => {
    const component = renderer.create(
    <Header openPage={openPage}/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    });
})