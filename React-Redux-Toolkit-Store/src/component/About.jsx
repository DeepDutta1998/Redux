import React from 'react'
import { useSelector } from 'react-redux'

export const About = () => {
    const {name,email,phone}=useSelector((state)=>{
        console.log(state);
        return state
    })
  return (
    <div>
    <h1>This is a About page </h1>
    <h1>my name is {name}</h1>
    <h1>my email is {email}</h1>
    <h1>my phone is {phone}</h1>
    </div>
  )
}
