"use client";
import Image from "next/image";
import bg from "@/assets/hero-bg.svg";
import bgsup from "@/assets/hero-bg-support.svg";
import cardbg1 from "@/assets/box-bg.svg";

import iconbg from "@/assets/icon-bg.svg";
import icon1 from "@/assets/icon1.svg";
import icon2 from "@/assets/icon2.svg";
import icon3 from "@/assets/icon3.svg";

import sbg from "@/assets/section-bg-mid-part.svg";
import sbg2 from "@/assets/section-bg-mid-part-2.svg";
import stick from "@/assets/stick-right.svg";

import cardbg3 from "@/assets/card-bg-3.svg";
import cardbg4 from "@/assets/card-bg-4.svg";
import cardbg5 from "@/assets/card-bg-5.svg";
import cardbg6 from "@/assets/card-bg-6.svg";
import cardbg7 from "@/assets/card-bg-7.svg";
import cardbg8 from "@/assets/card-bg-8.svg";
import cardbg9 from "@/assets/card-bg-10.svg";

import needle from "@/assets/needle.svg";
import needle2 from "@/assets/needle-2.svg";

import about from "@/assets/about.jpeg";
import twitter from "@/assets/twitter.svg";
import linkedin from "@/assets/linkedin.svg";
import instagram from "@/assets/instagram.svg";
import banner from "@/assets/banner.jpg";
import profile from "@/assets/profile.jpeg";
import commas from "@/assets/commas.svg";
import stars from "@/assets/stars.svg";

import { ShootingStars } from "@/components/shooting-stars";
import { StarsBackground } from "@/components/stars-background";
import { SparklesCore } from "@/components/sparkles";
import { delay, motion, Variants } from "framer-motion";
import { redirect } from "next/navigation";
import Testimonials from "@/components/Testimonials";
import PastSponsors from "@/components/PastSponsors";
import {
  AreaChartComponent,
  BarChartComponent,
  RadarChartComponent,
  LineChartComponent,
  HorizontalBarChartComponent,
  ComposedChartComponent,
  PieChartComponent,
} from "@/components/Charts";
import CountUp from "@/components/CountUp";
import PostmanCertificationSection from "@/components/PostmanCertificationSection";

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

