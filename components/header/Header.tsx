import { Box, Card, Container } from '@mui/material'
import './header.module.css';
import React from 'react'


const Header = () => {


  
  return (
    <Box >
        <video playsInline  autoPlay loop  preload='auto' className='videoH' muted style={{
           position: "absolute",
           zIndex: -1,
           top: 0,
           left: 0,
           width: '100%',
           height: '100vh',
           objectFit:'cover',
        }}>
           <source type='video/mp4' src='/testheaderjohn.mp4'/>
        </video>

    </Box>
  )
}

export default Header