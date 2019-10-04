import React from 'react'
import { shallow, mount } from 'enzyme';

import NestedList from '../src/components/NestedList'
import NestedListItem from '../src/components/NestedListItem'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import dataset from '../assets/dataset'

describe('NestedList', () => {
  it('should render NestedList', () => {
    const wrapper = shallow(<NestedList list={dataset} listName="Parent" />)
    expect(wrapper.find(List).length).toEqual(1)
  })

  it('requires list prop', () => {
    expect(() => {
      shallow(<NestedList listName="Parents" />)
    }).toThrow()
  })

  it('should show datas in list', () => {
    const wrapper = shallow(<NestedList list={dataset} listName="Parent" />)
    const listItems = wrapper.find(NestedListItem)
    expect(listItems.length).toEqual(dataset.length)
  })
})
