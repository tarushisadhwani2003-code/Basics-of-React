import React from 'react'
import {useState} from 'react'
const Fform = () => {
    let [name,setName]= useState("")
    let [age,setAge]= useState("")
    let [email,setEmail]= useState("")
  return (
    <div className='border rounded h-40 w-40'>
      <h1>hello</h1>
      <form action="">
        <label htmlFor="">Name</label>
        <input type="text" />
        <br />
        <label htmlFor="">email</label>
        <input type="text" />
        <br />
        <label htmlFor="">Age</label>
        <input type="text" />

        
      </form>
    </div>
  )
}

export default Fform
