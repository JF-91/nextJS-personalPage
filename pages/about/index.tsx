
import { Box } from "@mui/system";
import Head from "next/head";
import React from "react";
import Info from "./main/Info";
import MainAbout from "./main/main";
import SubMain from "./main/subMain";

export default function AboutPage() {
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
        <Info />
        
        <MainAbout />

        <SubMain />
      </Box>
    </>
  );
}
