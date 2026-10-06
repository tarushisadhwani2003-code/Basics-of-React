import React from 'react'
import B from './B'
const A = ({dataA}) => {
  return (
    <div>
        <h1>Component A</h1>
      <B dataB={dataA}></B>
    </div>
  )
}

export default A
