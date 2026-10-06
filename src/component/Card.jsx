import React from 'react'
import {useState} from 'react' 
import user from './user.json'
const Card = () => {
    let [post,setPost] = useState(user)
  return (
    <div className='flex justify-around flex-wrap'>
      { post.map((ele)=>{
        return(
            <div key = {ele.id} className='border rounded h-30 w-50 m-5 p-2 overflow-hidden bg-amber-200'>
                <h1>{ele.id}</h1>
                <h1>name={ele.name}</h1>
                <h1>role={ele.role}</h1>
                </div>
        )

       })
       }
    </div>
  )
}

export default Card
