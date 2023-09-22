import React, { useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Fashions from "@/components/Fashions";
import FeaturedServices from "@/components/FeaturedServices";
import Collection from "@/components/Shared/Collection";
import { men_clothes_types, men_clothes, women_clothes_types, women_clothes } from "@/data/Collection";
import Testimonials from "@/components/Testimonials";
import AdBanner from "@/components/AdBanner";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>ZARA - Reimagining Luxury a Timeless Experience for the Modern Woman</title>
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
        <Collection
          type={1}
          gender={"Men"}
          image={"/assets/images/mens-collection-img.png"}
          clothesTypes={men_clothes_types}
          clothesCollection={men_clothes}
        />
        <AdBanner />
        <Collection
          type={2}
          gender={"Women"}
          image={"/assets/images/womens-collection-img.png"}
          clothesTypes={women_clothes_types}
          clothesCollection={women_clothes}
        />
        <Testimonials />
        <FeaturedProducts />
      </main>
    </>
  )
}
