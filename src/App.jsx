import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books'
import BookDetail from './pages/bookDetail'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='/books/:id' element={<BookDetail/>}/>
      </Routes>
    </div>
  )
}

export default App