import React from 'react';

const About = () => {
  return (
    <div id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <img
              className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="Students celebrating graduation"
            />
          </div>
          <div className="mt-10 lg:mt-0">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              ABOUT US
            </h2>
            <h3 className="mt-2 text-2xl font-bold text-[#1e3a8a]">
              Welcome to Markaz Consultancy
            </h3>
            <div className="mt-6 text-gray-600 space-y-6">
              <p>
                If you're an international student, finding a scholarship to help with your tuition can really be the difference in making studying abroad possible. But where do you start? There are thousands of scholarship opportunities out there, some of which are open to students from just about every country in the world.
              </p>
              <p>
                The goal of the Markaz Consultancy is to facilitate the process of finding a scholarship for students who want to study in India by providing the most extensive list of grants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;