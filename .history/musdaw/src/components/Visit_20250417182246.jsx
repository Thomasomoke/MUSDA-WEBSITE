import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Visit = ({ isPopup, setIsPopup }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', null

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would send this data to a server
        console.log({ name, email, date, subject, message });

        // Simulate a successful submission
        setTimeout(() => {
            setSubmissionStatus('success');
            setName('');
            setEmail('');
            setDate('');
            setSubject('');
            setMessage('');
            setTimeout(() => setSubmissionStatus(null), 3000); // Clear status after 3 seconds
        }, 1000);

        // In case of an error:
        // setSubmissionStatus('error');
        // setTimeout(() => setSubmissionStatus(null), 3000);
    };

    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-20 flex items-center justify-center"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            onClick={(e) => { if (e.target === e.currentTarget) setIsPopup(false); }}
        >
            <motion.div
                className="bg-white rounded-lg shadow-lg p-8 max-w-md"
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-xl font-bold mb-4">Plan Your Visit</h2>
                <p className="mb-4">Please fill out the form below if you'd like to let us know you're planning a visit.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                        <input
                            type="text"
                            id="name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input
                            type="email"
                            id="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Date of Visit:</label>
                        <input
                            type="date"
                            id="date"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Subject (Optional):</label>
                        <input
                            type="text"
                            id="subject"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message (Optional):</label>
                        <textarea
                            id="message"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            rows="3"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={() => setIsPopup(false)}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md focus:outline-none focus:shadow-outline"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </div>
                </form>

                {submissionStatus === 'success' && (
                    <div className="mt-4 text-green-500">Thank you! We've received your information.</div>
                )}
                {submissionStatus === 'error' && (
                    <div className="mt-4 text-red-500">Oops! Something went wrong. Please try again.</div>
                )}
            </motion.div>
        </motion.div>
    );
};

export default Visit;