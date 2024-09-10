import React from "react";
import { Feature } from "@/types/feature";
import { motion } from "framer-motion";
import Image from "next/image";

// const SingleFeature = () => {
//   return (
//     <div className="flex w-full place-content-center justify-center text-slate-900">
//       <Example
//         feature={{
//           id: 1,
//           icon: {},
//           title: "",
//           description: "sadadas",
//         }}
//       />
//     </div>
//   );
// };

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate-top relative flex w-full flex-col justify-center"
      >
        {/* <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12"> */}
        <div className="group relative cursor-pointer overflow-hidden bg-white p-4 px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 transition-all duration-500 hover:scale-90 hover:shadow-2xl dark:border-strokedark dark:bg-blacksection sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
          <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-primary transition-all duration-500 group-hover:scale-[20]"></span>
          <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-primary transition-all duration-500 group-hover:bg-blue-500">
              {/* <img src={icon} alt="" /> */}
              <Image src={icon} height={35} width={35} alt="" />
            </span>
            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-500 group-hover:text-white dark:text-white">
              <h3 className="text-2xl">{title}</h3>

              <p className="line-clamp-3">{description}</p>
            </div>
            <div className="pt-5 text-base font-semibold leading-7">
              <p>
                <a
                  href="#"
                  className="text-primary transition-all duration-500 group-hover:text-white"
                >
                  Read the docs &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </motion.div>
    </>
  );
};

export default SingleFeature;
