const populate = arr => {
  const tree = {}
  for (let item of arr) {
    tree[item.ID] = {
      ...item,
      Childs: []
    }
  }

  const populatedTree = []
  for (let item of arr) {
    if (item.hasOwnProperty('parentID')) {
      const parent = tree[item.parentID]
      if (parent) {
        parent.Childs.push(tree[item.ID])
      }
    } else {
      populatedTree.push(tree[item.ID])
    }
  }

  return populatedTree
}

export default populate
