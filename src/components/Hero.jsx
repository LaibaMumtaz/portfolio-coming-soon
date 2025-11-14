import React, { useState, useEffect } from "react";

const Hero = () => {
  const initialTime = 20 * 1000; 
  const [time, setTime] = useState(initialTime);
  const [launched, setLaunched] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (time <= 0) {
      setLaunched(true);
      return;
    }

    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1000 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const formatTime = (ms) => {
    const totalSec = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSec / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSec % 3600) / 60)).padStart(2, "0");
    const seconds = String(totalSec % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleNotify = () => {
    if (!email) {
      alert("Please enter a valid email!");
      return;
    }
    alert(`Thank you! We will notify you at ${email} when the portfolio is live.`);
    setEmail("");
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-6 pt-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_600px_at_50%_20%,rgba(255,240,240,0.3),transparent)]"></div>

      
      {!launched && (
        <>
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-300">
           Portfolio <br /> Coming Soon <br />
          </h2>

          <p className="text-gray-700 max-w-md text-lg mb-6">
            I'm Laiba — a front-end developer crafting clean and modern digital experiences. My full portfolio is on the way.
          </p>

          <div className="text-5xl font-semibold text-teal-400 mb-8">
            {formatTime(time)}
          </div>

          
          <div className="flex gap-3 mb-8 flex-wrap justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-teal-300 w-64"
            />
            <button
              onClick={handleNotify}
              className="px-6 py-3 rounded-xl bg-teal-400 text-white hover:bg-teal-300 transition"
            >
              Notify Me
            </button>
          </div>
        </>
      )}

      {launched && (
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-5xl font-bold mb-2 bg-clip-text text-transparent 
               bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-300">
              <span className="text-yellow-400">🎉</span><span>Portfolio Launched!</span> <span className="text-yellow-400">🎉</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-md mb-4">
            Check out my projects and creations now!
          </p>
          <a
            href="#portfolio" 
            className="px-8 py-3 bg-teal-400 text-white rounded-xl hover:bg-teal-300 transition"
          >
            Explore Portfolio
          </a>
        </div>
      )}

      <div className="flex gap-6 text-gray-700 text-lg mt-8">
        <a href="#" className="hover:text-teal-400 transition">GitHub</a>
        <a href="#" className="hover:text-pink-400 transition">LinkedIn</a>
        <a href="#" className="hover:text-indigo-400 transition">Instagram</a>
      </div>
    </section>
  );
};

export default Hero;
