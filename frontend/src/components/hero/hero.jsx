import HeroImage from "../../assets/bannerbackground.jpg";
import Navbar from "../navbar/nav.jsx";
import { motion } from "framer-motion";
import { SlideRight } from "../../utils/animation.js";

const HeroSections = () => {
  return (
    <div className="relative">
      {/* Hero Section with background image */}
      <div className="relative w-full h-[100vh]">
        {/* Background image */}
        <img
          src={HeroImage}
          alt="Responsive Landscape to Portrait"
          className="object-cover w-full h-full"
        />

        {/* Overlay for darkening the image */}
        <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm w-full h-full"></div>

        {/* Navbar */}
        <div className="absolute top-5 left-0 w-full text-white z-20">
          <Navbar />
        </div>

        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col justify-center text-left text-white z-10 px-4">
          <motion.h1
            variants={SlideRight(0.4)}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight mb-4"
          >
            YOUR ULTIMATE
          </motion.h1>
          <motion.h2
            variants={SlideRight(0.6)}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight mb-6 text-[#ffb700]"
          >
            PARTY EXPERIENCE
          </motion.h2>
          <motion.div
            className="py-3"
            variants={SlideRight(1.0)}
            initial="hidden"
            animate="visible"
          >
            <a
              href="/eventbooking"
              className=" text-white py-2 md:px-3 px-6 lg:px-10 text-center rounded-full text-lg sm:text-xl hover:bg-[#311d14] transition duration-300 bg-transparent border"
            >
              Book Event
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSections;
