import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">About SDA Moi University Church</h1>
      <p className="text-lg text-slate-600 mb-8">
        A Christ-centered community within Moi University, sharing hope, growing in faith, and serving with love.
      </p>
      <div className="grid md:grid-cols-3 gap-8 text-slate-700">
        <div>
          <h2 className="text-xl font-semibold mb-2">Who We Are</h2>
          <p>A family of believers grounded in the Bible and committed to truth, fellowship, and mission.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">What We Do</h2>
          <p>We worship, serve, learn, and lead—on campus and beyond.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Why It Matters</h2>
          <p>Because Christ is coming soon. And we are called to prepare and share.</p>
        </div>
      </div>
      <div className="mt-12 text-slate-600">
        <p>📍 Located within Moi University Main Campus, Eldoret</p>
        <p>🕊️ Rooted in the Seventh-day Adventist faith</p>
        <p>🤝 Open to all who seek Christ</p>
      </div>
    </div>
  );
};

export default About;
