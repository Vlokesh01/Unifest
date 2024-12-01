import Footer1 from  '../../assets/footerassets/footer1.jpg'
import Footer2 from  '../../assets/footerassets/footer2.jpg'
import Footer3 from  '../../assets/footerassets/footer3.jpg'
import Footer4 from  '../../assets/footerassets/footer4.jpg'
import Footer5 from  '../../assets/footerassets/footer5.jpg'
import Footer6 from  '../../assets/footerassets/footer6.jpg'
import { motion } from 'framer-motion'


const Footer = () => {
    return (
      <footer className="bg-black text-white py-10">
        <div className="container mx-auto px-4">
          {/* Let's Connect Section */}
          <motion.div className="text-center mb-10"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-orange-500">Let’s Connect</h2>
            <p className="text-gray-400 mt-2">Sign up for new releases to your inbox every month</p>
            <div className="mt-4 flex justify-center items-center">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="px-4 py-2 rounded-l-lg border border-gray-600 focus:outline-none focus:ring focus:ring-orange-400 text-black"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-r-lg">
                Join
              </button>
            </div>
          </motion.div>
  
          {/* Image Gallery Section */}
          <motion.div className="flex overflow-hidden mb-10"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          >
            <img
              src={Footer1}
              alt="Event 1"
              className="w-1/6 object-cover"
            />
            <img
              src={Footer2}
              alt="Event 2"
              className="w-1/6 object-cover"
            />
            <img
              src={Footer3}
              alt="Event 3"
              className="w-1/6 object-cover"
            />
            <img
              src={Footer4}
              alt="Event 4"
              className="w-1/6 object-cover"
            />
            <img
              src={Footer5}
              alt="Event 5"
              className="w-1/6 object-cover"
            />
            <img
              src={Footer6}
              alt="Event 6"
              className="w-1/6 object-cover"
            />
          </motion.div>
  
          {/* Footer Links */}
          <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h2 
              className="font-bold text-primary text-xl">UNIFEST</h2>
              <p className="text-gray-400">Crafted with care by Unifest © 2024</p>
            </div>
            <nav className="flex space-x-6 text-sm text-gray-400">
              <a href="/" className="hover:text-white">Home</a>
              <a href="/about" className="hover:text-white">About us</a>
              <a href="/events" className="hover:text-white">Events</a>
              <a href="/contact" className="hover:text-white">Contact</a>
              <a href="/albums" className="hover:text-white">Albums</a>
            </nav>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-orange-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-orange-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-orange-500">
                <i className="fab fa-spotify"></i>
              </a>
              <a href="#" className="hover:text-orange-500">
                <i className="fas fa-cloud"></i>
              </a>
            </div>
          </motion.div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  