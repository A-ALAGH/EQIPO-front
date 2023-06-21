import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
// ReactDOM.render(
//   <React.StrictMode>
//     <ChakraProvider>
//       <ColorModeScript initialColorMode="dark" />
//       <App />
//     </ChakraProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <ChakraProvider>
//       <ColorModeScript initialColorMode="dark" />
//       <App />
//     </ChakraProvider>
//   </React.StrictMode>
// );

