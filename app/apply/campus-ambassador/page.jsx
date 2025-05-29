"use client";
import Image from "next/image";
import bg from "@/assets/hero-bg-2.png";

import iconbg from "@/assets/icon-bg.svg";

import about from "@/assets/about.png";
import twitter from "@/assets/twitter.svg";
import profile from "@/assets/profile.png";

import { delay, motion, Variants } from "framer-motion";

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

const CA = () => {
  return (
    <div className="relative w-full min-h-screen font-sans">
      <header className="fixed top-0 left-0 w-full bg-transparent flex items-center justify-between p-8 z-80">
        <div className="text-white text-2xl">GSSoC &apos;25</div>

        <a
          href="/"
          className="text-white px-5 py-3 rounded-full bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] font-normal cursor-pointer"
        >
          Go Back
        </a>
      </header>

      <section
        id="home"
        className="w-screen h-screen relative bg-transparent flex flex-col items-center justify-center"
      >
        <Image
          src={bg}
          alt="Background"
          className="absolute top-0 w-full h-1/2 object-contain -z-10"
        />

        <div className="text-center text-white">
          <p className="text-lg mb-8 text-[#A7ADBE] bg-[#00041F] text-[12px] inline-block px-4 py-2 rounded-full">
            Campus Ambassador Program
          </p>
          <h1 className="text-6xl font-bold mb-4">
            Become A OpenSource <br /> Campus Ambassador
          </h1>
          <p className="text-lg mb-8 text-[14px] text-[#A7ADBE]">
            Represent your campus and be a part of the largest open-source{" "}
            <br />
            community in India! Join us as a Campus Ambassador and help spread
            <br />
            the word about the GirlScript Summer of Code (GSSoC) program.
          </p>

          <form className="mb-8 bg-[#00041F] inline-block px-4 py-2 rounded-full border border-[#0E122E]">
            <input
              className="bg-transparent outline-none border-none text-white mr-2 w-[300px] placeholder:text-[#A7ADBE]"
              placeholder="Enter Your Email"
              type="email"
              required
            />
            <button className="bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] text-white px-5 py-3 rounded-full font-normal cursor-pointer">
              Apply Now
            </button>
          </form>
          <div className="flex items-center justify-center mt-6">
            <div className="bg-[#0DDE33] h-2 w-2 rounded-full" />
            <p className="text-lg text-[#A7ADBE] text-[12px] ml-2">
              Powered By{" "}
              <a
                href="https://insights.smartly.ventures"
                target="_blank"
                className="underline"
              >
                Smartly Ventures
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CA;
