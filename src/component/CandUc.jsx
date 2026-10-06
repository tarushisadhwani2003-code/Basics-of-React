import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
const CandUc = () => {
           let[content,setContent] = useState({})
           let[id,setId] = useState(null)
           let[btn,setBtn] = useState(null)



    async function getData() {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
         setContent(response.data)
        
    }
    let btnHandler = ()=>{
        e.prevent.default()
        setBtn(id)        
        
    }
    let inputHandler = ()=>{
        setId(e.target.value)
    }
    useEffect(()=>{
        getData()
    },[btn])
  return (
    <div>
      <form action="">
        <input type="text" placeholder = "enter the id "onClick={inputHandler} value = {id}/>
        <label htmlFor="" ></label>
        <button onClick={btnHandler}>GET</button>
      </form>
    </div>
  )
}

export default CandUc
