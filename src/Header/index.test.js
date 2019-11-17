import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Header } from '.';

describe('Header', () => {
  const openPage = () => {

  }
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header openPage={openPage}/>, div)
    ReactDOM.unmountComponentAtNode(div);
  })

  test('has a valid snapshot', () => {
    const component = renderer.create(
    <Header openPage={openPage}/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    });
})