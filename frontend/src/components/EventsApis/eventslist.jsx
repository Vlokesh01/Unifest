import { useEffect, useState } from "react";
import axios from "axios";
import { toast, Bounce } from "react-toastify";
import { motion } from "framer-motion";
import EventsError from "../error/eventserror";
const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0); // Track offset for pagination
  const [limit] = useState(5); // Items per page
  const [totalCount, setTotalCount] = useState(0); // Total count of items
  // To show registration success message
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/publicevents/",
          {
            params: { offset: offset, limit: limit }, // Send offset and limit in the request
          }
        );
        setEvents(response.data.results || response.data); // Adjust if the response is wrapped in a "results" key
        setTotalCount(response.data.count); // Assuming the API returns a count of total items
        setLoading(false);
        console.log(response.data);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Failed to fetch events.");
        setLoading(false);
      }
    };

    fetchEvents();
  }, [offset, limit]); // Re-fetch when offset or limit changes

  // Handle page navigation
  const handleNextPage = () => {
    if (offset + limit < totalCount) {
      setOffset(offset + limit);
    }
  };

  const handlePrevPage = () => {
    if (offset - limit >= 0) {
      setOffset(offset - limit);
    }
  };
  // Handle event registration
  const handleRegistration = async (eventId) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/register/`,
        { event: eventId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      console.log("Successfully registered for event:", response.data);
      toast.success('"Successfully registered ', {
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
      
      console.error(
        "Error registering for the event:",
        err.response ? err.response.data : err
      ); // Log the error response
      if (!localStorage.getItem("accessToken")) {
        toast.warn("Signup/Login to register for this event", {
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
      } else {
        toast.warn("You have already been registered for the event", {
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
      }
    }
  };

  if (loading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <EventsError />;
  }
  if (totalCount === 0) {
    return <EventsError />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0d0d] to-[#1c1c1c] p-8">
      {/* Header */}
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl font-extrabold text-center mb-12 text-white"
      >
        Upcoming Music Events
      </motion.h1>

      {/* Event Grid */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-center items-center"
      >
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-[#222222] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
          >
            {/* Event Thumbnail */}
            <img
              src={event.thumbnail || "https://via.placeholder.com/300"}
              alt={event.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />

            {/* Event Details */}
            <div className="p-4">
              <h2 className="text-2xl font-bold text-white mb-3">
                {event.title}
              </h2>

              {/* Event Description */}
              <p className="text-sm text-gray-300 mb-4">{event.description}</p>

              {/* Event Date & Time */}

              <p className="text-sm text-gray-400 mb-2">
                <strong className="text-pink-500">Date:</strong> {event.date}
              </p>
              <p className="text-sm text-gray-400 mb-4">
                <strong className="text-pink-500">Time:</strong> {event.time}
              </p>
              <p className="text-sm text-gray-400 mb-2">
                <strong className="text-pink-500">Category</strong>{" "}
                {event.category}
              </p>

              {/* Registration Button */}
              <button
                onClick={() => handleRegistration(event.id)}
                className="w-full bg-pink-500 text-white font-semibold py-3 rounded-lg hover:bg-pink-600 transition-all"
              >
                Register
              </button>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Pagination Controls */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-between mt-16"
      >
        <button
          onClick={handlePrevPage}
          disabled={offset === 0}
          className="bg-pink-500 text-white px-6 py-3 rounded-lg disabled:opacity-50 hover:bg-pink-600 transition-all"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={offset + limit >= totalCount}
          className="bg-pink-500 text-white px-6 py-3 rounded-lg disabled:opacity-50 hover:bg-pink-600 transition-all"
        >
          Next
        </button>
      </motion.div>
    </div>
  );
};

export default EventList;
