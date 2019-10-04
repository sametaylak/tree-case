import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'

import NestedListItem from './NestedListItem'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #cccccc',
    margin: '0 auto'
  },
  nested: {
    paddingLeft: theme.spacing(4),
  }
}))

const NestedList = ({ list, listName, onItemDeleted }) => {
  const classes = useStyles()
  const [mList, mSetList] = useState(list)

  const handleDeleteItem = item => {
    mSetList(mList.filter(i => i.ID !== item.ID))
    if (onItemDeleted) {
      onItemDeleted(item)
    }
  }

  return (
    <div className="List">
      <List
        component="nav"
        subheader={
          <ListSubheader component="div">
            {listName}
          </ListSubheader>
        }
        className={classes.root}
      >
        {mList.map(item =>
          <NestedListItem handleDeleteItem={handleDeleteItem} item={item} key={item.ID}/>
        )}  
      </List>
    </div>
  )
}

NestedList.propTypes = {
  list: PropTypes.array.isRequired,
  listName: PropTypes.string,
  onItemDeleted: PropTypes.func
}

export default NestedList
