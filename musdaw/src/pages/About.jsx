import React from 'react';
import { FaUsers, FaHandsHelping, FaCross, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: { y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.4, duration: 1 } }
};

const About = () => {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/path-to-church-image.jpg" // Add actual image path
            alt="SDA Moi University Church"
            className="w-full h-full object-cover object-center grayscale-[30%] brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-900/30" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative px-6 text-center max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Welcome to <span className="text-primary-400">SDA Moi University</span> Church
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            A vibrant community on campus, centered in Christ, growing in faith, and dedicated to serving others with love.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-8 rounded-full flex items-center gap-2 mx-auto transition-colors"
          >
            Join Our Service
            <FaArrowRight className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="h-16 w-16 rounded-xl bg-primary-500/10 text-primary-600 flex items-center justify-center mb-6">
              <FaUsers className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Community</h3>
            <p className="text-slate-600 leading-relaxed">
              We are a diverse family of believers who find strength and encouragement in fellowship and shared faith in the teachings of the Bible.
            </p>
            <div className="mt-6">
              <button className="text-primary-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Meet Members
                <FaArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

          {/* Repeat similar structure for other cards with different colors */}
          <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="h-16 w-16 rounded-xl bg-accent-500/10 text-accent-600 flex items-center justify-center mb-6">
              <FaHandsHelping className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              Guided by Christ's love, we engage in service, outreach, and sharing the Gospel's hope within the university and beyond.
            </p>
            <div className="mt-6">
              <button className="text-accent-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Our Projects
                <FaArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-warn-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="h-16 w-16 rounded-xl bg-warn-500/10 text-warn-600 flex items-center justify-center mb-6">
              <FaCross className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Foundation</h3>
            <p className="text-slate-600 leading-relaxed">
              Rooted in Seventh-day Adventist faith, we uphold biblical truths and anticipate Jesus Christ's soon return.
            </p>
            <div className="mt-6">
              <button className="text-warn-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Our Beliefs
                <FaArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;