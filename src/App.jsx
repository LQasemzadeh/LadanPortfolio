// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";



const App = () => {

    useEffect(() => {
        Aos.init({
            duration: 1800,
            offset: 100,
            disable: "mobile",
        });
    }, []);

  return (
    <div className="">
        <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
        <footer className="py-3 text-center">
            <h6 className="mb-3">Ladan Qasemzadeh</h6>
            <p>© All CopyRights Reserved 2024</p>
        </footer>
    </div>
  );
};

export default App;
