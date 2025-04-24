import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Ministries from './pages/Ministries';
import News from './pages/News';
import Contact from './pages/Contact';
import Women from './pages/Women';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/ministries" element={<Ministries />} />
                    <Route path="/ministries/women" element={<Women />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
