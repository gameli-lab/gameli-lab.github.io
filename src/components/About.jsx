import React from 'react';

export default function About(){
  return (
    <section id="about" className="bg-gray-800 p-6 rounded-lg mt-8">
      <h3 className="text-2xl font-semibold">About Me</h3>
      <p className="mt-3 text-gray-300">I’m an educator turned software engineer with 7+ years experience in teaching and IT support. I hold a B.Ed in Mathematics and completed the Software Engineering, AI for developers and AI Career Essentials all from ALX Africa. I am currently preparing for AWS Cloud Practioner certification and ISC2 CyberSecurity Certification. I build backend systems, automations, and school-focused digital tools that save time and improve accuracy.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-3 border border-gray-700 rounded">
          <h4 className="font-semibold">Experience</h4>
          <p className="text-sm text-gray-400">7+ years</p>
        </div>
        <div className="p-3 border border-gray-700 rounded">
          <h4 className="font-semibold">Location</h4>
          <p className="text-sm text-gray-400">Adeiso, Ghana (Remote-ready)</p>
        </div>
        <div className="p-3 border border-gray-700 rounded">
          <h4 className="font-semibold">Availability</h4>
          <p className="text-sm text-gray-400">Freelance / Part-time / Contract</p>
        </div>
      </div>
    </section>
  );
}

