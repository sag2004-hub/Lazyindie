import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFlagUsa } from "react-icons/fa";
import profileImg from "../assets/artist5.jpg";
import bgImg from "../assets/catalog1.png";
import v2Gif from "../assets/gif9.gif";

// Imports from the second code block
import { Star, User } from "lucide-react";
import { FaMusic } from "react-icons/fa";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaSpotify,
  FaSoundcloud,
  FaApple,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

// Asset imports from the second code block
import logo from "../assets/logo.png";
import album1 from "../assets/afterhours.jpg";
import album2 from "../assets/dawnfm.jpg";
import album3 from "../assets/kiss.jpg";
import album4 from "../assets/starboy.png";
import album5 from "../assets/beauty.jpg";
import album6 from "../assets/trilogy.jpg";

import i15 from "../assets/gif5.gif";
import launch1 from "../assets/launch1.png";
import gif6 from "../assets/gif6.gif";
import footerImg from "../assets/footer.png";

// Animation variants (from ArtistProfile)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

// Album data (from Discography)
const albums = [
  {
    src: album1,
    name: "Echoes of Silence",
    releaseDate: "2020-06-12",
    label: "XO Records",
    details: "A haunting yet melodic journey through heartbreak and mystery.",
  },
  {
    src: album2,
    name: "Dawn FM",
    releaseDate: "2022-01-07",
    label: "Republic Records",
    details: "A synthwave experience wrapped in nostalgia and vision.",
  },
  {
    src: album3,
    name: "After Hours",
    releaseDate: "2020-03-20",
    label: "XO & Republic",
    details: "Dark, vulnerable, and captivating storytelling through R&B.",
  },
  {
    src: album4,
    name: "Starboy",
    releaseDate: "2016-11-25",
    label: "XO & Republic",
    details: "Blending electronic, pop, and urban music into a global hit.",
  },
  {
    src: album5,
    name: "Beauty Behind the Madness",
    releaseDate: "2015-08-28",
    label: "XO & Republic",
    details: "The album that skyrocketed The Weeknd to superstardom.",
  },
  {
    src: album6,
    name: "Trilogy",
    releaseDate: "2012-11-13",
    label: "XO & Republic",
    details: "A compilation of three haunting mixtapes that defined a genre.",
  },
];

// Review data (from ArtistProfile)
const reviews = [
  {
    name: "Rupam Islam",
    rating: 4,
    text: "Weeknd's music has been transformative for my creative process. His unique blend of dark R&B and pop creates an atmosphere unlike any other artist today.",
    width: 482,
  },
  {
    name: "Sophie Chen",
    rating: 5,
    text: "The production quality on every track is exceptional. The way he layers vocals and instruments creates such a rich, immersive experience.",
    width: 482,
  },
  {
    name: "Arijit Singh",
    rating: 4,
    text: "As a fellow artist, I deeply admire Weeknd's songwriting. His ability to craft narratives that feel both deeply personal and universally relatable is remarkable. The way he blends vulnerability with confidence in his lyrics is something I strive for in my own work.",
    width: 898,
  },
  {
    name: "Kr$na",
    rating: 4,
    text: "Weeknd's evolution as an artist is inspiring. From the raw sounds of Trilogy to the polished production of After Hours, he's managed to stay true to his vision while pushing boundaries.",
    width: 477,
  },
  {
    name: "Maria Garcia",
    rating: 5,
    text: "The thematic depth in his albums is incredible. Each project tells a complete story, with visuals and music working together to create a cohesive artistic statement. The way he builds worlds around his music is something more artists should aspire to.",
    width: 898,
  },
  {
    name: "David Kim",
    rating: 4,
    text: "His vocal range and control are unmatched in contemporary R&B. The emotion he conveys through his voice alone is powerful enough to carry entire songs.",
    width: 477,
  },
];

