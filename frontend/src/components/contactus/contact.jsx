import { motion } from "framer-motion";

const contact = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-[#211a10] to-[#161415] text-white overflow-hidden flex flex-col justify-center items-center">
        <section className="text-center py-12 px-4">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-primary"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className="mt-4 text-secondary max-w-2xl mx-auto"
          >
            We are here to help you. Reach out to us via any of the following
            methods.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 animate-fadeIn">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              viewport={{ once: true }}
              className="p-4 shadow-lg rounded-lg transition-colors"
            >
              <h3 className="text-xl font-bold">Call Us</h3>
              <p className=" text-secondary mt-2">+91 1234567891</p>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              viewport={{ once: true }}
              className="p-4 shadow-lg rounded-lg  transition-colors"
            >
              <h3 className="text-xl font-bold">Email Us</h3>
              <p className=" text-secondary mt-2">unifest@gmail.com</p>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              viewport={{ once: true }}
              className="p-4 shadow-lg rounded-lg  transition-colors"
            >
              <h3 className="text-xl font-bold">Visit Us</h3>
              <p className=" text-secondary mt-2">
                123 Hebbal St, Bengaluru City
              </p>
            </motion.div>
          </div>
        </section>
        <motion.section
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          viewport={{ once: true }}
          className="py-12 px-4 bg-[#211d1e] w-[80vw] lg:w-[50vw] text-center"
        >
          <motion.h2 className="text-2xl font-bold text-center">
            Send Us A Message
          </motion.h2>
          <form className="max-w-2xl mx-auto mt-8 space-y-8">
            <motion.div>
              <label htmlFor="name" className="block text-secondary font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none bg-inputbgcolor focus:ring-2  transition"
              />
            </motion.div>
            <div>
              <label htmlFor="email" className="block text-secondary font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 bg-inputbgcolor  transition"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-secondary font-bold"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 bg-inputbgcolor transition"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#f14b17] text-white py-3 rounded-lg shadow-lg hover:bg-[#ff6e42] transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.section>
        <section className="text-center py-12 px-4">
          <motion.h2
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-2xl font-bold"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <motion.div className="p-4 border rounded-lg shadow-md transition transform hover:scale-95 scale-90">
              <h3 className="text-xl font-bold">
                How do I browse events on your website?
              </h3>
              <p className="mt-2 text-secondary">
                You can browse events by visiting our homepage or using the
                search and filter options to find events by category, location,
                or date.
              </p>
            </motion.div>
            <motion.div className="p-4 border rounded-lg shadow-md transition transform hover:scale-95 scale-90 mt-4">
              <h3 className="text-xl font-bold">
                Can I register for multiple events at once?
              </h3>
              <p className="mt-2 text-secondary">
                Yes, you can add multiple events to your cart and register for
                them in a single transaction.
              </p>
            </motion.div>
            <motion.div className="p-4 border rounded-lg shadow-md transition transform hover:scale-95 scale-90 mt-4">
              <h3 className="text-xl font-bold">
                Are all events listed on your platform hosted by you?
              </h3>
              <p className="mt-2 text-secondary">
                No, we provide a platform for organizers to list their events.
                The hosting and management of individual events are handled by
                their respective organizers.
              </p>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default contact;
