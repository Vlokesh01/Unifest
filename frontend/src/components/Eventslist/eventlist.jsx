import Section1 from "../../assets/section1img.jpg";
import Section2 from "../../assets/section2img.jpg";
import { motion } from "framer-motion";

const EventList = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* First Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 mb-16">
          {/* Image on the Left */}
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            src={Section1}
            alt="About Us"
            className="w-full rounded-lg object-cover"
          />
          {/* Text on the Right */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h5 className=" text-primary text-lg mb-2">About Us</h5>
            <h2 className="text-4xl font-bold mb-6">
              Know The Driving Force Behind Us
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              Our identity is woven from the threads of passion, creativity, and
              dedication to crafting extraordinary experiences. Meet the
              dreamers, creators, and visionaries who work tirelessly to make
              each event an unforgettable journey. Welcome to our world, where
              celebration knows no bounds.
            </p>
          </motion.div>
        </div>

        {/* Second Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-row-dense items-center gap-8">
          {/* Text on the Left */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h5 className=" text-primary text-lg mb-2">Our Story</h5>
            <h2 className="text-4xl font-bold mb-6">
              Why You Should Join The Event
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              Embark on a journey through the heart of Night Hero Events. Born
              from a passion for creating unforgettable moments, our story is
              one of discovery. Discover the vision behind our events, meet the
              team who brings them to life, and join us as we continue to
              redefine the art of celebration.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="/aboutevents"
                className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg text-lg transition duration-300"
              >
                Learn More
              </a>
            </div>
          </motion.div>
          {/* Image on the Right */}
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            src={Section2}
            alt="Our Story"
            className="w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default EventList;
