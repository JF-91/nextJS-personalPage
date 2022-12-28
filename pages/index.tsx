
import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import Head from "next/head"

import React from "react"




export default function HomePage() {
  return (

      <>
      <Head>
        <title>Home</title>
        <meta name="descrption" content="Home"/>
      </Head>
        <Box>
          <Typography variant="h1">Hola John!</Typography>
        </Box>
      </>
      
 
  
  )
}
