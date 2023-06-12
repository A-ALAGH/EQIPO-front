import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
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

