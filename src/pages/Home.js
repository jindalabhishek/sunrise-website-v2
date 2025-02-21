import React from 'react';
import HeroCarousel from "../components/HeroCarousel";
import Courses from "../components/Courses";
import ExploreCourses from "../components/ExploreCourses";
import Results from "../components/Results";
import Demo from "../components/Demo";
import StudyMaterial from "../components/StudyMaterial";

const Home = () => {
    return (
    <div>
      <HeroCarousel />
      <div id="faculty">
      	<ExploreCourses />
      </div>
      <div id="courses"> {/* This is the target section */}
      	<Courses />
      </div>
      <div id="result">
      	<Results />
      </div>
      <div id="demo">
      	<Demo />
      </div>
      <div id="study">
      	<StudyMaterial />
      </div>
    </div>
    );
};

export default Home;