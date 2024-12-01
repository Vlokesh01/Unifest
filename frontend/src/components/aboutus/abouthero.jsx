import AboutBg from "../../assets/aboutus/AboutUs.avif"
import Navbar from "../navbar/nav"
import { motion } from "framer-motion"

const about = () => {
  return (
    <div>
      <div className="relative">
        {/* Hero Section with background image */}
        <div className="relative w-full h-[50vh]">
          {/* Background image */}
          <img
            src={AboutBg}
            alt="Responsive Landscape to Portrait"
            className="object-cover w-full h-full"
          />
          {/* Overlay for darkening the image */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm w-full h-full"></div>
          {/* Navbar */}
          <div className="absolute top-5 left-0 w-full text-white z-20">
            <Navbar />
          </div>
          {/* hero text */}
          <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
           className="absolute inset-0 flex flex-col justify-center text-left text-white z-10 px-4">
            <h1 className="text-5xl font-bold text-white text-center">About Us</h1>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default about