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

// Availability page imports
import bgImage from "../assets/i17.png";
import artist6 from "../assets/artist6.jpg";
import i18 from "../assets/i18.png";

// Icons for Availability section
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.516 8.271-7.444-3.908-7.444 3.908 1.516-8.271-6.064-5.828 8.332-1.151z" />
  </svg>
);

const MagnifyingGlassIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

// Glassmorphism Card Component (more white version)
const GlassCard = ({ title, children }) => (
  <div
    className="p-6 rounded-2xl border border-white/40 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
    style={{
      background: "rgba(255, 255, 255, 0.4)",
      backdropFilter: "blur(18px) saturate(200%)",
      WebkitBackdropFilter: "blur(18px) saturate(200%)",
      boxShadow: "0 8px 30px rgba(0,0,0,0.15)"
    }}
  >
    <h3 className="text-black text-xl font-bold mb-2">{title}</h3>
    <div className="text-black text-sm leading-relaxed">{children}</div>
  </div>
);

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

// Sample artist data aligned with the schema
const artistData = {
  artistID: "ART378238264",
  displayName: "Weeknd",
  priceUSD: 2400,
  imageUrl: profileImg,
  vibeTags: ["Dark R&B", "Synthwave", "Pop"],
  identity: {
    realName: "Abel Makkonen Tesfaye",
    aliases: ["The Weeknd", "Starboy"],
    origin: "Toronto, Canada",
    location: "Los Angeles, USA",
    languages: ["English", "Amharic"],
    gender: "Male",
    birthYear: 1990,
  },
  artistic_background: {
    roles: ["Singer", "Songwriter", "Producer"],
    genres: ["R&B", "Pop", "Synthwave", "Electronic"],
    influences: ["Michael Jackson", "Prince", "Depeche Mode"],
    skills: ["Vocal Performance", "Music Production", "Songwriting"],
    signature_style: "Cinematic, moody soundscapes with introspective lyrics",
  },
  career: {
    education: "Self-taught",
    collaborations: ["Daft Punk", "Drake", "Lana Del Rey"],
    performances: ["Coachella 2018", "Super Bowl LV Halftime Show"],
    awards: ["Grammy Award for Best Urban Contemporary Album", "Juno Award for Artist of the Year"],
    career_evolution: "From underground mixtapes to global pop stardom",
    years_active: "2010-present",
  },
  discography: [
    {
      title: "Echoes of Silence",
      type: "Mixtape",
      year: 2011,
      label: "XO Records",
      details: "A haunting yet melodic journey through heartbreak and mystery.",
    },
    {
      title: "Dawn FM",
      type: "Album",
      year: 2022,
      label: "Republic Records",
      details: "A synthwave experience wrapped in nostalgia and vision.",
    },
    {
      title: "After Hours",
      type: "Album",
      year: 2020,
      label: "XO & Republic",
      details: "Dark, vulnerable, and captivating storytelling through R&B.",
    },
    {
      title: "Starboy",
      type: "Album",
      year: 2016,
      label: "XO & Republic",
      details: "Blending electronic, pop, and urban music into a global hit.",
    },
    {
      title: "Beauty Behind the Madness",
      type: "Album",
      year: 2015,
      label: "XO & Republic",
      details: "The album that skyrocketed The Weeknd to superstardom.",
    },
    {
      title: "Trilogy",
      type: "Compilation",
      year: 2012,
      label: "XO & Republic",
      details: "A compilation of three haunting mixtapes that defined a genre.",
    },
  ],
  creative_process: {
    songwriting_process: "I typically start with a melody that comes to me in the early morning hours. I record voice memos on my phone, then build from there. Lyrics usually come last, and I draw inspiration from personal experiences, dreams, and literature.",
    production_process: "I produce most of my music in my home studio in Los Angeles. I use a combination of analog synths and digital processing to create layered, atmospheric soundscapes. I'm particularly fond of incorporating found sounds and field recordings.",
    creative_rituals: "I often work at night with dim lighting to set the mood, and I always have coffee nearby.",
  },
  availability: {
    current_projects: ["New album in production", "World tour planning"],
    looking_for: ["Visual artists for music videos", "Innovative producers"],
  },
  online_presence: {
    website: "https://www.theweeknd.com",
    social_media: [
      { platform: "Instagram", url: "https://www.instagram.com/weeknd_official", followers: "17.5M" },
      { platform: "Facebook", url: "https://www.facebook.com/weeknd_official", followers: "5M" },
      { platform: "Twitter", url: "https://twitter.com/weeknd", followers: "12M" },
      { platform: "YouTube", url: "https://www.youtube.com/@weekndLive", followers: "10M" },
    ],
    streaming_platforms: [
      { platform: "Apple Music", url: "https://music.apple.com/us/artist/the-weeknd", stats: "45M monthly listeners" },
      { platform: "Spotify", url: "https://spotify.com/theweeknd", stats: "80M monthly listeners" },
      { platform: "SoundCloud", url: "https://soundcloud.com/theweeknd", stats: "2M followers" },
    ],
  },
  commerce: "Official merchandise available at https://shop.theweeknd.com",
  social_impact: "Supports mental health awareness through the Dawn FM Fund, donating proceeds to community programs.",
  quotes: [
    "Music is my therapy and my escape.",
    "I create to connect with people on a deeper level.",
  ],
  fan_press_quotes: [
    "A transformative artist who redefines R&B with every release. - Rolling Stone",
    "The Weeknd's ability to craft cinematic worlds is unmatched. - Pitchfork",
  ],
  classification: "Global Pop Icon",
  lazie_indie_association: "Featured Artist in Lazie Indie 2025 Showcase",
  long_narrative: "Abel Makkonen Tesfaye, known as The Weeknd, emerged from Toronto's underground scene with raw mixtapes that captivated listeners with their dark, cinematic sound. His journey from anonymity to global stardom is a testament to his relentless creativity and vision.",
};

