import React, { useState, useEffect } from 'react';

import UI from '../UI'
import Loader from '../Loader'

import './App.css';

const url = 'https://raw.githubusercontent.com/KonstantinKliukach/react-hooks-users/master/src/data/users.json'

const App = () => {
  const [isReady, setReady] = useState(false)
  const [list, setList] = useState([])
  const [active, setActive] = useState()
  

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const users = await response.json()
        setList(users)
        setReady(true)
      } catch(e) {
        console.log(e)
      }
    }
    fetchUsers()
  }, [])

  const onClick = (id) => {
    if (id === active) {
      return
    } 
    setActive(id)
  }

  return (
    <div className='app'>
      {isReady ?
        <UI active={active} list={list} onClick={onClick} /> :
        <Loader />
      }
    </div>
  )
}

export default App;
