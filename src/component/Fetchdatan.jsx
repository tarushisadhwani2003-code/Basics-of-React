import React, { useEffect, useState } from 'react'

const Fetchdatan = () => {
    let [content,setcontent]=useState([])
    let getData = async()=>{ 
        let response = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await response.json()
        console.log(data)
        setcontent(data)

    }
    useEffect(()=>{
        try{
            getData()
        }
        catch(err){
            console.log(err)
        }
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

export default Fetchdatan
