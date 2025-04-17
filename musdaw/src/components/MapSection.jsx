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
                {/* Replace this iframe with your actual embedded map code */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d[YOUR_LATITUDE]![YOUR_LONGITUDE]!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s[YOUR_SPECIFIC_ADDRESS_OR_PLACE_ID]!2s!5e0!3m2!1sen!2ske!4v[YOUR_TIMESTAMP]!5m2!1sen!2ske"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Church Location"
                ></iframe>
            </div>

            <div className="mt-6 text-center text-gray-600">
                <p>
                    [Your Church Name]
                    <br />
                    [Your Street Address]
                    <br />
                    [Your City/Town], [Your County/Region]
                    <br />
                    Kenya
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