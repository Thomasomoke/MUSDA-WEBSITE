import React from 'react';
import { motion } from 'framer-motion';
import { FaHandsHelping, FaPrayingHands, FaBookOpen, FaMusic, FaUsers } from 'react-icons/fa'; // More relevant icons

const MinistriesSection = () => {
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2, ease: "easeInOut" } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
        hover: { scale: 1.05, transition: { duration: 0.2 } },
    };

    const ministries = [
        {
            icon: <FaHandsHelping className="text-3xl text-blue-500 mb-2" />,
            title: 'Community Outreach',
            description: 'Engaging with our local community through service projects, support initiatives, and acts of kindness.',
        },
        {
            icon: <FaPrayingHands className="text-3xl text-green-500 mb-2" />,
            title: 'Prayer Ministry',
            description: 'Providing a supportive environment for prayer requests, intercession, and spiritual encouragement.',
        },
        {
            icon: <FaBookOpen className="text-3xl text-orange-500 mb-2" />,
            title: 'Sabbath School',
            description: 'Offering engaging Bible study sessions for all ages, fostering spiritual growth and understanding.',
        },
        {
            icon: <FaMusic className="text-3xl text-purple-500 mb-2" />,
            title: 'Music Ministry',
            description: 'Using the power of music to enhance worship, inspire hearts, and share the Gospel message.',
        },
        {
            icon: <FaUsers className="text-3xl text-teal-500 mb-2" />,
            title: 'Youth Ministry',
            description: 'Empowering and guiding our young people in their faith journey through fellowship, activities, and mentorship.',
        },
        // Add more ministries as needed
    ];

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-gray-100 py-8 px-4 md:px-20"
        >
            <div className="max-w-6xl mx-auto text-center mb-4">
                <h2 className="text-xl md:text-xl font-semibold text-blue-700 mb-2">Our Ministries</h2>
                <p className="text-gray-600 leading-relaxed">
                    Explore the various ways you can connect, grow, and serve with our church community.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ministries.map((ministry, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-white rounded-lg shadow-md p-6 text-center"
                    >
                        <div className="flex items-center justify-center h-16 mb-2">
                            {ministry.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{ministry.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            {ministry.description}
                        </p>
                  </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default MinistriesSection;