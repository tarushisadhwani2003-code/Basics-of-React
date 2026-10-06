import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div>
      <ul className='fle'>
     <li> <Link to = '/'>Home</Link>         </li>
       <li>   <Link to = '/About'>About</Link>   </li>
         <li>  <Link to = '/Contact'>Contact</Link>     </li>
           <li>  <Link to = '/Service'>Service</Link>       </li>
      </ul>
    </div>
  )
}

export default Nav
