import { useState } from 'react'
import './App.css'
import "./index.css"
import "./header/Header"
import Header from './header/Header'

function App() {
  const [image, setImage] = useState("/cars/volvo.png")

  return (
    <>
      <div className="container">

        <select
          className="dropdown"
          name="cars"
          id="cars"
          onChange={(e) => setImage(e.target.value)}
        >
          <option value="/cars/volvo.png">Volvo</option>
          <option value="/cars/Mercedes.png">Mercedes</option>
          <option value="/cars/saab.png">Saab</option>
          <option value="/cars/audi.png">Audi</option>
        </select>

        <div className="image-wrapper">
          <img src={image} alt="car" />
        </div>
      </div>
    </>
  )
}

export default App
