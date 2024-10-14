import React from 'react'
import { getToken } from '../utils/token'

const Contact = () => {
  const user =  getToken()?.name
 console.log(user)
 
 
  return (
    <div>Contact{user}</div>
  )
}

export default Contact