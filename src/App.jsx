import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header/Header'
import { Flex, VStack, Heading } from "@chakra-ui/layout"
import {FaSun, FaMoon, FaFacebook} from 'react-icons/fa'
import Carousel from './components/carousel/carousel'
import { IconButton } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode';
import ToggleColorMode from './components/toggleColorMode/toggleColorMode'
function App() {
  const [count, setCount] = useState(0);
  // const [colorMode, toggleColorMode]= useColorMode();
  // const isDark = colorMode === "dark";

  return (
    <div>
    <ToggleColorMode/>
    <Header/>
    <Carousel/>
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml={8} size="md" fontWeight="semibold" color="cyan.400">
          EQIPO
        </Heading>
      </Flex>
      {/* <IconButton ml={8} icon={isDark ? <FaSun/> : <FaMoon/>} isRound={true} onClick={toggleColorMode}></IconButton> */}
    </VStack>
    <div>
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
    </div>
  )
}

export default App
