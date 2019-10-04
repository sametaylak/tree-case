import React, { Component } from 'react'
import './App.css'

import NestedList from './components/NestedList'
import dataset from '../assets/dataset'
import populate from './utils/populate'

const populatedData = populate(dataset)

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Tree Case</h2>
      </div>
      <div className="App-body">
        <NestedList list={populatedData} listName="Parents" />
      </div>
    </div>
  )
}

export default App
