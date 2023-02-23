import { Avatar, Grid, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

const IntroMain = () => {
  return (
    <Box>   
       <Grid container justifyContent='center' alignItems='center'>
        <Grid item>
            <Stack direction='column' >
                <Typography aria-activedescendant='' variant='h6' color='gray' textAlign='center'>
                    Web and mobile application development
                </Typography>
                <Typography variant='h5' color='white' textAlign='center'>
                    My name is John Francesc Rios Oliveros
                </Typography>
                <Typography variant='h5' color='white' textAlign='center'>
                    Full-STACK DEVELOPER
                </Typography>
                <Box display='flex' justifyContent='center' alignItems='center' sx={{marginTop:'2.5em'}}>
                    <Avatar src='/johnR.jpg' />
                </Box>
            </Stack>
        </Grid> 
       

       </Grid>
    </Box>
  )
}

export default IntroMain