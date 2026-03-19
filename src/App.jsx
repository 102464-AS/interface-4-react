import { useState } from 'react'
import './App.css'
import "./index.css"
import "./header/Header"
import Header from './header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />

    <div id='info'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ratione deleniti eos quos architecto cum nostrum. Modi dicta commodi aut vero ut odio asperiores ipsam dolorem nemo magni, minus eligendi.</p>
    </div>
    </>
  )
}

export default App
