import { useState, useEffect } from "react";
import axios from "axios";
import Error from "../error/error";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import { motion } from "framer-motion";

const EventRegistrationsList = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [next, setNext] = useState(null); // Track next page URL
  const [previous, setPrevious] = useState(null); // Track previous page URL

  // Function to fetch the registration data from the API
  const fetchRegistrations = async (url) => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      console.log(response.data); // Check the structure of the response

      if (Array.isArray(response.data.results)) {
        setRegistrations(response.data.results); // Access the 'results' array
        setNext(response.data.next); // Set next page URL
        setPrevious(response.data.previous); // Set previous page URL
      } else {
        setError("Error: Response is not in the correct format.");
      }
    } catch (err) {
      setError("Error fetching registrations.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch when component mounts
  useEffect(() => {
    fetchRegistrations("http://127.0.0.1:8000/myregisteredevents/");
  }, []); // Empty array ensures this runs once on component mount

  // Handle Next Page
  const handleNextPage = () => {
    if (next) {
      fetchRegistrations(next);
    }
  };

  // Handle Previous Page
  const handlePrevPage = () => {
    if (previous) {
      fetchRegistrations(previous);
    }
  };

  const handleDelete = async (registrationId) => {
    const url = `http://127.0.0.1:8000/unregister/${registrationId}`;
    console.log("Deleting registration with URL:", url); // Log the URL

    try {
      await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setRegistrations(
        registrations.filter((reg) => reg.id !== registrationId)
      );
      toast.success("Unregistered Successfull", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } catch (err) {
      setError("Error deleting registration.");
      console.log(err);
    }
  };

  if (loading) return <p>Loading your registrations...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  if (!Array.isArray(registrations) || registrations.length === 0) {
    return <Error />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#211a10] to-[#161415] text-white py-10 px-6 pt-24">
      {/* Header */}
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        viewport={{ once: true }}
        className="lg:text-5xl  text-2xl font-extrabold text-center lg:mb-12 mb-5 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"
      >
        🎧 Your Event Registrations 🎵
      </motion.h2>

      {/* Event Registration List */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        exit={{ duration: 0.5, delay: 0.2 }}
        className="space-y-10 relative lg:flex flex flex-col"
      >
        {registrations.map((registration) => (
          <div
            key={registration.id}
            className="bg-gradient-to-r from-[#2a2520] to-[#1b1a19] rounded-lg shadow-lg p-6 lg:flex justify-between items-center space-x-6 border border-pink-500 transition-transform transform hover:scale-102"
          >
            {/* Thumbnail */}
            <div className="lg:w-36 w-full h-36 rounded-lg overflow-hidden shadow-md">
              <img
                src={`http://127.0.0.1:8000${registration.event_details.thumbnail}`}
                alt={registration.event_details.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Event Details */}
            <div className="flex-grow text-sm text-gray-300">
              <h3 className="lg:text-2xl font-extrabold text-neon mb-2 py-2">
                {registration.event_details.title}
              </h3>
              <p className="line-clamp-3">
                {registration.event_details.description}
              </p>
              <p className="mt-2">
                <span className="font-semibold text-pink-500">Date:</span>{" "}
                {registration.event_details.date}
              </p>
              <p>
                <span className="font-semibold text-pink-500 ">Time:</span>{" "}
                {registration.event_details.time}
              </p>
            </div>

            {/* Unregister Button */}
            <div className="py-5">
              <button
                onClick={() => handleDelete(registration.id)}
                className="bg-pink-500 text-white px-5 py-2 lg:px-6 lg:py-3 rounded-lg disabled:opacity-50 hover:bg-pink-600 transition-all"
              >
                Unregister
              </button>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-16">
        <button
          onClick={handlePrevPage}
          disabled={!previous}
          className="bg-pink-500 text-white px-5 py-2 lg:px-6 lg:py-3 rounded-lg disabled:opacity-50 hover:bg-pink-600 transition-all"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={!next}
          className="bg-pink-500 text-white px-6 py-3 rounded-lg disabled:opacity-50 hover:bg-pink-600 transition-all"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EventRegistrationsList;
