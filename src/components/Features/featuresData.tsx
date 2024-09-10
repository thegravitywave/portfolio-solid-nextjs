import { Feature } from "@/types/feature";
import IT from "public/images/features/laptop.svg";
import IOT from "public/images/features/user-robot.svg";
import Embedded from "public/images/features/microchip.svg";
import UI from "public/images/features/ui-ux.svg";
import Branding from "public/images/features/branding.svg";
import Marketing from "public/images/features/megaphone.svg";
// import Laptop from 'public/lottie/lappy.json'
// import Laptop from 'public/lottie/lappy.json'
// import Laptop from 'public/lottie/lappy.json'

const featuresData: Feature[] = [
  {
    id: 1,
    icon: IT,
    title: "IT",
    description:
      "We specializes in offering forefront IT services to help organizations succeed in the digital age. Whether you're a startup trying to build a strong tech infrastructure or an established organization looking to optimize your operations, our team of trained professionals is here to help you ,so just Dive in this Modern tech Wave.",
  },
  {
    id: 2,
    icon: IOT,
    title: "IOT",
    description:
      "Our speciality is to providing creative IoT solution with our adeptness in contemporary technology , that close the divide between the physical and digital worlds. By seamlessly integrating smart devices and sensors with advanced analytics, we empower businesses to gain real-time insights, automate processes, and enhance operational efficiency.",
  },
  {
    id: 3,
    icon: Embedded,
    title: "Software Embedded",
    description:
      "In the age of IoT and smart technology, embedded software plays a crucial role in powering connected devices. Our software embedded services cover a wide range of applications to bring your products to life.",
  },
  {
    id: 4,
    icon: UI,
    title: "UI/UX",
    description:
      "At Gravity Wave We focus on creating designs that are not only aesthetically pleasing but also deeply intuitive, with visually appealing user interfaces (UI) and user experiences (UX) that your audience will find meaningful. By combining creativity with a user-centered approach, we craft digital experiences that resonate with users, making them feel understood and valued.",
  },
  {
    id: 5,
    icon: Branding,
    title: "Branding",
    description:
      "Our branding services are designed to transform your business identity into a powerful, memorable presence.",
  },
  {
    id: 6,
    icon: Marketing,
    title: "Digital Marketing",
    description:
      "Effective marketing is the cornerstone of business growth. Our digital marketing services are designed to help you reach your target audience, drive engagement, and achieve your business objectives.",
  },
];

export default featuresData;
