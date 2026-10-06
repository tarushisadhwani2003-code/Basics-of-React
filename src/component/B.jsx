import React from 'react'
import C from './C'
const B = ({dataB}) => {
  return (
    <div>
        <h1>Component B</h1>
      <C dataC={dataB}></C>
    </div>
  )
}

export default B
