import React from 'react';
import { FaChurch, FaPrayingHands, FaHandsHelping, FaBell, FaMusic, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      title: "Sunday Worship",
      time: "8:00 AM & 11:00 AM",
      desc: "Join our uplifting services filled with worship, prayer, and biblical teaching.",
      icon: <FaChurch className="w-8 h-8" />,
      color: "bg-primary-100"
    },
    {
      title: "Bible Study",
      time: "Wednesdays 7:00 PM",
      desc: "Deep dive into Scripture with our interactive study sessions.",
      icon: <FaPrayingHands className="w-8 h-8" />,
      color: "bg-accent-100"
    },
    {
      title: "Youth Service",
      time: "Fridays 6:30 PM",
      desc: "Dynamic worship and relevant teaching for young adults.",
      icon: <FaHandsHelping className="w-8 h-8" />,
      color: "bg-warn-100"
    },
    {
      title: "Choir Practice",
      time: "Thursdays 5:00 PM",
      desc: "Join our worship team in preparing for Sunday services.",
      icon: <FaMusic className="w-8 h-8" />,
      color: "bg-primary-100"
    }
  ];

  return (
    <div>
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-white">
        <img
          src=""
          alt="Worship Service"
          className="w-full h-full object-cover absolute inset-0 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Worship With Us</h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto">
            Experience meaningful worship, biblical teaching, and authentic community
          </p>
        </motion.div>
      </section>

      {/* Service Schedule */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${service.color} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className="mb-6 text-primary-600">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <div className="flex items-center gap-2 mb-4 text-slate-600">
                <FaBell className="w-5 h-5" />
                <span>{service.time}</span>
              </div>
              <p className="text-slate-600 mb-6">{service.desc}</p>
              <button className="text-primary-600 font-semibold hover:underline flex items-center gap-2">
                Learn More <span className="text-xl">→</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Weekly Schedule */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FaCalendarAlt className="text-primary-600" />
            Weekly Schedule
          </h2>

          <div className="grid gap-6">
            <div className="grid grid-cols-3 md:grid-cols-7 items-center bg-slate-100 p-4 rounded-xl">
              <div className="col-span-2 md:col-span-1 font-bold">Time</div>
              <div className="col-span-1 md:col-span-2 font-bold">Sunday</div>
              <div className="col-span-1 md:col-span-2 font-bold">Wednesday</div>
              <div className="col-span-1 md:col-span-2 font-bold">Friday</div>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-7 items-center p-4 rounded-xl hover:bg-slate-50">
              <div className="col-span-2 md:col-span-1 font-semibold">Morning</div>
              <div className="col-span-1 md:col-span-2">Worship Service (8AM & 11AM)</div>
              <div className="col-span-1 md:col-span-2">Prayer Meeting (6:30AM)</div>
              <div className="col-span-1 md:col-span-2">Bible Study (10AM)</div>
            </div>

            {/* Add more schedule rows as needed */}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="mt-16 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-3xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">First Time Visiting?</h3>
          <p className="mb-8 max-w-2xl mx-auto">
            We'd love to welcome you personally! Let us know you're coming and we'll help you plan your visit.
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition-colors">
            Plan Your Visit
          </button>
        </motion.div>
      </section>

      {/* Featured Sermon */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Featured Sermon Series</h2>
            <h3 className="text-2xl text-primary-600 font-semibold">"Living in Grace"</h3>
            <p className="text-slate-600">
              Join us for this transformative series exploring the depth of God's grace and its practical application
              in our daily lives.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700">
                Watch Latest Sermon
              </button>
              <button className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full hover:bg-primary-50">
                Series Overview
              </button>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-video bg-slate-200"></div>
            <div className="p-6">
              <p className="text-slate-500">Latest Message: "Grace in Action" - Pastor John Doe</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default Services;