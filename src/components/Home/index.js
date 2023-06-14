import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const Home = () => {
   
  return (
    <>
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
    <Loader type='pacman'/>
    </>
  )
}

export default Home