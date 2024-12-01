import HeroBg from "../../assets/bannerbackground.jpg";
const Background = () => {
  return (
    <div>
      <div className="relative">
        {/* Hero Section with background image */}
        <div className="relative w-full h-screen">
          {/* Background image */}
          <img
            src={HeroBg}
            alt="Responsive Landscape to Portrait"
            className="object-cover w-full h-full"
          />

          {/* Overlay for darkening the image */}
          <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm w-full h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Background;
