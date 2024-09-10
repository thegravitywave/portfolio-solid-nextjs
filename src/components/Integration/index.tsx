"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import { useState } from "react";

const tabData = [
  { id: "frontend", imageSrc: "./images/brand/brand-07.svg" },
  { id: "backend", imageSrc: "./images/brand/brand-08.svg" },
  { id: "designing", imageSrc: "./images/brand/brand-09.svg" },
  { id: "IOT", imageSrc: "./images/brand/brand-10.svg" }, // Assuming an image for "iot"
  {
    id: "Embedded",
    imageSrc: ["./images/brand/brand-10.svg", "./images/brand/brand-09.svg"],
  }, // Assuming an image for "iot"
];

const TabContent = ({ id, imageSrc, activeTab }) =>
  activeTab === id && (
    <motion.div
      // id={id}
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.1 }}
      viewport={{ once: true }}
      className="animate_top mt-20 flex w-1/3 justify-center gap-20"
    >
      {Array.isArray(imageSrc) ? (
        imageSrc.map((src) => (
          <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
            <Image width={50} height={50} src={src} alt="Brand" />
          </div>
        ))
      ) : (
        <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
          <Image width={50} height={50} src={imageSrc} alt="Brand" />
        </div>
      )}
    </motion.div>
  );

const Integration = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <section id="Technologies" className="h-screen py-20">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: `TECHNOLOGIES`,
              subtitle: `Remotely Maintain Your Data, From Anywhere, Anytime.`,
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
            }}
          />
          {/* <!-- Section Title End --> */}
        </div>

        <div className="pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10 relative z-50 mx-auto mt-15 max-w-c-1154 px-4 md:px-8 xl:mt-20 xl:px-0">
          <ul className="grid grid-flow-col border-b border-gray-200 text-center text-gray-500">
            {tabData.map(({ id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => handleTabClick(id)}
                  title={id.charAt(0).toUpperCase() + id.slice(1)} // Tooltip text
                  className={`flex justify-center border-b-4 py-4 ${
                    activeTab === id
                      ? "border-indigo-600 text-indigo-600"
                      : "border-transparent hover:border-indigo-600 hover:text-indigo-600"
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap justify-around">
            {tabData.map(({ id, imageSrc }) => (
              <TabContent
                key={id}
                id={id}
                imageSrc={imageSrc}
                activeTab={activeTab}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Integration;
