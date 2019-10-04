import React from 'react'
import { shallow } from 'enzyme';

import NestedListItem from '../src/components/NestedListItem'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'

describe('NestedListItem', () => {
  const mockObject = {
    ID: 1,
    parentID: 2,
    City: 'Istanbul',
    Name: 'Samet',
    Phone: '+90 505 523 34 53',
    Childs: []
  }

  it('should render NestedListItem', () => {
    const wrapper = shallow(<NestedListItem item={mockObject} handleDeleteItem={() => {}} />)
    expect(wrapper.find(ListItem).length).toEqual(1)
  })

  it('should show list item name', () => {
    const wrapper = shallow(<NestedListItem item={mockObject} handleDeleteItem={() => {}} />)
    expect(wrapper.find(ListItem).find(ListItemText).props().primary).toEqual('1 - Samet / Istanbul')
  })

  it('should not show childs', () => {
    const wrapper = shallow(<NestedListItem item={mockObject} handleDeleteItem={() => {}} />)
    expect(wrapper.find(Collapse).length).toEqual(0)
  })

  it('should show childs', () => {
    mockObject.Childs.push({
      ID: 2,
      parentID: 3,
      City: 'Istanbul',
      Name: 'Gorkem',
      Phone: '+90 525 505 50 34',
      Childs: []
    })

    const wrapper = shallow(<NestedListItem item={mockObject} handleDeleteItem={() => {}} />)
    expect(wrapper.find(Collapse).length).toEqual(1)
  })

  it('should call handleItemDelete', () => {
    const deleteItemFn = jest.fn()
    const wrapper = shallow(<NestedListItem item={mockObject} handleDeleteItem={deleteItemFn} />)
    const deleteButton = wrapper.find(IconButton).last()
    deleteButton.simulate('click')
    expect(deleteItemFn.mock.calls.length).toEqual(1)
  })
})
