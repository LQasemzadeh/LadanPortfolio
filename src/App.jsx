// import components
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="">
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Testimonials />
      <Hireme />
      <Contact />
        <footer className="py-3 text-center">
            <h6 className="mb-3">Ladan Qasemzadeh</h6>
            <p>© All CopyRights Reserved 2024</p>
        </footer>
    </div>
  );
};

export default App;
