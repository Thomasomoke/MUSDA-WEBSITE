import React from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';

const MapSection = () => {
    return (
        <section className="bg-gray-50 py-12 px-4 md:px-20">
            <div className="max-w-6xl mx-auto text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4">Find Us</h2>
                <p className="text-gray-600 leading-relaxed">
                    We'd love to have you join us! Here's where you can find our church.
                </p>
            </div>

            <div className="max-w-4xl mx-auto rounded-lg shadow-md overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.770316000794!2d35.294098623719556!3d0.2810617640813857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1780f412c386db3f%3A0x452eba135256a6ff!2sMUSDA%20Church%20Moi%20University%20SDA!5e0!3m2!1sen!2ske!4v1744903503339!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        
        </section>
    );
};

export default MapSection;