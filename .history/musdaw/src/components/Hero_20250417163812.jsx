import React from 'react';
import { motion } from 'framer-motion';
import ChurchLogo from '../assets/church-logo.png'; // Import your church logo
import ChurchBackgroundImage from '../assets/church-background.jpg'; // Import a relevant image

const HeroSection = () => {
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    };

    const slideUp = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
    };

    return (
        <div className="relative h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url(${ChurchBackgroundImage})` }}>
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center"></div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="text-center space-y-6"
                >
                    {/* Church Logo */}
                    <motion.img
                        variants={slideUp}
                        src={ChurchLogo}
                        alt="[Church Name] Logo"
                        className="mx-auto h-24 w-auto drop-shadow-lg"
                    />

                    {/* Main Heading */}
                    <motion.h1
                        variants={slideUp}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight drop-shadow-2xl"
                    >
                        Welcome to <span className="text-yellow-400">[Church Name]</span>
                    </motion.h1>

                    {/* Tagline or Mission */}
                    <motion.p
                        variants={slideUp}
                        className="text-lg sm:text-xl text-white/80 drop-shadow-md"
                    >
                        A community growing in faith and serving with love.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        variants={slideUp}
                        className="flex flex-col sm:flex-row justify-center gap-6"
                    >
                        <button className="group relative bg-gradient-to-r from-green-500 to-teal-400 hover:from-teal-400 hover:to-green-500 text-white font-semibold py-4 px-8 rounded-full transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            <span className="flex items-center gap-2">
                                Our Services
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </button>

                        <button className="group relative bg-transparent border-2 border-white/50 hover:border-white text-white font-semibold py-4 px-8 rounded-full transition-all duration-500 transform hover:scale-105 hover:bg-white/10">
                            <span className="flex items-center gap-2">
                                Plan Your Visit
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </span>
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;