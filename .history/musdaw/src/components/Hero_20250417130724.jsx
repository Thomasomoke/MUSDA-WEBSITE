import React from 'react';

const HeroSection = () => {
    return (
        <div className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518020382175-9c918986c188?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }} // Replace with your image URL
        >
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
                        WELCOME TO MUSDA
                    </h1>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                            OUR SERVICES
                        </button>
                        <button className="bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-2 px-4 rounded-full transition-colors duration-300">
                            PLAN A VISIT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
