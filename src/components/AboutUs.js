import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-700">Empowering Education at Sunrise Institute</h1>
      </div>

      {/* Mission Section */}
      <div className="mt-8 bg-white-100 p-6 rounded-lg shadow">
        <p className="text-blue-500">
          At Sunrise Institute, we believe in transforming education to meet the evolving needs of students. Traditional teaching methods have their limitations, and we aim to bridge the gap through innovation and quality instruction.
        </p>
        <p className="mt-4 text-blue-500">
          Our mission is to combine expert educators, engaging content, and state-of-the-art technology to create an unparalleled learning experience for students, ensuring their academic success and personal growth.
        </p>
      </div>

      {/* Sunrise Institute Meaning */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold text-red-700">What does Sunrise Institute stand for?</h2>
        <p className="mt-2 text-blue-500">
          At Sunrise Institute, we illuminate the path of knowledge for our students. Like the rising sun, we bring light to learning, helping students achieve their academic and career aspirations with confidence.
        </p>
      </div>

      {/* Who Are We Section */}
      <div className="mt-12 bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-red-700 text-center">Who are we?</h2>
        <p className="mt-4 text-blue-500 text-center">
          Sunrise Institute has been creating history for the past 17 years, consistently producing Nabha's brightest minds. Our commitment to excellence has shaped the future of countless students, helping them achieve academic and professional success.
        </p>
        <p className="mt-4 text-blue-500 text-center">
          We offer structured programs, expert mentorship, and a dynamic learning environment to empower students with the skills and knowledge they need to succeed in competitive exams and beyond.
        </p>
      </div>

      {/* Video Section */}
      <div className="mt-10 flex justify-center">
        <iframe 
          width="476" 
          height="476" 
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1136265074172270%2F&" 
          title="Sunrise Institute Video"
          className="rounded-lg shadow-lg"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default AboutUs;
