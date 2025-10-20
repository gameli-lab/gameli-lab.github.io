import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Certifications from "./components/Certifications";
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <nav className="bg-gray-800/60 backdrop-blur sticky top-0 z-50 border-b border-gray-800">
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-gray-900 font-bold">T</div>
            <div>
              <h1 className="text-lg font-semibold">Benjamin Torfu</h1>
              <p className="text-xs text-gray-400">Torvex — Software Engineer • IT Support</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#projects" className="hover:text-white">Projects</a>
	    <a href="#certifications" className="hover:text-white">Certifications</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="https://github.com/gameli-lab" target="_blank" rel="noreferrer" className="px-3 py-1 bg-gray-700 rounded">GitHub</a>
          </div>
        </div>
      </nav>

      <main className="container py-12">
        <Hero />
        <About />
        <Services />
        <Projects />
	<Certifications/>
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
