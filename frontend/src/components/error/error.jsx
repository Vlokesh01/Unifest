import { motion } from "framer-motion";

const error = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      viewport={{ once: true }}
      className="flex justify-center items-center lg:h-screen lg:w-screen h-[90vh] w-[90vw] overflow-hidden overflow-y-hidden"
    >
      <div className="error-page bg-gradient-to-br from-[#0d0d0d] to-[#1c1c1c] rounded-lg shadow-lg p-8 lg:w-1/2 w-[80vw] text-white ">
        <h1 className="text-3xl font-bold mb-4">No Registered Events</h1>
        <p className="text-lg mb-4">
          Sorry, there are no events registered at this time.
        </p>
        <p className="text-lg mb-8">
          Please check back later for updates or contact the event organizer for
          more information.
        </p>
        <button
          className="  bg-pink-500 text-white font-bold py-2 px-4 rounded"
          onClick={() => (window.location.href = "/events")}
        >
          Return to Home Page
        </button>
      </div>
    </motion.div>
  );
};

export default error;
