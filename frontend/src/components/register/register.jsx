import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import whyusbg from "../../assets/whyusbgpic.jpg";
import { motion } from "framer-motion";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    role: "user",
  });
  const navigate = useNavigate();
  const CurrentYear = new Date().getFullYear();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        username: formData.name, // Send 'name' as 'username' to the backend
        password: formData.password,
        role: formData.role, // Include the role in the payload
      };

      const response = await axios.post(
        "http://127.0.0.1:8000/auth/register/",
        payload
      );
      console.log("Response:", response); // Log the response for debugging if needed

      // On success, navigate to login page and reset form
      setFormData({ name: "", password: "", role: "user" });
      toast.success("Registered successfully !", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      navigate("/login");
    } catch (err) {
      console.error("Error details:", err); // Log error for debugging
      const errorMessage =
        err.response?.data?.message ||
        err.response?.data?.detail ||
        "An error occurred during registration.";
      console.log(errorMessage);
      toast.error("User Already Existss", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="relative w-full h-[100vh] lg:h-[100vh]">
      {/* Background Image */}
      <img
        src={whyusbg}
        alt="Responsive Landscape to Portrait"
        className="object-cover w-full h-full md:object-center overflow-hidden"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm w-full h-full"></div>

      {/* Sign Up Form Section */}
      <div className="flex justify-center items-center h-full">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl w-full max-w-md mx-auto mt-10 lg:mt-5 absolute top-[100px] lg:top-[200px]"
        >
          <h2 className="text-4xl font-extrabold text-white mb-6 text-center">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 focus:bg-opacity-30 focus:ring-2 focus:ring-purple-300 text-white placeholder-gray-200 transition duration-200"
                placeholder="Full Name"
              />
            </div>
            {/* Password Input */}
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 focus:bg-opacity-30 focus:ring-2 focus:ring-purple-300 text-white placeholder-gray-200 transition duration-200"
                placeholder="Password"
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 focus:ring-4 focus:ring-purple-300 transition duration-300 transform hover:scale-105"
            >
              Sign Up
            </button>
          </form>
          <p className="text-white text-center mt-6">
            Already have an account?{" "}
            <a href="/login" className="font-bold hover:underline">
              Log in
            </a>
          </p>
        </motion.div>
        <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-white text-center mt-6 absolute bottom-[210px] lg:bottom-[20px]"
          >
            © {CurrentYear} Unifest™. All Rights Reserved.
          </motion.p>
      </div>
    </div>
  );
};

export default SignUp;
