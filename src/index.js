import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './ClassComponent/App'
import App from './FunctionalComponent/App'
import { BrowserRouter } from 'react-router-dom'
//import App from './FunctionalComponent2/App'
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <>
    <BrowserRouter  basename="/IndiaNews/">
     <App/>
    </BrowserRouter>
   
   
    </>
)