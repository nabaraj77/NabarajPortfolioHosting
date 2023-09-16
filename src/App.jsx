import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import AboutMe from "./Components/About Me/AboutMe";
import Project from "./Components/Projects/Project";
import ContactMe from "./Components/Contact Me/ContactMe";
import ContactDetails from "./Components/Contact Details/ContactDetails";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Project />
      <ContactDetails />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
