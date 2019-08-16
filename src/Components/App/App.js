import React, { useState, useEffect } from 'react';

import UI from '../UI'

import './App.css';
import loader from '../../img/blue_loading.gif'

const url = 'https://raw.githubusercontent.com/KonstantinKliukach/ra-19_8-1/master/src/data/users.json'

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
    id === active ? setActive('') : setActive(id)
  }

  return (
    <div className='app'>
      {isReady ?
        <UI active={active} list={list} onClick={onClick} /> :
        <img src={loader} alt='loading'/>
      }
    </div>
  )
}

export default App;
