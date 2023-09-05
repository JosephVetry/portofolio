import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
// import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll'

const Navbar = () => { 
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-15} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem'>Portofolio</Link>
        </div>
        {/* <button className='desktopMenuBtn' onClick={() => {
          document.getElementById().scrollIntoView({behavior:'smooth'})
        }}>
            <img src={contactImg} alt='contactImg' className='desktopMenuImg'/> Contact Me
        </button> */}
    </nav>
  )
}

export default Navbar