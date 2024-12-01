import Abouthero from "../components/aboutus/abouthero";
import AboutSection from "../components/aboutus/aboutsection";
import AboutUsFooter from "../components/aboutus/aboutusfooter";

const aboutus = () => {
  return (
    <div className=" overflow-hidden">
      <Abouthero />
      <AboutSection />
      <AboutUsFooter />
    </div>
  );
};

export default aboutus;
