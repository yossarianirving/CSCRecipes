
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import { HomePage } from '.';

describe('HomePage', () => {
  const results = [{"title":"homepage","body":"\n\u003Cp\u003EIn this months issue\u003C\/p\u003E\n\n\n\n\u003Ch3\u003ELorem Ipsum ROCKS! And is more than simply dummy text of the printing and typesetting industry.\u003C\/h3\u003E\n\n\n\n\u003Cul\u003E\u003Cli\u003EComforting Winter puddins\u003C\/li\u003E\u003Cli\u003E\u0026nbsp;Introduction to Iceland food\u003C\/li\u003E\u003Cli\u003E\u0026nbsp;15 Healthy Meals under 500 Callories\u003C\/li\u003E\u003Cli\u003E\u0026nbsp;Winter warmers\u003C\/li\u003E\u003Cli\u003E\u0026nbsp;Are all sugards the same?\u003C\/li\u003E\u003Cli\u003E\u0026nbsp;Profile on head chef Jeremy Watson\u003C\/li\u003E\u003C\/ul\u003E\n","view_node":"\/node\/6"}]
  beforeEach(() => {
    fetch.resetMocks()
  })
  it('renders without crashing', () => {
    fetch.mockResponseOnce(JSON.stringify(results))
    const wrapper = shallow(<HomePage />)
    wrapper.update()
    expect(wrapper).toBeDefined()
  })

  test('has a valid snapshot', () => {
    fetch.mockResponseOnce(JSON.stringify(results))
    const component = renderer.create(
    <HomePage/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  
})