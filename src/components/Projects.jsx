import React from 'react';

const projects = [
  {
    name: 'Online School-Based Assessment (SBA)',
    tech: 'Google Sheets, Node.js, MySQL',
    desc: 'Custom SBA platform used by a junior high to automate grading and reports.',
    link: null, // keep private
  },
  {
    name: 'Interactive Quiz App',
    tech: 'Node.js, MongoDB',
    desc: 'Responsive quiz platform for student engagement.',
    link: 'https://quizwise.netlify.app',
  },
  {
    name: 'Flyer & Branding',
    tech: 'Canva',
    desc: 'Print-ready promotional designs for local IT services.',
    link: 'https://www.behance.net/torvex', // example design portfolio link
  },
  {
    name: 'Landing Site',
    tech: 'HTML/CSS',
    desc: 'A landing page to showcase his electrical work and also get connected',
    link: 'https://torvex.me/elec',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mt-8">
      <h3 className="text-2xl font-semibold mb-4">Selected Projects</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((p) => (
          <div
            key={p.name}
            className="p-4 bg-gray-800 rounded border border-gray-700 hover:border-blue-500 transition-colors"
          >
            <h4 className="font-semibold text-lg">{p.name}</h4>
            <p className="text-gray-400 mt-2">{p.desc}</p>
            <p className="text-xs text-gray-500 mt-3">Tech: {p.tech}</p>
            {p.link ? (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-blue-400 hover:text-blue-300 text-sm"
              >
                🔗 View Project
              </a>
            ) : (
              <p className="text-gray-500 mt-3 italic text-sm">Private project</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

