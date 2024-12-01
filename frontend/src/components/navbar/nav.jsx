import { useState, useEffect } from "react";
import { NavbarMenu } from "./navdata.js";
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import ResponsiveMenu from "./responsivemenudata.jsx";
import { FaSignOutAlt } from "react-icons/fa";
import { IoTicketSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for token in localStorage (or sessionStorage or cookies)
    const token = localStorage.getItem("accessToken"); // Replace with your actual token storage mechanism
    setIsAuthenticated(!!token); // If token exists, user is authenticated
  }, []);

  const closeMenu = () => {
    setIsOpen(false); // Close the menu
  };
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/login");
  };

  const handleTicketsPage = () => {
    navigate("/tickets");
  };
  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="w-[100vw] flex justify-between items-center py-0 overflow-hidden overflow-x-hidden overflow-y-hidden">
          {/* Logo section */}
          <div className="text-3xl flex items-center gap-2 font-bold mx-5">
            <p className="text-[#ffb700]">
              UNI<span className="gap-2 text-white">FEST</span>
            </p>
          </div>

          {/* Menu section */}
          <div className="hidden lg:block ">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block text-white hover:text-[#896206] text-sm xl:text-base py-1 px-2 xl:px-3 transition-all duration-300 font-semibold"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Authentication Section */}
          <div className="hidden lg:block mx-10 space-x-2">
            {!isAuthenticated ? (
              <>
                <a
                  href="/login"
                  className="text-white hover:text-[#896206] text-sm xl:text-base py-1 px-2 xl:px-3 transition-all duration-300 font-semibold"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="text-white hover:text-[#896206] text-sm xl:text-base py-1 px-2 xl:px-3 transition-all duration-300 font-semibold"
                >
                  SignUp
                </a>
              </>
            ) : (
              <div className=" flex space-x-10">
                {/* Registered Tickets */}
                <motion.h1
                  className="text-4xl font-bold font-SourGummy cursor-pointer text-white"
                  onClick={handleTicketsPage}
                >
                  <a
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Registered Tickets"
                  >
                    <IoTicketSharp className="text-1xl" />
                  </a>
                  <Tooltip
                    id="my-tooltip"
                    place="bottom"
                    variant="info"
                    style={{
                      backgroundColor: "#999",
                      padding: "5px",
                      fontSize: "12px",
                    }}
                  />
                </motion.h1>

                {/*  */}
                <motion.h1
                  className="text-4xl font-bold font-SourGummy cursor-pointer"
                  onClick={handleLogout}
                >
                  <a data-tooltip-id="my-tooltip" data-tooltip-content="Logout">
                    <FaSignOutAlt className="text-1xl text-white" />
                  </a>
                  <Tooltip
                    id="my-tooltip"
                    place="bottom"
                    variant="info"
                    style={{
                      backgroundColor: "#999",
                      padding: "5px",
                      fontSize: "12px",
                    }}
                  />
                </motion.h1>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Menu */}
          <div
            className="lg:hidden mx-5 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </motion.div>

      {/* mobile Sidebar section */}
      <ResponsiveMenu
        isOpen={isOpen}
        isAuthenticated={isAuthenticated}
        closeMenu={closeMenu}
      />
    </>
  );
};

export default Navbar;
