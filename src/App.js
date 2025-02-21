import React from "react";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import Courses from "./components/Courses";
import ExploreCourses from "./components/ExploreCourses";
import Results from "./components/Results";
import Demo from "./components/Demo";
import StudyMaterial from "./components/StudyMaterial";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroCarousel />
      <ExploreCourses />
      <Courses />
      <Results />
      <Demo />
      <StudyMaterial />
      <Footer />
    </div>
  );
}

export default App;
