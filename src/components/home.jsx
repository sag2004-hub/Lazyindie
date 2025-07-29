import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, UserPlus, Upload, Search } from "lucide-react";
import gifImage from "../assets/gif2.gif";
import logo from "../assets/logo.png";
import collabImg from "../assets/i9.png";
import communityImg from "../assets/i10.png";
import connectImg from "../assets/i11.png";
import gif3 from "../assets/gif3.gif";
import gif from "../assets/gif4.gif";
import gif9 from '../assets/gif5.gif';

export default function Home() {
  const location = useLocation();
  const dragStartY = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null) // Added footer ref
  ];
  const [currentSection, setCurrentSection] = useState(0);

  const handleMouseDown = (e) => {
    if (isScrolling) return;
    setDragging(true);
    dragStartY.current = e.clientY;
  };

  const handleMouseUp = (e) => {
    if (dragging && !isScrolling) {
      const endY = e.clientY;
      const deltaY = dragStartY.current - endY;
      if (deltaY > 100 && currentSection < sectionRefs.length - 1) {
        handleScroll(currentSection + 1);
      } else if (deltaY < -100 && currentSection > 0) {
        handleScroll(currentSection - 1);
      }
      setDragging(false);
      dragStartY.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (dragging) {
      setDragging(false);
      dragStartY.current = null;
    }
  };

  const handleScroll = (index) => {
    if (isScrolling) return;
    setIsScrolling(true);
    sectionRefs[index].current?.scrollIntoView({ behavior: "smooth" });
    setCurrentSection(index);
    setTimeout(() => setIsScrolling(false), 1000); // Increased timeout for smoother experience
  };

  const handleWheel = (e) => {
    e.preventDefault(); // Prevent default scroll behavior
    
    if (isScrolling) return;
    
    // Use a smaller threshold for better responsiveness
    const threshold = 30;
    
    if (e.deltaY > threshold && currentSection < sectionRefs.length - 1) {
      // Scrolling down
      handleScroll(currentSection + 1);
    } else if (e.deltaY < -threshold && currentSection > 0) {
      // Scrolling up
      handleScroll(currentSection - 1);
    }
  };

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;
    
    // Add wheel event listener with passive: false to allow preventDefault
    container.addEventListener("wheel", handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [currentSection, isScrolling]);

  const navItems = [
    { label: "Home", path: "/home" },
    { label: "AI Chat", path: "/ai_chat_land" },
    {label: "My Purchase", path:"/my_purchase"}
  ];


  return (
    <>
      <style>{`
        #scroll-container::-webkit-scrollbar {
          width: 6px;
        }
        #scroll-container::-webkit-scrollbar-track {
          background: transparent;
        }
        #scroll-container::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 8px;
          border: 2px solid transparent;
          background-clip: content-box;
        }
        #scroll-container::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 255, 255, 0.5);
        }

        #scroll-container {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
        }
      `}</style>
      <div
        id="scroll-container"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className="w-full h-screen overflow-hidden scroll-smooth snap-y snap-mandatory font-sans"
      >
        {/* Navbar */}
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="fixed top-0 left-0 w-full h-[80px] bg-white/5 backdrop-blur-md flex justify-between items-center px-8 md:px-24 z-50"
        >
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <div className="hidden md:flex items-center gap-8 text-white text-base font-medium">
            {navItems.map(({ label, path }, idx) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={idx}
                  to={path}
                  className="relative text-white/80 transition-colors duration-300 hover:text-white group"
                >
                  {label}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
            <Link
              to="/cart"
              className="hover:text-white text-white/80 transition duration-300"
            >
              <ShoppingCart className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* Home Section */}
        <section
          ref={sectionRefs[0]}
          className="relative w-full h-screen snap-start bg-[#030303] overflow-hidden"
        >
          {/* Background GIF */}
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.8, x: 0 }}
            transition={{ duration: 1.2 }}
            src={gifImage}
            alt="Hero Animation"
            className="absolute right-0 top-0 h-full object-cover z-0"
          />

          {/* Decorative Blurs */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="absolute hidden md:block w-28 h-[80%] left-[40%] top-20 bg-[#020202] rounded-full blur-3xl shadow-2xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 90 }}
            transition={{ duration: 1.4, delay: 0.7 }}
            className="absolute hidden md:block w-28 h-[120%] left-[110%] top-[20%] bg-[#020202] rounded-full blur-3xl shadow-2xl origin-top-left"
          />

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 md:px-8 text-center">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-white text-5xl md:text-7xl font-serif font-semibold tracking-wide leading-tight"
            >
              Connect. Collaborate. Create.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-white text-sm md:text-lg font-light mt-6 md:mt-4 leading-relaxed max-w-2xl md:max-w-3xl"
            >
              Unlock your potential as an artist with our platform. Discover,
              collaborate, and <br className="hidden md:inline" />
              engage with fellow musicians and fans like never before.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.2,
                duration: 0.8,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 2,
              }}
              className="mt-10 text-white text-base md:text-lg font-light animate-bounce"
            >
              Scroll Down
            </motion.div>
          </div>
        </section>

        {/* Collab Section */}
        <section
          ref={sectionRefs[1]}
          className="relative w-full h-screen snap-start bg-cover bg-center text-white"
          style={{ backgroundImage: `url(${collabImg})` }}
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-24 pt-24">
            {/* Text Section */}
            <motion.div
              className="md:w-1/2 space-y-8 text-center md:text-left"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
            >
              <h1 className="text-4xl md:text-4xl font-bold leading-tight">
                Unlock Your Creative Potential: <br /> Collaborate with Talented Artists Today!
              </h1>
              <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-80">
                Discover a world of collaboration with our platform, where artists connect and create together.
                Find your perfect match and elevate your music journey.
              </p>

              <div className="flex flex-col md:flex-row gap-10 mt-6">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <UserPlus size={40} className="mb-2" />
                  <h3 className="font-semibold text-lg">Connect Creatively</h3>
                  <p className="text-white/70 text-sm max-w-xs mt-1">
                    Easily collaborate with artists who share your vision and passion for music.
                  </p>
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <UserPlus size={40} className="mb-2" />
                  <h3 className="font-semibold text-lg">Endless Opportunities</h3>
                  <p className="text-white/70 text-sm max-w-xs mt-1">
                    Explore diverse genres and styles to find the ideal artist for your project.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="md:w-1/2 flex justify-center mt-10 md:mt-0"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
            >
              <img
                src={gif3}
                alt="Collaboration Visual"
                className="rounded-xl w-full max-w-[650px] md:max-w-[575px]"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.5,
              duration: 0.8,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2,
            }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-base animate-bounce"
          >
            scroll down
          </motion.div>
        </section>

        {/* Community Section */}
        <section
          ref={sectionRefs[2]}
          className="w-full h-screen snap-start relative bg-cover bg-center text-white"
          style={{ backgroundImage: `url(${communityImg})` }}
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-24 pt-24">
            {/* Text Section */}
            <motion.div
              className="md:w-1/2 space-y-8 text-center md:text-left"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: 'easeIn' }}
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Unlock Your Potential: Join a Thriving Community of Music Artists
              </h1>
              <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-lg">
                Gain unparalleled exposure and connect with fellow artists, industry professionals, and fans.
                Collaborate on projects and share your music with a wider audience, all while building meaningful
                relationships in the music community.
              </p>
            </motion.div>

            {/* GIF Section */}
            <motion.div
              className="md:w-1/2 flex justify-center mt-10 md:mt-0"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: 'easeIn' }}
            >
              <img
                src={gif}
                alt="Community Visual"
                className="rounded-xl w-full max-w-[570px] max-h-[600px]"
              />
            </motion.div>
          </div>

          {/* Swipe Prompt */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.5,
              duration: 0.8,
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: 2,
            }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-base animate-bounce"
          >
            Scroll Down
          </motion.div>
        </section>

        {/* Connect Section */}
        <section
          ref={sectionRefs[3]}
          className="snap-start w-full h-screen text-white relative overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${connectImg})` }}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black opacity-60 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1 }}
          />

          {/* Content */}
          <div className="relative z-20 flex flex-col justify-center items-center text-center h-full px-6 md:px-12 pt-28 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-3xl"
            >
              <p className="text-sm text-white/70 font-semibold uppercase mb-2">Connect</p>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Your Gateway to Musical Collaboration
              </h1>
              <p className="text-white/80 text-sm md:text-base mt-4">
                Join our platform to discover and collaborate with talented artists. It's easy to connect and create music together.
              </p>
            </motion.div>

            {/* Features and GIF */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl">
              {/* Left Feature Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex flex-col items-center gap-10 text-center"
              >
                <div className="flex flex-col items-center gap-3 max-w-xs">
                  <Search size={28} />
                  <h3 className="text-base font-semibold">Sign Up</h3>
                  <p className="text-white/70 text-sm">
                    Create your profile and start exploring artists that match your musical vision.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-3 max-w-xs">
                  <UserPlus size={28} />
                  <h3 className="text-base font-semibold">Find Your Match</h3>
                  <p className="text-white/70 text-sm">
                    Use our chatbot to find artists that fit your style and budget.
                  </p>
                </div>
              </motion.div>

              {/* Center GIF */}
              <motion.div
                className="w-[240px] h-[240px] md:w-[300px] md:h-[300px]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <img
                  src={gif9}
                  alt="Music Collaboration"
                  className="rounded-xl w-full h-full object-cover shadow-xl border border-white/20"
                />
              </motion.div>

              {/* Right Feature Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-col items-center gap-10 text-center"
              >
                <div className="flex flex-col items-center gap-3 max-w-xs">
                  <UserPlus size={28} />
                  <h3 className="text-base font-semibold">Collaborate Effortlessly</h3>
                  <p className="text-white/70 text-sm">
                    Communicate and collaborate with your chosen artists through our integrated messaging system.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-3 max-w-xs">
                  <Upload size={28} />
                  <h3 className="text-base font-semibold">Share Your Music</h3>
                  <p className="text-white/70 text-sm">
                    Upload your tracks and promote them to a wider audience within the community.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Swipe Prompt */}
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.5,
              duration: 0.8,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2,
            }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-base animate-bounce"
          >
            Scroll Down
          </motion.div>
        </section>

        {/* Footer Section */}
        <footer 
          ref={sectionRefs[4]}
          className="bg-black text-white py-6 px-6 md:px-24 snap-start"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
              <span className="text-white/80 text-xs md:text-sm">© {new Date().getFullYear()} MusicCollab. All rights reserved.</span>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-xs md:text-sm text-white/70">
              <Link to="/home" className="hover:text-white transition duration-200">Home</Link>
              <Link to="/ai_chat_land" className="hover:text-white transition duration-200">AI Chat</Link>
              <Link to="/my_purchase" className="hover:text-white transition duration-200">My Purchase</Link>
              <Link to="/contact" className="hover:text-white transition duration-200">Contact</Link>
              <Link to="/privacy" className="hover:text-white transition duration-200">Privacy</Link>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}