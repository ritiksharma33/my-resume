import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
//import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/Navbar";
import RecentProjects from "./components/RecentProjects";
import Skills from "./sections/Skills";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
   
    <FeatureCards />
    <Experience />
    <Skills/>
   
     

    <RecentProjects/>

    
    {/* <Testimonials /> */}
    <Contact />
    <Footer /> 
  </>
);

export default App;