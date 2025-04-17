import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-gray-300 py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Church Information */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">SDA Moi University Church</h3>
                        <p className="text-sm mb-2">
                            <FaMapMarkerAlt className="inline mr-2" />
                            [Your Church Address Here], Moi University, Kenya
                        </p>
                        <p className="text-sm mb-2">
                            <FaPhone className="inline mr-2" />
                            [Your Phone Number Here]
                        </p>
                        <p className="text-sm mb-2">
                            <FaEnvelope className="inline mr-2" />
                            [Your Email Address Here]
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="text-sm">
                            <li>
                                <Link to="/" className="hover:text-gray-400">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-gray-400">About Us</Link>
                            </li>
                            <li>
                                <Link to="/ministries" className="hover:text-gray-400">Ministries</Link>
                            </li>
                            <li>
                                <Link to="/services" className="hover:text-gray-400">Services</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-gray-400">Contact Us</Link>
                            </li>
                            {/* Add more links as needed */}
                        </ul>
                    </div>

                    {/* Connect With Us */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
                        <p className="text-sm mb-2">Stay connected with our community!</p>
                        <div className="flex space-x-4">
                            <a href="[Your Facebook Link]" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                                <FaFacebook className="text-xl" />
                            </a>
                            <a href="[Your Twitter Link]" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                                <FaTwitter className="text-xl" />
                            </a>
                            <a href="[Your YouTube Link]" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                                <FaYoutube className="text-xl" />
                            </a>
                            <a href="[Your Instagram Link]" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                                <FaInstagram className="text-xl" />
                            </a>
                            {/* Add more social media links */}
                        </div>
                    </div>

                    {/* Newsletter (Optional) */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Subscribe to Our Newsletter</h3>
                        <p className="text-sm mb-2">Receive updates, news, and event information.</p>
                        <form className="mt-2">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="bg-gray-700 text-gray-300 border border-gray-600 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mt-2 w-full"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright Section */}
                {/* <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm">
                    <p>&copy; {currentYear} SDA Moi University Church. All rights reserved.</p>
                    <p className="mt-1">
                        Designed & Developed by [Your Name/Organization] (Optional)
                    </p>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;