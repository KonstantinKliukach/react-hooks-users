import React, { useState, useEffect } from 'react';

import List from '../List'
import Card from '../Card'

import './App.css';

const person = {
  id: 1,
  name: "Dorthy McClure Sr.",
  avatar: "https://i.pravatar.cc/300",
  details: {
      city: "Sipesfort",
      company: "Hilll LLC",
      position: "Regional Identity Supervisor"
  }
}

const App = () => {
  const [list, getList] = useState([])
  const [active, setActive] = useState('')
  return (
    <div className='app'>
      <div className='column'>
        <List />
      </div>
      <div className='column'>
        <Card person={person} />
      </div>
    </div>
  )
}

export default App;
