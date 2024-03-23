import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const [count , setCount] = useState(0);
  const a = useRef(0)
  const Ref = useRef()
  const MagicButton = useRef()
  useEffect(()=>{
    a.current=a.current+1
    console.log(a.current);
    Ref.current.style.backgroundColor = 'Red';
    MagicButton.current.style.backgroundColor = 'blue'
  })
  return (
    <>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus ipsam quia inventore perspiciatis laudantium eos repellat? Reprehenderit sapiente est laborum rem. Itaque similique ullam enim quo incidunt adipisci rem.
    Expedita maxime, labore culpa dicta id dolorum ad illum a animi enim, commodi nisi perferendis et corrupti velit accusantium ipsam eum saepe provident quis dignissimos fugit! Voluptatum ducimus similique quis?
    Possimus ipsa eius suscipit ipsam eligendi assumenda ad nulla quisquam quod quis maxime exercitationem labore illum, distinctio ab alias inventore ducimus optio facere voluptatum nam. Consequatur provident maxime distinctio molestias!</p>
    {count}
    <br />
      <button ref={Ref} onClick={()=>{setCount(count+1)}}>Click me</button>
      <br />
      <button ref={MagicButton}>Magic</button>
    </>
  )
}

export default App