import React from 'react';

export default function Footer(){
  return (
    <footer className="mt-12 py-6 border-t border-gray-800">
      <div className="container text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Benjamin Torfu (Torvex). • <a className="text-primary" href="https://x.com/TorfuBenjamin" target="_blank" rel="noreferrer">X</a> • <a className="text-primary" href="https://facebook.com/dhddo" target="_blank" rel="noreferrer">Facebook</a> • <a className="text-primary" href="https://github.com/gameli-lab" target="_blank" rel="noreferrer">GitHub</a> • <a className="text-primary" href="https://www.linkedin.com/in/benjamin-torfu-56a5a21b8/" target="_blank" rel="noreferrer">LinkedIn</a> 
      </div>
    </footer>
  );
}

