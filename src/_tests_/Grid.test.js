import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme'
import Grid from '../Grid.js';

describe('Grid', () => {
  it('should render correctly in "debug" mode', () => {
    const grid = shallow(<Grid debug />)
    expect(grid).toMatchSnapshot()
  })

  it('should put pieces on the board when Start button is clicked', () => {
    const grid = mount(<Grid onClick={jest.fn()}/>)

    grid
      .find('button#startButton')
      .simulate('click')

    expect(jest.fn()).toHaveBeenCalled()
    grid.unmount()
  })

  it('should remove pieces from the board when Reset button is clicked', () => {
    const grid = mount(<Grid />)

    grid
      .find('#resetButton')
      .simulate('click')

    expect(grid).toMatchSnapshot()
    grid.unmount()
  })
})