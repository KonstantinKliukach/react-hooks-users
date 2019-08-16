import React from 'react';

import List from '../List'
import Details from '../Details'

const UI = ( props ) => {
  return (
    <div className='app'>
      <div className='column'>
        <List {...props}/>
      </div>
      <div className='column'>
        {props.active && <Details info={props.active}/>}
      </div>
    </div>
  )
}

export default UI