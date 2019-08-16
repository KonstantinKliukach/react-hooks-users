import React, { useState, useEffect } from 'react';

import List from '../List'
import Details from '../Details'

import './App.css';
import loader from '../../img/blue_loading.gif'

const App = () => {
  const [list, getList] = useState([])
  const [active, setActive] = useState()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async() => {
    try {
      const response = await fetch('../../data/users.json')
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      console.log(response)
    } catch(e) {
      console.log(e)
    }
  }, [])


  return list.length ? (
    <div className='app'>
      <div className='column'>
        <List />
      </div>
      <div className='column'>
        {active && <Details info={active} />}
      </div>
    </div>
  ) : <div className='app'><img className='loadingGif' src={loader} alt='loading'/></div>
  
}

export default App;
