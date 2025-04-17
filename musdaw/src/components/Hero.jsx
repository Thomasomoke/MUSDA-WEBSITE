import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Visit from './Visit'; // Assuming you have a Visit component

const HeroSection = () => {
    const [isPopup, setIsPopup] = useState(false);

    const fadeUp = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
    };

    return (
        <div className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-60" // Slightly increased opacity
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518020382175-9c918986c188')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div> {/* Gradient for better text readability */}

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="relative z-10 text-center space-y-6 px-4" // Reduced vertical spacing slightly
            >
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Welcome to <span className="text-blue-400">MUSDA CHURCH</span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                    A community rooted in faith, love, and service
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center"> {/* Reduced gap */}
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors shadow-md"> {/* Added subtle shadow */}
                        Service Times
                    </button>
                    <button
                        onClick={() => setIsPopup(true)}
                        className="bg-transparent border-2 border-white/30 hover:border-white/50 text-white px-6 py-3 rounded-md transition-colors shadow-md" // Added subtle shadow
                    >
                        Visit Us
                    </button>
                </div>
            </motion.div>

            {/* Conditionally render the Visit component */}
            {isPopup && <Visit isPopup={isPopup} setIsPopup={setIsPopup} />}
        </div>
    );
};

export default HeroSection;