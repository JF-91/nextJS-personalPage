
import { Box } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import HeaderSocialPage from './headerSocial'
import MainSocialPage from './mainSocial'

const SocialPage = () => {
  return (
    <>
      {/* head remplaza el head del html para esta pagina */}
      <Head>
        <title>About page F</title>
        <meta name="description" content="About Page"/>
      </Head>
      <Head>
        <meta name="keywords" content="john, francesc, rios, oliveros, developer, wien"/>
      </Head>
      
      <Box>
        <HeaderSocialPage />
        <MainSocialPage />
      </Box>
    </>
  )
}

export default SocialPage