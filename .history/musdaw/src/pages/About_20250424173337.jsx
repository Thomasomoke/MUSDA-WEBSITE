import React from 'react';
import { FaUsers, FaHandsHelping, FaCross } from 'react-icons/fa'; // Example icons

const About = () => {
  return (
    <div className="bg-white py-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-100 rounded-lg shadow-md mb-12">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover blur-sm transform scale-105"
            src={}
            alt="SDA Moi University Church"
          />
          <div className="absolute inset-0 bg-slate-800 opacity-20"></div>
        </div>
        <div className="relative px-6 py-12 md:py-24 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Welcome to SDA Moi University Church
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8">
            A vibrant community on campus, centered in Christ, growing in faith, and dedicated to serving others with love.
          </p>
          {/* Optional Call to Action */}
          {/* <button className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-full">
                        Visit Us
                    </button> */}
        </div>
      </div>

      {/* Core Values/Sections */}
      <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-slate-700">
        <div className="bg-slate-50 rounded-lg shadow-sm p-6 hover:shadow-md transition duration-300">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-500 mb-4">
            <FaUsers className="h-6 w-6" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Our Community</h2>
          <p className="text-slate-600">
            We are a diverse family of believers who find strength and encouragement in fellowship and shared faith in the teachings of the Bible.
          </p>
        </div>
        <div className="bg-slate-50 rounded-lg shadow-sm p-6 hover:shadow-md transition duration-300">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent-100 text-accent-500 mb-4">
            <FaHandsHelping className="h-6 w-6" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-slate-600">
            Guided by the love of Christ, we actively engage in service, outreach, and sharing the hope of the Gospel within the university and beyond.
          </p>
        </div>
        <div className="bg-slate-50 rounded-lg shadow-sm p-6 hover:shadow-md transition duration-300">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-warn-100 text-warn-500 mb-4">
            <FaCross className="h-6 w-6" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Our Foundation</h2>
          <p className="text-slate-600">
            We are rooted in the Seventh-day Adventist faith, upholding biblical truths and anticipating the soon return of Jesus Christ.
          </p>
        </div>
      </div>

      {/* Location and Core Beliefs */}
      <div className="max-w-4xl mx-auto mt-12 px-6 text-center text-slate-600">
        <h2 className="text-2xl font-semibold mb-4">Find Us and Our Beliefs</h2>
        <p className="mb-2">📍 Located within Moi University Main Campus, Eldoret</p>
        <p className="mb-2">🕊️ Firmly rooted in the Seventh-day Adventist faith and its teachings.</p>
        <p className="mb-2">🤝 We warmly welcome all individuals seeking spiritual growth and connection with Christ.</p>
      </div>
    </div>
  );
};

export default About;