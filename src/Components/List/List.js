import React from 'react';

import './List.css';

const List = ( {list, active, onClick} ) =>{
  return(
    <div class="list">
      <a className="list-item" href="#">Regular link</a>
      <a className="list-item" href="#">Active link</a>
      <a className="list-item" href="#">Another link</a>
    </div>
  )
  
}

export default List