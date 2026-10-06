import React from 'react'

const Home = () => {
    let isLogin = true;
  return (
    <div>
      <h1>Home page</h1>
      {isLogin?"welcome":"please login"}
    </div>
  )
}

export default Home
