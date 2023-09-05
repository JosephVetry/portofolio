import React from 'react'
import './Intro.css'
import bg from '../../assets/foto.png'
// import btnImg from '../../assets/hireme.png'
// import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Joseph</span> <br />Software Engineer </span>
            <p className='introPara'>I Love and Excited to gain experience as a Software Engineer</p>
            {/* <Link><button className='btn'><img src={btnImg} alt='hire' className='btnImg'/>Reach Me</button></Link> */}
        </div>
        <img src={bg} alt='Profile' className='bg' />
    </section>
  )
}

export default Intro