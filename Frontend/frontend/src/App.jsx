import React from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import CreatePost from './pages/CreatePost.jsx'
import './App.css'
import Feed from './pages/Feed.jsx'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<h1>Home</h1>}/>
          <Route path='/create-post' element={<CreatePost />}/>
          <Route path='/about' element={<h1>About Us</h1>}/>
          <Route path='feed' element={<Feed />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
