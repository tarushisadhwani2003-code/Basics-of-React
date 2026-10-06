import React from 'react'
import {useRef} from 'react';
const Uncontrolled = () => {
    let nameRef = useRef(); 
    let ageRef = useRef();
    let emailRef = useRef();
    let btnHandler = (e)=>{
        e.preventDefault();
        console.log(nameRef,ageRef,emailRef)
        console.log(nameRef.current.value)
        console.log(ageRef.current.value)
        console.log(emailRef.current.value)
    }
  return (
   <div className='border rounded h-40 w-90 m-auto'>
      <form action="">
        <label htmlFor="" className='ml-5'>Name</label>
        <input ref={nameRef} type="text" className='border rounded-2xl ml-5 mt-2 ' />
        <br />
        <label htmlFor=""className='ml-5'>email</label>
        <input ref={emailRef} type="text"className='border rounded-2xl ml-5 mt-2 ' />
        <br />
        <br />
        <label htmlFor=""className='ml-5'>Age</label>
        <input ref={ageRef} type="text" className='border rounded-2xl ml-5 mt-2 ' />
        <br />
        <button onClick={btnHandler} className='border rounded bg-black text-amber-50 ml-5'>Submit</button>

        
      </form>
    </div>
  )
}

export default Uncontrolled
