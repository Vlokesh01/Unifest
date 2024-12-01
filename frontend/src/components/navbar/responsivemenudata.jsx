import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const ResponsiveMenu = ({ isOpen, isAuthenticated, closeMenu }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/login");
  };

  return (
    <div
      className={` z-10 fixed inset-0 bg-gray-800 bg-opacity-50 transition-all duration-300 text-white ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="w-64 p-4 absolute top-0 right-0 h-full bg-[#211a10] text-white">
        {/* Close Button */}
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 text-2xl text-white"
        >
          &times; {/* You can use this "×" symbol for the close button */}
        </button>

        <h2 className="text-2xl font-semibold mb-4">Menu</h2>
        <ul className="space-y-4">
          <li>
            <a href="/" className="text-lg hover:text-[#896206]">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-lg hover:text-[#896206]">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact" className="text-lg hover:text-[#896206]">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/events" className="text-lg hover:text-[#896206]">
              Events
            </a>
          </li>
          <li>
            <a href="/albums" className="text-lg hover:text-[#896206]">
              Albums
            </a>
          </li>

          {/* Conditionally render menu items based on authentication */}
          {isAuthenticated ? (
            <div>
              <li className="flex flex-col space-y-3">
                <a href="/tickets" className="text-lg hover:text-[#896206]">
                  Registered tickets
                </a>
                <a
                  onClick={handleLogout}
                  className="text-lg hover:text-[#896206]"
                >
                  Logout
                </a>
              </li>
            </div>
          ) : (
            <>
              <li>
                <a href="/login" className="text-lg hover:text-[#896206]">
                  Login
                </a>
              </li>
              <li>
                <a href="/signup" className="text-lg hover:text-[#896206]">
                  Sign Up
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
ResponsiveMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};
export default ResponsiveMenu;
