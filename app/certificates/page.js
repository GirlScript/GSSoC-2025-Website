"use client";
import React, { useState, useCallback, useTransition, useRef, useEffect } from "react";
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
  const [selectedContributor, setSelectedContributor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const canvasRef = useRef(null);

  const openCertificateModal = (contributor) => {
    setSelectedContributor(contributor);
    setIsModalOpen(true);
  };

  const closeCertificateModal = () => {
    setSelectedContributor(null);
    setIsModalOpen(false);
  };

  const renderCertificate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !selectedContributor) return;

    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = 1200;
    canvas.height = 900;

    // Load certificate background image using document.createElement
    const certificateImg = document.createElement("img");
    certificateImg.crossOrigin = "anonymous";

    certificateImg.onload = () => {
      // Draw certificate background
      ctx.drawImage(certificateImg, 0, 0, canvas.width, canvas.height);

      // Set text styles for contributor name
      ctx.font = "bold 48px Arial";
      ctx.fillStyle = "#2c3e50";
      ctx.textAlign = "center";

      // Draw contributor name
      ctx.fillText(
        selectedContributor.full_name,
        canvas.width / 2,
        canvas.height / 2 + (selectedContributor.role === "Campus Ambassador" || selectedContributor.role === "Contributor" ? 50 : 14)
      );

      // Set text styles for points
      ctx.font = "32px Arial";
      ctx.fillStyle = "#34495e";
    };

    certificateImg.onerror = () => {
      console.error("Failed to load certificate background image");
      // Draw a fallback background
      ctx.fillStyle = "#f0f0f0";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add fallback text
      ctx.fillStyle = "#333";
      ctx.font = "bold 48px Arial";
      ctx.textAlign = "center";
      ctx.fillText(
        "Certificate of Achievement",
        canvas.width / 2,
        canvas.height / 2 - 100
      );

      // Draw fallback avatar with initials
      const avatarSize = 120;
      const avatarX = canvas.width / 2 - avatarSize / 2;
      const avatarY = canvas.height / 2 - 150;

      ctx.save();
      ctx.beginPath();
      ctx.arc(
        avatarX + avatarSize / 2,
        avatarY + avatarSize / 2,
        avatarSize / 2,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = "#4C75FF";
      ctx.fill();

      const initials = selectedContributor.full_name
        .split(" ")
        .map((word) => word.charAt(0))
        .join("")
        .toUpperCase()
        .slice(0, 2);

      ctx.fillStyle = "white";
      ctx.font = "bold 36px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        initials,
        avatarX + avatarSize / 2,
        avatarY + avatarSize / 2
      );
      ctx.restore();
    };

    switch (selectedContributor.role) {
      case "Mentor":
        certificateImg.src = "/certificates/mentor.png";
        break;
      case "Project Admin":
        certificateImg.src = "/certificates/pa.png";
        break;
      case "Campus Ambassador":
        certificateImg.src = "/certificates/ca.png";
        break;
      default: // contributor
        certificateImg.src = "/certificates/ca.png";
        break;
    }
  }, [selectedContributor]);

  useEffect(() => {
    if (isModalOpen && selectedContributor && canvasRef.current) {
      // Add a small delay to ensure the canvas is fully rendered
      const timer = setTimeout(() => {
        renderCertificate();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isModalOpen, selectedContributor, renderCertificate]);

  const downloadCertificate = () => {
    const canvas = canvasRef.current;
    if (!canvas || !selectedContributor) {
      console.error("Canvas or contributor data not available");
      return;
    }

    try {
      const link = document.createElement("a");
      link.download = `${selectedContributor.full_name.replace(
        /\s+/g,
        "_"
      )}_certificate.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Error downloading certificate:", error);
      alert("Failed to download certificate. Please try again.");
    }
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
        <UserWithCertificateSearchComponent openCertificateModal={openCertificateModal} />
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

      {isModalOpen && selectedContributor && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 cursor-pointer"
          onClick={(e) =>
            e.target === e.currentTarget && closeCertificateModal()
          }
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-gradient-to-b from-[#00041f] to-[#00041f00] border border-[#131839] rounded-3xl shadow-2xl shadow-blue-500/40 max-w-5xl w-full max-h-[95vh] overflow-hidden cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background pattern */}
            <Image
              src={cardbg1}
              alt="Background"
              className="absolute right-0 top-0 w-full h-full object-cover z-0 rounded-3xl opacity-20"
            />

            <div className="relative z-10 flex flex-col h-full items-center justify-center">
              {/* Header */}
              <div className="flex justify-center items-center border-b border-[#131839]/50 p-6 pb-0">
                <div className="flex-1 flex flex-col items-center justify-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                    Certificate of Achievement
                  </h2>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <p className="text-[#A7ADBE] text-md font-bold">
                      {selectedContributor.full_name}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-[#A7ADBE]">
                      <span className="px-2 py-1 bg-[#131839] rounded-full border border-[#232D6B]">
                        Rank #{selectedContributor.rank}
                      </span>
                      <span className="px-2 py-1 bg-[#131839] rounded-full border border-[#232D6B]">
                        {selectedContributor.points} Points
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificate Display */}
              <div className="flex-1 flex items-center justify-center p-6 md:p-8">
                <div className="w-full max-w-4xl">
                  <canvas
                    ref={canvasRef}
                    className="w-full h-auto border border-[#131839] rounded-2xl shadow-2xl shadow-blue-500/30 transition-all duration-200 hover:shadow-blue-500/50"
                    style={{ maxHeight: "60vh", aspectRatio: "4/3" }}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-6 border-t border-[#131839]/50 pt-1">
                <button
                  onClick={() => downloadCertificate()}
                  className="w-full sm:w-auto bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] text-white py-4 px-8 rounded-full font-semibold hover:from-[#5a81ff] hover:to-[#2459ff] transition-all duration-200 border border-[#131839] hover:shadow-lg hover:shadow-blue-500/30 cursor-pointer transform hover:scale-[1.02] active:scale-[0.98] min-w-[200px]"
                  title="Download certificate as PNG"
                >
                  <span className="text-sm md:text-base">
                    Download Certificate
                  </span>
                </button>
                <button
                  onClick={closeCertificateModal}
                  className="w-full sm:w-auto bg-transparent bg-[radial-gradient(100%_100%_at_50%_100%,_rgb(16,_22,_54)_14.38%,_rgb(12,_16,_39)_100%)] border border-[#131839] text-white py-4 px-8 rounded-full font-medium hover:bg-[#131839] hover:border-[#232D6B] transition-all duration-200 cursor-pointer transform hover:scale-[1.02] active:scale-[0.98] min-w-[140px]"
                  title="Close modal"
                >
                  <span className="text-sm md:text-base">Close</span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

function UserWithCertificateSearchComponent({ openCertificateModal }) {
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
          console.log( "results", results);
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
        <div className="flex flex-wrap justify-center gap-3">
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
          {searchResults.map((user, index) => (
            <motion.div
              key={user.id ?? index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FFFFFF10] backdrop-blur-sm border border-[#4C75FF]/20 rounded-xl p-6 hover:border-[#4C75FF]/50 hover:bg-[#FFFFFF15] transition-all duration-300 group"
            >
              {/* User Avatar */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4C75FF] to-[#1A4FFF] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {user.full_name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="ml-3">
                    <h3 className="text-white font-semibold text-lg">
                      {user.full_name}
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
              {/* <div className="mb-4">
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
              </div> */}

              {/* Issue Date */}
              <p className="text-[#A7ADBE] text-xs mb-4">
                Issued: {new Date(user.issueDate).toLocaleDateString()}
              </p>

              {/* Download Button */}
              <button
                onClick={() => {
                  openCertificateModal(user);
                }}
                className="w-full bg-gradient-to-r from-[#4C75FF] to-[#1A4FFF] text-white px-4 py-2 rounded-lg font-medium hover:from-[#5A84FF] hover:to-[#2A5AFF] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#4C75FF]/25 hover:cursor-pointer"
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
            {
              "certificate. You can also filter by role using the tags above. You"
            }
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
