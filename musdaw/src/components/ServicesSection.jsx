import React from 'react';
import { motion } from 'framer-motion';
import { FaHandsWash, FaMicrophoneAlt, FaHeart, FaCalendarAlt } from 'react-icons/fa'; // Relevant icons

const ServicesSection = () => {
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2, ease: "easeInOut" } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
        hover: { scale: 1.05, transition: { duration: 0.2 } },
    };

    const services = [
        {
            icon: <FaHandsWash className="text-3xl text-indigo-500 mb-2" />,
            title: 'Sabbath Worship Service',
            description: 'Join us every Saturday for uplifting worship, inspiring messages, and fellowship.',
            details: 'Saturdays at [Time] AM/PM',
        },
        {
            icon: <FaMicrophoneAlt className="text-3xl text-red-500 mb-2" />,
            title: 'Mid-Week Prayer Meeting',
            description: 'Come together for a time of prayer, sharing, and spiritual encouragement during the week.',
            details: '[Day] at [Time] AM/PM',
        },
        {
            icon: <FaHeart className="text-3xl text-pink-500 mb-2" />,
            title: 'Community Fellowship & Events',
            description: 'Participate in various events and activities designed to build community and strengthen bonds.',
            details: 'Check our calendar for upcoming events',
        },
        {
            icon: <FaCalendarAlt className="text-3xl text-yellow-500 mb-2" />,
            title: 'Bible Study Sessions',
            description: 'Deepen your understanding of scripture through engaging and insightful Bible study groups.',
            details: 'Various days and times available',
        },
        // Add more services as needed
    ];

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white py-12 px-4 md:px-20"
        >
            <div className="max-w-6xl mx-auto text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-green-700 mb-4">Our Weekly Services</h2>
                <p className="text-gray-600 leading-relaxed">
                    Discover the opportunities to worship, connect, and grow with our Musda community.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-gray-50 rounded-lg shadow-md p-6 text-center"
                    >
                        <div className="flex items-center justify-center h-16 mb-4">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-2">
                            {service.description}
                        </p>
                        {service.details && (
                            <p className="text-sm text-gray-500">{service.details}</p>
                        )}
                        {/* You could add a "More Info" button here */}
                        {/* <button className="mt-4 text-green-500 hover:underline">More Info</button> */}
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default ServicesSection;