import React from "react";

import Header from "../components/mawf/Header";
import Hero from "../components/mawf/Hero";
import Services from "../components/mawf/Services";
import Mission from "../components/mawf/Mission";
import Separator from "../components/mawf/Separator";
import WhyChooseUs from "../components/mawf/WhyChooseUs";
import CTABand from "../components/mawf/CTABand";
import Footer from "../components/mawf/Footer";

export default function Home() {
  return (
    <div className="bg-white">

      <Header />

      <main>
        <Hero />
        <Services />
        <Mission />
        <Separator />
        <WhyChooseUs />
        <CTABand />
      </main>

      <Footer />

    </div>
  );
}