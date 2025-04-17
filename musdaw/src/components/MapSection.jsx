import React from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';

const MapSection = () => {
    const embeddedMapURL = "https://maps.app.goo.gl/7HVMh53m9UncEb2m7"; 

    return (
        <section className="bg-gray-50 py-12 px-4 md:px-20">
            <div className="max-w-6xl mx-auto text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4">Find Us</h2>
                <p className="text-gray-600 leading-relaxed">
                    We'd love to have you join us! Here's where you can find our church.
                </p>
            </div>

            <div className="max-w-4xl mx-auto rounded-lg shadow-md overflow-hidden aspect-w-16 aspect-h-9">
                <iframe
                    src={embeddedMapURL}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SDA Moi University Church Location"
                ></iframe>
            </div>

            <div className="mt-6 text-center text-gray-600">
                <p>
                    <FaMapMarkedAlt className="inline mr-2" />
                </p>
                {/* Optional: Add contact information or directions link */}
                {/* <p className="mt-2">
                    <a href="/contact" className="text-blue-500 hover:underline">Contact Us</a> for more information.
                </p> */}
            </div>
        </section>
    );
};

export default MapSection;