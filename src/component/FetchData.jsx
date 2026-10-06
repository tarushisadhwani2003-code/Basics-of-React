import React from 'react'
import { useState,useEffect } from 'react'
const FetchData = () => {
    let [content,setzcontent]= useState([])
    useEffect(()=>{
        async function getData() {
                    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
                    let data = await response.json()
                    console.log(data)
        }
        getData()
    },[])
  return (
    <div>
      {
        content.slice(10,15).map((ele)=>{
           return( 
           <>
            <h1>{ele.id}</h1>
            </>
           )   
    })
      }
    </div>
  )
}

export default FetchData
