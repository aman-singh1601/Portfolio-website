import React, { useRef,useState,useEffect } from 'react'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import emailjs from '@emailjs/browser'

import './index.scss'

 const Contact = () => {
    const [letterClass,setLetterClass]=useState('text-animate')
    const refForm=useRef();
    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_ftk5z2t', 'template_buz2rig', refForm.current,'nxQTDRfChoVkI6DrL')
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
        console.log('FAILED...', error);
        });
    }

    useEffect(()=>{
         setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },3000)
    },[])
  return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','M','e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I am intrested in freelance opportunites , Internships or
                    real-world projects. However, if you have other request or questions,
                    you can contact me using below form either.
                </p>
                <div  className='contact-form' >
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' 
                                 name='name' 
                                 placeholder='Name' 
                                 required
                                />
                            </li>
                            <li className='half'>
                                <input type='email' 
                                 name='email' 
                                 placeholder='Email' 
                                 required
                                />
                            </li>
                            <li >
                                <input type='text' 
                                 name='subject' 
                                 placeholder='Subject' 
                                 required
                                />
                            </li>
                            <li >
                               <textarea
                               placeholder='Message'
                               name='message'
                               required
                               ></textarea>
                            </li>
                            <li >
                             <input type='submit' className='flat-button' value='SEND'/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
    </>
  )
}

export default Contact;
