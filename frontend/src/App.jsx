import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about";
import ContactUs from "./pages/conact";
import Albums from "./pages/albums";
import EventList from "./pages/events";
import Login from "./pages/login";
import Register from "./pages/register";
import PrivateRoutes from "./utils/protected";
import EventRegistrationsList from "./pages/registeredlist";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />

        {/* Private route wrapper */}
        <Route element={<PrivateRoutes />}>
          <Route path="/tickets" element={<EventRegistrationsList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
