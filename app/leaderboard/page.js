"use client";
import React, { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import contributorsData from "./contributors-data.json";

// Import background assets to match the theme
import cardbg1 from "@/assets/box-bg.svg";
import iconbg from "@/assets/icon-bg.svg";
import sbg from "@/assets/section-bg-mid-part.svg";
import twitter from "@/assets/twitter.svg";
import linkedin from "@/assets/linkedin.svg";
import instagram from "@/assets/instagram.svg";
import { ShootingStars } from "@/components/shooting-stars";
import { StarsBackground } from "@/components/stars-background";
import { SparklesCore } from "@/components/sparkles";

// Animation variants to match the theme
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const ITEMS_PER_PAGE = 30;

// Custom hook for debouncing
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default function LeaderboardPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Filter contributors based on search term
  const filteredContributors = useMemo(() => {
    if (!debouncedSearchTerm.trim()) {
      return contributorsData;
    }
    return contributorsData.filter((contributor) =>
      contributor.github_username
        ?.toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase())
    );
  }, [debouncedSearchTerm]);

  // Reset to page 1 when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearchTerm]);

  // Calculate pagination data
  const totalPages = Math.ceil(filteredContributors.length / ITEMS_PER_PAGE);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredContributors.slice(startIndex, endIndex);
  }, [currentPage, filteredContributors]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getGlobalRank = (localIndex) => {
    return (currentPage - 1) * ITEMS_PER_PAGE + localIndex + 1;
  };

  return (
    <div className="relative w-full min-h-screen font-sans overflow-hidden">
      {/* Background effects matching the main theme */}
      <div className="fixed inset-0 -z-20 w-full h-full overflow-hidden">
        <ShootingStars />
        <StarsBackground starDensity={0.001} />
      </div>

      {/* Header matching the main site */}
      <header className="fixed top-0 left-0 w-full bg-transparent flex items-center justify-between p-8 z-80">
        <div className="text-white text-xl md:text-2xl">GSSoC &apos;25</div>
        <Link
          href="/"
          className="text-white px-5 py-3 rounded-full bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] font-normal cursor-pointer text-[12px] md:text-[14px]"
        >
          Go Back
        </Link>
      </header>

      {/* Main content */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
        className="w-screen min-h-screen relative flex flex-col items-center bg-[#00020f] text-white pt-32 pb-8"
      >
        {/* Background decoration */}
        <Image
          src={sbg}
          alt="Background"
          className="absolute top-20 object-contain scale-x-[-1] opacity-30"
        />
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={0.8}
          particleDensity={80}
          particleSpeed={0.2}
          className="absolute top-20 w-1/3 h-[300px]"
          particleColor="#FFFFFF"
        />

        {/* Header section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="w-screen relative flex flex-col items-center bg-[#00020f] text-white mb-16"
        >
          <div className="text-center text-white z-20 flex flex-col items-center">
            <p className="text-lg mb-4 mt-16 text-[#A7ADBE] bg-[#FFFFFF15] text-[12px] inline-block px-4 py-2 rounded-full">
              Top Contributors
            </p>
            <h1 className="text-3xl md:text-6xl font-bold mb-4">
              Leaderboard <br />
            </h1>
            <p className="w-11/12 max-w-2xl text-lg mb-8 text-[10px] md:text-[14px] text-[#A7ADBE] text-balance">
              Celebrating our amazing contributors and their outstanding
              contributions to open source projects across various domains.
            </p>
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="w-11/12 max-w-4xl mb-8 px-4"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search by GitHub username..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 bg-gradient-to-r from-[#00041f] to-[#00041f] rounded-full border border-[#131839] text-white placeholder-[#A7ADBE] focus:outline-none focus:border-[#4C75FF] focus:shadow-lg focus:shadow-blue-500/20 transition-all duration-300 text-sm md:text-base"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A7ADBE] hover:text-white transition-colors duration-200"
                aria-label="Clear search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>
          {debouncedSearchTerm && (
            <p className="text-[#A7ADBE] text-xs md:text-sm mt-2 px-2">
              Found {filteredContributors.length} contributor
              {filteredContributors.length !== 1 ? "s" : ""}
            </p>
          )}
        </motion.div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="w-11/12 max-w-4xl flex items-center justify-between mb-10 px-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-6 py-3 rounded-full font-normal text-[12px] md:text-[14px] transition-all duration-300 ${
                currentPage === 1
                  ? "bg-[#131839] text-[#A7ADBE] cursor-not-allowed opacity-50"
                  : "bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] text-white hover:shadow-lg hover:shadow-blue-500/40 cursor-pointer"
              }`}
            >
              Previous
            </button>

            <div className="flex items-center gap-2">
              <span className="text-white text-sm md:text-base">
                Page{" "}
                <span className="font-bold text-[#4C75FF]">{currentPage}</span>{" "}
                of <span className="font-bold">{totalPages}</span>
              </span>
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-6 py-3 rounded-full font-normal text-[12px] md:text-[14px] transition-all duration-300 ${
                currentPage === totalPages
                  ? "bg-[#131839] text-[#A7ADBE] cursor-not-allowed opacity-50"
                  : "bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] text-white hover:shadow-lg hover:shadow-blue-500/40 cursor-pointer"
              }`}
            >
              Next
            </button>
          </div>
        )}

        {/* Contributors list */}
        <motion.div
          className="w-11/12 max-w-4xl flex flex-col gap-4 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          {paginatedData.map((contributor, index) => (
            <motion.div
              key={index}
              className="group relative w-full bg-transparent bg-gradient-to-r from-[#00041f] to-[#00041f00] rounded-2xl border border-[#131839] flex items-center p-4 md:p-6 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 hover:border-[#232D6B]"
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* Background pattern */}
              <Image
                src={cardbg1}
                alt="Background"
                className="absolute right-0 top-0 w-full h-full object-cover z-0 rounded-2xl opacity-30"
              />

              {/* Rank Number */}
              <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] rounded-full flex items-center justify-center mr-4 md:mr-6">
                <span className="text-white font-bold text-base md:text-xl">
                  #{contributor.rank}
                </span>
              </div>

              {/* Profile section */}
              <div className="relative z-10 flex items-center flex-grow">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-3 border-[#232D6B] mr-4 bg-gradient-to-br from-[#4C75FF] to-[#1A4FFF] flex items-center justify-center">
                  <img
                    // src={`https://github.com/${contributor.github_username}.png`}
                    src={contributor.avatar}
                    alt={contributor.full_name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center text-white text-xl md:text-2xl font-bold">
                    {contributor.full_name?.charAt(0)?.toUpperCase() ?? "G"}
                  </div>
                </div>

                <div className="flex-grow min-w-0">
                  {/* TODO: Put this back when all user's full name is there */}
                  {/* <h3 className="text-lg md:text-xl font-semibold text-white truncate">
                    {contributor.full_name}
                  </h3> */}
                  <h3 className="text-lg md:text-xl font-semibold text-white truncate">
                    @{contributor.github_username}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <p className="text-xl md:text-2xl font-bold text-[#4C75FF]">
                      {contributor.points} pts
                    </p>
                    {/* <div className="hidden sm:flex flex-wrap gap-1">
                      {contributor.projects.slice(0, 2).map((project, projectIndex) => (
                        <span
                          key={projectIndex}
                          className="px-2 py-1 bg-[#131839] text-[#A7ADBE] text-xs rounded-md border border-[#232D6B]"
                        >
                          {project}
                        </span>
                      ))}
                      {contributor.projects.length > 2 && (
                        <span className="px-2 py-1 bg-[#131839] text-[#A7ADBE] text-xs rounded-md border border-[#232D6B]">
                          +{contributor.projects.length - 2} more
                        </span>
                      )}
                    </div> */}
                  </div>

                  {/* Projects section for mobile */}
                  {/* <div className="sm:hidden mt-2">
                    <div className="flex flex-wrap gap-1">
                      {contributor.projects.slice(0, 2).map((project, projectIndex) => (
                        <span
                          key={projectIndex}
                          className="px-2 py-1 bg-[#131839] text-[#A7ADBE] text-xs rounded-md border border-[#232D6B]"
                        >
                          {project}
                        </span>
                      ))}
                      {contributor.projects.length > 2 && (
                        <span className="px-2 py-1 bg-[#131839] text-[#A7ADBE] text-xs rounded-md border border-[#232D6B]">
                          +{contributor.projects.length - 2} more
                        </span>
                      )}
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Points highlight for larger screens */}
              <div className="hidden lg:flex relative z-10 flex-col items-end ml-4">
                <div className="text-3xl font-bold text-[#4C75FF]">
                  {contributor.points}
                </div>
                <div className="text-sm text-[#A7ADBE]">points</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="w-11/12 max-w-4xl flex items-center justify-between mb-16 px-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-6 py-3 rounded-full font-normal text-[12px] md:text-[14px] transition-all duration-300 ${
                currentPage === 1
                  ? "bg-[#131839] text-[#A7ADBE] cursor-not-allowed opacity-50"
                  : "bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] text-white hover:shadow-lg hover:shadow-blue-500/40 cursor-pointer"
              }`}
            >
              Previous
            </button>

            <div className="flex items-center gap-2">
              <span className="text-white text-sm md:text-base">
                Page{" "}
                <span className="font-bold text-[#4C75FF]">{currentPage}</span>{" "}
                of <span className="font-bold">{totalPages}</span>
              </span>
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-6 py-3 rounded-full font-normal text-[12px] md:text-[14px] transition-all duration-300 ${
                currentPage === totalPages
                  ? "bg-[#131839] text-[#A7ADBE] cursor-not-allowed opacity-50"
                  : "bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] text-white hover:shadow-lg hover:shadow-blue-500/40 cursor-pointer"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </motion.section>

      {/* Footer section matching the main site */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
        className="w-screen relative flex flex-col items-center bg-[#00041F] text-white py-16"
      >
        <div className="text-center text-white">
          <h1 className="text-3xl md:text-6xl font-bold mb-4">
            GirlScript Summer <br /> Of Code 2025
          </h1>
          <p className="text-lg mb-8 text-[10px] md:text-[14px] text-[#A7ADBE]">
            Get In Touch With Us Via Email Or Social Media
          </p>
          <a
            href="mailto:gssoc@girlscript.tech"
            className="bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] text-white px-5 py-3 rounded-full font-normal cursor-pointer text-[12px] md:text-[14px]"
          >
            Contact Us
          </a>
        </div>
        <div className="flex flex-row justify-center items-center mt-12">
          <a
            href="https://www.linkedin.com/company/girlscriptsoc/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 w-12 z-10 rounded-xl overflow-hidden flex items-center justify-center relative"
          >
            <Image
              src={iconbg}
              alt="Background"
              className="w-full h-full object-cover"
            />
            <Image
              src={linkedin}
              alt="LinkedIn Icon"
              className="absolute w-11/12 h-3/5 object-cover"
            />
          </a>

          <a
            href="https://x.com/girlscriptsoc?fbclid=PAQ0xDSwKw-IVleHRuA2FlbQIxMAABp_RYL61UMmjR16ZRYtQ9Vr8RKnrJDW3m8Jgs_YAcL6OiU7XdT65vIkh0mu_U_aem_u7mT7T5kaX-7RyGhB8XlLg"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 w-12 z-10 rounded-xl overflow-hidden flex items-center justify-center relative mx-4"
          >
            <Image
              src={iconbg}
              alt="Background"
              className="w-full h-full object-cover"
            />
            <Image
              src={twitter}
              alt="Twitter Icon"
              className="absolute w-11/12 h-3/5 object-cover"
            />
          </a>

          <a
            href="https://www.instagram.com/girlscriptsummerofcode?igsh=MWlhYnRld2J3bWdyOQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 w-12 z-10 rounded-xl overflow-hidden flex items-center justify-center relative"
          >
            <Image
              src={iconbg}
              alt="Background"
              className="w-full h-full object-cover"
            />
            <Image
              src={instagram}
              alt="Instagram Icon"
              className="absolute w-11/12 h-3/5 object-cover"
            />
          </a>
        </div>
      </motion.section>
    </div>
  );
}
