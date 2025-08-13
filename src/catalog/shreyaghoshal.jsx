import React, { useState } from "react";
import { motion } from "framer-motion";
import i21 from "../assets/i21.png";
import { FaThLarge } from "react-icons/fa";

const ClassificationAndAssociation = () => {
  const [activePanel, setActivePanel] = useState("association");

  const panelHeight = 520; // fixed height for both
  const expandedWidth = 560; // expanded width
  const collapsedWidth = 120; // collapsed width

  const associationContent = (
    <p className="text-white text-xl font-normal font-['Monda'] leading-[32px] text-justify flex-grow">
      Interviewed by Emma Goldberg for the Cover Story of Lazie Indie Magazine –
      Edition 47 (November 2023) Featured in Lazie Indie Magazine’s global
      spotlight series and holiday editions, Lyia Meta is a central voice in
      international independent music. A contributing columnist for Lazie Indie
      Magazine, Lyia has written 33 artist interviews and 6 cover stories,
      offering deep insight into the indie world.
      <br />
      <a
        href="#"
        className="text-[#1e4ae9] text-lg font-normal font-['Monda'] leading-tight block mt-3"
      >
        view more
      </a>
    </p>
  );

  const summaryContent = (
    <p className="text-white text-xl font-normal font-['Monda'] leading-[32px] text-justify flex-grow">
      Lyia Meta stands as a bold and genre-defying artist from Malaysia, known
      for her powerhouse vocals, cinematic songwriting, and fearless creative
      expression. Her music spans the realms of blues rock, soul, symphonic
      ballads, and gothic storytelling, each track soaked in emotional weight
      and lyrical truth.
    </p>
  );

  return (
    <motion.section
      className="relative w-full min-h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${i21})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Top-left headline */}
      <motion.div
        className="absolute top-8 left-10 z-10 flex items-center gap-3"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <FaThLarge className="text-white text-4xl" />
        <h1 className="text-white text-6xl font-bold font-['Monda']">
          CLASSIFICATION AND ASSOCIATION
        </h1>
      </motion.div>

      {/* Panels */}
      <motion.div
        className="absolute top-[400px] right-8 -translate-y-1/2 flex gap-6 z-10"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Association Panel */}
        <motion.div
          onClick={() => setActivePanel("association")}
          animate={{
            width:
              activePanel === "association" ? expandedWidth : collapsedWidth,
            height: panelHeight,
          }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-[25px] rounded-[30px] overflow-hidden cursor-pointer flex flex-col"
        >
          {activePanel === "association" ? (
            <>
              <div className="px-6 py-4 flex justify-center items-center">
                <h2 className="text-white text-3xl font-bold font-['Monda'] text-center">
                  LAZIE INDI ASSOCIATION
                </h2>
              </div>
              <div className="p-6 flex flex-col flex-grow overflow-y-auto">
                {associationContent}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <span className="text-white/50 text-center text-2xl font-bold font-['Monda'] rotate-[-90deg] whitespace-nowrap">
                LAZIE INDI ASSOCIATION
              </span>
            </div>
          )}
        </motion.div>

        {/* Summary Panel */}
        <motion.div
          onClick={() => setActivePanel("summary")}
          animate={{
            width: activePanel === "summary" ? expandedWidth : collapsedWidth,
            height: panelHeight,
          }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-[25px] rounded-[30px] overflow-hidden cursor-pointer flex flex-col"
        >
          {activePanel === "summary" ? (
            <>
              <div className="px-6 py-4 flex justify-center items-center">
                <h2 className="text-white text-3xl font-bold font-['Monda'] text-center">
                  SUMMARY NARRATIVE
                </h2>
              </div>
              <div className="p-6 flex flex-col flex-grow overflow-y-auto">
                {summaryContent}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <span className="text-white/50 text-2xl font-bold font-['Monda'] rotate-[-90deg] whitespace-nowrap">
                SUMMARY NARRATIVE
              </span>
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ClassificationAndAssociation;
