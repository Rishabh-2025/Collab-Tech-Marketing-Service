import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  // ▶ Play Video on Hover
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  // ⏸ Pause + Reset Video on Leave
  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section className="relative min-h-[95vh] flex items-center py-24 md:py-32 overflow-hidden bg-background">
      
      {/* Background Glows */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
          rotate: [0, 45, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-magenta opacity-10 blur-[150px] pointer-events-none"
      ></motion.div>

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.08, 0.12, 0.08],
          rotate: [0, -45, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-15%] left-[-5%] w-[700px] h-[700px] rounded-full bg-cyan-accent opacity-8 blur-[130px] pointer-events-none"
      ></motion.div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-blue-accent opacity-5 blur-[200px] pointer-events-none"></div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* LEFT CONTENT */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 py-2.5 px-5 rounded-full bg-white/5 border border-white/10 text-cyan-accent text-[10px] md:text-xs font-black mb-10 tracking-[0.3em] uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-accent"></span>
                </span>
                Next-Gen Marketing Engine
              </span>

              <h1 className="text-5xl md:text-7xl lg:text-9xl font-black font-heading leading-[0.95] mb-10 tracking-tight">
                Ignite Your <br />
                <span className="text-gradient">Empire.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-lg md:text-2xl text-text-secondary mb-14 leading-relaxed max-w-2xl font-light mx-auto lg:mx-0"
            >
              We orchestrate elite partnerships between world-class brands and
              visionary creators to dominate the performance marketing landscape.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-8"
            >
              <Link
                to="/contact"
                className="relative group overflow-hidden bg-primary-gradient text-white text-lg md:text-xl font-black px-10 md:px-12 py-4 md:py-5 rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_30px_60px_-15px_rgba(224,32,177,0.6)]"
              >
                <span className="relative z-10">Launch Campaign</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </Link>

              <Link
                to="/about"
                className="group flex items-center gap-3 text-white font-black text-lg md:text-xl transition-all hover:gap-6"
              >
                The Vision{" "}
                <span className="text-magenta group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 border-t md:border-t-0 md:border-l border-white/10 pt-10 md:pt-0 md:pl-10 text-center md:text-left"
            >
              <div>
                <div className="text-3xl md:text-4xl font-black text-white">
                  500M+
                </div>
                <div className="text-text-secondary text-[10px] font-bold uppercase tracking-[0.2em] mt-1">
                  Global Reach
                </div>
              </div>

              <div>
                <div className="text-3xl md:text-4xl font-black text-white">
                  10K+
                </div>
                <div className="text-text-secondary text-[10px] font-bold uppercase tracking-[0.2em] mt-1">
                  Creators
                </div>
              </div>

              <div className="col-span-2 md:col-span-1">
                <div className="text-3xl md:text-4xl font-black text-white">
                  4.8%
                </div>
                <div className="text-text-secondary text-[10px] font-bold uppercase tracking-[0.2em] mt-1">
                  Engagement
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT VIDEO SECTION */}
          <div className="lg:w-2/5 relative w-full max-w-md lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.5 }}
              className="relative"
            >
              {/* Video Card */}
              <div
                onMouseEnter={handlePlay}
                onMouseLeave={handlePause}
                className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 
                shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] bg-card group cursor-pointer"
              >
                {/* Video */}
                <video
                  ref={videoRef}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover brightness-90 group-hover:brightness-110 transition-all duration-700"
                >
                  <source src="/hero.mp4" type="video/mp4" />
                </video>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70"></div>

                {/* Avatar Bottom Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 px-5 py-4 rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5">
                  
                  {/* Avatar */}
                  <img
                    src="/logo.png"
                    alt="Marketing Expert"
                    className="w-14 h-14 rounded-full border-2 border-magenta object-cover"
                  />

                  {/* Text */}
                  <div>
                    <h4 className="text-white font-black text-sm">
                      Strategy Experts
                    </h4>
                    <p className="text-text-secondary text-[10px] uppercase tracking-widest font-bold">
                      Marketing + Growth Team
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Orbitals */}
              <div className="absolute -inset-10 border border-white/5 rounded-[4rem] pointer-events-none"></div>
              <div className="absolute -inset-20 border border-white/5 rounded-[5rem] pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="text-text-secondary text-[10px] font-black uppercase tracking-[0.4em]">
          Scroll Down
        </div>
        <motion.div
          animate={{ height: ["0px", "80px", "0px"] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-[2px] bg-gradient-to-b from-magenta via-cyan-accent to-transparent"
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
