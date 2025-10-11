"use client";
import React, { useState, useCallback, useTransition } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { searchUsers } from "./actions";

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

export default function CertificatesPage() {
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
              Download Certificates
            </p>
            <h1 className="text-3xl md:text-6xl font-bold mb-4">
              Certificates <br />
            </h1>
            {/* <p className="w-11/12 max-w-2xl text-lg mb-8 text-[10px] md:text-[14px] text-[#A7ADBE] text-balance">
              Download your certificates here.
            </p> */}
          </div>
        </motion.div>

        {/* Downlaod certificates search box */}
        <UserWithCertificateSearchComponent />
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

function UserWithCertificateSearchComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [selectedRoles, setSelectedRoles] = useState([]);

  const availableRoles = [
    {
      id: "contributor",
      label: "Contributors",
      color: "bg-[#45B7D1]/20 text-[#45B7D1] border-[#45B7D1]/30",
    },
    {
      id: "mentor",
      label: "Mentors",
      color: "bg-[#4ECDC4]/20 text-[#4ECDC4] border-[#4ECDC4]/30",
    },
    {
      id: "project-admin",
      label: "Project Admins",
      color: "bg-[#FF6B6B]/20 text-[#FF6B6B] border-[#FF6B6B]/30",
    },
    {
      id: "campus-ambassador",
      label: "Campus Ambassadors",
      color: "bg-[#FFD93D]/20 text-[#FFD93D] border-[#FFD93D]/30",
    },
  ];

  const roleMapping = {
    contributor: "Contributor",
    mentor: "Mentor",
    "project-admin": "Project Admin",
    "campus-ambassador": "Campus Ambassador",
  };

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce(async (query, roles) => {
      if (query.trim().length < 2) {
        setSearchResults([]);
        setIsSearching(false);
        return;
      }

      setIsSearching(true);
      startTransition(async () => {
        try {
          const mappedRoles = roles.map((roleId) => roleMapping[roleId]);
          const results = await searchUsers(query, mappedRoles);
          setSearchResults(results);
        } catch (error) {
          console.error("Search error:", error);
          setSearchResults([]);
        } finally {
          setIsSearching(false);
        }
      });
    }, 500),
    []
  );

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    debouncedSearch(value, selectedRoles);
  };

  const toggleRole = (roleId) => {
    const newSelectedRoles = selectedRoles.includes(roleId)
      ? selectedRoles.filter((id) => id !== roleId)
      : [...selectedRoles, roleId];

    setSelectedRoles(newSelectedRoles);

    // Re-trigger search with new filters if search query exists
    if (searchQuery.trim().length >= 2) {
      debouncedSearch(searchQuery, newSelectedRoles);
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="w-full max-w-4xl mx-auto px-4"
    >
      {/* Role Filter Tags */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-3">
          {availableRoles.map((role) => (
            <button
              key={role.id}
              onClick={() => toggleRole(role.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                selectedRoles.includes(role.id)
                  ? role.color + " shadow-lg transform scale-105"
                  : "bg-[#FFFFFF10] text-[#A7ADBE] border-[#FFFFFF20] hover:bg-[#FFFFFF15] hover:border-[#4C75FF]/30"
              }`}
            >
              {role.label}
            </button>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for users by name..."
            className="w-full px-6 py-4 bg-[#FFFFFF15] border border-[#4C75FF]/30 rounded-xl text-white placeholder-[#A7ADBE] focus:outline-none focus:border-[#4C75FF] focus:ring-2 focus:ring-[#4C75FF]/20 transition-all duration-300"
          />
          {(isSearching || isPending) && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="animate-spin h-5 w-5 border-2 border-[#4C75FF] border-t-transparent rounded-full"></div>
            </div>
          )}
        </div>

        {/* Search Info */}
        {searchQuery && (
          <p className="text-[#A7ADBE] text-sm mt-2">
            {searchResults.length > 0
              ? `Found ${searchResults.length} user${
                  searchResults.length !== 1 ? "s" : ""
                }${
                  selectedRoles.length > 0 ? " matching selected filters" : ""
                }`
              : searchQuery.length >= 2 && !isSearching && !isPending
              ? "No users found"
              : ""}
          </p>
        )}
      </div>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map((user) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FFFFFF10] backdrop-blur-sm border border-[#4C75FF]/20 rounded-xl p-6 hover:border-[#4C75FF]/50 hover:bg-[#FFFFFF15] transition-all duration-300 group"
            >
              {/* User Avatar */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4C75FF] to-[#1A4FFF] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {user.user
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="ml-3">
                    <h3 className="text-white font-semibold text-lg">
                      {user.user}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <span className="text-[#4C75FF] font-bold text-lg">
                        {user.points}
                      </span>
                      <span className="text-[#A7ADBE] text-sm">pts</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Role Badge */}
              <div className="mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    user.role === "Project Admin"
                      ? "bg-[#FF6B6B]/20 text-[#FF6B6B]"
                      : user.role === "Mentor"
                      ? "bg-[#4ECDC4]/20 text-[#4ECDC4]"
                      : user.role === "Campus Ambassador"
                      ? "bg-[#FFD93D]/20 text-[#FFD93D]"
                      : "bg-[#45B7D1]/20 text-[#45B7D1]"
                  }`}
                >
                  {user.role}
                </span>
              </div>

              {/* Projects */}
              <div className="mb-4">
                <p className="text-[#A7ADBE] text-sm mb-2">Projects:</p>
                <div className="flex flex-wrap gap-2">
                  {user.projects.slice(0, 2).map((project, index) => (
                    <span
                      key={index}
                      className="text-xs bg-[#FFFFFF10] text-[#A7ADBE] px-2 py-1 rounded-md"
                    >
                      {project}
                    </span>
                  ))}
                  {user.projects.length > 2 && (
                    <span className="text-xs text-[#4C75FF]">
                      +{user.projects.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              {/* Issue Date */}
              <p className="text-[#A7ADBE] text-xs mb-4">
                Issued: {new Date(user.issueDate).toLocaleDateString()}
              </p>

              {/* Download Button */}
              <button
                onClick={() => {
                  // In a real app, this would download the certificate
                  alert(`Downloading certificate for ${user.user}`);
                }}
                className="w-full bg-gradient-to-r from-[#4C75FF] to-[#1A4FFF] text-white px-4 py-2 rounded-lg font-medium hover:from-[#5A84FF] hover:to-[#2A5AFF] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#4C75FF]/25"
              >
                Download Certificate
              </button>
            </motion.div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {searchQuery.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gradient-to-br from-[#4C75FF] to-[#1A4FFF] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h3 className="text-white text-xl font-semibold mb-2">
            Search for Certificates
          </h3>
          <p className="text-[#A7ADBE] max-w-md mx-auto">
            {"Enter a user's name to find and download their GSSoC 2025"}
            {"certificate. You can also filter by role using the tags above. You"}
            {"need at least 2 characters to start searching."}
          </p>
        </div>
      )}
    </motion.div>
  );
}

// Debounce utility function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
