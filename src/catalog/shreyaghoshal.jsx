import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaThLarge } from "react-icons/fa";
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
import artist7 from "../assets/artist7.jpg";
import i18 from "../assets/i18.png";
import i19 from "../assets/i19.png";
import i20 from "../assets/i20.png";
import i21 from "../assets/i21.png";
import i22 from "../assets/i22.png";
import i23 from "../assets/i23.png";
import i24 from "../assets/i24.png";

// Icons for Availability section
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.516 8.271-7.444-3.908-7.444 3.908 1.516-8.271-6.064-5.828 8.332-1.151z" />
  </svg>
);

const StarIcon2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" viewBox="0 0 24 24" fill="currentColor">
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
  const [searchActive, setSearchActive] = useState(false);
  const [activeTab, setActiveTab] = useState("Bio");
  const [hovered, setHovered] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activePanel, setActivePanel] = useState("association");
  const [hover, setHover] = useState(false);

  // Gallery data for Availability section (updated to reflect current_projects)
  const gallery = artistData.availability.current_projects.map((project, i) => ({
    id: i,
    title: project,
    img: artist6,
  }));
const ensureEvenItems = (items) => {
  return items.length % 2 !== 0
    ? [...items, items[items.length - 1]]
    : items;
};
const classificationItems = ensureEvenItems(
    Array(5).fill({
      title: "Creative Control & Self-Management",
      description:
        "Lyia oversees her own creative direction, songwriting, production partnerships, and career strategy — key traits of independent artistry.",
    })
  );
  
