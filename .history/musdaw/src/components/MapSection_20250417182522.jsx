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
                <iframe
                    src="https://maps.app.goo.gl/N3K4FY2PUAEd4h9s7"width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Church Location"
                ></iframe>
            </div>

        
        </section>
    );
};

export default MapSection;