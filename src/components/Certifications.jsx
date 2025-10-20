import React from "react";

const badges = [
  {
    name: "AWS Certified Cloud Practitioner",
    image: "https://images.credly.com/size/340x340/images/xxxxxxxxxxxx.png",
    link: "https://www.credly.com/badges/xxxxxxxxxxxx",
  },
  {
    name: "ISC² Certified in Cybersecurity (CC)",
    image: "https://images.credly.com/size/340x340/images/yyyyyyyyyyyy.png",
    link: "https://www.credly.com/badges/yyyyyyyyyyyy",
  },
  // Add more as needed
];

export default function Badges() {
  return (
    <section id="badges" className="mt-8 text-center">
      <h3 className="text-2xl font-semibold mb-4 text-white">Badges & Certifications</h3>
      <p className="text-gray-400 mb-6">
        Verified professional certifications showcasing my skills and achievements.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {badges.map((b) => (
          <a
            key={b.name}
            href={b.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <img
              src={b.image}
              alt={b.name}
              className="w-32 h-32 object-contain rounded-lg shadow-md border border-gray-700"
            />
            <p className="text-sm mt-2 text-gray-300">{b.name}</p>
          </a>
        ))}
      </div>

      <a
        href="https://www.credly.com/users/btorfu/badges"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
      >
        View All Badges on Credly
      </a>
    </section>
  );
}

