import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import NestedList from './NestedList'

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4)
  },
  button: {
    margin: theme.spacing(1)
  }
}))

const NestedListItem = ({ item, handleDeleteItem }) => {
  const classes = useStyles()
  const [mItem, mSetItem] = useState(item)
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  const onItemDeleted = i => {
    mSetItem({
      ...mItem,
      Childs: mItem.Childs.filter(c => c.ID !== i.ID)
    })
  }

  const itemText = `${mItem.ID} - ${mItem.Name} / ${mItem.City}`
  const hasChilds = mItem.Childs.length > 0

  return (
    <React.Fragment>
      <ListItem>
        <ListItemText primary={itemText} />
        {hasChilds &&
          <IconButton onClick={handleClick}>
            {open ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        }
        <IconButton onClick={() => handleDeleteItem(mItem)} className={classes.button} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItem>
      {hasChilds &&
        <Collapse in={open} timeout="auto" unmountOnExit>
          <NestedList onItemDeleted={onItemDeleted} list={mItem.Childs} listName="Childs" />
        </Collapse>
      }
    </React.Fragment>
  )
}

NestedListItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleDeleteItem: PropTypes.func.isRequired
}

export default NestedListItem
