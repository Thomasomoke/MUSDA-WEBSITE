import React from 'react';
import { motion } from 'framer-motion';
import { FaHandsHelping, FaPrayingHands, FaBookOpen, FaMusic, FaUsers, FaChalkboardTeacher, FaChild, FaGlobe } from 'react-icons/fa'; // More diverse icons
import { Link } from 'react-router-dom'; // For internal navigation

const MinistryPageSection = () => {
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2, ease: "easeInOut" } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
        hover: { scale: 1.03, boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)" },
    };

    const ministries = [
        {
            slug: 'community-outreach',
            icon: <FaHandsHelping className="text-4xl text-blue-500 mb-4" />,
            title: 'Community Outreach',
            description: 'Extending the love of Christ through practical service, local engagement, and impactful initiatives within the Moi University community and beyond.',
            details: 'Join us in making a tangible difference through various outreach programs.',
        },
        {
            slug: 'prayer-ministry',
            icon: <FaPrayingHands className="text-4xl text-green-500 mb-4" />,
            title: 'Prayer Ministry',
            description: 'A dedicated team committed to lifting up the needs of our church, university, and the world through fervent prayer and intercession.',
            details: 'Submit your prayer requests or join our prayer sessions.',
        },
        {
            slug: 'sabbath-school',
            icon: <FaBookOpen className="text-4xl text-orange-500 mb-4" />,
            title: 'Sabbath School',
            description: 'Engaging Bible study sessions for all ages, fostering a deeper understanding of scripture and Adventist heritage.',
            details: 'Classes available for children, youth, and adults every Sabbath.',
        },
        {
            slug: 'music-ministry',
            icon: <FaMusic className="text-4xl text-purple-500 mb-4" />,
            title: 'Music Ministry',
            description: 'Using the gift of music to lead in worship, inspire spiritual growth, and share the joy of the Gospel through various musical expressions.',
            details: 'Participate in our choir, instrumental groups, or special music performances.',
        },
        {
            slug: 'youth-ministry',
            icon: <FaUsers className="text-4xl text-teal-500 mb-4" />,
            title: 'Youth & Young Adults',
            description: 'A vibrant community for students and young adults, focused on fellowship, discipleship, and equipping the next generation of leaders.',
            details: 'Regular meetings, activities, and discussions relevant to campus life and faith.',
        },
        {
            slug: 'childrens-ministry',
            icon: <FaChild className="text-4xl text-yellow-500 mb-4" />,
            title: 'Children\'s Ministry',
            description: 'Creating a safe, fun, and engaging environment where children can learn about God\'s love and grow in their faith.',
            details: 'Sabbath School classes and special programs designed for kids.',
        },
        {
            slug: 'evangelism-outreach',
            icon: <FaChalkboardTeacher className="text-4xl text-indigo-600 mb-4" />,
            title: 'Evangelism & Outreach',
            description: 'Sharing the Good News of Jesus Christ through various means, both on campus and in the wider community, inviting others to experience God\'s grace.',
            details: 'Get involved in outreach events and sharing initiatives.',
        },
        {
            slug: 'global-missions',
            icon: <FaGlobe className="text-4xl text-lime-500 mb-4" />,
            title: 'Global Missions',
            description: 'Connecting with and supporting the worldwide mission of the Seventh-day Adventist Church, praying for and contributing to global outreach efforts.',
            details: 'Learn about our involvement in international mission projects.',
        },
        // Add more ministries as needed
    ];

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-gray-100 py-16 px-4 md:px-20"
        >
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold text-blue-700 mb-6">Explore Our Ministries</h2>
                <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                    Discover the diverse ways you can connect, grow, and serve within our vibrant SDA community at Moi University. Each ministry offers unique opportunities to engage your talents and passions.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ministries.map((ministry, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                    >
                        <div className="p-6 flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                                {ministry.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{ministry.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                                {ministry.description}
                            </p>
                            {ministry.details && (
                                <p className="text-sm text-gray-500 italic mb-3">{ministry.details}</p>
                            )}
                            <Link to={`/ministries/${ministry.slug}`} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
                                Learn More
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default MinistryPageSection;