// Album data (updated to match schema)
const albums = artistData.discography.map((item, index) => ({
  src: [album1, album2, album3, album4, album5, album6][index],
  name: item.title,
  releaseDate: item.year.toString(),
  label: item.label,
  details: item.details,
}));

// Review data (updated to use fan_press_quotes)
const reviews = artistData.fan_press_quotes.map((quote, index) => ({
  name: ["Rolling Stone", "Pitchfork", "Billboard", "NME"][index % 4],
  rating: 4 + (index % 2),
  text: quote,
  width: index % 2 === 0 ? 482 : 898,
}));

// Review card component (unchanged)
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
      flexShrink: 0,
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
        gap: width > 800 ? 574 : width > 480 ? 136 : 209,
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
  const [hovered, setHovered] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Gallery data for Availability section (updated to reflect current_projects)
  const gallery = artistData.availability.current_projects.map((project, i) => ({
    id: i,
    title: project,
    img: artist6,
  }));

  const filteredGallery = gallery.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    alert(`Searching for: ${searchTerm}`);
  };

  // Render tab content based on activeTab
  const renderTabContent = () => {
    switch (activeTab) {
      case "Bio":
        return (
          <>
            <p className="text-sm text-gray-300 leading-relaxed">
              {artistData.long_narrative || "No long narrative available."}
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Real Name: {artistData.identity.realName}<br />
              Aliases: {artistData.identity.aliases.join(", ")}<br />
              Born: {artistData.identity.birthYear}<br />
              Gender: {artistData.identity.gender || "Not specified"}
            </p>
            <button className="text-sm text-blue-400 hover:underline">
              VIEW MORE
            </button>
          </>
        );
      case "Artistic Background":
        return (
          <>
            <p className="text-sm text-gray-300 leading-relaxed">
              Roles: {artistData.artistic_background.roles.join(", ")}<br />
              Genres: {artistData.artistic_background.genres.join(", ")}<br />
              Influences: {artistData.artistic_background.influences.join(", ")}<br />
              Skills: {artistData.artistic_background.skills.join(", ")}<br />
              Signature Style: {artistData.artistic_background.signature_style || "Not specified"}
            </p>
            <button className="text-sm text-blue-400 hover:underline">
              VIEW MORE
            </button>
          </>
        );
      case "Career Highlights":
        return (
          <>
            <p className="text-sm text-gray-300 leading-relaxed">
              Education: {artistData.career.education}<br />
              Collaborations: {artistData.career.collaborations.join(", ")}<br />
              Performances: {artistData.career.performances.join(", ")}<br />
              Awards: {artistData.career.awards.join(", ")}<br />
              Career Evolution: {artistData.career.career_evolution || "Not specified"}<br />
              Years Active: {artistData.career.years_active || "Not specified"}
            </p>
            <button className="text-sm text-blue-400 hover:underline">
              VIEW MORE
            </button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* Top Background with Overlay */}
      <motion.div
        className="relative w-full h-[220px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 50 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
      </motion.div>

      {/* Additional background section with i18.png */}
      <motion.div
        className="relative w-full h-[450px] bg-cover bg-center"
        style={{ backgroundImage: `url(${i18})` }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 -mt-100 flex flex-col lg:flex-row max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        {/* Left section */}
        <div className="lg:w-1/3 flex flex-col items-center lg:items-start">
          <img
            src={artistData.imageUrl}
            alt={artistData.displayName}
            className="rounded-full w-40 h-40 object-cover border-4 border-gray-700"
          />
          <div className="mt-6">
            <p className="uppercase text-gray-400 text-sm">Location</p>
            <div className="flex items-center space-x-2 mt-1">
              <FaFlagUsa className="text-red-500" />
              <span>{artistData.identity.location}</span>
            </div>
          </div>

          <div className="mt-6">
            <p className="uppercase text-gray-400 text-sm">Languages</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {artistData.identity.languages.map((lang) => (
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
            <p className="uppercase text-gray-400 text-sm">Vibe Tags</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {artistData.vibeTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-gray-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="flex-1">
          <p className="text-gray-400 uppercase text-sm">{artistData.artistic_background.roles[0]}</p>
          <h1 className="text-5xl font-bold mt-1">{artistData.displayName}</h1>

          <div className="flex gap-4 mt-4">
            <span className="px-4 py-1 bg-gray-800 rounded-full text-sm">
              ID : {artistData.artistID}
            </span>
            <span className="px-4 py-1 bg-gray-800 rounded-full text-sm">
              Price : ${artistData.priceUSD.toLocaleString()} USD
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
            {renderTabContent()}
          </div>
        </div>
      </motion.div>

      {/* Discography Section */}
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
              Explore {artistData.displayName}'s musical evolution through each of these iconic {artistData.discography.length} releases.
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
                      alt={`Album ${album.name}`}
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
                {artistData.creative_process.songwriting_process}
              </p>
              <p className="mt-4 font-semibold">— {artistData.displayName}</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/10 border border-white/20 p-6 rounded-2xl shadow-md backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-4">
                Production Process
              </h3>
              <p className="text-sm md:text-base">
                {artistData.creative_process.production_process}
              </p>
              <p className="mt-4 font-semibold">— {artistData.displayName}</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/10 border border-white/20 p-6 rounded-2xl shadow-md backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-4">
                Creative Rituals
              </h3>
              <p className="text-sm md:text-base">
                {artistData.creative_process.creative_rituals || "No specific rituals shared."}
              </p>
              <p className="mt-4 font-semibold">— {artistData.displayName}</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/10 border border-white/20 p-6 rounded-2xl shadow-md backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-4">
                Current Projects & Opportunities
              </h3>
              <p className="text-sm md:text-base">
                Current Projects: {artistData.availability.current_projects.join(", ")}<br />
                Looking For: {artistData.availability.looking_for.join(", ")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Availability & Opportunities Section */}
      <section
        className="relative w-full min-h-screen flex flex-col items-center p-4 lg:p-10 font-sans"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-white/1 z-0"></div>

        <div className="w-full max-w-7xl flex flex-col gap-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <div className="bg-black p-2 rounded">
              <StarIcon />
            </div>
            <h1
              className="text-black text-2xl md:text-3xl font-bold tracking-wider"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
            >
              AVAILABILITY & OPPORTUNITIES
            </h1>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 mt-2"
          >
            <input
              type="text"
              placeholder="SEARCH PROJECTS..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-black bg-white/35 rounded-lg text-black font-bold w-64"
            />
            <button
              onClick={handleSearch}
              className="p-2 border border-black bg-white/35 rounded-lg hover:bg-gray-200"
            >
              <MagnifyingGlassIcon />
            </button>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-4 overflow-x-auto mt-4 pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent"
          >
            {filteredGallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex-shrink-0 w-72 h-56 rounded-lg overflow-hidden shadow-md border border-purple-300 hover:scale-105 transition-transform"
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </motion.div>
            ))}
            {filteredGallery.length === 0 && (
              <p className="text-white italic">No results found.</p>
            )}
          </motion.div>

          {/* Middle Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"
          >
            <GlassCard title="COMMERCE">
              <p className="text-lg">{artistData.commerce}</p>
              <div className="flex justify-center mt-4">
                <a
                  href={artistData.commerce.split(" at ")[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold shadow-lg bg-black hover:scale-105 transition-all duration-300"
                >
                  Store
                </a>
              </div>
            </GlassCard>

            <GlassCard title="SOCIAL IMPACT">
              <p className="text-lg">{artistData.social_impact}</p>
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                {["Mental Health", "Community Support", "Charity Events"].map((work, idx) => (
                  <button
                    key={idx}
                    className="px-4 py-2 rounded-full text-white font-bold text-sm shadow-md bg-black hover:scale-105 transition-all duration-300"
                  >
                    {work}
                  </button>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"
          >
            <div
              className="p-6 rounded-2xl font-mono text-white"
              style={{
                background: "rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(14px) saturate(180%)",
                WebkitBackdropFilter: "blur(14px) saturate(180%)",
                boxShadow: "0 4px 30px rgba(0,0,0,0.3)"
              }}
            >
              <span className="text-purple-300">//classification</span> → {artistData.classification}
            </div>

            <div
              className="p-6 rounded-2xl font-mono text-black hover:scale-[1.02] transition-all duration-300"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(20px) saturate(200%)",
                WebkitBackdropFilter: "blur(20px) saturate(200%)",
                boxShadow: "0 8px 40px rgba(255,255,255,0.4), inset 0 1px 0 rgba(255,255,255,0.6)"
              }}
            >
              <span className="text-purple-600 font-bold">lazie_indie_association</span> → {artistData.lazie_indie_association}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Review Section (Online Presence) */}
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
          <p className="mt-2 font-semibold uppercase">Fan & Press Quotes</p>
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
          <img
            src={launch1}
            alt="Top Right Hands"
            className="absolute right-0 bottom-35 w-[50vw] max-w-[900px] transform rotate-[260deg] z-0 opacity-80"
          />
          <img
            src={launch1}
            alt="Bottom Left Hands"
            className="absolute top-35 left-0 w-[50vw] max-w-[900px] transform rotate-[90deg] z-0 opacity-80"
          />
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
              {artistData.online_presence.social_media.slice(0, 2).map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center hover:scale-105 transition-transform"
                >
                  {social.platform === "Instagram" && <FaInstagram size={28} className="text-pink-500 mb-2" />}
                  {social.platform === "Facebook" && <FaFacebookF size={28} className="text-blue-500 mb-2" />}
                  <span className="uppercase font-semibold">{social.platform}</span>
                  <span className="text-white/70">@{social.url.split("/").pop()}</span>
                  <span className="text-white/70">{social.followers}</span>
                </a>
              ))}
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
              {artistData.online_presence.social_media.slice(2).map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center hover:scale-105 transition-transform"
                >
                  {social.platform === "Twitter" && <FaXTwitter size={28} className="text-white mb-2" />}
                  {social.platform === "YouTube" && <FaYoutube size={28} className="text-red-600 mb-2" />}
                  <span className="uppercase font-semibold">{social.platform}</span>
                  <span className="text-white/70">@{social.url.split("/").pop()}</span>
                  <span className="text-white/70">{social.followers}</span>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Streaming Platforms and Quotes Section with Background GIF */}
      <section className="relative w-full min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">
        {/* Full-bleed Background GIF */}
        <img
          src={v2Gif}
          alt="Background Animation"
          className="absolute inset-0 w-full h-full object-cover z-0"
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
              Now streaming on various platforms
            </p>
            <p className="text-sm text-white/80 mb-6 leading-relaxed">
              Discover {artistData.displayName}'s music across major platforms, with {artistData.online_presence.streaming_platforms[0].stats} on {artistData.online_presence.streaming_platforms[0].platform}.
            </p>
            <div className="flex flex-wrap gap-6 text-white/90">
              {artistData.online_presence.streaming_platforms.map((platform, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  {platform.platform === "Apple Music" && <FaApple size={20} />}
                  {platform.platform === "Spotify" && <FaSpotify size={20} />}
                  {platform.platform === "SoundCloud" && <FaSoundcloud size={20} />}
                  <a href={platform.url} target="_blank" rel="noopener noreferrer">
                    {platform.platform}
                  </a>
                </div>
              ))}
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
            {artistData.quotes.map((quote, idx) => (
              <p key={idx} className="text-sm text-white/80 leading-relaxed mb-4">
                "{quote}" — {artistData.displayName}
              </p>
            ))}
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
                    <a href={artistData.online_presence.social_media.find(s => s.platform === "Instagram")?.url}>Instagram</a>
                  </li>
                  <li>
                    <a href={artistData.online_presence.social_media.find(s => s.platform === "Twitter")?.url}>Twitter</a>
                  </li>
                  <li>
                    <a href={artistData.online_presence.social_media.find(s => s.platform === "Facebook")?.url}>Facebook</a>
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