"use client";
import Image from "next/image";
import Link from "next/link";
import { ShootingStars } from "@/components/shooting-stars";
import { StarsBackground } from "@/components/stars-background";
import { motion } from "framer-motion";
import cardbg1 from "@/assets/box-bg.svg";
import iconbg from "@/assets/icon-bg.svg";
import twitter from "@/assets/twitter.svg";
import linkedin from "@/assets/linkedin.svg";
import instagram from "@/assets/instagram.svg";
import coreTeamMembers from "./team-data";

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

export default function TeamsPage() {
  return (
    <div className="relative w-full min-h-screen font-sans">
      <div className="fixed inset-0 -z-20 w-full h-full overflow-hidden">
        <ShootingStars />
        <StarsBackground starDensity={0.001} />
      </div>

      <header className="fixed top-0 left-0 w-full bg-transparent flex items-center justify-between p-8 z-80">
        <div className="text-white text-xl md:text-2xl">GSSoC &apos;25</div>
        <Link
          href="/"
          className="text-white px-5 py-3 rounded-full bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] font-normal cursor-pointer text-[12px] md:text-[14px]"
        >
          Go Back
        </Link>
      </header>

      <section className="w-full min-h-screen relative flex flex-col items-center justify-center bg-transparent text-white px-4 pt-32 pb-6">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="w-full max-w-6xl flex flex-col items-center bg-transparent text-white mb-16"
        >
          <div className="text-center text-white z-20 flex flex-col items-center">
            <p className="text-lg mb-4 text-[#A7ADBE] bg-[#FFFFFF15] text-[12px] inline-block px-4 py-2 rounded-full">
              Our Team
            </p>
            <h1 className="text-3xl md:text-6xl font-bold mb-4">
              Meet Our <br /> Core Team
            </h1>
            <p className="w-full max-w-4xl text-lg mb-8 text-[10px] md:text-[14px] text-[#A7ADBE] text-balance">
              The passionate individuals behind GirlScript Summer of Code 2025,
              dedicated to fostering open source contributions and empowering
              developers worldwide.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          {coreTeamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="group relative max-w-[400px] w-full bg-transparent bg-gradient-to-b from-[#00041f] to-[#00041f00] rounded-3xl border border-[#131839] flex flex-col items-center px-6 py-10 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <Image
                src={cardbg1}
                alt="Background"
                className="absolute right-0 top-0 w-full h-full object-cover z-0 rounded-3xl"
              />

              {/* Profile Image */}
              <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#232D6B] mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  width={128}
                  height={128}
                />
              </div>

              {/* Name */}
              <h3 className="text-[16px] md:text-[20px] font-semibold text-white text-center mb-2 z-10">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-[#A7ADBE] text-[12px] md:text-[14px] text-center italic mb-6 z-10">
                {member.role}
              </p>

              {/* Social Links */}
              <div className="flex space-x-3 z-10">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 aspect-square rounded-xl overflow-hidden flex items-center justify-center relative hover:scale-110 transition-transform duration-200"
                  >
                    <Image
                      src={iconbg}
                      alt="Background"
                      className="w-full h-full object-cover"
                    />
                    <Image
                      src={linkedin}
                      alt="LinkedIn"
                      className="absolute w-11/12 h-3/5 object-cover"
                    />
                  </a>
                )}

                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 aspect-square rounded-xl overflow-hidden flex items-center justify-center relative hover:scale-110 transition-transform duration-200"
                  >
                    <Image
                      src={iconbg}
                      alt="Background"
                      className="w-full h-full object-cover"
                    />
                    <Image
                      src={twitter}
                      alt="Twitter"
                      className="absolute w-11/12 h-3/5 object-cover"
                    />
                  </a>
                )}

                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 aspect-square rounded-xl overflow-hidden flex items-center justify-center relative hover:scale-110 transition-transform duration-200"
                  >
                    <Image
                      src={iconbg}
                      alt="Background"
                      className="w-full h-full object-cover"
                    />
                    <Image
                      src={instagram}
                      alt="Instagram"
                      className="absolute w-11/12 h-3/5 object-cover"
                    />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
        className="w-full relative flex flex-col items-center bg-[#00041F] text-white py-16"
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
          {/* LinkedIn */}
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

          {/* Twitter/X */}
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

          {/* Instagram */}
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
