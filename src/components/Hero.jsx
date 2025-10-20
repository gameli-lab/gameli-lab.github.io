import React from 'react';

export default function Hero(){
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center py-8">
      <div>
        <h2 className="text-4xl font-extrabold leading-tight">Hi, I’m <span className="text-primary">Benjamin</span> — Torvex</h2>
        <p className="mt-4 text-gray-300">Software Engineer | Educator | Building digital solutions that empower learning and innovation.</p>
        <div className="mt-6 flex gap-3">
          <a href="#contact" className="px-5 py-3 bg-primary rounded text-gray-900 font-medium">Hire Me</a>
          <a href="/public/Benjamin_Torfu_Resume.pdf" className="px-5 py-3 border border-gray-700 rounded text-gray-300">Download CV</a>
        </div>
        <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-400">
          <li>Python</li>
          <li>JavaScript</li>
          <li>MySQL / PostgreSQL / MongoDB / Redis</li>
          <li>DevOps</li>
          <li>IT Support</li>
        </ul>
      </div>

      <div className="flex justify-center">
        <div className="w-56 h-56 rounded-full overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
          <img src="../../images/Gameli.png" alt="Benjamin Torvex" className="object-cover w-full h-full"/>
        </div>
      </div>
    </section>
  );
}

