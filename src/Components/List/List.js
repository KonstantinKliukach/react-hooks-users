import React from 'react';

import './List.css';

const List = ( {list, active, onClick} ) =>{
  return(
    <ul className="list">
      {list.map(user => {
        const className = user.id === active ? 'list-item active' : 'list-item'
        return (
          <li key={user.id} 
            className={className} 
            onClick={()=>{onClick(user.id)}}>
            {user.name}
          </li>
          )
        })
      }  
    </ul>
  )
  
}

export default List