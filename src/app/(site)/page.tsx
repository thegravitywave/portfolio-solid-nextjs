import { Metadata } from "next";
import Hero from "@/src/components/Hero";
// import Brands from "@/components/Brands";
import Feature from "@/src/components/Features";
import About from "@/src/components/About";
import FeaturesTab from "@/src/components/FeaturesTab";
// import FunFact from "@/components/FunFact";
import Integration from "@/src/components/Integration";
import CTA from "@/src/components/CTA";
// import FAQ from "@/components/FAQ";
// import Pricing from "@/components/Pricing";
import Contact from "@/src/components/Contact";
import Blog from "@/src/components/Blog";
import Testimonial from "@/src/components/Testimonial";
import getHero from "@/src/lib/getHero";

export const metadata: Metadata = {
  title: "Gravity Wave",
  description: "Welcome to modern-age innovation",
  icons: "/images/logo/GravityWaveLogoW.svg",
  // other metadata
};

export default async function Home() {
  const heroData = await getHero();

  return (
    <main>
      <Hero heroData={heroData} />
      {/* <Brands /> */}
      <About />
      <Feature />
      <Integration />
      <FeaturesTab />
      {/* <FunFact /> */}
      <CTA />
      {/* <FAQ /> */}
      <Blog />
      <Testimonial />
      {/* <Pricing /> */}
      <Contact />
    </main>
  );
}
