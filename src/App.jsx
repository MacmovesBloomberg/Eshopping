import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carousel from './components/Slider/Carousel'
import NavBar from './components/Navigation/Navigation'

function App() {
  const [count, setCount] = useState(0)

  const carouselOptions = {
    slidesPerView: 1,
    navigation: true,
    pagination: true,
  };


  return (
    <>
    <NavBar title={"E-Shopping"} />

      {/* <Carousel /> */}
    </>
  )
}

export default App
