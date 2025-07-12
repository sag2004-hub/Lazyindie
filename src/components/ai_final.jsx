import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, LogIn } from 'lucide-react';
import bgGif from '../assets/gif6.gif';
import logo from '../assets/logo.png';

export default function AiFinal() {
  const location = useLocation();
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);
  const [step, setStep] = useState(1);
  const [collected, setCollected] = useState({});
  const [suggestions, setSuggestions] = useState([]);

  const navItems = [
    { label: 'Home', path: '/home' },
    { label: 'Explore', path: '/explore' },
    { label: 'AI Chat', path: '/ai_chat_land' },
    { label: 'Collaborations', path: '/collaborations' },
    { label: 'Join Community', path: '/join-community' },
    { label: 'Connect', path: '/connect' },
  ];

  const defaultSuggestions = {
    roles: ['Vocalist', 'Guitarist', 'Drummer', 'Bassist', 'Keyboardist', 'Producer', 'Songwriter', 'Any Instrumentalist', 'Others'],
    genres: ['Pop', 'Rock', 'Hip Hop', 'Electronic', 'R&B', 'Indie', 'Acoustic', 'Others'],
    vibeTags: ['Collaborative', 'Creative', 'Passionate', 'Open-minded', 'Experimental', 'Dedicated', 'Fun', 'Others'],
  };

  const stepLogic = (step, userInput) => {
    const data = { ...collected };
    switch (step) {
      case 1:
        setMessages((m) => [...m, { text: 'What kind of artist are you looking for?', options: defaultSuggestions.roles }]);
        setSuggestions(defaultSuggestions.roles);
        setStep(2);
        break;
      case 2:
        if (userInput === 'Others') {
          setMessages((m) => [...m, { text: "Please type the role you're looking for:" }]);
          setSuggestions([]);
          setStep(2.5);
        } else {
          setCollected({ ...data, roles: [userInput] });
          setMessages((m) => [...m, { text: 'What genres fit your project?', options: defaultSuggestions.genres }]);
          setSuggestions(defaultSuggestions.genres);
          setStep(3);
        }
        break;
      case 2.5:
        setCollected({ ...data, roles: [userInput] });
        const roleGen = ['Session Musician', 'Freelance Artist', 'Live Performer'];
        setMessages((m) => [...m, { text: 'We found these roles based on your input:', options: roleGen }]);
        setSuggestions(roleGen);
        setStep(3);
        break;
      case 3:
        if (userInput === 'Others') {
          setMessages((m) => [...m, { text: "Please type the genre you're looking for:" }]);
          setSuggestions([]);
          setStep(3.5);
        } else {
          setCollected({ ...data, genres: [userInput] });
          setMessages((m) => [...m, { text: 'Pick some vibe/mood tags for your collaborator:', options: defaultSuggestions.vibeTags }]);
          setSuggestions(defaultSuggestions.vibeTags);
          setStep(4);
        }
        break;
      case 3.5:
        setCollected({ ...data, genres: [userInput] });
        const genreGen = ['Lofi', 'Trap Fusion', 'Neo Soul'];
        setMessages((m) => [...m, { text: 'We found these genres based on your input:', options: genreGen }]);
        setSuggestions(genreGen);
        setStep(4);
        break;
      case 4:
        if (userInput === 'Others') {
          setMessages((m) => [...m, { text: "Type the vibe/mood you're looking for:" }]);
          setSuggestions([]);
          setStep(4.5);
        } else {
          setCollected({ ...data, vibeTags: [userInput] });
          setMessages((m) => [...m, { text: 'What language should they speak or sing in?', options: ['English', 'Hindi', 'Bengali', 'Others'] }]);
          setSuggestions(['English', 'Hindi', 'Bengali', 'Others']);
          setStep(5);
        }
        break;
      case 4.5:
        setCollected({ ...data, vibeTags: [userInput] });
        const vibeGen = ['Soulful', 'Upbeat', 'Fusion-Focused'];
        setMessages((m) => [...m, { text: 'We found these vibe tags based on your input:', options: vibeGen }]);
        setSuggestions(vibeGen);
        setStep(5);
        break;
      case 5:
        if (userInput === 'Others') {
          setMessages((m) => [...m, { text: 'Type the language:' }]);
          setSuggestions([]);
          setStep(5.5);
        } else {
          setCollected({ ...data, language: [userInput] });
          setMessages((m) => [...m, { text: 'Where would you prefer your collaborator to be from?' }]);
          setSuggestions([]);
          setStep(6);
        }
        break;
      case 5.5:
        setCollected({ ...data, language: [userInput] });
        setMessages((m) => [...m, { text: 'Where would you prefer your collaborator to be from?' }]);
        setSuggestions([]);
        setStep(6);
        break;
      case 6:
        setCollected({ ...data, location: userInput });
        setMessages((m) => [...m, { text: 'Do you prefer Male, Female, or Any gender?', options: ['Male', 'Female', 'Any'] }]);
        setSuggestions(['Male', 'Female', 'Any']);
        setStep(7);
        break;
      case 7:
        setCollected({ ...data, genderPreference: userInput });
        setMessages((m) => [...m, { text: "Thanks for your info! Here's what you selected:" }]);
        setMessages((m) => [...m, { text: JSON.stringify({ ...data, genderPreference: userInput }, null, 2) }]);
        setMessages((m) => [...m, { text: 'Is everything correct?', options: ['Yes', 'No'] }]);
        setSuggestions(['Yes', 'No']);
        setStep(9);
        break;
      case 9:
        if (userInput.toLowerCase() === 'yes') {
          setMessages((m) => [...m, { text: 'Great! Searching for artist matches...' }]);
          setSuggestions([]);
        } else {
          setMessages((m) => [...m, { text: 'Let’s start over. What kind of artist are you looking for?', options: defaultSuggestions.roles }]);
          setCollected({});
          setSuggestions(defaultSuggestions.roles);
          setStep(2);
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    if (inputText.trim()) {
      setMessages((prev) => [...prev, { text: inputText }]);
      stepLogic(step, inputText.trim());
      setInputText('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-full h-screen font-sans overflow-hidden bg-black"
    >
      {/* Background GIF centered */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <img
          src={bgGif}
          alt="background"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-6 md:px-24 z-50"
      >
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        <div className="hidden md:flex gap-8 items-center text-white text-sm">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="relative group text-white/80 hover:text-white transition duration-300"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <Link to="/cart" className="hover:text-white text-white/80 transition duration-300">
            <ShoppingCart className="w-5 h-5" />
          </Link>
        </div>
      </motion.nav>

      {/* Chat Area */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start h-full px-10 md:px-24 pt-28">
        <motion.h1
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-white text-5xl md:text-[96px] font-[Recoleta] leading-tight mb-10 md:mb-0"
        >
          Chat Bot
        </motion.h1>

        <div className="relative w-full max-w-lg h-[400px] overflow-y-auto mx-auto p-4 space-y-3 bg-transparent">
          {messages.length === 0 ? (
            <p className="text-white/40 text-center">Start typing below to see responses here.</p>
          ) : (
            messages.map((msg, index) => (
              <div key={index}>
                <div className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm shadow border border-white/20 mb-2">
                  {msg.text}
                </div>
                {msg.options && msg.options.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-1">
                    {msg.options.map((option, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setMessages((prev) => [...prev, { text: option }]);
                          setInputText('');
                          stepLogic(step, option);
                        }}
                        className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20 hover:bg-white/20 transition"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        <motion.p
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          className="text-white text-base md:text-lg max-w-80 font-light text-justify mt-10 md:mt-0"
        >
          Our chatbot helps you find the right artists and collaborators for your project. Just answer a few quick questions and we’ll handle the rest.
        </motion.p>
      </div>

      {/* Input box */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[90%] max-w-xl z-50"
      >
        <div className="relative group">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            placeholder="Type your answer..."
            className="w-full px-5 pr-12 py-3 text-white bg-white/10 border border-white/30 rounded-xl placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            onClick={handleSubmit}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition"
          >
            <LogIn className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
