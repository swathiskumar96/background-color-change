import { useState } from 'react'
import './App.css'

function App() {
  let black = '#000000'
  const [bgcolor, setBgColor] = useState(black)

  const bgRed = () => {
    let red = '#8B0000'
    setBgColor(red)
  }

  const bgBlue = () => {
    let blue = '#0000FF'
    setBgColor(blue)
  }

  const bgGreen = () => {
    let green = '#008000'
    setBgColor(green)
  }

  const bgPurple = () => {
    let purple = '#800080'
    setBgColor(purple)
  }

  return (
    <>
      <div className="bg" style={{ background: bgcolor, height: '100vh', width: '100%' }}>

        <div className='container d-flex justify-content-center align-item-center'>
          <h1 className='text-center text-light mt-5'>Background Color Change</h1>
        </div>

        <div className='container text-center'>
          <button onClick={bgRed}><b>RED</b></button>
          <button onClick={bgBlue}><b>BLUE</b></button>
          <button onClick={bgGreen}><b>GREEN</b></button>
          <button onClick={bgPurple}><b>PURPLE</b></button>
        </div>

      </div>
    </>
  )
}

export default App
