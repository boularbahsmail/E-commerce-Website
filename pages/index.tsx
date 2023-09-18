import React, { useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Fashions from "@/components/Fashions";
import FeaturedServices from "@/components/FeaturedServices";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  return (
    <>
      <Head>
        <title>E-commerce Website</title>
        <meta name="description" content="" />
        <link rel="icon" type="x-icon" href="" />
      </Head>

      <main
        className={`p-4 h-screen w-screen ${menuOpen ? "overflow-y-hidden" : "overflow-y-auto"}`}
      >
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Hero />
        <Fashions />
        <FeaturedServices />
      </main>
    </>
  )
}
