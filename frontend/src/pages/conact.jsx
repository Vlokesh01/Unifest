import Contactus from "../components/contactus/contact";
import Footer from "../components/footer/footer";
import Contacthero from "../components/contactus/contacthero";
const ContactPage = () => {
  return (
    <div className=" overflow-hidden">
      <Contacthero />
      <Contactus />
      <Footer />
    </div>
  );
};

export default ContactPage;
