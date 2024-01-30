import React from 'react'
import './App.css'
import SimpleCounterComponent from './components/SimpleCounterComponent'
import PureCounterComponent from './components/PureCounterComponent'

function App() {
  return (
    <div className="App">
      <SimpleCounterComponent />
      <br /><br /><br />
      <PureCounterComponent />
    </div>
  )
}

export default App
