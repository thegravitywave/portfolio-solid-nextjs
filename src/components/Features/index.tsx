"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="Services" className="py-20">
        {/* <section id="features" className="py-10 lg:py-25 xl:py-30"> */}
        <div className="mx-auto max-w-full px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "WHAT WE DO?",
              subtitle: "SERVICES",
              description: `We transform thoughts into experiences. We aim to enhance your brand and meaningfully engage your target audience through our diverse suite of services. We have you covered when it comes to eye-catching branding, innovative technology solutions, powerful digital strategies, or modern software embedded programs. We are committed to serving you beyond your expectations.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 px-20 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
