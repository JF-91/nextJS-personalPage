import { Container, Box, Grid, Paper, Typography, TextField, TextareaAutosize, FormControl } from '@mui/material'
import { padding } from '@mui/system';
import { useFormik } from 'formik'
import React, { useState } from 'react'

interface ValuesProps{
    name:string;
    email:string;
    message:string;
}

const formInitialValues = {
    name: '',
    email: '',
    message:''
}

const FormApp = () => {

    const [post, setPost] = useState<String[]>([]);

    const formik  = useFormik({
        initialValues: formInitialValues,
        onSubmit: (data:any)=>{
                console.log(data);
                setPost((oldValues)=>[{...oldValues}, ...data])
                
        },
    })

  return (
    <Container >
        <Grid container >
            <Grid item >
                <Box >
                    <Paper sx={{padding:'0.5em', borderRadius:'1.5em', background:'inherit'}} elevation={24}>
                        <Typography  variant='h4' textAlign='center'>Write me a message!</Typography>
                        <Box sx={{background:'inherit', borderRadius:'0.5em',  }} component='form' onSubmit={formik.handleSubmit} action="https://formsubmit.co/johnlb91@gmail.com" method='POST'>
                            <TextField
                                
                                name='name'
                                margin='normal'
                                type='text'
                                fullWidth
                                label='Vorname'
                                sx={{ mt: 2, mb: 1, borderRadius:'0.5em', padding:'0.5em' }}
                                required
                                onChange={formik.handleChange}
                            />
                            <TextField
                                name='email'
                                margin='normal'
                                type='email'
                                fullWidth
                                label='email'
                                sx={{ mt: 2, mb: 1, borderRadius:'0.5em', padding:'0.5em' }}
                                required
                                onChange={formik.handleChange}
                            />
                            <TextareaAutosize
                                name='message'
                                aria-label='Nachricht ...'
                                minRows={5}
                                style={{ width: '100%', borderRadius:'0.5em',  padding:'0.5em', background:'inherit' }}
                                onChange={formik.handleChange}

                            />
                        </Box>
                    </Paper>
                </Box>
            </Grid>
        </Grid>

    </Container>
  )
}

export default FormApp