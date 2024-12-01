import whyusbg from "../../assets/whyusbgpic.jpg";
import { LuPartyPopper } from "react-icons/lu";
import { FaMasksTheater } from "react-icons/fa6";
import { FaChampagneGlasses } from "react-icons/fa6";
import { motion } from "framer-motion";

function WhySection() {
  return (
    <section className="relative py-0 overflow-hidden">
      <div className="relative w-full h-[145vh] lg:h-[100vh]">
        {/* Background image */}
        <img
          src={whyusbg}
          alt="Responsive Landscape to Portrait"
          className="object-cover w-full h-full md:object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm w-full h-full"></div>
        <div
          className="absolute flex flex-col justify-center items-center max-w-6xl mx-auto text-center
         text-white top-36 lg:left-40 md:left-5"
        >
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8 py-10 text-center"
          >
            Why Choose Us?
          </motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 bg-card rounded-lg shadow-md"
            >
              <div className="flex items-center justify-center mb-4">
                <LuPartyPopper className="icon text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 ">
                Unforgettable Experiences
              </h3>
              <p className="text-muted-foreground">
                Our events are meticulously crafted to immerse guests in a world
                of excitement, ensuring every moment is memorable and unique.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="p-6 bg-card rounded-lg shadow-md"
            >
              <div className="flex items-center justify-center mb-4">
                <FaMasksTheater className="icon text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Elite Entertainment
              </h3>
              <p className="text-muted-foreground">
                From top-tier DJs to mesmerizing light shows, we deliver
                unparalleled entertainment that elevates every party to
                legendary status.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true }}
              className="p-6 bg-card rounded-lg shadow-md"
            >
              <div className="flex items-center justify-center mb-4">
                <FaChampagneGlasses className="icon text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Seamless Service</h3>
              <p className="text-muted-foreground">
                With expert planning and attention to detail, we provide
                seamless coordination from start to finish, allowing clients to
                relax and enjoy the festivities worry-free.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default WhySection;
