import React from 'react';

export default function Testimonials(){
  return (
    <section className="mt-8 bg-gray-800 p-6 rounded">
      <h3 className="text-2xl font-semibold mb-4">Testimonials</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <blockquote className="p-4 border-l-4 border-primary">
          <p className="text-gray-300">“Benjamin built our school assessment system — it saved teachers hours every week and reduced errors.”</p>
          <footer className="mt-3 text-sm text-gray-400">— Headteacher, Methodist JHS</footer>
        </blockquote>

        <blockquote className="p-4 border-l-4 border-primary">
          <p className="text-gray-300">“Quick, reliable tech support for our office machines — highly recommended.”</p>
          <footer className="mt-3 text-sm text-gray-400">— Water Board Office Clark, Adeiso</footer>
        </blockquote>
      </div>
    </section>
  );
}