export default function Home() {
  return (
    <div className="relative w-full min-h-screen font-sans overflow-hidden">
      <div className="fixed inset-0 -z-20 w-full h-full overflow-hidden">
        <ShootingStars />
        <StarsBackground starDensity={0.001} />
      </div>

      <header className="fixed top-0 left-0 w-full bg-transparent flex items-center justify-between p-8 z-80">
        <div className="text-white text-xl md:text-2xl">GSSoC &apos;25</div>

        <nav className="md:flex hidden space-x-2 bg-[#0E122E] p-[4px] px-2 rounded-full border border-[#232D6B]">
          <a
            href="#home"
            className="text-white bg-transparent hover:bg-[#161C44] border border-transparent hover:border-[#232D6B] cursor-pointer px-4 py-2 rounded-full"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white bg-transparent hover:bg-[#161C44] border border-transparent hover:border-[#232D6B] cursor-pointer px-4 py-2 rounded-full"
          >
            About
          </a>
          <a
            href="#timeline"
            className="text-white bg-transparent hover:bg-[#161C44] border border-transparent hover:border-[#232D6B] cursor-pointer px-4 py-2 rounded-full"
          >
            Timeline
          </a>
          <a
            href="#sponsor"
            className="text-white bg-transparent hover:bg-[#161C44] border border-transparent hover:border-[#232D6B] cursor-pointer px-4 py-2 rounded-full"
          >
            Sponsor
          </a>
          <a
            href="/team"
            className="text-white bg-transparent hover:bg-[#161C44] border border-transparent hover:border-[#232D6B] cursor-pointer px-4 py-2 rounded-full"
          >
            Team
          </a>
          <a
            href="#contact"
            className="text-white bg-transparent hover:bg-[#161C44] border border-transparent hover:border-[#232D6B] cursor-pointer px-4 py-2 rounded-full"
          >
            Contact
          </a>
        </nav>

        <a
          href="#apply"
          className="text-white px-5 py-3 rounded-full bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] font-normal cursor-pointer text-[12px] md:text-[14px]"
        >
          Apply Now
        </a>
      </header>

      <section
        id="home"
        className="w-screen h-screen relative bg-transparent flex flex-col items-center justify-center"
      >
        <Image
          src={bg}
          alt="Background"
          className="absolute bottom-0 w-full md:w-5/6 object-contain -z-10"
        />
        <Image
          src={bgsup}
          alt="Background"
          className="absolute top-0 left-0 w-[800px] object-contain -z-10"
        />
        <Image
          src={bgsup}
          alt="Background"
          className="absolute top-0 right-0 w-[800px] object-contain -z-10 scale-x-[-1]"
        />

        <div className="text-center text-white">
          <p className="md:mb-8 mb-4 md:mt-44 text-[#A7ADBE] bg-[#FFFFFF15] text-[8px] md:text-[12px] inline-block px-4 py-2 rounded-full">
            India&apos;s prominent open source program with 50,000+ annual
            applicants.
          </p>
          <h1 className="text-3xl md:text-6xl font-bold mb-4">
            GirlScript Summer <br /> Of Code 2025
          </h1>
          <p className="text-[10px] mb-8 md:text-[14px] text-[#A7ADBE]">
            A new era of open source contributions and learning.
          </p>
          <a
            href="#apply"
            className="bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] text-white px-5 py-3 rounded-full font-normal cursor-pointer text-[12px] md:text-[14px]"
          >
            Apply Now
          </a>
          <div className="flex items-center justify-center mt-6">
            <div className="bg-[#0DDE33] h-2 w-2 rounded-full" />
            <p className="text-[#A7ADBE] text-[10px] md:text-[12px] ml-2">
              All Applications Live!
            </p>
          </div>
        </div>
      </section>

      <motion.section
        id="about"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
        className="w-screen h-min-screen relative flex flex-col items-center bg-[#00020f] text-white"
      >
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="w-11/12 md:w-5/6 mb-16 md:mb-24 overflow-hidden aspect-5/4 md:aspect-5/2 border border-[#131839] bg-radial from-[#003BFF24] from-0% to-[#00020F] to-100% rounded-3xl p-2 flex flex-col items-center justify-center relative shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mt-12 md:mt-32"
        >
          <Image
            src={about}
            alt="Background"
            className="absolute left-0 top-0 h-full w-full object-cover"
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="w-screen relative flex flex-col items-center bg-[#00020f] text-white"
        >
          <div className="text-center text-white z-20 flex flex-col items-center">
            <p className="text-lg mb-4 text-[#A7ADBE] bg-[#FFFFFF15] text-[12px] inline-block px-4 py-2 rounded-full">
              About Us
            </p>
            <h1 className="text-3xl md:text-6xl font-bold mb-4">
              Know About <br /> GirlScript Foundation
            </h1>
            <p className="w-11/12 text-lg mb-8 text-[10px] md:text-[14px] text-[#A7ADBE] text-balance">
              Founded in 2017 by Anubha Maheshwar, Girlscript is a
              not-for-profit organization dedicated to making quality education
              accessible for all. With a mission to empower individuals through
              learning, we&apos;ve built a vibrant community of over 500,000
              learners. Our programs focus on skill development, mentorship, and
              career guidance, bridging the gap between education and the
              professional world. We collaborate with corporates and
              institutions to offer real-world learning experiences, all while
              staying rooted in inclusivity, humility, and community. At
              Girlscript, every learner&apos;s growth is a shared success. Join
              us in shaping a future where education is a right—not a
              privilege—and where everyone can thrive.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="w-screen relative flex flex-row items-center justify-center bg-[#00020f] text-white mb-8"
        >
          <a
            href="mailto:gssoc@girlscript.tech"
            target="_blank"
            className="bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] border border-[#131839] text-white px-5 py-3 rounded-full font-normal cursor-pointer text-[12px] md:text-[14px] mr-4"
          >
            Get In Touch
          </a>
          <a
            href="https://girlscript.tech"
            target="_blank"
            className="bg-transparent bg-[radial-gradient(100%_100%_at_50%_100%,_rgb(16,_22,_54)_14.38%,_rgb(12,_16,_39)_100%)] border border-[#131839] text-white px-5 py-3 rounded-full font-normal cursor-pointer text-[12px] md:text-[14px]"
          >
            Visit Our Website
          </a>
        </motion.div>

        <motion.div
          className="relative max-w-[400px] w-3/4 bg-transparent bg-gradient-to-b from-[#00041f] to-[#00041f00] rounded-3xl border border-[#131839] flex flex-row justify-between items-center p-4 shadow-2xl shadow-blue-500/20 md:mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="h-8 md:h-12 w-8 md:w-12 aspect-square rounded-xl overflow-hidden flex items-center justify-center relative">
            <Image
              src={profile}
              alt="Icon"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-3/5 ">
            <div className="text-[12px] md:text-[18px] w-full text-left">
              Anubha Maneshwar
            </div>
            <div className="text-[#A7ADBE] w-full text-left text-[12px]">
              Founder And CEO
            </div>
          </div>

          <a
            href="https://x.com/anubhamane"
            target="_blank"
            className="h-8 md:h-12 w-8 md:w-12 aspect-square rounded-xl overflow-hidden flex items-center justify-center relative"
          >
            <Image
              src={iconbg}
              alt="Background"
              className="w-full h-full object-cover"
            />
            <Image
              src={twitter}
              alt="Icon"
              className="absolute w-1/2 object-cover"
            />
          </a>
        </motion.div>
      </motion.section>

      <motion.section
        id="about"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
        className="w-screen mt-40 h-min-screen relative flex flex-col items-center bg-[#00020f] text-white"
      >
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="w-screen relative flex flex-col items-center bg-[#00020f] text-white"
        >
          <div className="text-center text-white z-20 flex flex-col items-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-4">
              Know About <br /> GirlScript Summer Of Code
            </h1>
            <p className="w-11/12 text-lg mb-8 text-[10px] md:text-[14px] text-[#A7ADBE] text-balance">
              GirlScript Summer of Code is the 3-month long Open Source program
              during summers conducted by GirlScript Foundation, started in
              2018, to help beginners get started with Open Source Development
              while encouraging diversity. Throughout the program, participants
              contribute to different projects under the guidance of experienced
              mentors. Top participants get exciting goodies and opportunities.
            </p>
          </div>
        </motion.div>

        <div className="w-full flex flex-wrap justify-center md:gap-8 gap-4 mt-2 mb-32">
          <div variants={itemVariants} className="flex flex-col items-center">
            <CountUp end={43} suffix="k+" />
            <div className="text-[#A7ADBE] text-sm md:text-base">
              Registrations
            </div>
          </div>

          <div variants={itemVariants} className="flex flex-col items-center">
            <CountUp end={200} suffix="+" />
            <div className="text-[#A7ADBE] text-sm md:text-base">
              Institutes
            </div>
          </div>

          <div variants={itemVariants} className="flex flex-col items-center">
            <CountUp end={21} suffix="K+" />
            <div className="text-[#A7ADBE] text-sm md:text-base">PRs</div>
          </div>

          <div variants={itemVariants} className="flex flex-col items-center">
            <CountUp end={20} suffix="+" />
            <div className="text-[#A7ADBE] text-sm md:text-base">Countries</div>
          </div>

          <div variants={itemVariants} className="flex flex-col items-center">
            <CountUp end={137} suffix="K+" />
            <div className="text-[#A7ADBE] text-sm md:text-base">
              Linkedin Followers
            </div>
          </div>

          <div variants={itemVariants} className="flex flex-col items-center">
            <CountUp end={500} suffix="+" />
            <div className="text-[#A7ADBE] text-sm md:text-base">
              Total Projects
            </div>
          </div>
        </div>

        <motion.div
          className="w-5/6 grid grid-cols-1 lg:grid-cols-3 grid-rows-3 gap-4 mt-[80px] md:mt-8 items-center justify-items-center max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div
            className="group relative aspect-square max-w-[400px] w-full bg-transparent bg-gradient-to-b from-[#00041f] to-[#00041f00] rounded-3xl border border-[#131839] flex flex-col justify-center p-4 shadow-2xl shadow-blue-500/20"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image
              src={cardbg1}
              alt="Background"
              className="absolute right-0 top-0 w-full h-full object-cover z-10 rounded-3xl"
            />
            <BarChartComponent />
          </motion.div>

          <motion.div
            className="group relative aspect-square max-w-[400px] w-full bg-transparent bg-gradient-to-b from-[#00041f] to-[#00041f00] rounded-3xl border border-[#131839] flex flex-col justify-center p-4 shadow-2xl shadow-blue-500/20"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image
              src={cardbg1}
              alt="Background"
              className="absolute right-0 top-0 w-full h-full object-cover z-10 rounded-3xl"
            />
            <AreaChartComponent />
          </motion.div>

          {/* Radar Chart for LinkedIn Followers */}
          {/* <motion.div
            className="group relative aspect-square max-w-[400px] w-full bg-transparent bg-gradient-to-b from-[#00041f] to-[#00041f00] rounded-3xl border border-[#131839] flex flex-col justify-center items-center p-0 shadow-2xl shadow-blue-500/20"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image
              src={cardbg1}
              alt="Background"
              className="absolute right-0 top-0 w-full h-full object-cover z-10 rounded-3xl"
            />
            <RadarChartComponent />
          </motion.div> */}

          <motion.div
            className="group relative aspect-square max-w-[400px] w-full bg-transparent bg-gradient-to-b from-[#00041f] to-[#00041f00] rounded-3xl border border-[#131839] flex flex-col justify-center p-4 shadow-2xl shadow-blue-500/20"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image
              src={cardbg1}
              alt="Background"
              className="absolute right-0 top-0 w-full h-full object-cover z-10 rounded-3xl"
            />
            <LineChartComponent />
          </motion.div>

          <motion.div
            className="group relative aspect-square max-w-[400px] w-full bg-transparent bg-gradient-to-b from-[#00041f] to-[#00041f00] rounded-3xl border border-[#131839] flex flex-col justify-center p-4 shadow-2xl shadow-blue-500/20"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image
              src={cardbg1}
              alt="Background"
              className="absolute right-0 top-0 w-full h-full object-cover z-10 rounded-3xl"
            />
            <HorizontalBarChartComponent />
          </motion.div>

          <motion.div
            className="group relative aspect-square max-w-[400px] w-full bg-transparent bg-gradient-to-b from-[#00041f] to-[#00041f00] rounded-3xl border border-[#131839] flex flex-col justify-center p-4 shadow-2xl shadow-blue-500/20"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image
              src={cardbg1}
              alt="Background"
              className="absolute right-0 top-0 w-full h-full object-cover z-10 rounded-3xl"
            />
            <ComposedChartComponent />
          </motion.div>
          <motion.div
            className="group relative aspect-square max-w-[400px] w-full bg-transparent bg-gradient-to-b from-[#00041f] to-[#00041f00] rounded-3xl border border-[#131839] flex flex-col justify-center p-4 shadow-2xl shadow-blue-500/20"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image
              src={cardbg1}
              alt="Background"
              className="absolute right-0 top-0 w-full h-full object-cover z-10 rounded-3xl"
            />
            <PieChartComponent />
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        id="why-gssoc"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
        className="w-screen relative flex flex-col items-center bg-[#00020f] text-white"
      >
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="w-screen relative flex flex-col items-center bg-[#00020f] text-white mt-2"
        >
          <Image
            src={sbg}
            alt="Background"
            className="absolute top-20 object-contain scale-x-[-1]"
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

          <div className="text-center text-white z-20">
            <p className="text-lg mb-4 mt-32 text-[#A7ADBE] bg-[#FFFFFF15] text-[12px] inline-block px-4 py-2 rounded-full">
              Why GSSoC?
            </p>
            <h1 className="text-3xl md:text-6xl font-bold mb-4">
              Why You Should <br /> Take Part In GSSoC
            </h1>
            <p className="text-lg mb-8 text-[10px] md:text-[14px] text-[#A7ADBE]">
              A new era of open source contributions and learning.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-row items-center justify-center w-full"
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="w-1/4 bg-gradient-to-r from-transparent to-[#171D45] h-[2px]" />
          <span className="text-[#C4C8D4] mx-4 text-center text-[12px] md:text-[16px]">
            Watch This To Learn More
          </span>
          <div className="w-1/4 bg-gradient-to-l from-transparent to-[#171D45] h-[2px]" />
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="w-11/12 md:w-5/6 border border-[#131839] bg-transparent bg-gradient-to-b from-[#00041f] to-[#00041f00] mt-12 rounded-3xl aspect-video p-2 shadow-2xl shadow-blue-500/20"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/yi_LounnOk0?autoplay=1&loop=1&playlist=yi_LounnOk0&controls=0&rel=0&showinfo=0&modestbranding=1"
            title="GSSoC 2024 Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-3xl"
          />
        </motion.div>
      </motion.section>

      <PostmanCertificationSection />

      <motion.section
        id="timeline"
        className="w-screen min-h-screen relative flex flex-col items-center bg-[#00020f] text-white"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          className="w-screen relative flex flex-col items-center bg-[#00020f] text-white mt-32"
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <Image
            src={sbg2}
            alt="Background"
            className="absolute top-20 object-contain scale-x-[-1]"
          />
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={0.8}
            particleDensity={80}
            particleSpeed={0.2}
            className="absolute top-20 w-full h-[300px]"
            particleColor="#FFFFFF"
          />
          <Image
            src={stick}
            alt="Background"
            className="absolute top-0 left-0 w-1/3 object-contain scale-x-[-1] z-10"
          />
          <Image
            src={stick}
            alt="Background"
            className="absolute top-0 right-0 w-1/3 object-contain z-10"
          />
          <div className="text-center text-white z-20">
            <p className="text-lg mb-4 mt-32 text-[#A7ADBE] bg-[#FFFFFF15] text-[12px] inline-block px-4 py-2 rounded-full">
              Timeline
            </p>
            <h1 className="text-3xl md:text-6xl font-bold mb-4">
              Whats And When <br /> Will Things Happen
            </h1>
            <p className="text-lg mb-8 text-[10px] md:text-[14px] text-[#A7ADBE]">
              A new era of open source contributions and learning.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="w-11/12 md:w-5/6 grid grid-cols-1 md:grid-cols-3 grid-rows-6 md:grid-rows-2 gap-4 mt-[120px] items-center justify-items-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div
            className="relative w-full h-[180px] md:h-[240px] bg-transparent bg-gradient-to-b from-[#00041f] to-[#00041f00] rounded-3xl border border-[#131839] flex flex-col justify-center p-8 shadow-2xl shadow-blue-500/20 flex-box"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image
              src={cardbg1}
              alt="Background"
              className="absolute right-0 top-0 w-full h-full object-cover"
            />

            <div className="mb-4 text-[#A7ADBE] text-[12px] py-2 rounded-xl">
              20th June 2025
            </div>

            <div className="text-[14px] md:text-[18px] my-2">
              Project Assignment to Mentors
            </div>
            <div className="text-[12px] text-[#A7ADBE]">
              Mentors are assigned to projects and begin preparing to guide
              contributors throughout the program.
            </div>
          </motion.div>

          <motion.div
            className="relative w-full h-[180px] md:h-[240px] bg-transparent bg-gradient-to-b from-[#00041f] to-[#00041f00] rounded-3xl border border-[#131839] flex flex-col justify-center p-8 shadow-2xl shadow-blue-500/20 flex-box"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image
              src={cardbg1}
              alt="Background"
              className="absolute right-0 top-0 w-full h-full object-cover"
            />

            <div className="mb-4 text-[#A7ADBE] text-[12px] py-2 rounded-xl">
              23th June 2025
            </div>

            <div className="text-[14px] md:text-[18px] my-2">
              Community Bonding Period Starts
            </div>
            <div className="text-[12px] text-[#A7ADBE]">
              Contributors and mentors interact, discuss project goals, and get
              familiar with the community.
            </div>
          </motion.div>

          <motion.div
            className="relative w-full h-[180px] md:h-[240px] bg-transparent bg-gradient-to-b from-[#00041f] to-[#00041f00] rounded-3xl border border-[#131839] flex flex-col justify-center p-8 shadow-2xl shadow-blue-500/20 flex-box"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image
              src={cardbg1}
              alt="Background"
              className="absolute right-0 top-0 w-full h-full object-cover"
            />

            <div className="mb-4 text-[#A7ADBE] text-[12px] py-2 rounded-xl">
              To Be Announced
            </div>

            <div className="text-[14px] md:text-[18px] my-2">
              Coding Period Starts
            </div>
            <div className="text-[12px] text-[#A7ADBE]">
              Contributors officially start working on their assigned open
              source projects under mentor supervision.
            </div>
          </motion.div>

          <motion.div
            className="relative w-full h-[180px] md:h-[240px] bg-transparent bg-gradient-to-b from-[#00041f] to-[#00041f00] rounded-3xl border border-[#131839] flex flex-col justify-center p-8 shadow-2xl shadow-blue-500/20 flex-box"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image
              src={cardbg1}
              alt="Background"
              className="absolute right-0 top-0 w-full h-full object-cover"
            />

            <div className="mb-4 text-[#A7ADBE] text-[12px] py-2 rounded-xl">
              To Be Announced
            </div>

            <div className="text-[14px] md:text-[18px] my-2">
              Leaderboard Opens
            </div>
            <div className="text-[12px] text-[#A7ADBE]">
              The leaderboard is made public, allowing participants to track
              their progress and contributions.
            </div>
          </motion.div>

          <motion.div
            className="relative w-full h-[180px] md:h-[240px] bg-transparent bg-gradient-to-b from-[#00041f] to-[#00041f00] rounded-3xl border border-[#131839] flex flex-col justify-center p-8 shadow-2xl shadow-blue-500/20 flex-box"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image
              src={cardbg1}
              alt="Background"
              className="absolute right-0 top-0 w-full h-full object-cover"
            />

            <div className="mb-4 text-[#A7ADBE] text-[12px] py-2 rounded-xl">
              To Be Announced
            </div>

            <div className="text-[14px] md:text-[18px] my-2">
              Coding Period Ends
            </div>
            <div className="text-[12px] text-[#A7ADBE]">
              The official coding phase concludes; contributors submit their
              final work for evaluation.
            </div>
          </motion.div>

          <motion.div
            className="relative w-full h-[180px] md:h-[240px] bg-transparent bg-gradient-to-b from-[#00041f] to-[#00041f00] rounded-3xl border border-[#131839] flex flex-col justify-center p-8 shadow-2xl shadow-blue-500/20 flex-box"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image
              src={cardbg1}
              alt="Background"
              className="absolute right-0 top-0 w-full h-full object-cover"
            />

            <div className="mb-4 text-[#A7ADBE] text-[12px] py-2 rounded-xl">
              To Be Announced
            </div>

            <div className="text-[14px] md:text-[18px] my-2">
              Result will be declared
            </div>
            <div className="text-[12px] text-[#A7ADBE]">
              Final results are announced, recognizing top contributors and
              successful projects.
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* 
      <motion.section
        id="blogs"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
        className="w-screen relative flex flex-col items-center bg-[#00020f] text-white"
      >
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="w-screen relative flex flex-col items-center bg-[#00020f] text-white mt-32"
        >
          <Image
            src={sbg}
            alt="Background"
            className="absolute top-20 object-contain scale-x-[-1]"
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

          <div className="text-center text-white z-20">
            <p className="text-lg mb-4 mt-32 text-[#A7ADBE] bg-[#FFFFFF15] text-[12px] inline-block px-4 py-2 rounded-full">
              Blogs
            </p>
            <h1 className="text-3xl md:text-6xl font-bold mb-4">
              Stay Ahead With Latest <br /> Updates From Team
            </h1>
            <p className="text-lg mb-8 text-[10px] md:text-[14px] text-[#A7ADBE]">
              A new era of open source contributions and learning.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="w-5/6 grid grid-cols-1 md:grid-cols-3 grid-rows-6 md:grid-rows-1 mb-12 gap-4 mt-[120px] items-center justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div
            className="group relative aspect-3/4 max-w-[400px] w-full bg-transparent bg-gradient-to-b from-[#00041f] to-[#00041f00] rounded-3xl border border-[#131839] flex flex-col justify-center items-center p-8 shadow-2xl shadow-blue-500/20 overflow-hidden"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image
              src={banner}
              alt="Background"
              className="absolute right-0 top-0 w-full h-3/4 object-cover"
            />
            <div className="absolute right-0 top-0 w-full h-3/4 bg-[linear-gradient(rgb(0,4,31,0)_72.36%,rgba(0,4,31,0.98)_99.99%,rgba(0,4,31)_100%)]"></div>

            <div className="absolute bottom-8 left-8 w-full">
              <div className="text-[18px] my-0 w-full text-left">
                Some Headline
              </div>
              <div className="text-[#A7ADBE] w-full text-left">
                Some Strong Punchline For This
              </div>
            </div>
          </motion.div>

          <motion.div
            className="group relative aspect-3/4 max-w-[400px] w-full bg-transparent bg-gradient-to-b from-[#00041f] to-[#00041f00] rounded-3xl border border-[#131839] flex flex-col justify-center items-center p-8 shadow-2xl shadow-blue-500/20 overflow-hidden"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image
              src={banner}
              alt="Background"
              className="absolute right-0 top-0 w-full h-3/4 object-cover"
            />
            <div className="absolute right-0 top-0 w-full h-3/4 bg-[linear-gradient(rgb(0,4,31,0)_72.36%,rgba(0,4,31,0.98)_99.99%,rgba(0,4,31)_100%)]"></div>

            <div className="absolute bottom-8 left-8 w-full">
              <div className="text-[18px] my-0 w-full text-left">
                Some Headline
              </div>
              <div className="text-[#A7ADBE] w-full text-left">
                Some Strong Punchline For This
              </div>
            </div>
          </motion.div>

          <motion.div
            className="group relative aspect-3/4 max-w-[400px] w-full bg-transparent bg-gradient-to-b from-[#00041f] to-[#00041f00] rounded-3xl border border-[#131839] flex flex-col justify-center items-center p-8 shadow-2xl shadow-blue-500/20 overflow-hidden"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image
              src={banner}
              alt="Background"
              className="absolute right-0 top-0 w-full h-3/4 object-cover"
            />
            <div className="absolute right-0 top-0 w-full h-3/4 bg-[linear-gradient(rgb(0,4,31,0)_72.36%,rgba(0,4,31,0.98)_99.99%,rgba(0,4,31)_100%)]"></div>

            <div className="absolute bottom-8 left-8 w-full">
              <div className="text-[18px] my-0 w-full text-left">
                Some Headline
              </div>
              <div className="text-[#A7ADBE] w-full text-left">
                Some Strong Punchline For This
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
      */}

      <motion.section
        id="testimonials"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
        className="w-screen relative flex flex-col items-center bg-[#00020f] text-white"
      >
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="w-screen relative flex flex-col items-center bg-[#00020f] text-white mt-32"
        >
          <Image
            src={sbg2}
            alt="Background"
            className="absolute top-20 object-contain scale-x-[-1]"
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

          <div className="text-center text-white z-20">
            <p className="text-lg mb-4 mt-32 text-[#A7ADBE] bg-[#FFFFFF15] text-[12px] inline-block px-4 py-2 rounded-full">
              Testimonals
            </p>
            <h1 className="text-3xl md:text-6xl font-bold mb-4">
              What People Say <br /> About Previous Editions
            </h1>
            <p className="text-lg mb-8 text-[10px] md:text-[14px] text-[#A7ADBE]">
              A new era of open source contributions and learning.
            </p>
          </div>
        </motion.div>

        {/* <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="relative w-11/12 aspect-5/3 border border-[#131839] bg-radial from-[#003BFF24] from-0% to-[#00020F] to-100% rounded-3xl p-2 flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mt-32 mb-44"
        >
          <Image
            src={cardbg9}
            alt="Background"
            className="absolute w-full h-full top-0 object-cover"
          />

          <div className="h-12 w-12 aspect-square rounded-xl overflow-hidden flex items-center justify-center relative">
            <Image
              src={commas}
              alt="Icon"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-xl text-[#A7ADBE] mt-12 text-balance text-center z-10 leading-[1.2] font-semibold px-8">
            As a Campus Ambassador for GSSoC&apos;24, I&apos;ve had an
            incredible experience working with a dedicated team and a vibrant
            community of developers. The program&apos;s organization, clear
            communication, and supportive environment have made my role both
            enjoyable and impactful. The diverse projects and the collaborative
            spirit among participants and mentors have been truly inspiring,
            helping me grow both technically and personally. I am grateful for
            this opportunity and look forward to contributing to the continued
            success of GSSoC in the future.
          </div>

          <Image src={stars} alt="Icon" className="z-10 mt-8 w-[120px]" />

          <div className="flex flex-row items-center justify-between mt-12 z-10">
            <div className="h-12 w-12 aspect-square rounded-xl overflow-hidden flex items-center justify-center relative">
              <Image
                src={profile}
                alt="Icon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-4">
              <div className="text-[18px] w-full text-left">
                Anubha Maneshwar
              </div>
              <div className="text-[#A7ADBE] w-full text-left">
                Founder And CEO
              </div>
            </div>
          </div>
        </motion.div> */}
      </motion.section>
      <div className="w-full">
        <Testimonials />
      </div>

      <motion.section
        id="sponsor"
        className="w-screen min-h-screen relative flex flex-col items-center bg-[#00020f] text-white"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          className="w-screen relative flex flex-col items-center bg-[#00020f] text-white mt-32"
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <Image
            src={sbg2}
            alt="Background"
            className="absolute top-20 object-contain scale-x-[-1]"
          />
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={0.8}
            particleDensity={80}
            particleSpeed={0.2}
            className="absolute top-20 w-full h-[300px]"
            particleColor="#FFFFFF"
          />
          <Image
            src={stick}
            alt="Background"
            className="absolute top-0 left-0 w-1/3 object-contain scale-x-[-1] z-10"
          />
          <Image
            src={stick}
            alt="Background"
            className="absolute top-0 right-0 w-1/3 object-contain z-10"
          />
          <div className="text-center text-white z-20">
            <p className="text-lg mb-4 mt-32 text-[#A7ADBE] bg-[#FFFFFF15] text-[12px] inline-block px-4 py-2 rounded-full">
              Sponsor And Partner
            </p>
            <h1 className="text-3xl md:text-6xl font-bold mb-4">
              Sponsor Us Or <br /> Become Our Partner
            </h1>
            <p className="text-lg mb-8 text-[10px] md:text-[14px] text-[#A7ADBE]">
              A new era of open source contributions and learning.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="w-11/12 md:w-5/6 grid grid-cols-1 md:grid-cols-3 grid-rows-2 md:grid-rows-1 mt-12 gap-2 md:gap-8"
        >
          <motion.div className="relative w-full h-[180px] md:h-[240px] bg-transparent bg-gradient-to-b from-[#00041f] to-[#00041f00] rounded-3xl border border-[#131839] flex flex-col justify-center p-8 shadow-2xl shadow-blue-500/20">
            <Image
              src={cardbg1}
              alt="Background"
              className="absolute right-0 top-0 w-full h-full object-cover"
            />

            <div className="h-12 w-12 z-10 rounded-xl overflow-hidden flex items-center justify-center relative">
              <Image
                src={iconbg}
                alt="Background"
                className="w-full h-full object-cover"
              />
              <Image
                src={icon1}
                alt="Background"
                className="absolute w-11/12 h-3/5 object-cover"
              />
            </div>

            <div className="text-[14px] md:text-[18px] my-2">
              Maximize Visibility
            </div>
            <div className="text-[12px] text-[#A7ADBE]">
              Feature your brand across app, website, social media (500K+
              reach), newsletters, and event swag.
            </div>
          </motion.div>
          <motion.div className="relative w-full h-[180px] md:h-[240px] bg-transparent bg-gradient-to-b from-[#00041f] to-[#00041f00] rounded-3xl border border-[#131839] flex flex-col justify-center p-8 shadow-2xl shadow-blue-500/20">
            <Image
              src={cardbg1}
              alt="Background"
              className="absolute right-0 top-0 w-full h-full object-cover"
            />

            <div className="h-12 w-12 z-10 rounded-xl overflow-hidden flex items-center justify-center relative">
              <Image
                src={iconbg}
                alt="Background"
                className="w-full h-full object-cover"
              />
              <Image
                src={icon2}
                alt="Background"
                className="absolute w-11/12 h-3/5 object-cover"
              />
            </div>

            <div className="text-[14px] md:text-[18px] my-2">
              Engage & Activate
            </div>
            <div className="text-[12px] text-[#A7ADBE]">
              e: Host workshops, showcase tech, and integrate product tasks to
              reach 50,000+ developers directly.
            </div>
          </motion.div>
          <motion.div className="relative w-full h-[180px] md:h-[240px] bg-transparent bg-gradient-to-b from-[#00041f] to-[#00041f00] rounded-3xl border border-[#131839] flex flex-col justify-center p-8 shadow-2xl shadow-blue-500/20">
            <Image
              src={cardbg1}
              alt="Background"
              className="absolute right-0 top-0 w-full h-full object-cover"
            />

            <div className="h-12 w-12 z-10 rounded-xl overflow-hidden flex items-center justify-center relative">
              <Image
                src={iconbg}
                alt="Background"
                className="w-full h-full object-cover"
              />
              <Image
                src={icon3}
                alt="Background"
                className="absolute w-11/12 h-3/5 object-cover"
              />
            </div>

            <div className="text-[14px] md:text-[18px] my-2">
              Community Impact
            </div>
            <div className="text-[12px] text-[#A7ADBE]">
              Champion gender equity in tech through measurable
              support—mentorship hours, project outcomes, and participant
              placements.
            </div>
          </motion.div>
        </motion.div>

        <PastSponsors />
      </motion.section>

      <motion.section
        id="apply"
        className="w-full bg-[#00020f] text-white relative overflow-hidden flex flex-col items-center py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="relative max-w-4xl w-11/12 bg-gradient-to-br from-[#003BFF24] to-[#00020F] border border-[#131839] rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(8,112,184,0.5)]"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-indigo-300 mb-4 leading-tight"
          >
            Ready to Kick Off Your GSSoC 2025 Journey?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-center text-gray-300 text-lg md:text-xl mb-8"
          >
            We’ve teamed up with{" "}
            <strong className="text-white">Smartly Ventures</strong> to
            streamline your application process via their app{" "}
            <strong>Insights</strong>: Learn about opensource, apply for various
            roles and programs, and always stay up to date.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
          >
            <a
              href="https://lnk.ink/Dp2kd"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] text-white px-5 py-3 rounded-full font-normal cursor-pointer text-[12px] md:text-[14px]"
            >
              Download for Android
            </a>
            <a
              href="https://lnk.ink/4UeaK"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] text-white px-5 py-3 rounded-full font-normal cursor-pointer text-[12px] md:text-[14px]"
            >
              Download for iOS
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-[#11152b] border border-[#24315b] rounded-xl p-6 mb-10"
          >
            <h3 className="text-2xl font-semibold text-indigo-200 text-center mb-4">
              How to Apply
            </h3>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 text-base md:text-lg">
              <li>Open the Insights app</li>
              <li>Log in with your email</li>
              <li>
                Tap <strong>Explore</strong> and select the{" "}
                <strong>GSSoC 2025</strong> banner
              </li>
              <li>
                Choose your role: Contributors, Project Admins, Mentors, or
                Campus Ambassadors
              </li>
              <li>Fill out the form and submit</li>
            </ol>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center"
          >
            <a
              href="https://lnkd.in/g8aX534F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] text-white px-5 py-3 rounded-full font-normal cursor-pointer text-[12px] md:text-[14px]"
            >
              Join Our Discord
            </a>
            <p className="text-gray-500 mb-2 mt-4">
              #GSSoC2025 &bull; #GirlScriptFoundation &bull; #Tech
            </p>
            <p className="text-sm text-gray-600">
              For technical help, use{" "}
              <strong className="text-white">#technical-issues</strong> in
              Discord.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

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
