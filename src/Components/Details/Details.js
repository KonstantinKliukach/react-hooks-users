import React, { useEffect, useState } from 'react';

import Loader from '../Loader'

import './Details.css'

const Details = ({ info}) => {
  const [userInfo, setUserInfo] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchInfo() {
      if (!info) {
        return
      }
      setLoading(true)
      const url =`https://raw.githubusercontent.com/KonstantinKliukach/react-hooks-users/master/src/data/${info}.json`
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const user = await response.json()
        setLoading(false)
        setUserInfo(user)
      } catch(e) {
        console.log(e)
      }
    }
    fetchInfo()
  }, [info])

  if (isLoading) {
    return (
      <Loader />
    )
  }

  return userInfo && (
    <div className='card'>
      <img src={userInfo.avatar} alt='avatar' className='avatar'/>
      <h1 className="card-header">{userInfo.name}</h1>
      <p className="person-about">{`City: ${userInfo.details.city}`}</p>
      <p className="person-about">{`City: ${userInfo.details.company}`}</p>
      <p className="person-about">{`City: ${userInfo.details.position}`}</p>
    </div>
  )
}

export default Details