import React from 'react';

const items = [
  {title: 'IT Support & Maintenance', desc: 'Hardware diagnostics, OS installs, printer setup, remote troubleshooting.'},
  {title: 'Data Entry & Administration', desc: 'Accurate spreadsheet work, OneDrive/Google Drive organization and reporting.'},
  {title: 'Web & Backend Development', desc: 'Node.js / Python backends, MySQL/Postgres integration and REST APIs.'},
  {title: 'Education Tech Systems', desc: 'Design and deploy school-based assessment platforms and trackers.'},
  {title: 'Designs and Printing', desc: 'Designs flyers, certificates, document editting and formatting and printing of documents, photos(up to A4), passport pictures, etc.'},
];

export default function Services(){
  return (
    <section id="services" className="mt-8">
      <h3 className="text-2xl font-semibold mb-4">Services</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map(i=>(
          <div key={i.title} className="p-4 bg-gray-800 rounded border border-gray-700">
            <h4 className="font-semibold">{i.title}</h4>
            <p className="text-gray-400 mt-2">{i.desc}</p>
            <div className="mt-3">
              <a href="#contact" className="text-primary text-sm">Request Service →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

