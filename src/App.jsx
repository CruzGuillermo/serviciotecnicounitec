import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AccesoriosDestacados from "./components/AccesoriosDestacados";
import ServiceCards from "./components/ServiceCards";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="min-h-screen bg-[#0C2A47] text-white">
      <Navbar />
      <Hero />
      <Servicios />
      {/* <ServiceCards/> */}
      <AccesoriosDestacados/>
      <AboutUs/>
      <Contact/>
      <Footer/>
      <WhatsAppButton/>
    </div>
  );
}

export default App;
