import React,{useState} from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    const fadeUp = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
    };
    const {isPopup,setIsPopup} = useState(false)
    return (
        <div className="relative h-screen flex items-center justify-center bg-gray-900">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518020382175-9c918986c188')` }}
            ></div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="relative z-10 text-center space-y-8 px-4"
            >
                <h1 className="text-xl md:text-2xl font-bold text-white mb-4">
                    Welcome to <span className="text-blue-300">MUSDA CHURCH</span>
                </h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                    A community rooted in faith, love, and service
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors">
                        Service Times
                    </button>
                    <button  onClick=(()=>setIsPopup(true))
                    className="bg-transparent border-2 border-white/20 hover:border-white/40 text-white px-8 py-3 rounded-lg transition-colors">
                        Visit Us
                    </button>
                </div>
            </motion.div>
            <Visit isPopup={IsPopup} setIsPopup={setIsPopup}/>
        </div>
    );
};

export default HeroSection;