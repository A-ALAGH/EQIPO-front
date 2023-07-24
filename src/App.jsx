import { useState } from 'react'
import Header from './components/header/Header'
import {AuthProvider} from 'react-auth-kit'
// import { Flex, VStack, Heading } from "@chakra-ui/layout"
// import {FaSun, FaMoon, FaFacebook} from 'react-icons/fa'
// import Carousel from './components/carousel/carousel'
// import { Card, IconButton } from '@chakra-ui/react'
// import { useColorMode } from '@chakra-ui/color-mode';
// import { Button, SimpleGrid, Center } from '@chakra-ui/react'
// import CardEvent from './components/cardEvent/leisurecard'
import Footer from './components/footer/Footer'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SignUp from './pages/SignUpPage'
import Login from './components/Login/Login'
import SportEventForm from './components/EventForm/SportEventForm'
import LeisureEventForm from './components/EventForm/LeisureEventForm'
import TeamWorkEventForm from './components/EventForm/TeamWorkEventForm'
import Sports from './pages/Sports'
import './App.css'
import Teamworks from './pages/Teamwork'
import Leisures from './pages/Leisure'
// import EventShow from './components/EventShow/EventShow'


function App() {
  return (
    <AuthProvider>
    <div>
    <Header/>
    <Routes>
    <Route path='/' element ={<Home/>}/>
    <Route path='/register' element ={<SignUp/>}/>
    <Route path='/login' element ={<Login/>}/>
    <Route path='/profile' element ={<Profile/>}/>
    <Route path='/sport/add' element ={<SportEventForm/>}/>
    <Route path='/leisure/add' element ={<LeisureEventForm/>}/>
    <Route path='/teamwork/add' element ={<TeamWorkEventForm/>}/>


    <Route path='/sports' element ={<Sports/>}/>
    <Route path='/teamwork' element ={<Teamworks/>}/>
    <Route path='/leisure' element ={<Leisures/>}/>
    
   




      
    </Routes>
    <Footer/>


    </div>
    </AuthProvider>
  )
}

export default App
