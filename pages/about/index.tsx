
import Head from "next/head";
import React from "react";

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
        <div>
            <h3>info page</h3>
        </div>
    </>
  );
}
