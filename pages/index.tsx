

import { Box } from "@mui/system"
import Head from "next/head"

import React from "react"
import Header from "../components/header/Header"
import IntroMain from "../components/intro"




export default function HomePage() {
  return (

      <>
      <Head>
        <title>Home</title>
        <meta name="descrption" content="Home"/>
      </Head>
        <Box mb={140}>
          <Header />
          
        </Box>
        <Box>
          <IntroMain />
        </Box>
        
      </>
      
 
  
  )
}
