import React, { useEffect, useState } from 'react'
import Nav from './component/Nav';

const App = () => {
  const [count,setcount] = useState(0);

  let massage = "how are you"

  useEffect(()=>{
    alert(massage)
  },[count]);



  return (
    <div>
    <Nav />
      <button onClick={()=>{setcount(count+1)}}>{count}</button>
    </div>
  )
}

export default App