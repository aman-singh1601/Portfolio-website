import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
   
  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>Hi,<br/>
            I'm Aman
             <br/>
            web Developer.
            </h1>
            <h2>Frontend Developer</h2>
            <Link to='/contact' className='flat-button' >CONTACT ME</Link>
        </div>
    </div>
  )
}

export default Home