// Review card component (from ArtistProfile)
const ReviewCard = ({ name, rating, text, width, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    style={{
      width,
      height: 305,
      position: "relative",
      background: "rgba(255, 255, 255, 0.05)",
      overflow: "hidden",
      borderRadius: 16,
      flexShrink: 0, // Ensure cards don't shrink in horizontal layout
      marginBottom: 20,
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.1)",
    }}
  >
    <div
      style={{
        left: 26,
        top: 30,
        position: "absolute",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: width > 800 ? 574 : width > 480 ? 136 : 209, // Original gap logic
        display: "inline-flex",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
        <User size={24} color="white" />
        <div
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "Monda",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          {name}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            size={20}
            color={i < rating ? "#FFBE0B" : "white"}
            fill={i < rating ? "#FFBE0B" : "none"}
          />
        ))}
      </div>
    </div>

    <div
      style={{
        width: width - 57,
        left: 26,
        top: 82,
        position: "absolute",
        color: "white",
        fontSize: 16,
        fontFamily: "Monda",
        fontWeight: "400",
        wordWrap: "break-word",
      }}
    >
      {text}
    </div>
  </motion.div>
);

const tabs = ["Bio", "Artistic Background", "Career Highlights"];

const ArtistProfile = () => {
  const [activeTab, setActiveTab] = useState("Bio");
  const [hovered, setHovered] = useState(null); // State for Discography component

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* Top Background with Overlay */}
      <motion.div
        className="relative w-full h-[220px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 -mt-16 flex flex-col lg:flex-row p-8 gap-8 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }} // delay to wait for bg animation
      >
        {/* Left section */}
        <div className="lg:w-1/3 flex flex-col items-center lg:items-start">
          <img
            src={profileImg}
            alt="Weeknd"
            className="rounded-full w-40 h-40 object-cover border-4 border-gray-700"
          />
          <div className="mt-6">
            <p className="uppercase text-gray-400 text-sm">Location</p>
            <div className="flex items-center space-x-2 mt-1">
              <FaFlagUsa className="text-red-500" />
              <span>USA</span>
            </div>
          </div>

          <div className="mt-6">
            <p className="uppercase text-gray-400 text-sm">Languages</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {["English", "French", "German"].map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 text-sm rounded-full bg-gray-800"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="uppercase text-gray-400 text-sm">Genre</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Rock", "Pop", "EDM", "Hip Hop", "Lorem Ipsum"].map((genre) => (
                <span
                  key={genre}
                  className="px-3 py-1 text-sm rounded-full bg-gray-800"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="flex-1">
          <p className="text-gray-400 uppercase text-sm">Singer</p>
          <h1 className="text-5xl font-bold mt-1">Weeknd</h1>

          <div className="flex gap-4 mt-4">
            <span className="px-4 py-1 bg-gray-800 rounded-full text-sm">
              ID : 378238264
            </span>
            <span className="px-4 py-1 bg-gray-800 rounded-full text-sm">
              Price : $2,400 USD
            </span>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 mt-8 border-b border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 transition-all ${
                  activeTab === tab
                    ? "text-white border-b-2 border-green-500"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-6 space-y-4 max-h-[250px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            <p className="text-sm text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <button className="text-sm text-blue-400 hover:underline">
              VIEW MORE
            </button>
          </div>
        </div>
      </motion.div>

      {/* Discography Section (formerly Discography component) */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full min-h-screen bg-black text-white font-monda px-8 py-16"
      >
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Info Section */}
          <div className="lg:w-[25%] flex flex-col space-y-5">
            <div className="flex items-center space-x-4">
              <FaMusic className="text-green-400 text-7xl" />
              <h1 className="text-3xl md:text-5xl font-bold">DISCOGRAPHY</h1>
            </div>
            <img src={logo} alt="Logo" className="w-20" />
            <h2 className="text-xl md:text-3xl font-bold">RECENTS</h2>
            <p className="text-sm md:text-base leading-relaxed text-justify">
              Explore the musical evolution through each of these iconic albums.
              From ethereal sounds to bold lyrical storytelling, this collection
              showcases versatility and emotional depth. Get lost in melodies,
              lyrics, and moods.
            </p>
          </div>

          {/* Album Carousel */}
          <div className="flex-1 overflow-x-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-green-500 rounded-md">
            <div className="flex gap-6 h-[500px] md:h-[600px]">
              {albums.map((album, index) => {
                const isHovered = hovered === index;
                const isAnyHovered = hovered !== null;

                return (
                  <div
                    key={index}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                    className={`relative rounded-xl overflow-hidden transition-all duration-500 flex-shrink-0
                     ${
                       isHovered
                         ? "w-[60vw] md:w-[35vw]"
                         : isAnyHovered
                         ? "w-[7vw] md:w-[6vw]"
                         : index === 0
                         ? "w-[60vw] md:w-[35vw]"
                         : "w-[10vw] md:w-[8vw]"
                     } h-full group cursor-pointer`}
                  >
                    <img
                      src={album.src}
                      alt={`Album ${index + 1}`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-start p-4 text-white">
                      <p className="text-lg md:text-xl font-bold mb-2">
                        {album.name}
                      </p>
                      <p className="text-sm">Release: {album.releaseDate}</p>
                      <p className="text-sm">Label: {album.label}</p>
                      <p className="text-sm mt-2">{album.details}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Creative Process Section */}
      <section className="relative w-full min-h-screen overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="absolute inset-0"
        >
          <img
            src={i15}
            alt="Background"
            className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-screen z-0 opacity-60 pointer-events-none"
            style={{ objectFit: "contain" }}
          />
          <div className="absolute inset-0 bg-black/40 z-0" />
        </motion.div>

        <div className="relative z-10 max-w-6xl w-full mx-auto px-4 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-10 flex items-center gap-2"
          >
            <span>🧠 CREATIVE PROCESSES</span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white/10 border border-white/20 p-6 rounded-2xl shadow-md backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-4">
                Songwriting Process
              </h3>
              <p className="text-sm md:text-base">
                "I typically start with a melody that comes to me in the early
                morning hours. I record voice memos on my phone, then build from
                there. Lyrics usually come last, and I draw inspiration from
                personal experiences, dreams, and literature."
              </p>
              <p className="mt-4 font-semibold">— Weeknd</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/10 border border-white/20 p-6 rounded-2xl shadow-md backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-4">
                Production Process
              </h3>
              <p className="text-sm md:text-base">
                "I produce most of my music in my home studio in Los Angeles. I
                use a combination of analog synths and digital processing to
                create layered, atmospheric soundscapes. I'm particularly fond
                of incorporating found sounds and field recordings."
              </p>
              <p className="mt-4 font-semibold">— Weeknd</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/10 border border-white/20 p-6 rounded-2xl shadow-md backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-4">
                Current Projects
              </h3>
              <p className="text-sm md:text-base">
                Currently working on new material that explores darker themes
                while pushing sonic boundaries. Collaborating with innovative
                producers to create something that feels both fresh and
                authentically Weeknd.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/10 border border-white/20 p-6 rounded-2xl shadow-md backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Looking For</h3>
              <p className="text-sm md:text-base">
                Seeking unique visual artists and directors who can help bring
                the next chapter to life. Also interested in collaborating with
                forward-thinking producers who understand the Weeknd aesthetic
                but can bring new perspectives.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Review Section */}
      <section className="w-full px-4 md:px-20 py-16 bg-black text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <span>💬</span> ONLINE PRESENCE
          </h2>
          <p className="mt-2 font-semibold uppercase">Reviews</p>
          <p className="text-sm text-white/50 mt-1">Scroll to explore →</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div
            className="flex gap-5 overflow-x-auto pb-4 scroll-smooth"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(255,255,255,0.3) rgba(255,255,255,0.1)",
            }}
          >
            {reviews.map((review, idx) => (
              <ReviewCard key={idx} index={idx} {...review} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Social Media Section */}
      <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0"
        >
          {/* Top-right inverted hands image */}
          <img
            src={launch1}
            alt="Top Right Hands"
            className="absolute right-0 bottom-35 w-[50vw] max-w-[900px] transform rotate-[260deg] z-0 opacity-80"
          />

          {/* Bottom-left flat hands image */}
          <img
            src={launch1}
            alt="Bottom Left Hands"
            className="absolute top-35 left-0 w-[50vw] max-w-[900px] transform rotate-[90deg] z-0 opacity-80"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10" />
        </motion.div>

        <div className="relative z-20 flex flex-col items-center justify-around h-full py-16 px-6 text-white w-full max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-left text-2xl md:text-3xl font-bold w-full mb-12"
          >
            SOCIAL MEDIA
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="flex flex-col md:flex-row items-center justify-around gap-12 w-full"
          >
            {/* Left Socials */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-10 text-sm md:items-end"
            >
              <a
                href="https://www.instagram.com/weeknd_official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center hover:scale-105 transition-transform"
              >
                <FaInstagram size={28} className="text-pink-500 mb-2" />
                <span className="uppercase font-semibold">Instagram</span>
                <span className="text-white/70">@weeknd_official</span>
              </a>

              <a
                href="https://www.facebook.com/weeknd_official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center hover:scale-105 transition-transform"
              >
                <FaFacebookF size={28} className="text-blue-500 mb-2" />
                <span className="uppercase font-semibold">Facebook</span>
                <span className="text-white/70">@weeknd_official</span>
              </a>
            </motion.div>

            {/* Center Globe GIF */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-shrink-0 w-52 md:w-82 lg:w-96 order-first md:order-none opacity-45"
            >
              <img src={gif6} alt="Globe Animation" className="w-full h-auto" />
            </motion.div>

            {/* Right Socials */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-10 text-sm md:items-start"
            >
              <a
                href="https://twitter.com/weeknd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center hover:scale-105 transition-transform"
              >
                <FaXTwitter size={28} className="text-white mb-2" />
                <span className="uppercase font-semibold">Twitter</span>
                <span className="text-white/70">@weeknd</span>
              </a>

              <a
                href="https://www.youtube.com/@weekndLive"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center hover:scale-105 transition-transform"
              >
                <FaYoutube size={28} className="text-red-600 mb-2" />
                <span className="uppercase font-semibold">YouTube</span>
                <span className="text-white/70">@weekndLive</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Streaming Platforms and Quotes Section with Background GIF */}
      <section className="relative w-full min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">
        {/* Background GIF */}
        <img
          src={v2Gif}
          alt="Background Animation"
          className="absolute inset-0 w-screen h-full object-cover z-0"
        />

        <div className="relative z-10 flex flex-col md:flex-row gap-8 max-w-6xl w-full justify-center">
          {/* Streaming Platforms Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-white w-full md:w-1/2 shadow-lg"
          >
            <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
              STREAMING PLATFORMS
            </h2>
            <p className="text-sm text-white/60 mb-4">
              now streaming on various platforms
            </p>
            <p className="text-sm text-white/80 mb-6 leading-relaxed">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla "
            </p>
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <FaApple size={20} />
                <span>Apple Music</span>
              </div>
              <div className="flex items-center gap-2">
                <FaSpotify size={20} />
                <span>Spotify</span>
              </div>
              <div className="flex items-center gap-2">
                <FaSoundcloud size={20} />
                <span>SoundCloud</span>
              </div>
            </div>
          </motion.div>

          {/* Quotes Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-white w-full md:w-1/2 shadow-lg"
          >
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
              QUOTES
            </h2>
            <p className="text-sm text-white/80 leading-relaxed mb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla "
            </p>
            <p className="text-sm text-white/80 leading-relaxed">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              <span className="text-blue-300">Ut enim ad minim veniam</span>,
              quis nostrud in{" "}
              <span className="text-blue-300">reprehenderit in voluptate</span>{" "}
              velit esse cillum dolore eu fugiat nulla "
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full bg-[#181818] text-white px-6 md:px-24 pt-12 pb-0"
      >
        <footer className="text-white text-sm">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="max-w-md">
              <p className="text-lg font-serif">
                NetGenome is the platform<br />
                every music artist dreams of.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white/60 mb-2">LEGAL</h4>
                <ul className="space-y-1">
                  <li>
                    <a href="#">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white/60 mb-2">SOCIALS</h4>
                <ul className="space-y-1">
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white/60 mb-2">IMPORTANT</h4>
                <ul className="space-y-1">
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <a href="#">Find Artist</a>
                  </li>
                  <li>
                    <a href="#">Sponsors</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full mt-12">
            <img
              src={footerImg}
              alt="Footer Decoration"
              className="w-full object-contain object-bottom select-none pointer-events-none"
            />
          </div>
        </footer>
      </motion.section>
    </div>
  );
};

export default ArtistProfile;