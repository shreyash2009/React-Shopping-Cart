import React, { useContext } from 'react'
import { BsFillCartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import '../../Styles/Header/Header.css'
import {useGlobalContext} from '../../Context/Context'
const Header = () => {
    const {cart} = useGlobalContext()

  return (
    <header className='navbar'>
        <nav className='nav-content'>
        <Link exact to="/"><h2 className='Logo'>My Store</h2></Link>
            
            <div className='Cart-btn'>
            <Link exact to="/cart">
                <BsFillCartFill className='cart-icon'/>
                <span>{cart.length}</span>
                </Link>
            </div>
        </nav>
    </header>
  )
}

export default Header