import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, image, imageDark } = featureTab;

  return (
    <>
      <div className="flex flex-col items-center gap-8 lg:gap-19">
        <div className="relative aspect-video w-3/4">
          <Image src={image} alt={title} fill className="" />
          {/* <Image
            src={imageDark}
            alt={title}
            fill
            className="hidden dark:block"
          /> */}
        </div>
        <div className="w-5/6">
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          <p className="mb-5 text-justify">{desc1}</p>
          <p className="mb-5 text-justify">{desc2}</p>
          <p className="mb-5 text-justify">{desc1}</p>
          <p className="mb-5 text-justify">{desc2}</p>
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
