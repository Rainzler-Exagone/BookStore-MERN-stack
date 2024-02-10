import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter} from  'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  
   <BrowserRouter>
    <ChakraProvider>
    <App />
    </ChakraProvider>
   </BrowserRouter>
  ,
)
// import * as React from 'react'

// import * as ReactDOM from 'react-dom/client'

// const rootElement = document.getElementById('root')
// ReactDOM.createRoot(rootElement).render(
//   <React.StrictMode>
//     <ChakraProvider>
//       <App />
//     </ChakraProvider>
//   </React.StrictMode>,
// )