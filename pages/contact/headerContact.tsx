import { Box } from '@mui/material'
import React from 'react'
import { Parallax } from 'react-parallax'
import FormApp from '../../components/FormApp'

const HeaderContact = () => {
  return (
    <Box marginBottom={114}>
        <Parallax
            blur={10}
            bgImage="coffee_keyboard_big.jpg"
            bgImageAlt="john snow"
            style={{
              position: "absolute",
              zIndex: -1,
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              objectFit: "cover",
            }}>
            <Box height='100vh' display='flex' justifyContent='right' alignItems='right'>
                
                <Box sx={{display:'inline-flex', justifyContent:'end', alignItems:'center', marginRight:'2em'}}>
                    <FormApp />
                </Box>
            </Box>
        </Parallax>
    </Box>
  )
}

export default HeaderContact