import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)
  const [list , setlist] = useState([

    {
      key:1,
      name:"vimal",
      course:"BCA"
    },
    {
      key:2,
      name:"Raj",
      course:"BCA"
    },
    {
      key:3,
      name:"Arsh",
      course:"BCA"
    },
  ]
    )


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setShow(!show)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
     {/* {  show?
      <button>show btn</button>
      : ""
     } */}
     {
      show  && <button>show btn</button>
     }
     <br />
     {
      list.map(list=>{
        return <div key={list.key} className="main">
          <div className="todo">{list.name}</div>
          <div className="todo">{list.course}</div>
        </div>
      })
     }
    </>
  )
}

export default App
