import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header/Header'
import { Flex, VStack, Heading } from "@chakra-ui/layout"
import {FaSun, FaMoon, FaFacebook} from 'react-icons/fa'
import Carousel from './components/carousel/carousel'
import { Card, IconButton } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode';
import { Button, SimpleGrid, Center } from '@chakra-ui/react'
import CardProfile from './components/cardProfile/CardProfile'
import CardEvent from './components/cardEvent/CardEvent'
import Footer from './components/footer/Footer'
// import SignInForm from './components/signInForm/SignInForm'
import SignupCard from './components/SignUp/SignUp'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Profil from './pages/Profil'
import SignUp from './pages/SignUpPage'
function App() {
  return (
    <div>
    <Header/>
    <Routes>
    <Route path='/' element ={<Home/>}/>
    <Route path='/register' element ={<SignUp/>}/>
      
      
    </Routes>
    <Footer/>

    {/* <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      
      <div className="card">
      <Button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div> */}
    </div>
    
  )
}

export default App
