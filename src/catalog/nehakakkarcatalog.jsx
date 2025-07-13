import React from 'react';
import { motion } from 'framer-motion';
import artistPic from '../assets/artist10.jpg'; // Neha Kakkar image
import backgroundImg from '../assets/catalog.png';
import { CalendarDays, Instagram, Twitter, Youtube, Music } from 'lucide-react';

export default function NehaKakkarCatalog() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 z-0" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-10"
      >
        {/* Header */}
        <div className="flex items-center space-x-6">
          <img
            src={artistPic}
            alt="Neha Kakkar"
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-md object-cover shadow-lg"
          />
          <div>
            <h1 className="text-white text-3xl font-bold">Neha Kakkar</h1>
            <p className="text-gray-300 mt-1">Bollywood | Pop | Dance</p>
            <p className="text-sm text-gray-400 mt-2">
              <span className="mr-4">Followers: 15.6M</span>
              <span className="mr-4">Tracks: 280+</span>
              <span>Likes: 8.1M</span>
            </p>
          </div>
        </div>

        {/* About */}
        <p className="text-gray-300 mt-8 leading-relaxed text-md">
          Neha Kakkar is a vibrant and energetic voice in Indian music. Known for her peppy tracks,
          emotional ballads, and stage charisma, she’s captured the hearts of millions. With chart-topping
          singles and viral hits, Neha continues to be a dominant force in modern Bollywood music.
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-4 gap-6 mt-10">
          {/* Latest Release */}
          <div className="bg-[#1f2937] rounded-lg p-4 text-white shadow-md">
            <h2 className="font-semibold mb-2">Latest Release</h2>
            <div className="flex items-center space-x-3">
              <Music className="w-10 h-10 text-purple-500" />
              <div>
                <p className="font-medium">Dil Ko Karaar Aaya</p>
                <p className="text-sm text-gray-400">Released 4 days ago</p>
              </div>
            </div>
          </div>

          {/* Next Event */}
          <div className="bg-[#1f2937] rounded-lg p-4 text-white shadow-md">
            <h2 className="font-semibold mb-2">Next Event</h2>
            <div className="flex items-center space-x-3">
              <CalendarDays className="w-10 h-10 text-pink-400" />
              <div>
                <p className="font-medium">Hyderabad Fest</p>
                <p className="text-sm text-gray-400">Oct 10, 2025</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-[#1f2937] rounded-lg p-4 text-white shadow-md col-span-2 sm:col-span-1">
            <h2 className="font-semibold mb-2">Quick Stats</h2>
            <div className="text-sm text-gray-300 space-y-1">
              <p>Monthly Listeners: <span className="text-green-400 font-semibold">10.2M</span></p>
              <p>Total Plays: <span className="text-blue-400 font-semibold">500M</span></p>
              <p>Countries: <span className="text-yellow-400 font-semibold">112</span></p>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-[#1f2937] rounded-lg p-4 text-white shadow-md flex flex-col items-center justify-center space-y-3">
            <h2 className="font-semibold">Social Media</h2>
            <div className="flex space-x-4">
              <a href="#"><Instagram className="text-pink-500 hover:scale-110 transition" /></a>
              <a href="#"><Twitter className="text-blue-400 hover:scale-110 transition" /></a>
              <a href="#"><Youtube className="text-red-500 hover:scale-110 transition" /></a>
            </div>
          </div>
        </div>

        {/* Recent Tracks */}
        <div className="mt-14">
          <h2 className="text-white text-2xl font-bold mb-4">Recent Tracks</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: 'O Saki Saki', duration: '3:25', plays: '110M' },
              { title: 'Garmi', duration: '3:50', plays: '89M' },
              { title: 'Mile Ho Tum', duration: '4:10', plays: '120M' },
            ].map((track, idx) => (
              <div
                key={idx}
                className="bg-[#1f2937] rounded-lg p-4 shadow-lg hover:bg-[#2a3548] transition duration-300"
              >
                <h3 className="text-white font-semibold text-lg">{track.title}</h3>
                <p className="text-gray-400 text-sm mt-1">
                  Duration: {track.duration} • {track.plays} plays
                </p>
                <button className="mt-3 px-4 py-1 text-sm bg-purple-600 text-white rounded hover:bg-purple-700 transition">
                  ▶ Play
                </button>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
