import Navbar from "../components/navbar/nav";
import EventRegistrationsList from "../components/eventsRegistered/eventsregisteredlist";

const registeredlist = () => {
  return (
    <div className="bg-gradient-to-br from-[#211a10] to-[#161415] py-5 overflow-hidden">
      <Navbar className="" />
      <EventRegistrationsList />
    </div>
  );
};

export default registeredlist;
