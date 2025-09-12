"use client";
import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import contributorsData from './contributors-data.json';

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

export default function LeaderboardPage() {
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
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = 1200;
    canvas.height = 900;

    // Load certificate background image using document.createElement
    const certificateImg = document.createElement('img');
    certificateImg.crossOrigin = 'anonymous';
    
    certificateImg.onload = () => {
      // Draw certificate background
      ctx.drawImage(certificateImg, 0, 0, canvas.width, canvas.height);
      
      // Set text styles for contributor name
      ctx.font = 'bold 48px Arial';
      ctx.fillStyle = '#2c3e50';
      ctx.textAlign = 'center';
      
      // Draw contributor name
      ctx.fillText(selectedContributor.name, canvas.width / 2, canvas.height / 2 + 50);
      
      // Set text styles for points
      ctx.font = '32px Arial';
      ctx.fillStyle = '#34495e';
      
      // Draw points
      ctx.fillText(`${selectedContributor.points} Points`, canvas.width / 2, canvas.height / 2 + 100);
      
      // Draw rank
      ctx.font = '28px Arial';
      ctx.fillText(`Rank #${selectedContributor.rank}`, canvas.width / 2, canvas.height / 2 + 140);
      
      // Draw contributor avatar placeholder (avoiding CORS issues with external images)
      const avatarSize = 120;
      const avatarX = canvas.width / 2 - avatarSize / 2;
      const avatarY = canvas.height / 2 - 150;
      
      // Draw circular avatar background
      ctx.save();
      ctx.beginPath();
      ctx.arc(avatarX + avatarSize / 2, avatarY + avatarSize / 2, avatarSize / 2, 0, Math.PI * 2);
      ctx.fillStyle = '#4C75FF';
      ctx.fill();
      
      // Add initials as avatar
      const initials = selectedContributor.name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase()
        .slice(0, 2);
      
      ctx.fillStyle = 'white';
      ctx.font = 'bold 36px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(initials, avatarX + avatarSize / 2, avatarY + avatarSize / 2);
      ctx.restore();
    };
    
    certificateImg.onerror = () => {
      console.error('Failed to load certificate background image');
      // Draw a fallback background
      ctx.fillStyle = '#f0f0f0';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add fallback text
      ctx.fillStyle = '#333';
      ctx.font = 'bold 48px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Certificate of Achievement', canvas.width / 2, canvas.height / 2 - 100);
      ctx.fillText(selectedContributor.name, canvas.width / 2, canvas.height / 2 + 50);
      ctx.font = '32px Arial';
      ctx.fillText(`${selectedContributor.points} Points`, canvas.width / 2, canvas.height / 2 + 100);
      ctx.fillText(`Rank #${selectedContributor.rank}`, canvas.width / 2, canvas.height / 2 + 140);
      
      // Draw fallback avatar with initials
      const avatarSize = 120;
      const avatarX = canvas.width / 2 - avatarSize / 2;
      const avatarY = canvas.height / 2 - 150;
      
      ctx.save();
      ctx.beginPath();
      ctx.arc(avatarX + avatarSize / 2, avatarY + avatarSize / 2, avatarSize / 2, 0, Math.PI * 2);
      ctx.fillStyle = '#4C75FF';
      ctx.fill();
      
      const initials = selectedContributor.name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase()
        .slice(0, 2);
      
      ctx.fillStyle = 'white';
      ctx.font = 'bold 36px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(initials, avatarX + avatarSize / 2, avatarY + avatarSize / 2);
      ctx.restore();
    };
    
    certificateImg.src = '/certificate.jpg';
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
      console.error('Canvas or contributor data not available');
      return;
    }
    
    try {
      const link = document.createElement('a');
      link.download = `${selectedContributor.name.replace(/\s+/g, '_')}_certificate.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Error downloading certificate:', error);
      alert('Failed to download certificate. Please try again.');
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
              Top Contributors
            </p>
            <h1 className="text-3xl md:text-6xl font-bold mb-4">
              Leaderboard <br />
            </h1>
            <p className="w-11/12 max-w-2xl text-lg mb-8 text-[10px] md:text-[14px] text-[#A7ADBE] text-balance">
              Celebrating our amazing contributors and their outstanding contributions to open source projects across various domains.
            </p>
          </div>
        </motion.div>

        {/* Contributors grid */}
        <motion.div
          className="w-11/12 max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          {contributorsData.map((contributor) => (
            <motion.div
              key={contributor.id}
              className="group relative max-w-[400px] w-full bg-transparent bg-gradient-to-b from-[#00041f] to-[#00041f00] rounded-3xl border border-[#131839] flex flex-col p-6 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* Background pattern */}
              <Image
                src={cardbg1}
                alt="Background"
                className="absolute right-0 top-0 w-full h-full object-cover z-0 rounded-3xl"
              />
              
              {/* Profile section */}
              <div className="relative z-10 flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-[#232D6B]">
                  <img
                    src={contributor.avatar}
                    alt={contributor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{contributor.name}</h3>
                  <p className="text-2xl font-bold text-[#4C75FF]">{contributor.points} pts</p>
                </div>
              </div>
              
              {/* Projects section */}
              <div className="relative z-10 mb-6">
                <p className="text-sm text-[#A7ADBE] mb-2">Active Projects:</p>
                <div className="flex flex-wrap gap-1">
                  {contributor.projects.slice(0, 3).map((project, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#131839] text-[#A7ADBE] text-xs rounded-md border border-[#232D6B]"
                    >
                      {project}
                    </span>
                  ))}
                  {contributor.projects.length > 3 && (
                    <span className="px-2 py-1 bg-[#131839] text-[#A7ADBE] text-xs rounded-md border border-[#232D6B]">
                      +{contributor.projects.length - 3} more
                    </span>
                  )}
                </div>
              </div>
              
              {/* Download button */}
              <button
                onClick={() => openCertificateModal(contributor)}
                className="relative z-10 w-full bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] text-white py-3 px-4 rounded-full font-semibold hover:from-[#5a81ff] hover:to-[#2459ff] transition-all duration-200 flex items-center justify-center border border-[#131839] cursor-pointer transform hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg hover:shadow-blue-500/30"
                title="View and download certificate"
              >
                <span className="text-[12px] md:text-[14px]">Download Certificate</span>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Certificate Modal - Enhanced */}
      {isModalOpen && selectedContributor && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 cursor-pointer"
          onClick={(e) => e.target === e.currentTarget && closeCertificateModal()}
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
                      {selectedContributor.name}
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
                    style={{ maxHeight: '60vh', aspectRatio: '4/3' }}
                  />
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-6 border-t border-[#131839]/50 pt-1">
                <button
                  onClick={downloadCertificate}
                  className="w-full sm:w-auto bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] text-white py-4 px-8 rounded-full font-semibold hover:from-[#5a81ff] hover:to-[#2459ff] transition-all duration-200 border border-[#131839] hover:shadow-lg hover:shadow-blue-500/30 cursor-pointer transform hover:scale-[1.02] active:scale-[0.98] min-w-[200px]"
                  title="Download certificate as PNG"
                >
                  <span className="text-sm md:text-base">Download Certificate</span>
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
