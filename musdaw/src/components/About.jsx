import React from 'react';
import { motion } from 'framer-motion';
import { FaChurch, FaUsers, FaBible, FaMapMarkerAlt } from 'react-icons/fa'; // Using Font Awesome for icons

const About = () => {
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1, delay: 0.2 } },
    };

    const slideUp = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.4 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeInOut" } },
        hover: { scale: 1.05, transition: { duration: 0.2 } },
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-50 py-16 px-4 md:px-20"
        >
            <div className="max-w-6xl mx-auto">
                <motion.div variants={fadeIn} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Our Story & Our Heart</h2>
                    <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                        Discover the essence of the SDA Moi University community – who we are, what we believe, and what drives us.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Our Mission Card */}
                    <motion.div variants={cardVariants} whileHover="hover" className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                            <FaChurch className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To nurture spiritual growth, foster meaningful fellowship, and inspire impactful service within the Moi University community and beyond, all centered in Christ.
                        </p>
                    </motion.div>

                    {/* Our Community Card */}
                    <motion.div variants={cardVariants} whileHover="hover" className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center mb-4">
                            <FaUsers className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Community</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We are a welcoming and diverse family of students, faculty, staff, and visitors, united by our faith and a shared desire to learn, grow, and support one another.
                        </p>
                    </motion.div>

                    {/* Our Beliefs Card */}
                    <motion.div variants={cardVariants} whileHover="hover" className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center mb-4">
                            <FaBible className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Foundation</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Rooted deeply in the teachings of the Bible and guided by the principles of the Seventh-day Adventist Church, our faith shapes our actions and our understanding of the world.
                        </p>
                    </motion.div>

                  
                </div>

              
            </div>
        </motion.section>
    );
};

export default About;