import React from "react";
import { motion } from "framer-motion";
import { FaChurch } from "react-icons/fa";
import { Link } from "react-router-dom";
import heroBg from "../assets/hero-bg.jpg"; // your background image

const Hero = () => {
    return (
        <motion.section
            className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${heroBg})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="bg-black/60 absolute inset-0" />
            <div className="relative z-10 text-center px-4">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-4"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Welcome to Our Church
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl max-w-xl mx-auto text-gray-200"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    A community grounded in faith, love, and service. Join us every Sunday for worship and fellowship.
                </motion.p>

                <motion.div
                    className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <Link
                        to="/about"
                        className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-full text-white font-semibold transition duration-300"
                    >
                        Learn More
                    </Link>
                    <Link
                        to="/services"
                        className="bg-white hover:bg-gray-200 text-blue-700 px-6 py-3 rounded-full font-semibold transition duration-300 flex items-center"
                    >
                        <FaChurch className="mr-2" />
                        View Services
                    </Link>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Hero;
