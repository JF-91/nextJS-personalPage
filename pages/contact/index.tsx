import { Box } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import FormApp from '../../components/FormApp'
import HeaderContact from './headerContact'

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name='description' content='contact'/>
      </Head>
      <Box>
        <HeaderContact />
        
      </Box>
    </>
  )
}

export default ContactPage