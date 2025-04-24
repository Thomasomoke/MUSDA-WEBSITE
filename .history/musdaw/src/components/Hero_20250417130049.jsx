import React from "react";
import { FaChurch } from "react-icons/fa";
import { Link } from "react-router-dom";
import heroBg from "../assets/hero-bg.jpg"; // make sure this path is correct

const Hero = () => {
    return (
        <section
            className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Welcome to Our Church
                </h1>
                <p className="text-lg md:text-xl max-w-xl mx-auto text-gray-200">
                    A community grounded in faith, love, and service. Join us every Sunday
                    for worship and fellowship.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
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
                </div>
            </div>
        </section>
    );
};

export default Hero;
