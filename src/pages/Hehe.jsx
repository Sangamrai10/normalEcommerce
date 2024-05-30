import React, { useContext } from 'react'
import { useState, createContext } from 'react'


export default function Hehe() {
    let [user, setUser]=useState('sangam')
    const UserContext = createContext()
    const hi=useContext(UserContext)
  return (
    <>
      <UserContext.Provider value={user}>
        <h1>{`hello${user}!`}</h1>
      </UserContext.Provider>
    </>
  )
}
