import React from 'react'
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
    </Routes>
    </Router>
  )
}

export default App