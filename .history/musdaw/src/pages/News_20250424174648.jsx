import React from 'react';
import { FaCalendarAlt, FaPrayingHands, FaChurch, FaNewspaper, FaMapMarker } from 'react-icons/fa';
import { motion } from 'framer-motion';
import news1 from '../assets/news1.jpg'; // Add actual image paths
import news2 from '../assets/news2.jpg';
import news3 from '../assets/news3.jpg';

const News = () => {
  const newsArticles = [
    {
      title: "Annual Youth Conference 2024",
      excerpt: "Join us for an empowering weekend of worship, workshops, and fellowship for young adults.",
      date: "March 15-17, 2024",
      category: "Event",
      image: news1
    },
    {
      title: "New Community Outreach Program",
      excerpt: "Learn about our initiative to support local families through education and nutrition programs.",
      date: "Ongoing",
      category: "Announcement",
      image: news2
    },
    {
      title: "Bible Study Series: Revelation",
      excerpt: "Deep dive into the Book of Revelation every Wednesday evening starting January 10th.",
      date: "Starts Jan 10",
      category: "Study",
      image: news3
    }
  ];

  const events = [
    {
      date: "JAN 12",
      title: "Prayer & Fasting Day",
      time: "8:00 AM - 5:00 PM",
      location: "Main Sanctuary"
    },
    {
      date: "JAN 14",
      title: "Women's Ministry Brunch",
      time: "10:00 AM",
      location: "Fellowship Hall"
    },
    {
      date: "JAN 20",
      title: "Guest Speaker: Pastor John Mwangi",
      time: "11:00 AM Service",
      location: "Main Sanctuary"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-slate-800 text-white">
        <img 
          src={news1} 
          alt="Church Gathering" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent flex items-end pb-16">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">News & Events</h1>
              <p className="text-xl text-slate-200">Stay updated with our latest activities and spiritual gatherings</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* News Articles */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FaNewspaper className="text-primary-600" />
              Latest Updates
            </h2>
            
            <div className="space-y-8">
              {newsArticles.map((article, index) => (
                <motion.article 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="md:flex">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="md:w-64 h-64 object-cover"
                    />
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                          {article.category}
                        </span>
                        <span className="text-slate-500">{article.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{article.title}</h3>
                      <p className="text-slate-600 mb-4">{article.excerpt}</p>
                      <button className="text-primary-600 font-semibold hover:underline">
                        Read More →
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Events Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <FaCalendarAlt className="text-accent-600" />
                Upcoming Events
              </h2>

              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="space-y-6">
                  {events.map((event, index) => (
                    <div key={index} className="border-l-4 border-primary-500 pl-4">
                      <div className="flex gap-4">
                        <div className="text-center">
                          <div className="text-xl font-bold text-primary-600">{event.date}</div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                          <div className="text-slate-600 flex items-center gap-2 mb-1">
                            <FaMapMarker className="text-slate-500" />
                            {event.location}
                          </div>
                          <div className="text-slate-500 text-sm">{event.time}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="mt-6 w-full py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2">
                  <FaCalendarAlt />
                  View Full Calendar
                </button>
              </div>

              {/* Newsletter Section */}
              <div className="mt-8 bg-slate-100 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Stay Informed</h3>
                <p className="text-slate-600 mb-4">Subscribe to our weekly newsletter</p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;