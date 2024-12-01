import HeroSections from "../components/hero/hero";
import WhySection from "../components/whyChooseus/why";
import Eventlist from "../components/Eventslist/eventlist";
import Footer from "../components/footer/footer";

const home = () => {
  return (
    <div className="main overflow-hidden">
      <HeroSections />
      <WhySection />
      <Eventlist />
      <Footer />
    </div>
  );
};

export default home;
