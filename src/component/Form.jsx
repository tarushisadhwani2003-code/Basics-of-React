import React from 'react'
import {useState} from 'react'
const Form = () => {
  return (
    <div>
        
        <form action="">
              <label htmlFor="text">Name</label>
              <input type="text">Name</input>
              <br />
              <label htmlFor="">Age</label>
            <input type="text" /> 
            <br />
            <label htmlFor="">Email</label>    
            <input type="text" /> 
            <br />       
            <label htmlFor="">gender</label> 
            <input type="radio" name='gender' />Male
            <input type="radio" name='gender' />Female        
    </form>
    </div>
  )
}

export default Form
