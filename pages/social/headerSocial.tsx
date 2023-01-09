import { Box } from '@mui/material'
import React from 'react'
import { Parallax } from 'react-parallax'

const HeaderSocialPage = () => {
  return (
    <Box marginBottom={140}>
        <Parallax
            blur={5}
            bgImage="thinkpadFoto.JPEG"
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
            <Box height='100vh'>
                
                
            </Box>
        </Parallax>
    </Box>
  )
}

export default HeaderSocialPage