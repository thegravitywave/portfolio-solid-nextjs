"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import FeaturesTabItem from "./FeaturesTabItem";
import featuresTabData from "./featuresTabData";

import { motion } from "framer-motion";

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".tab-section");
      let current = "tabOne";

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        if (window.scrollY >= sectionTop - 50) {
          const id = section.getAttribute("id");
          if (id) {
            current = id;
          }
        }
      });

      setCurrentTab(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="features" className="container mx-auto flex flex-row">
      {/* <!-- Tab Menues Start --> */}
      <div className="sticky top-60 h-1/2 overflow-hidden rounded-[10px] border border-stroke bg-white shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-start gap-7.5 p-4"
        >
          {featuresTabData.map((feature, index) => (
            <div
              key={index}
              onClick={() => setCurrentTab(feature.id)}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark ${
                currentTab === feature.id
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                  : ""
              }`}
            >
              <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                <p className="text-metatitle3 font-medium text-black dark:text-white">
                  {index + 1}
                </p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                  {feature.title}
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      {/* <!-- Tab Menues End --> */}

      {/* <!-- Tab Content Start --> */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top mx-auto flex h-max max-w-c-1154 flex-col"
      >
        {featuresTabData.map((feature, key) => (
          <div
            id={feature.id}
            className={`tab-section mb-10 ${
              currentTab === feature.id ? "fade-in" : ""
            }`}
            key={key}
          >
            <FeaturesTabItem featureTab={feature} />
          </div>
        ))}
      </motion.div>
      {/* <!-- Tab Content End --> */}
    </section>
  );
};

export default FeaturesTab;
