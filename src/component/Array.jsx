import React from 'react'
import {useState} from 'react'

const Array = () => {
    let[arr,setArr]= useState([10,20,30,40])
    let btnHandler=()=>{
         // setArr(()=>[...arr,60])
        // let nextele = arr[arr.length-1]+10
         let nextele = [arr.push()*10]
        setArr(()=>[...arr,nextele])
    }
  return (
    <div>
        
    <button onClick={btnHandler}> add in array</button>
     {
        arr.map((ele)=>{
            return(
                <><h1>{ele}</h1>
                </>
            )
        })
     }
    </div>
  )
}

export default Array
