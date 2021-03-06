import './App.css';
import SiteData from './SiteContent';
import NavBar from './Components/NavBar';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import ValueSection from './Components/ValueSection';
import ServiceSection from './Components/ServiceSection';
import Contact from './Components/Contact';

const NavbarData = SiteData.SiteContent[0].NavLinks;
const HeroData = SiteData.SiteContent[0].HeroSection;
const AboutData = SiteData.SiteContent[0].AboutSection;
const ValueData = SiteData.SiteContent[0].ValueSection;
const ServiceData = SiteData.SiteContent[0].ServiceSection;
const ContactData = SiteData.SiteContent[0].Contact;

const App = () => {
  return (
    <>
      <header id="header" class="header fixed-top">
        <NavBar navbar={NavbarData}/>
      </header>
      <HeroSection hero={HeroData}/>
      <main id="main">
         <AboutSection about={AboutData}/>
         <ValueSection value={ValueData}/>
         <ServiceSection service={ServiceData}/>
         <Contact detail={ContactData}/>
      </main>
    </>
  );
}

export default App;
