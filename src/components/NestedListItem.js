import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

import NestedList from './NestedList'

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4)
  }
}))

const NestedListItem = ({ item }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  const itemText = `${item.ID} - ${item.Name} / ${item.City}`
  const hasChilds = item.Childs.length > 0

  return (
    <React.Fragment>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={itemText} />
        {hasChilds && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
      {hasChilds &&
        <Collapse in={open} timeout="auto" unmountOnExit>
          <NestedList list={item.Childs} listName="Childs" />
        </Collapse>
      }
    </React.Fragment>
  )
}

NestedListItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default NestedListItem
