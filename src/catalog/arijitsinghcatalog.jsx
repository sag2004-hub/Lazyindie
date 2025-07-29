import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MapPin, Globe, Music, Star, Quote, Calendar, Link as LinkIcon, Instagram, Twitter, Facebook, Youtube, Album } from "lucide-react";
import { SiSpotify, SiApplemusic, SiSoundcloud } from "react-icons/si";
import { Link } from "react-router-dom";
import catalog1 from "../assets/i15.png"; // Your splash screen and desired background image
import artist6 from "../assets/artist5.jpg";

// Placeholder images for discography. Replace these with actual image paths.
import albumCover1 from "../assets/dawnfm.jpg"; // Example: path to The Weeknd's Dawn FM cover
import albumCover2 from "../assets/afterhours.jpg"; // Example: path to The Weeknd's After Hours cover
import albumCover3 from "../assets/starboy.png"; // Example: path to The Weeknd's Starboy cover
import albumCover4 from "../assets/beauty.jpg";
import albumCover5 from "../assets/kiss.jpg";
import albumCover6 from "../assets/trilogy.jpg";

const WeekndCatalog = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    { name: "Bio", icon: <Star className="w-4 h-4" /> },
    { name: "Discography", icon: <Album className="w-4 h-4" /> },
    { name: "Creative Process", icon: <Music className="w-4 h-4" /> },
    { name: "Career Highlights", icon: <Calendar className="w-4 h-4" /> },
    { name: "Quotes", icon: <Quote className="w-4 h-4" /> },
    { name: "Online Presence", icon: <LinkIcon className="w-4 h-4" /> }
  ];

  const discographyItems = [
    {
      title: "Dawn FM",
      type: "Album",
      year: "2022",
      label: "XO Records",
      description: "A conceptual album presented as a radio station broadcasting from purgatory, blending 80s synth-pop with contemporary R&B, receiving widespread critical acclaim.",
      image: albumCover1
    },
    {
      title: "After Hours",
      type: "Album",
      year: "2020",
      label: "Republic Records",
      description: "A landmark album that explored themes of hedonism and loneliness, featuring hit singles like 'Blinding Lights' and 'Heartless', becoming a global phenomenon.",
      image: albumCover2
    },
    {
      title: "Starboy",
      type: "Album",
      year: "2016",
      label: "XO / Republic Records",
      description: "Incorporating elements of EDM and hip hop, this album saw The Weeknd collaborate with Daft Punk and featured numerous chart-topping tracks.",
      image: albumCover3
    },
    {
      title: "Beauty Behind the Madness",
      type: "Album",
      year: "2015",
      label: "XO / Republic Records",
      description: "His breakthrough album featuring mega-hits like 'Can't Feel My Face' and 'The Hills', cementing his status as a global pop star.",
      image: albumCover4
    },
    {
      title: "Kiss Land",
      type: "Album",
      year: "2013",
      label: "XO / Republic Records",
      description: "A more experimental album that delved into themes of touring life and the darker side of fame, showcasing a more cinematic sound.",
      image: albumCover5
    },
    {
      title: "Trilogy",
      type: "Compilation Album",
      year: "2012",
      label: "XO / Republic Records",
      description: "A compilation of his three critically acclaimed mixtapes: House of Balloons, Thursday, and Echoes of Silence, marking his major label debut.",
      image: albumCover6
    },
  ];

  const creativeProcesses = [
    {
      title: "🖋️ Songwriting Process",
      content: "I typically start with a melody that comes to me in the early morning hours. I record voice memos on my phone, then build from there. Lyrics usually come last, and I draw inspiration from personal experiences, dreams, and literature. I like to create a visual mood board for each song to help guide the emotional landscape I'm trying to create.",
      author: "The Weeknd"
    },
    {
      title: "🎛️ Production Process",
      content: "I produce most of my music in my home studio in Los Angeles. I use a combination of analog synths and digital processing to create layered, atmospheric soundscapes. I'm particularly fond of incorporating found sounds and field recordings into my productions. For vocals, I often record in unusual spaces to capture unique reverberations and acoustics.",
      author: "The Weeknd"
    },
    {
      title: "📅 Current Projects",
      content: null,
      list: [
        "New studio album (expected early 2024)",
        "World tour planning",
        "Collaborative EP with electronic producer",
        "Soundtrack for upcoming film"
      ]
    },
    {
      title: "🔍 Looking For",
      content: null,
      list: [
        "Collaborations with visual artists",
        "Film and TV sync opportunities",
        "Remix opportunities",
        "Festival bookings"
      ]
    }
  ];

  const quotes = [
    {
      quote: "The Weeknd creates sonic landscapes that feel like dreams you never want to wake up from.",
      source: "Pitchfork",
    },
    {
      quote: "My music is an extension of my subconscious. I'm trying to translate feelings that are difficult to put into words.",
      source: "The Weeknd, BBC Radio 1 Interview",
    },
    {
      quote: "Weeknd's voice has an otherworldly quality that transcends the electronic production, creating something truly unique in today's music landscape.",
      source: "Rolling Stone",
    },
    {
      quote: "I believe in creating music that exists in its own universe. Each album is a different planet in that universe.",
      source: "The Weeknd, Songwriter's Podcast",
    },
  ];

  const careerHighlights = [
    {
      year: "2022",
      title: "Dawn FM",
      subtitle: "Album • XO Records",
      description: "A critically acclaimed album that blends R&B, pop, and electronic influences with conceptual storytelling."
    },
    {
      year: "2021",
      title: "Super Bowl Halftime Show",
      subtitle: "Headline Performance",
      description: "Historic performance that became one of the most-watched halftime shows in history."
    },
    {
      year: "2020",
      title: "After Hours",
      subtitle: "Album • Republic Records",
      description: "Breakthrough album that dominated charts worldwide and spawned multiple #1 hits."
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 0: // Bio
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg font-bold text-white leading-relaxed">
              Abel Makkonen Tesfaye, known professionally as The Weeknd, is a Canadian singer, songwriter, and record producer known for his sonic versatility and dark lyricism.
            </p>
            <p className="text-base text-gray-400 leading-relaxed">
              Emerging from Toronto's underground music scene in 2010, The Weeknd first gained recognition after anonymously uploading several songs to YouTube. His distinctive sound incorporates R&B, pop, and alternative influences, characterized by his falsetto vocals and atmospheric production. He has won numerous awards including four Grammy Awards and twenty Billboard Music Awards.
            </p>

            <div className="bg-gradient-to-r from-emerald-900/50 to-blue-900/50 p-6 rounded-xl border border-emerald-500/20">
              <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                <Music className="w-5 h-5 text-emerald-400" />
                Latest Release
              </h3>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-emerald-300">Dawn FM</h4>
                <p className="text-gray-400 text-sm">Album • 2022 • XO Records</p>
                <p className="text-white/80 text-sm">
                  A conceptual album presented as a radio station broadcasting from purgatory, blending 80s synth-pop with contemporary R&B.
                </p>
              </div>
            </div>
          </motion.div>
        );

      case 1: // Discography
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Album className="w-7 h-7 text-emerald-400" /> DISCOGRAPHY
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {discographyItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300 flex flex-col items-start"
                >
                  <motion.div
                    className="w-full h-48 md:h-52 lg:h-48 overflow-hidden rounded-md mb-4 flex items-center justify-center bg-gray-700"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.image ? (
                      <img src={item.image} alt={`${item.title} cover`} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-gray-400 text-sm">No Image</div>
                    )}
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base mb-2">{item.type} • {item.year} • {item.label}</p>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 2: // Creative Process
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {creativeProcesses.map((process, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-white">{process.title}</h3>
                {process.content && (
                  <>
                    <p className="text-white/80 mb-3 leading-relaxed">{process.content}</p>
                    <p className="text-emerald-400 font-medium">— {process.author}</p>
                  </>
                )}
                {process.list && (
                  <ul className="space-y-2">
                    {process.list.map((item, listIdx) => (
                      <li key={listIdx} className="flex items-start gap-3 text-white/80">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </motion.div>
        );

      case 3: // Career Highlights
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {careerHighlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-r from-blue-900/30 to-emerald-900/30 p-6 rounded-xl border border-blue-500/20 hover:border-emerald-400/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {highlight.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{highlight.title}</h3>
                    <p className="text-blue-400 text-sm mb-2">{highlight.subtitle}</p>
                    <p className="text-white/80 leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );

      case 4: // Quotes
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {quotes.map((q, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-r from-emerald-900/40 to-blue-900/40 p-6 rounded-xl border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-emerald-400 mb-3" />
                <p className="text-white italic text-lg mb-4 leading-relaxed">"{q.quote}"</p>
                <p className="text-emerald-300 font-medium">— {q.source}</p>
              </motion.div>
            ))}
          </motion.div>
        );

      case 5: // Online Presence
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <LinkIcon className="w-7 h-7 text-emerald-400" /> ONLINE PRESENCE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Official Website */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <LinkIcon className="w-5 h-5 text-blue-400" /> Official Website
                </h3>
                <a href="https://www.theweeknd.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-lg">
                  www.theweeknd.com
                </a>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <Instagram className="w-5 h-5 text-blue-400" /> Social Media
                </h3>
                <div className="space-y-2">
                  <a href="https://www.instagram.com/theweeknd" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:underline">
                    <Instagram className="w-4 h-4" /> Instagram
                  </a>
                  <a href="https://twitter.com/theweeknd" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:underline">
                    <Twitter className="w-4 h-4" /> Twitter
                  </a>
                  <a href="https://www.facebook.com/theweeknd" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:underline">
                    <Facebook className="w-4 h-4" /> Facebook
                  </a>
                  {/* Corrected YouTube Link */}
                  <a href="https://www.youtube.com/user/TheWeekndVEVO" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:underline">
                    <Youtube className="w-4 h-4" /> YouTube
                  </a>
                </div>
              </div>

              {/* Streaming Platforms */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <SiSpotify className="w-5 h-5 text-blue-400" /> Streaming Platforms
                </h3>
                <div className="space-y-2">
                  {/* Corrected Spotify Link */}
                  <a href="https://open.spotify.com/artist/1Xyo4u8uXC1CJUEptGzNkZ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:underline">
                    <SiSpotify className="w-4 h-4" /> Spotify
                  </a>
                  <a href="https://music.apple.com/us/artist/the-weeknd/322634351" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:underline">
                    <SiApplemusic className="w-4 h-4" /> Apple Music
                  </a>
                  <a href="https://soundcloud.com/theweeknd" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:underline">
                    <SiSoundcloud className="w-4 h-4" /> SoundCloud
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-hidden">
      <AnimatePresence>
        {showSplash ? (
          <motion.div
            key="splash"
            className="w-full h-screen relative flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.img
              src={catalog1}
              alt="Splash"
              className="absolute w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
            <motion.h1
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-[140px] md:text-[240px] font-bold text-white font-serif z-10 relative"
              style={{
                fontFamily: "Recoleta, serif",
                textShadow: "0 0 50px rgba(0,255,200,0.3)"
              }}
            >
              Weeknd
            </motion.h1>

            {/* Loading indicator */}
            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            className="w-full min-h-screen relative text-white px-6 md:px-20 pb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Minimalist Dark with Subtle Geometric Pattern */}
            <div
              className="absolute inset-0 z-0 bg-black"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0),
                  radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)
                `,
                backgroundSize: '40px 40px',
                backgroundPosition: '0 0, 20px 20px'
              }}
            ></div>
            {/* Gradient overlay to add subtle color */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-emerald-900/5 via-transparent to-blue-900/5"></div>


            {/* Back Button */}
            <motion.div
              className="fixed top-6 left-6 z-50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/home"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-emerald-500/20 transition-all duration-300 group border border-emerald-500/30"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back
              </Link>
            </motion.div>

            <section className="pt-24 max-w-7xl mx-auto relative z-10"> {/* Ensure content is above background */}
              <div className="flex flex-col lg:flex-row gap-12">
                {/* Left Profile Card */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="lg:w-80 flex-shrink-0"
                >
                  <div className="bg-gradient-to-b from-gray-900/50 to-black/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm sticky top-24">
                    <div className="text-center">
                      <motion.div
                        className="relative inline-block mb-6"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <img
                          src={artist6}
                          alt="Artist"
                          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto shadow-2xl border-4 border-emerald-500/30"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-emerald-600/20 to-transparent" />
                      </motion.div>

                      <div className="mb-6">
                        <p className="uppercase text-gray-400 text-sm font-medium tracking-wider">Singer • Producer</p>
                        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent mb-2">
                          The Weeknd
                        </h1>
                        <div className="flex flex-col gap-1 text-sm text-gray-400">
                          <span className="font-mono">ID: #372832864</span>
                          <span className="text-xl font-bold text-emerald-400">$2,400 USD</span>
                        </div>
                      </div>

                      <div className="space-y-6 text-sm text-left">
                        <div>
                          <h4 className="text-gray-400 uppercase text-xs font-semibold tracking-wider mb-2 flex items-center gap-2">
                            <MapPin className="w-3 h-3" />
                            Location
                          </h4>
                          <p className="text-white">Los Angeles, USA</p>
                        </div>

                        <div>
                          <h4 className="text-gray-400 uppercase text-xs font-semibold tracking-wider mb-3 flex items-center gap-2">
                            <Globe className="w-3 h-3" />
                            Languages
                          </h4>
                          <div className="flex gap-2 flex-wrap">
                            {["English", "French", "Amharic"].map((lang, idx) => (
                              <motion.span
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gradient-to-r from-emerald-600/20 to-blue-600/20 border border-emerald-500/30 px-3 py-1 rounded-full text-white text-xs font-medium"
                              >
                                {lang}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-gray-400 uppercase text-xs font-semibold tracking-wider mb-3 flex items-center gap-2">
                            <Music className="w-3 h-3" />
                            Genres
                          </h4>
                          <div className="flex gap-2 flex-wrap">
                            {["R&B", "Pop", "Alternative", "Hip Hop", "Electronic"].map((genre, idx) => (
                              <motion.span
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gradient-to-r from-emerald-600/20 to-blue-600/20 border border-emerald-500/30 px-3 py-1 rounded-full text-white text-xs font-medium"
                              >
                                {genre}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right Content Area */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex-1"
                >
                  {/* Tab Navigation */}
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2 border-b border-gray-800">
                      {tabs.map((tab, idx) => (
                        <motion.button
                          key={idx}
                          onClick={() => setActiveTab(idx)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`flex items-center gap-2 px-6 py-3 rounded-t-lg font-medium transition-all duration-300 ${
                            activeTab === idx
                              ? "bg-gradient-to-r from-emerald-600/20 to-blue-600/20 border-b-2 border-emerald-500 text-white"
                              : "text-gray-400 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {tab.icon}
                          {tab.name}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Tab Content */}
                  <div className="min-h-[600px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {renderTabContent()}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WeekndCatalog;