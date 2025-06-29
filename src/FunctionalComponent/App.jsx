import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Footer from './Footer'
import Navbar from './Navbar'
export default function App() {
  let [language, setLanguage] = useState("hi")
  let [search, setSearch] = useState("")
  function getLanguage(input) {
    setLanguage(input)
  }
  let getSearch = (input) => {
    setSearch(input)
  }
  return (
    <>
      {/* <BrowserRouter basename={process.env.NODE_ENV === "production" ? "/IndiaNews/" :'/'}> */}
       <BrowserRouter basename="/IndiaNews">
        <Navbar getLanguage={getLanguage} getSearch={getSearch} />
        <Routes>
          <Route path='' element={<Home language={language} q={search ? search : "All"} />} />
          <Route path='/All' element={<Home language={language} q={search ? search : "All"} />} />
          <Route path='/Politics' element={<Home language={language} q={search ? search : "Politics"} />} />
          <Route path='/Crime' element={<Home language={language} q={search ? search : "Crime"} />} />
          <Route path='/Education' element={<Home language={language} q={search ? search : "Education"} />} />
          <Route path='/Science' element={<Home language={language} q={search ? search : "Science"} />} />
          <Route path='/Technology' element={<Home language={language} q={search ? search : "Technology"} />} />
          <Route path='/Sports' element={<Home language={language} q={search ? search : "Sports"} />} />
          <Route path='/Cricket' element={<Home language={language} q={search ? search : "Cricket"} />} />
          <Route path='/Entertainment' element={<Home language={language} q={search ? search : "Entertainment"} />} />
          <Route path='/Economics' element={<Home language={language} q={search ? search : "Economics"} />} />
          <Route path='/World' element={<Home language={language} q={search ? search : "World"} />} />
          <Route path='/India' element={<Home language={language} q={search ? search : "India"} />} />
          <Route path='/Jokes' element={<Home language={language} q={search ? search : "Jokes"} />} />
          <Route path='/Mahakumbh' element={<Home language={language} q={search ? search : "Mahakumbh"} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

