import { motion } from 'framer-motion'
const AboutSection = () => {
    return (
      <section className="bg-gradient-to-br from-[#541e1e] to-[#1b0802] text-white py-16 overflow-hidden ">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Content */}
            <motion.div className="space-y-6"
            initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
            >
              <h3 className="text-yellow-400 text-lg font-semibold">About Us</h3>
              <h1 className="text-4xl md:text-5xl font-bold">
                “We Collaborate <br /> With Global DJs.”
              </h1>
              <p className="text-gray-400 leading-relaxed">
                Revolutionize your music mixing with innovative tools such as Auto
                Sync and Auto BPM. Designed with beginners in mind, You DJ is the
                ultimate choice for aspiring DJs worldwide, offering unparalleled
                ease of use and professional-quality results.
              </p>
             
            </motion.div>
  
            {/* Right Content */}
            <motion.div className="space-y-8"
            initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          viewport={{ once: true }}
            
            >
              <div className="flex items-start space-x-4">
               
                <div>
                  <h4 className="text-lg font-semibold">Night Spirit</h4>
                  <p className="text-gray-400">
                    Immerse yourself in the mystical aura of the Night Spirit with
                    our latest collection, crafted to ignite imagination and evoke
                    wonder in hearts around the world.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-orange-500 text-3xl">
                  <i className="fas fa-music"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Musical Merriments</h4>
                  <p className="text-gray-400">
                    Experience the joyous harmony of Musical Merriments with our
                    latest selection, designed to uplift spirits and create
                    memorable moments for music lovers worldwide.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-orange-500 text-3xl">
                  <i className="fas fa-headphones"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Music Mastered</h4>
                  <p className="text-gray-400">
                    Explore the artistry of Music Mastered through our latest
                    releases, curated to delight discerning ears and inspire
                    creativity in musicians across the globe.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  