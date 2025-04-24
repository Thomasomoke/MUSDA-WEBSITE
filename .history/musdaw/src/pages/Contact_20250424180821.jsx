import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaYoutube, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative h-96 flex items-center justify-center text-white">
                <img
                    src=""
                    alt="Church Building"
                    className="w-full h-full object-cover absolute inset-0 brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative text-center px-6"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
                    <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto">
                        We'd love to hear from you! Reach out through any of these channels
                    </p>
                </motion.div>
            </section>

            {/* Contact Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-2xl shadow-xl p-8"
                    >
                        <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-slate-700 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-slate-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-slate-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    placeholder="How can we help?"
                                />
                            </div>
                            <div>
                                <label className="block text-slate-700 mb-2">Message</label>
                                <textarea
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    placeholder="Write your message here..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        {/* Contact Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-2xl shadow-xl p-8"
                        >
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary-100 rounded-lg text-primary-600">
                                        <FaMapMarkerAlt className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Our Location</h4>
                                        <p className="text-slate-600">
                                            Moi University Main Campus<br />
                                            Eldoret, Kenya<br />
                                            P.O Box 3900-30100
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary-100 rounded-lg text-primary-600">
                                        <FaPhone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Phone Numbers</h4>
                                        <p className="text-slate-600">
                                            Office: +254 712 345 678<br />
                                            Support: +254 723 456 789
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary-100 rounded-lg text-primary-600">
                                        <FaEnvelope className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Email Addresses</h4>
                                        <p className="text-slate-600">
                                            General: info@sdamu.ac.ke<br />
                                            Support: help@sdamu.ac.ke
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Social Media */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-2xl shadow-xl p-8"
                        >
                            <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <a href="#" className="p-4 bg-slate-100 hover:bg-primary-100 rounded-lg flex items-center gap-3 transition-colors">
                                    <FaFacebook className="w-6 h-6 text-primary-600" />
                                    <span className="font-medium">Facebook</span>
                                </a>
                                <a href="#" className="p-4 bg-slate-100 hover:bg-primary-100 rounded-lg flex items-center gap-3 transition-colors">
                                    <FaYoutube className="w-6 h-6 text-primary-600" />
                                    <span className="font-medium">YouTube</span>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Map Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 rounded-2xl shadow-xl overflow-hidden"
                >
                    <iframe
                        title="Church Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.746343543437!2d35.26926281475397!3d0.5145999997090401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178101b43c3877d9%3A0x3a1d7112cdb614f8!2sMoi%20University%20Main%20Campus!5e0!3m2!1sen!2ske!4v1637065942437!5m2!1sen!2ske"
                        width="100%"
                        height="450"
                        className="border-0"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </motion.div>

                {/* Office Hours */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-16 bg-primary-600 text-white rounded-2xl shadow-xl p-8"
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-3">
                            <FaClock className="w-6 h-6" />
                            Office Hours
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <h4 className="font-semibold mb-2">Weekdays</h4>
                                <p>8:00 AM - 5:00 PM</p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Sabbath (Saturday)</h4>
                                <p>7:00 AM - 1:00 PM</p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Sunday</h4>
                                <p>Closed</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;