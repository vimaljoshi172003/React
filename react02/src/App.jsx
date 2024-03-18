import React, { useState } from 'react'
import './App.css'
const App = () => {

  const [Count,setCount] = useState(0)


  return (
    <>
    <div className="main">
      <button 
      onClick={()=>setCount(Count+1)}>
      Add</button>
      <p>the value of count is {Count}</p>
      <button onClick={()=>setCount(Count-1)}>Substract</button>
    </div>
    </>
  )
}

export default App