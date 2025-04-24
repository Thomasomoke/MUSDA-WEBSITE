
import React from 'react';
import { motion } from 'framer-motion';

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
        <div className="relative h-screen flex items-center justify-center bg-cover bg-center overflow-hidden">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 flex items-center justify-center">
                <video
                    autoPlay
                    muted
                    loop
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-luxury-resort-2389.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="text-center space-y-8"
                >
                    {/* Main Heading */}
                    <motion.h1
                        variants={slideUp}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight drop-shadow-2xl"
                    >
                        Discover Your Next Adventure<br />
                        <span className="text-blue-400">With Musda</span>
                    </motion.h1>

                  

                    {/* Action Buttons */}
                    <motion.div
                        variants={slideUp}
                        className="flex flex-col sm:flex-row justify-center gap-6"
                    >
                        <button className="group relative bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-4 px-8 rounded-full transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            <span className="flex items-center gap-2">
                                Explore Services
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

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-8 h-14 rounded-3xl border-2 border-white/50 flex justify-center p-1">
                        <div className="w-2 h-2 bg-white/80 rounded-full animate-scroll"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;