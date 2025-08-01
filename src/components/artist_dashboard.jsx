import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaEdit, FaChevronLeft, FaChevronRight, FaCalendarAlt } from "react-icons/fa";
import { FiEye, FiUser } from "react-icons/fi";

// Import your actual images from the assets folder
import bgImage from "../assets/i16.jpg";
import artist1 from "../assets/artist1.jpg";
import artist2 from "../assets/artist2.jpg";
import artist3 from "../assets/artist3.jpg";
import artist4 from "../assets/artist4.jpg";
import gif10 from "../assets/gif10.gif";
import gif12 from "../assets/gif12.gif";
import logo from "../assets/logo.png";
import viewImage from "../assets/view.jpg";
import progressImage from "../assets/gif11.gif";

const artists = [
  { name: "Weeknd", genre: "singer", price: "$2,400", image: artist1 },
  { name: "Arijit", genre: "singer", price: "$1,800", image: artist2 },
  { name: "Krsna", genre: "rapper", price: "$2,000", image: artist3 },
  { name: "Taylor", genre: "singer", price: "$3,000", image: artist4 },
  { name: "Ed Sheeran", genre: "singer", price: "$2,200", image: artist1 },
];

// Enhanced Card Component without glass effect
const Card = ({ children, className = "" }) => (
  <motion.div
    className={`p-6 rounded-3xl bg-black/50 border border-white/10 hover:bg-black/70 transition-all duration-300 ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const ArtistDashboard = () => {
  const [currentArtistIndex, setCurrentArtistIndex] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  const handleNextArtist = () => {
    setCurrentArtistIndex((prevIndex) => (prevIndex + 1) % artists.length);
  };

  const handlePrevArtist = () => {
    setCurrentArtistIndex((prevIndex) => 
      (prevIndex - 1 + artists.length) % artists.length
    );
  };

  // Enhanced auto-swap with pause on hover
  useEffect(() => {
    let interval;
    const startInterval = () => {
      interval = setInterval(handleNextArtist, 3000);
    };
    
    const container = document.querySelector('.artist-carousel-container');
    if (container) {
      container.addEventListener('mouseenter', () => clearInterval(interval));
      container.addEventListener('mouseleave', startInterval);
    }
    
    startInterval();
    return () => {
      clearInterval(interval);
      if (container) {
        container.removeEventListener('mouseenter', () => clearInterval(interval));
        container.removeEventListener('mouseleave', startInterval);
      }
    };
  }, []);

  // Calendar logic remains the same
  const today = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
  const calendarDays = [];
  
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  
  for (let i = 1; i <= daysInMonth; i++) {
    const isToday = today.getDate() === i && today.getMonth() === currentMonth && today.getFullYear() === currentYear;
    const hasEvent = [3, 10, 17].includes(i);
    const eventColors = hasEvent ? ["blue", "purple", "teal"] : [];
    calendarDays.push({ date: i, events: eventColors, isToday });
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };
  
  const monthNames = ["January", "February", "March", "April", "May", "June", 
                     "July", "August", "September", "October", "November", "December"];
  const dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const liveProgressPercentage = Math.floor((currentTime.getSeconds() / 60) * 100);

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center text-white font-monda p-8 md:p-16 relative overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 max-w-[1920px] mx-auto">
        {/* Enhanced Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="NetGenome Logo"
              className="h-12 md:h-16 object-contain"
            />
            <span className="text-xl hidden md:block">Artist Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            {/* Removed glass effect from header items */}
            <div className="hidden md:flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full border border-white/10">
              <FiUser />
              <span className="text-xl font-monda">Welcome, Rishav</span>
            </div>
            <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full border border-white/10">
              <FaCalendarAlt />
              <span>{currentTime.toLocaleTimeString()}</span>
            </div>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Column 1 */}
          <div className="lg:col-span-1 space-y-6">

            {/* Enhanced Subscriptions Card */}
            <Card className="h-[400px] flex flex-col overflow-hidden artist-carousel-container">
              <div className="flex items-center justify-between mb-4 flex-shrink-0">
                <div className="text-xl font-bold flex items-center gap-2">
                  <span className="text-yellow-400">★</span> Your Subscriptions
                </div>
                <div className="flex gap-2">
                  <button onClick={handlePrevArtist} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                    <FaChevronLeft size={16} />
                  </button>
                  <button onClick={handleNextArtist} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                    <FaChevronRight size={16} />
                  </button>
                </div>
              </div>
              <div className="relative flex-1 overflow-hidden rounded-2xl">
                <div
                  className="flex h-full transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentArtistIndex * 100}%)` }}
                >
                  {artists.map((artist, index) => (
                    <div key={index} className="flex-shrink-0 w-full h-full relative">
                      <img
                        src={artist.image}
                        alt={artist.name}
                        className="absolute inset-0 w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                        <div className="text-base text-white/70 mb-1">{artist.genre}</div>
                        <div className="text-3xl font-bold mb-3">{artist.name}</div>
                        <div className="flex items-center justify-between">
                          <span className="text-lg text-white/90">{artist.price}</span>
                          <span className="px-4 py-1 text-sm bg-black/60 rounded-full border border-yellow-400/30">
                            Subscribed
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Enhanced Progress Card */}
            <Card className="h-[220px] relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${progressImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-400/20 rounded-full">
                    <FaCheck className="text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold">Monthly Progress</h3>
                </div>
                <div className="mt-2 text-7xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  {liveProgressPercentage}%
                </div>
                <div className="text-lg text-white/70 mt-2">Current milestone</div>
                <div className="w-full h-2.5 mt-4 rounded-full bg-white/20 relative overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full transition-all duration-1000"
                    style={{ width: `${liveProgressPercentage}%` }}
                  ></div>
                </div>
              </div>
            </Card>
          </div>

          {/* Column 2 */}
          <div className="lg:col-span-1 space-y-10">

            {/* Enhanced Edit Profile Card */}
            <Card className="relative overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${gif10})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-400/20 rounded-full">
                    <FaEdit className="text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold">Edit Your Profile</h3>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Customize your artist profile to showcase your unique style and connect with fans.
                  Update your bio, social links, and portfolio to attract more collaborations.
                  Lorem ipret dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam quis nostrud exercitation ullamjgzdsfkhvfkfvjgvzkhfgshkfzkhvdskhvdco laboris nisi ut aliquip 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  
                </p>
                <button
  className="w-full py-3 rounded-lg text-lg font-semibold text-white
             bg-white-500/30 hover:bg-white/0
             backdrop-blur-md border border-white/20
             hover:shadow-lg transition-all">
                  EDIT PROFILE
                </button>
              </div>
            </Card>

            {/* Enhanced Cards Section */}
            <div className="flex gap-6">
              {/* AI Matchmaking Card - already bg-black */}
              <Card className="h-[220px] flex flex-col bg-black">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold">
                      AI
                    </div>
                    <h3 className="text-xl font-bold">MATCHMAKING</h3>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed line-clamp-3">
                    Our advanced AI finds perfect collaborators based on your music style, 
                    preferences, and career goals.
                  </p>
                </div>
                <button className="mt-auto w-full py-2 border border-white/30 rounded-lg text-lg font-semibold hover:bg-white/10 transition">
                  EXPLORE
                </button>
              </Card>

              {/* Collab Invites Card - removed glass effect from items */}
              <Card className="h-[220px] flex flex-col bg-gradient-to-br from-blue-900/80 to-black">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold">
                    CI
                  </div>
                  <h3 className="text-xl font-bold text-white">COLLAB INVITES</h3>
                </div>
                <div className="space-y-2 overflow-y-auto flex-grow">
                  {[
                    "New request from DJ Khaled",
                    "Producer XYZ wants to work",
                    "Featured artist opportunity"
                  ].map((item, i) => (
                    <div key={i} className="p-2 bg-white/5 rounded-lg text-sm text-white hover:bg-white/10 transition">
                      {item}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Column 3 */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Enhanced View Profile Card */}
            <Card className="relative overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${viewImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-400/20 rounded-full">
                    <FiEye className="text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold">View Your Profile</h3>
                </div>
                <p className="text-sm text-white/80 leading-relaxed mb-4">
                  See how fans and collaborators view your profile. Make sure it 
                  effectively represents your brand and artistic identity.
                </p>
                <button
  className="w-full py-3 rounded-lg text-lg font-semibold text-white
             bg-white-500/30 hover:bg-white/0
             backdrop-blur-md border border-white/20
             hover:shadow-lg transition-all">
                  VIEW PROFILE
                </button>
              </div>
            </Card>

            {/* Combined Calendar and Events Card - already bg-black */}
            <Card className="flex flex-col lg:flex-row bg-black rounded-2xl overflow-hidden h-[550px] w-[500px]">
              {/* Calendar Section */}
              <div className="lg:w-1/2 p-6 flex-shrink-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold">
                    {monthNames[currentMonth]} <span className="text-red-500">{currentYear}</span>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={handlePrevMonth} className="p-2 hover:bg-white/10 rounded-full transition">
                      <FaChevronLeft size={16} />
                    </button>
                    <button onClick={handleNextMonth} className="p-2 hover:bg-white/10 rounded-full transition">
                      <FaChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Day headers */}
                <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium mb-2">
                  {dayNames.map(day => (
                    <div key={day} className="py-1 text-white/70">{day}</div>
                  ))}
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day, index) => (
                    <div key={index} className="min-h-[50px] p-1 flex flex-col items-center">
                      {day ? (
                        <>
                          <div className={`
                            w-8 h-8 flex items-center justify-center rounded-full
                            ${day.isToday ? "bg-red-500 text-black font-bold" : (day.events.length > 0 ? "text-white" : "text-white/50")}
                            transition-colors duration-200
                          `}>
                            {day.date}
                          </div>
                          {day.events.length > 0 && (
                            <div className="flex gap-1 mt-1">
                              {day.events.map((color, i) => (
                                <div
                                  key={i}
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    color === 'blue' ? 'bg-blue-500' :
                                    color === 'purple' ? 'bg-purple-500' :
                                    'bg-teal-500'
                                  }`}
                                />
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="h-8" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Vertical Divider */}
              <div className="hidden lg:block w-px bg-white/10 my-6" />

              {/* Events Panel */}
              <div className="lg:w-1/2 p-6 flex flex-col overflow-y-auto">
                <div className="text-xl font-bold mb-4">Upcoming Events</div>
                <div className="space-y-4 flex-grow">
                  {/* Today's Events */}
                  <div className="mb-6">
                    <div className="text-lg font-semibold mb-2">
                      TODAY • {today.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                    <div className="space-y-2">
                      <div className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
                        <div className="font-medium mb-1 flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          All Hands Company Meeting
                        </div>
                        <div className="text-sm text-white/70">8:30 - 9:00 AM</div>
                      </div>
                      <div className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
                        <div className="font-medium mb-1 flex items-center gap-2">
                          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                          Quarterly Review
                        </div>
                        <div className="text-sm text-white/70">9:30 - 10:30 AM</div>
                      </div>
                    </div>
                  </div>

                  {/* Tomorrow's Events */}
                  <div>
                    <div className="text-lg font-semibold mb-2">
                      TOMORROW • {new Date(today.getTime() + 86400000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                    <div className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
                      <div className="font-medium mb-1 flex items-center gap-2">
                        <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                        Product Discussion
                      </div>
                      <div className="text-sm text-white/70">10:00 - 11:00 AM</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer
        className="relative z-1 -mt-20 text-center py-1 rounded-t-3xl overflow-hidden w-4xl"
        style={{ backgroundImage: `url(${gif12})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-20 text-white">
          <p className="text-xl font-bold">NetGenome</p>
          <p className="text-sm text-white/70 mt-2">© 2024 All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default ArtistDashboard;