const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };
  
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
    <div className="space-y-6 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Roles Card */}
        <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-white/10 p-4 rounded-xl backdrop-blur-sm shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-6 bg-white rounded-full"></div>
            <h3 className="text-white font-bold text-lg">ROLES</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {artistData.artistic_background.roles.map((role, index) => (
              <span 
                key={index} 
                className="bg-gray-700/60 px-3 py-1.5 rounded-lg text-sm text-gray-200 border border-white/10"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Genres Card */}
        <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-white/10 p-4 rounded-xl backdrop-blur-sm shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-6 bg-white rounded-full"></div>
            <h3 className="text-white font-bold text-lg">GENRES</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {artistData.artistic_background.genres.map((genre, index) => (
              <span 
                key={index} 
                className="bg-gray-700/60 px-3 py-1.5 rounded-lg text-sm text-gray-200 border border-white/10"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        {/* Influences Card */}
        <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-white/10 p-4 rounded-xl backdrop-blur-sm shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-6 bg-white rounded-full"></div>
            <h3 className="text-white font-bold text-lg">INFLUENCES</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {artistData.artistic_background.influences.map((influence, index) => (
              <span 
                key={index} 
                className="bg-gray-700/60 px-3 py-1.5 rounded-lg text-sm text-gray-200 border border-white/10"
              >
                {influence}
              </span>
            ))}
          </div>
        </div>

        {/* Skills Card */}
        <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-white/10 p-4 rounded-xl backdrop-blur-sm shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-6 bg-white rounded-full"></div>
            <h3 className="text-white font-bold text-lg">SKILLS</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {artistData.artistic_background.skills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-gray-700/60 px-3 py-1.5 rounded-lg text-sm text-gray-200 border border-white/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Signature Style Card */}
      <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-white/10 p-5 rounded-xl backdrop-blur-sm shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-6 bg-white rounded-full"></div>
          <h3 className="text-white font-bold text-lg">SIGNATURE STYLE</h3>
        </div>
        <p className="text-gray-300 pl-2">
          {artistData.artistic_background.signature_style || "No signature style specified"}
        </p>
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-6">
        <button className="text-sm bg-gradient-to-r from-gray-700 to-black border border-white/20 px-6 py-3 rounded-lg hover:bg-gray-600 transition-all duration-300 flex items-center gap-2 group">
          <span>VIEW MORE</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
      case "Career Highlights":
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Education Card */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/20 p-4 rounded-xl backdrop-blur-sm">
          <h3 className="text-white font-bold mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            EDUCATION
          </h3>
          <p className="text-gray-300">{artistData.career.education || "Not specified"}</p>
        </div>

        {/* Collaborations Card */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/20 p-4 rounded-xl backdrop-blur-sm">
          <h3 className="text-white font-bold mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
            </svg>
            COLLABORATIONS
          </h3>
          <div className="flex flex-wrap gap-2">
            {artistData.career.collaborations.map((collab, index) => (
              <span 
                key={index} 
                className="bg-gray-700/50 px-3 py-1 rounded-full text-sm text-gray-300"
              >
                {collab}
              </span>
            ))}
          </div>
        </div>

        {/* Performances Card */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/20 p-4 rounded-xl backdrop-blur-sm">
          <h3 className="text-white font-bold mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            PERFORMANCES
          </h3>
          <div className="flex flex-wrap gap-2">
            {artistData.career.performances.map((performance, index) => (
              <span 
                key={index} 
                className="bg-gray-700/50 px-3 py-1 rounded-full text-sm text-gray-300"
              >
                {performance}
              </span>
            ))}
          </div>
        </div>

        {/* Awards Card */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/20 p-4 rounded-xl backdrop-blur-sm">
          <h3 className="text-white font-bold mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            AWARDS
          </h3>
          <div className="flex flex-wrap gap-2">
            {artistData.career.awards.map((award, index) => (
              <span 
                key={index} 
                className="bg-gray-700/50 px-3 py-1 rounded-full text-sm text-gray-300"
              >
                {award}
              </span>
            ))}
          </div>
        </div>

        {/* Career Evolution Card */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/20 p-4 rounded-xl backdrop-blur-sm">
          <h3 className="text-white font-bold mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
            CAREER EVOLUTION
          </h3>
          <p className="text-gray-300">{artistData.career.career_evolution || "Not specified"}</p>
        </div>

        {/* Years Active Card */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/20 p-4 rounded-xl backdrop-blur-sm">
          <h3 className="text-white font-bold mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            YEARS ACTIVE
          </h3>
          <p className="text-gray-300">{artistData.career.years_active || "Not specified"}</p>
        </div>
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-4">
        <button className="text-sm bg-gradient-to-r from-gray-700 to-black border border-white/20 px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2">
          VIEW MORE
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
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
  
  {/* Artist Name with Stats */}
  <div className="flex flex-wrap items-center gap-4 mt-1">
    <h1 className="text-5xl font-bold">{artistData.displayName}</h1>
    
    {/* Star Rating */}
    <div className="flex items-center gap-1 bg-black/30 px-3 py-1 rounded-full">
      <div className="flex items-center">
        {Array(5).fill().map((_, i) => (
          <Star
            key={i}
            size={20}
            color={i < 4 ? "#FFBE0B" : "#555"}
            fill={i < 4 ? "#FFBE0B" : "none"}
          />
        ))}
      </div>
      <span className="text-sm font-bold ml-1">4.8</span>
    </div>
    
    {/* Followers Count */}
    <div className="flex items-center gap-1 bg-black/30 px-3 py-1 rounded-full">
      <User size={16} />
      <span className="text-sm font-bold">
        12.8M Followers
      </span>
    </div>
  </div>

  {/* Rest of the code remains the same */}
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
        {/* Enhanced logo with larger size and visual effects */}
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/40 to-purple-500/40 rounded-full blur-xl z-[-1] animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-purple-500/20 rounded-full blur-md z-[-1]"></div>
          <img 
            src={i20} 
            alt="Artist Logo" 
            className="w-10 h-10 object-contain transition-all duration-500 hover:scale-110"
          />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold">DISCOGRAPHY</h1>
      </div>
      
      {/* Release Date Filter */}
      <div className="space-y-3">
        <div className="text-white text-xl font-bold">RELEASE DATE</div>
        
        <div className="flex flex-wrap gap-2">
          {[2020, 2021, 2022, 2023, 2024, 2025].map(year => (
            <div 
              key={year}
              className="px-4 py-2 flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer"
              style={{
                background: 'radial-gradient(ellipse 92.09% 170.98% at 50.00% 50.00%, #242934 0%, #111111 69%)',
                borderRadius: '11.05px',
                backdropFilter: 'blur(12.78px)',
              }}
            >
              <div className="text-white text-sm font-normal">{year}</div>
            </div>
          ))}
        </div>
        
        <div className="text-white/40 text-sm font-normal">Select Year</div>
      </div>
      
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
      {/* <section className="relative w-full min-h-screen overflow-hidden">
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
            <div className="bg-white p-2 rounded">
              <StarIcon2 />
            </div>
            <span>CREATIVE PROCESSES</span>
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
      </section> */}
      {/* Creative Process Section */}
<section className="relative w-full min-h-screen overflow-hidden">
  {/* Background container with full coverage */}
  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeIn}
    className="absolute inset-0 w-full h-full"
  >
    <img
      src={i15}
      alt="Background"
      className="w-full h-full object-cover z-0 opacity-60 pointer-events-none"
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
      <div className="bg-white p-2 rounded">
        <StarIcon2 />
      </div>
      <span>CREATIVE PROCESSES</span>
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
  className="bg-white/20 backdrop-blur-xl border border-white/30 p-8 rounded-3xl shadow-lg"
  style={{
    background: "rgba(255, 255, 255, 0.15)",
    boxShadow: "0 8px 32px 0 rgba(150, 150, 150, 0.15)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
  }}
>
  <div className="flex flex-col">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
      <h3 className="text-2xl font-bold text-white">Songwriting Process</h3>
    </div>
    
    <div className="relative">
      <div className="absolute top-0 left-0 w-1 h-full bg-white/40"></div>
      <p className="text-white/90 pl-6 text-lg leading-relaxed">
        {artistData.creative_process.songwriting_process}
      </p>
    </div>
    
    <p className="mt-6 text-white/80 font-bold text-right">— {artistData.displayName}</p>
  </div>
</motion.div>

      <motion.div
  variants={itemVariants}
  className="bg-white/20 backdrop-blur-xl border border-white/30 p-8 rounded-3xl shadow-lg"
  style={{
    background: "rgba(255, 255, 255, 0.15)",
    boxShadow: "0 8px 32px 0 rgba(150, 150, 150, 0.15)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
  }}
>
  <div className="flex flex-col">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
      <h3 className="text-2xl font-bold text-white">Production Process</h3>
    </div>
    
    <div className="relative">
      <div className="absolute top-0 left-0 w-1 h-full bg-white/40"></div>
      <p className="text-white/90 pl-6 text-lg leading-relaxed">
        {artistData.creative_process.production_process}
      </p>
    </div>
    
    <p className="mt-6 text-white/80 font-bold text-right">— {artistData.displayName}</p>
  </div>
</motion.div>

      <motion.div
  variants={itemVariants}
  className="bg-white/20 backdrop-blur-xl border border-white/30 p-8 rounded-3xl shadow-lg md:col-span-2 w-full"
  style={{
    background: "rgba(255, 255, 255, 0.15)",
    boxShadow: "0 8px 32px 0 rgba(150, 150, 150, 0.15)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
  }}
>
  <div className="flex flex-col">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
      <h3 className="text-2xl font-bold text-white">Creative Rituals</h3>
    </div>
    
    <div className="relative">
      <div className="absolute top-0 left-0 w-1 h-full bg-white/40"></div>
      <p className="text-white/90 pl-6 text-lg leading-relaxed">
        "I typically start with a melody that comes to me in the early morning hours. I record voice memos on my phone, then build from there. Lyrics usually come last, and I draw inspiration from personal experiences, dreams, and literature. I like to create a visual mood board for each song to help guide the emotional landscape I'm trying to create."
      </p>
    </div>
    
    <p className="mt-6 text-white/80 font-bold text-right">— {artistData.displayName}</p>
  </div>
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
  {/* CSS for scrollbar hiding */}
  <style jsx>{`
    .scrollbar-hide {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
    .scrollbar-hide::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
  `}</style>
  
  {/* Background Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/30 z-0"></div>

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
        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
      >
        AVAILABILITY & OPPORTUNITIES
      </h1>
    </motion.div>

    {/* Search Container */}
    <motion.div
      className="flex gap-2 mt-2 items-center"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Book Icon - Appears when search is active */}
      <motion.div
        initial={{ opacity: 0, scale: 0, x: -50 }}
        animate={{ 
          opacity: searchActive ? 1 : 0, 
          scale: searchActive ? 1 : 0,
          x: searchActive ? 0 : -50
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="bg-black p-3 rounded-lg flex items-center justify-center cursor-pointer"
        onClick={() => setSearchActive(false)}
        style={{ display: searchActive ? 'flex' : 'none' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </motion.div>
      
      {/* Toggle Box */}
      <motion.div
        className={`px-6 py-3 border border-black bg-white/80 rounded-lg text-black font-bold flex items-center justify-center overflow-hidden relative`}
        animate={{
          width: searchActive ? "280px" : "220px",
          backgroundColor: searchActive ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.8)",
          borderColor: searchActive ? "#8b5cf6" : "#000000"
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="relative w-full h-6 flex items-center justify-center">
          <motion.span
            animate={{ 
              opacity: searchActive ? 0 : 1,
              y: searchActive ? -20 : 0,
              scale: searchActive ? 0.8 : 1
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center whitespace-nowrap text-sm font-bold"
          >
            CURRENT PROJECTS
          </motion.span>
          <motion.span
            animate={{ 
              opacity: searchActive ? 1 : 0,
              y: searchActive ? 0 : 20,
              scale: searchActive ? 1 : 0.8
            }}
            transition={{ duration: 0.3, delay: searchActive ? 0.2 : 0 }}
            className="absolute inset-0 flex items-center justify-center whitespace-nowrap text-sm font-bold"
          >
            LOOKING FOR
          </motion.span>
        </div>
      </motion.div>
      
      {/* Search Button */}
      <motion.button
        onClick={() => setSearchActive(true)}
        animate={{
          opacity: searchActive ? 0 : 1,
          scale: searchActive ? 0 : 1,
          x: searchActive ? 50 : 0,
          rotate: searchActive ? 180 : 0
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="p-3 border border-black bg-white/80 rounded-lg hover:bg-gray-200 flex items-center justify-center transition-all"
        style={{ display: searchActive ? 'none' : 'flex' }}
      >
        <MagnifyingGlassIcon />
      </motion.button>
    </motion.div>

    {/* Current Projects Gallery */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`relative flex gap-4 mt-4 group ${
        searchActive ? "hidden" : "block"
      }`}
    >
      {/* Row-wise Glass Hover Effect with Text - Pop up from bottom */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-out pointer-events-none z-20 flex items-center justify-center"
        style={{
          background: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.1) 100%)",
          backdropFilter: "blur(15px) saturate(150%)",
          WebkitBackdropFilter: "blur(15px) saturate(150%)",
          borderRadius: "12px",
          boxShadow: "0 8px 32px rgba(255, 255, 255, 0.2)"
        }}
      >
        <div className="text-center">
          <h3 className="text-black text-2xl font-bold mb-2 drop-shadow-lg">
            ACTIVE COLLABORATIONS
          </h3>
          <p className="text-black/80 text-lg font-medium drop-shadow-md">
            Currently working on these exciting projects
          </p>
        </div>
      </div>
      
      {Array.from({ length: 4 }).map((_, index) => (
        <motion.div
          key={`current-${index}`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="flex-1 h-56 rounded-lg overflow-hidden shadow-md border border-purple-300 transition-transform relative z-10"
        >
          <img 
            src={artist6} 
            alt={`Current Project ${index + 1}`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="text-white font-bold">Project {index + 1}</h3>
            <p className="text-white/80 text-sm">Current Collaboration</p>
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* Looking For Gallery - Glass cards with pop-up animation */}
    <div className={`${searchActive ? "block" : "hidden"}`}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative flex gap-6 mt-4 group"
      >
        {/* Row-wise Glass Hover Effect with Text - Pop up from bottom */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-out pointer-events-none z-30 flex items-center justify-center"
          style={{
            background: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.1) 100%)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            borderRadius: "20px",
            boxShadow: "0 12px 40px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)"
          }}
        >
          <div className="text-center">
            <h3 className="text-black text-2xl font-bold mb-2 drop-shadow-lg">
              SEEKING OPPORTUNITIES
            </h3>
            <p className="text-black/80 text-lg font-medium drop-shadow-md">
              Open for new collaborations and creative ventures
            </p>
          </div>
        </div>
        
        {Array.from({ length: 4 }).map((_, index) => (
          <motion.div
            key={`looking-${index}`}
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="flex-1 h-56 rounded-2xl overflow-hidden shadow-xl transition-transform relative z-20"
          >
            {/* Glass background div */}
            <div 
              className="absolute inset-0 z-0"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
              }}
            />
            
            {/* Image with glass overlay */}
            <div className="relative z-10 w-full h-full">
              <img 
                src={artist7} 
                alt={`Looking For ${index + 1}`} 
                className="w-full h-full object-cover opacity-80"
              />
              
              {/* Content overlay with enhanced glass effect */}
              <div 
                className="absolute bottom-0 left-0 right-0 p-4 z-20"
                style={{
                  background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)"
                }}
              >
                <h3 className="text-white font-bold text-lg drop-shadow-lg">
                  Opportunity {index + 1}
                </h3>
                <p className="text-white/90 text-sm drop-shadow-md">
                  Looking for collaborators
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* Middle Cards */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
    >
      <GlassCard title="COMMERCE">
        <p className="text-black text-lg">{artistData.commerce}</p>
        <div className="flex justify-center mt-4">
          <a
            href={artistData.commerce.split(" at ")[1]}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold shadow-lg bg-black hover:scale-105 transition-all duration-300"
          >
            Visit Store
          </a>
        </div>
      </GlassCard>

      <GlassCard title="SOCIAL IMPACT">
        <p className="text-black text-lg">{artistData.social_impact}</p>
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
      className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
    >
      <div
        className="p-6 rounded-2xl font-mono text-white"
        style={{
          background: "rgba(0, 0, 0, 0.7)",
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

{/* Classification and Association Section */}
<section 
  className="relative w-full min-h-screen overflow-hidden"
  style={{ 
    backgroundImage: `url(${i21})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
  {/* Headline at top left */}
  <motion.div
    className="absolute top-10 left-10 z-10 flex items-center gap-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <FaThLarge className="text-white text-3xl md:text-4xl" />
    <h1 className="text-white text-4xl md:text-6xl font-bold font-monda">
      CLASSIFICATION AND ASSOCIATION
    </h1>
  </motion.div>

  {/* Panels positioned 150px from top on right side */}
  <div className="absolute top-[150px] right-10 z-10 flex gap-8">
    {/* Association Panel */}
    <motion.div
      className={`bg-white/10 backdrop-blur-[25px] rounded-[30px] overflow-hidden cursor-pointer flex flex-col transition-all duration-500 ${
        activePanel === "association" ? "w-[560px]" : "w-[120px]"
      } h-[520px]`}
      onClick={() => setActivePanel("association")}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {activePanel === "association" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="h-full flex flex-col"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="px-6 py-4 flex justify-center items-center"
          >
            <h2 className="text-white text-2xl md:text-3xl font-bold font-monda text-center">
              LAZIEINDI ASSOCIATION
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 flex flex-col flex-grow overflow-y-auto"
          >
            <p className="text-white text-lg md:text-xl font-normal leading-relaxed text-justify">
              Interviewed by Emma Goldberg for the Cover Story of Lazie Indie Magazine –
              Edition 47 (November 2023) Featured in Lazie Indie Magazine's global
              spotlight series and holiday editions, {artistData.displayName} is a central voice in
              international independent music. A contributing columnist for Lazie Indie
              Magazine, {artistData.displayName} has written 33 artist interviews and 6 cover stories,
              offering deep insight into the indie world.
            </p>
            <a
              href="#"
              className="text-[#1e4ae9] text-lg font-normal mt-4 inline-block hover:underline"
            >
              view more
            </a>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          className="flex items-center justify-center h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="flex flex-col items-center justify-center h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {"LAZIE INDI ASSOCIATION".split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="text-white/50 text-center text-xl md:text-2xl font-bold font-monda"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
                style={{ 
                  writingMode: "vertical-rl", 
                  textOrientation: "mixed",
                  margin: "8px 0"
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </motion.div>

    {/* Summary Panel */}
    <motion.div
      className={`bg-white/10 backdrop-blur-[25px] rounded-[30px] overflow-hidden cursor-pointer flex flex-col transition-all duration-500 ${
        activePanel === "summary" ? "w-[560px]" : "w-[120px]"
      } h-[520px]`}
      onClick={() => setActivePanel("summary")}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {activePanel === "summary" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="h-full flex flex-col"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="px-6 py-4 flex justify-center items-center"
          >
            <h2 className="text-white text-2xl md:text-3xl font-bold font-monda text-center">
              SUMMARY NARRATIVE
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 flex flex-col flex-grow overflow-y-auto"
          >
            <p className="text-white text-lg md:text-xl font-normal leading-relaxed text-justify">
              {artistData.displayName} stands as a bold and genre-defying artist known
              for {artistData.identity.gender === 'Male' ? 'his' : 'her'} powerhouse vocals, 
              cinematic songwriting, and fearless creative expression. 
              {artistData.displayName}'s music spans the realms of {
                artistData.artistic_background.genres.slice(0, 3).join(', ')
              }, each track soaked in emotional weight and lyrical truth.
            </p>
            <a
              href="#"
              className="text-[#1e4ae9] text-lg font-normal mt-4 inline-block hover:underline"
            >
              view more
            </a>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          className="flex items-center justify-center h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="flex flex-col items-center justify-center h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {"SUMMARY NARRATIVE".split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="text-white/50 text-center text-xl md:text-2xl font-bold font-monda"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
                style={{ 
                  writingMode: "vertical-rl", 
                  textOrientation: "mixed",
                  margin: "8px 0"
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  </div>
</section>

      {/* Review Section (Online Presence) */}
      {/* <section className="w-full px-4 md:px-20 py-16 bg-black text-white">
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
      </section> */}
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
      {/* Cloud icon replaced with your i19.png logo */}
      <img 
        src={i19} 
        alt="Online Presence" 
        className="w-8 h-8 object-contain"
      />
      <span>ONLINE PRESENCE</span>
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

      <section className="w-full px-4 md:px-20 py-16 bg-black text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <span></span>PROFESSIONAL PRESS COVERAGE
          </h2>
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
      <section
  className="relative h-[50vh] bg-fixed bg-center bg-cover"
  style={{
    backgroundImage: `url(${i22})`,
    backgroundAttachment: "fixed", // Corrected from 'dymnamic'
    backgroundPosition: "center",
    backgroundSize: "cover",
  }}
>
  {/* Optional overlay content */}
</section>

<section
      className="relative h-[801px] w-full bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${i23})` }}
      onMouseEnter={() => setHover(true)} // Only set once
    >
      <div className="max-w-[1545px] px-6 flex flex-col items-center gap-8 text-center">
        {[
          `“ Lyia Meta’s journey is one of evolution—from canvas to stage, from Malaysia’s intimate blues joints to Grammy-nominated recordings. As an artist who wears many hats—vocalist, writer, producer, painter—her work is deeply textured and transcendent. Born and raised in Malaysia, she absorbed a kaleidoscope of cultures that would later shape her sound: raw, rich, and borderless. “`,
          `Early on, Lyia knew she didn’t want to simply “fit in.” While many artists chose genre lanes or industry formulas, she followed feeling—crafting songs rooted in honesty, wrapped in melody, and painted with shadows and light. Her early recordings resonated across the indie airwaves of Europe and the U.S., gradually leading to international awards and major collaborations. Yet even as her recognition grew, she remained grounded in storytelling and connection.`,
          `Early on, Lyia knew she didn’t want to simply “fit in.” While many artists chose genre lanes or industry formulas, she followed feeling—crafting songs rooted in honesty, wrapped in melody, and painted with shadows and light. Her early recordings resonated across the indie airwaves of Europe and the U.S., gradually leading to international awards and major collaborations. Yet even as her recognition grew, she remained grounded in storytelling and connection.`,
          `Early on, Lyia knew she didn’t want to simply “fit in.” While many artists chose genre lanes or industry formulas, she followed feeling—crafting songs rooted in honesty, wrapped in melody, and painted with shadows and light. Her early recordings resonated across the indie airwaves of Europe and the U.S., gradually leading to international awards and major collaborations. Yet even as her recognition grew, she remained grounded in storytelling and connection.`,
        ].map((text, index) => (
          <motion.p
            key={index}
            className="text-white text-2xl font-normal font-['Monda'] max-w-[1524px]"
            variants={fadeUpVariant}
            initial="hidden"
            animate={hover ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </section>

<section
      className="relative w-full bg-center bg-cover px-4 py-12 md:px-12 lg:px-20"
      style={{ backgroundImage: `url(${i24})` }}
    >
      {/* Heading */}
      <motion.div
        className="max-w-[1600px] mx-auto mb-8 flex flex-wrap items-baseline gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-white font-['Monda'] font-bold leading-tight text-[clamp(2.5rem,6vw,7.5rem)]">
          YES!
        </span>
        <span className="text-white font-['Monda'] leading-snug text-[clamp(1rem,2vw,1.75rem)]">
          Lyia Meta can absolutely be included under the broad umbrella of
          Independent Musicians — and here's why --
        </span>
      </motion.div>

      {/* Cards container */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-[1650px] mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {classificationItems.map((item, index) => (
          <motion.div
            key={index}
            className="w-full max-w-[800px] py-8 px-6 bg-white/5 rounded-[30px] md:rounded-[45px] backdrop-blur-[30px] flex justify-center items-center transition-all duration-300 ease-in-out"
            style={{
              filter: "brightness(0.7)",
            }}
            whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
            whileTap={{ scale: 0.98 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="text-center">
              <span className="text-white/50 text-base md:text-lg font-bold font-['Monda'] block">
                {item.title}
              </span>
              <span className="text-white text-sm md:text-lg font-bold font-['Monda'] block mt-2">
                {item.description}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom left classification text */}
      <motion.div
        className="absolute bottom-6 left-6 z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >
        <div className="relative pointer-events-none inline-block">
          <div className="text-white/25 font-['Bebas_Neue'] leading-none text-[clamp(1rem,5vw,8rem)]">
            CLASSIFICATION
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-lg md:text-2xl font-bold font-['Monda'] tracking-wide text-center">
              LAZIE INDIE CLASSIFICATION
            </span>
          </div>
        </div>
      </motion.div>
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