import EventsHero from "../components/EventsApis/eventsapiheader.jsx";
import Eventslist from "../components/EventsApis/eventslist.jsx";
import Footer from "../components/footer/footer.jsx";

const events = () => {
  return (
    <div className=" overflow-hidden bg-gradient-to-br from-[#211a10] to-[#161415]">
      <EventsHero />
      <Eventslist />
      <Footer />
    </div>
  );
};

export default events;
