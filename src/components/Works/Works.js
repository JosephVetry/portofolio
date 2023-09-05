import React from 'react'
import './Works.css'
import portfolio1 from '../../assets/portfolio-1.png'
import portfolio2 from '../../assets/portfolio-2.png'
import portfolio3 from '../../assets/portfolio-3.png'
import portfolio4 from '../../assets/portfolio-4.png'
import portfolio5 from '../../assets/portfolio-5.png'
import portfolio6 from '../../assets/portfolio-6.png'

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>This is description example This is description example This is description example</span>
        <div className='worksImgs'>
            <img src={portfolio1} alt='' className='worksImg'/>
            <img src={portfolio2} alt='' className='worksImg'/>
            <img src={portfolio3} alt='' className='worksImg'/>
            <img src={portfolio4} alt='' className='worksImg'/>
            <img src={portfolio5} alt='' className='worksImg'/>
            <img src={portfolio6} alt='' className='worksImg'/>
        </div>
        <button className='worksBtn'>See More</button>
    </section>
  )
}

export default Works