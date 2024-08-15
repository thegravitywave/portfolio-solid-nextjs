import { Metadata } from "next";
import Hero from "@/components/Hero";
// import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
// import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
// import FAQ from "@/components/FAQ";
// import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import getHero from "@/lib/getHero";

export const metadata: Metadata = {
  title: "Gravity Wave",
  description: "Welcome to modern-age innovation",
  icons: "/images/logo/GravityWaveLogoW.svg",
  // other metadata
};

export default async function Home() {
  const heroData = await getHero();
  console.log(heroData);
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
