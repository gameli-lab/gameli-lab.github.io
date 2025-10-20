import React, { useState } from 'react';

export default function Contact(){
  const [state, setState] = useState({name:'',email:'',message:'',sent:false});
  const update = e => setState({...state, [e.target.name]: e.target.value});
  const submit = async (e) => {
    e.preventDefault();
    const endpoint = 'https://formspree.io/f/manqjodo';
    try{
      await fetch(endpoint, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({name:state.name,email:state.email,message:state.message})
      });
      setState({name:'',email:'',message:'',sent:true});
      setTimeout(()=>setState(s=>({...s,sent:false})),4000);
    }catch(err){
      console.error(err);
    }
  };

  return (
    <section id="contact" className="mt-8 bg-gray-800 p-6 rounded">
      <h3 className="text-2xl font-semibold mb-4">Contact Me</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-300">Reach out for projects, support, or collaborations.</p>
          <ul className="mt-4 text-gray-400">
            <li><strong>Phone:</strong> 0541813988 / 0249390548</li>
            <li><strong>Email:</strong> btorfu@gmail.com</li>
            <li><strong>LinkedIn:</strong> linkedin.com/in/btorfu</li>
            <li><strong>GitHub:</strong> github.com/gameli-lab</li>
          </ul>
        </div>

        <form onSubmit={submit} className="space-y-3">
          <input name="name" value={state.name} onChange={update} required placeholder="Your name" className="w-full p-2 bg-gray-900 border border-gray-700 rounded"/>
          <input name="email" value={state.email} onChange={update} required placeholder="Your email" className="w-full p-2 bg-gray-900 border border-gray-700 rounded"/>
          <textarea name="message" value={state.message} onChange={update} required rows="4" placeholder="Your message" className="w-full p-2 bg-gray-900 border border-gray-700 rounded"/>
          <div className="flex items-center gap-3">
            <button type="submit" className="px-4 py-2 bg-primary text-gray-900 rounded">Send Message</button>
            {state.sent && <span className="text-green-400 text-sm">Message sent — thanks!</span>}
          </div>
        </form>
      </div>
    </section>
  );
}

