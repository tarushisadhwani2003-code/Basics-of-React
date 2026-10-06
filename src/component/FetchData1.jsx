import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const FetchData1 = () => {

    let [content,setContent] = useState([])

    async function getData() {
        let response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(response.data)
        setContent(response.data)

    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
      {
        content.map((ele)=>{
            return(
                <>
                <h1>{ele.title}</h1>
                </>
            )
        })
      }
    </div>
  )
}

export default FetchData1
