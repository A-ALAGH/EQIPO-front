import { useState } from 'react'
import Header from './components/header/Header'
import {AuthProvider} from 'react-auth-kit'
import { Flex, VStack, Heading } from "@chakra-ui/layout"
import {FaSun, FaMoon, FaFacebook} from 'react-icons/fa'
import Carousel from './components/carousel/carousel'
import { Card, IconButton } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode';
import { Button, SimpleGrid, Center } from '@chakra-ui/react'
import CardProfile from './components/cardProfile/CardProfile'
import CardEvent from './components/cardEvent/CardEvent'
import Footer from './components/footer/Footer'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Profil from './pages/Profil'
import SignUp from './pages/SignUpPage'
import Login from './components/Login/Login'
function App() {
  return (
    <AuthProvider>
    <div>
    <Header/>
    <Routes>
    <Route path='/' element ={<Home/>}/>
    <Route path='/register' element ={<SignUp/>}/>
    <Route path='/login' element ={<Login/>}/>
      
    </Routes>
    <Footer/>


    </div>
    </AuthProvider>
  )
}

export default App
