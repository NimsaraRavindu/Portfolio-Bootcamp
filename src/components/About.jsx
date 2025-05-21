import React from "react";
function About() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/*Hero Section*/}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
            Hi,I am Nimsara
          </h1>
          <p className="text-x1 text-gray-600 max-w-3xl mx-auto">
            Hey I am an undegraduate pursing a computer science degree
          </p>
        </div>
        {/*profile image*/}
        <div className="relative flex items-center justify-center mb-16">
          <div className="absolute insert-0 bg-gradient-to-r from-indigo-600 via purple-600 to-teal-500 rounded-full blur-lg opacity-20">
            <img
              src=""
              alt="Profile image"
              className="rounded-full transform hover:scale-110 transition duration-300 shadow-lg relative z-10 border-4 border-white w-48 object-cover"
            />
          </div>
          {/*professional background*/}
          <div className="bg-white shadow-md mb-16 p-6 rounded-md">
            <h1 className="text-3xl font-semibold mb-10 ">
              Professional Journey
            </h1>
            <div className="space-y-6 text-left max-w-4xl mx-auto">
              <p className="text-lg text-gray-600">
                My professional journey began during my Ordinary Level (O/L)
                studies, where I first developed a strong interest in technology
                and learned the basics of programming and algorithms. This early
                foundation sparked a passion that led me to explore web
                development during my Advanced Level (A/L) years, where I
                started creating simple websites using HTML, CSS, and
                JavaScript. Currently, I am an undergraduate student pursuing a
                degree in Computer Science, where I continue to build on my
                skills through coursework, hands-on projects, and a deeper
                understanding of software development and computational theory.
              </p>
              <p className="text-lg text-gray-600">
                My professional journey began during my Ordinary Level (O/L)
                studies, where I first developed a strong interest in technology
                and learned the basics of programming and algorithms. This early
                foundation sparked a passion that led me to explore web
                development during my Advanced Level (A/L) years, where I
                started creating simple websites using HTML, CSS, and
                JavaScript. Currently, I am an undergraduate student pursuing a
                degree in Computer Science, where I continue to build on my
                skills through coursework, hands-on projects, and a deeper
                understanding of software development and computational theory.
              </p>
            </div>
          </div>
        </div>
        {/*skills section*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bh-white rounded-x1 shadow-md hover:shadow-x1 transition-shadow duration-200">
            <h1 className="text-3xl font-semibold mb-10 text-indigo-600 ">
              Professional Journey
            </h1>
            <p className="text-lg text-gray-600">
              My professional journey began during my Ordinary Level (O/L)
              studies, where I first developed a strong interest in technology
              and learned the basics of programming and algorithms.
            </p>
          </div>
          <div className="p-6 bh-white rounded-x1 shadow-md hover:shadow-x1 transition-shadow duration-200">
            <h1 className="text-3xl font-semibold mb-10 text-teal-600">
              Professional Journey
            </h1>
            <p className="text-lg text-gray-600">
              My professional journey began during my Ordinary Level (O/L)
              studies, where I first developed a strong interest in technology
              and learned the basics of programming and algorithms.
            </p>
          </div>
          <div className="p-6 bh-white rounded-x1 shadow-md hover:shadow-x1 transition-shadow duration-200">
            <h1 className="text-3xl font-semibold mb-10 text-purple-600 ">
              Professional Journey
            </h1>
            <p className="text-lg text-gray-600">
              My professional journey began during my Ordinary Level (O/L)
              studies, where I first developed a strong interest in technology
              and learned the basics of programming and algorithms.
            </p>
          </div>
        </div>
        {/* Personal Interests */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Beyond Coding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="space-y-3">
              <h3 className="text-2xl text-indigo-600 font-semibold">
                Open Source Contributor
              </h3>
              <p className="text-lg text-gray-600">
                Active contributor to various open-source projects, focusing on
                developer tools and web frameworks
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-purple-600 font-semibold">
                Tech Community
              </h3>
              <p className="text-lg text-gray-600">
                Regular speaker at tech meetups and conferences, sharing
                knowledge about web development
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-teal-600 font-semibold">
                Mentorship
              </h3>
              <p className="text-lg text-gray-600">
                Dedicated to mentoring junior developers and helping them grow
                in their careers
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-indigo-600 font-semibold">
                Continuous Learning
              </h3>
              <p className="text-lg text-gray-600">
                Always exploring new technologies and methodologies to stay at
                the forefront of web development
              </p>
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 p-12 rounded-xl text-white text-center">
          <h2 className="text-4xl font-semibold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
export default About;
