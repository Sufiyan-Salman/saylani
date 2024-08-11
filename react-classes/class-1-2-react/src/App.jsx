import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
// import HeroSection from "./components/HeroSection";

function App() {
  const [count, setCount] = useState(0)
  const [modal, showModal] = useState(false)
  const [selected, setSelected] = useState("#242424")

  function setColour(clr){
    // console.log("hi hellow")
    // console.log("hi hellow",clr)
    setSelected(clr)
  }
  // const info = {
  //   img: "Home.jpg",
  //   heading: "welcome to our website increment counter",
  //   para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laborum modi repellendus fugi",
  // };

  return (
    <>
      <Header cameFrom ="App"/>
      <div style={{ height: "100%", backgroundColor: `${selected}`, width: '100% ' }}>
        <div className="card" >
          <button onClick={() => setCount(() => count + 1)}>
            Increment
          </button>

          <h1>Count</h1>
          <h1>{count}</h1>

          <button onClick={() => setCount(() => count - 1)}>
            Decrement
          </button>

        </div>

        <div className="card">
          <button onClick={() => showModal(() => !modal)}>
            Show colors
          </button>
        </div>

        {
          modal && (
            <div className="card" style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
              {/* <button className='button' style={{ backgroundColor: 'blue'}} onClick={redClick}></button>  */}
              {/* above onCick can be used but we will have to create sparate methods as I cant send arguments */}
              {/* <button className='button' style={{ backgroundColor: 'blue'}} onClick={redClick("red")}></button>  */}
              {/* above onCick can't be used as react automatiaclly calls this whil rendering and it causes infiniet loop */}
              <button className='button' style={{ backgroundColor: 'blue' }} onClick={() => setColour("blue")} ></button>
              <button className='button' style={{ backgroundColor: 'red' }} onClick={() => setColour("red")} ></button>
              <button className='button' style={{ backgroundColor: 'white' }} onClick={() => setColour("white")}></button>
              <button className='button' style={{ backgroundColor: 'aqua' }} onClick={() => setColour("aqua")}></button>
            </div>
          )
        }
      </div>
    </>
  )
}

export default App
