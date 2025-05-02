"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
import CountdownItem from "@/components/CountdownItem";

const HomePage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const countdownDate = new Date("June 1, 2025 00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute w-96 h-96 rounded-full bg-purple-600/20 blur-3xl -top-20 -left-20 animate-float-slow"></div>
        <div className="absolute w-96 h-96 rounded-full bg-orange-500/20 blur-3xl -bottom-32 -right-32 animate-float-medium"></div>
        <div className="absolute w-64 h-64 rounded-full bg-yellow-400/20 blur-3xl top-1/2 left-1/4 animate-float-fast"></div>
      </div>
      <main className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen relative z-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="text-center mb-8"
        >
          <motion.img
            src="/GS_logo_White.svg"
            alt="GirlScript Logo"
            className="w-full h-full"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.6 }}
          />
          {/* <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 via-purple-600 to-yellow-400 bg-clip-text text-transparent">
            GirlScript
          </h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl mt-2"
          >
            Summer of Code 2025
          </motion.p> */}
        </motion.div>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold uppercase tracking-wider my-8 bg-gradient-to-r from-orange-500 via-purple-600 to-yellow-400 bg-clip-text text-transparent"
        >
          Coming Soon
        </motion.h2>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 my-12"
        >
          <CountdownItem value={timeLeft.days} label="Days" />
          <CountdownItem value={timeLeft.hours} label="Hours" />
          <CountdownItem value={timeLeft.minutes} label="Minutes" />
          <CountdownItem value={timeLeft.seconds} label="Seconds" />
        </motion.div>

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex gap-6 mt-12"
        >
          <Link href="https://www.facebook.com/girlscriptsoc/" target="_blank">
            <BsFacebook className="text-3xl text-gray-400 hover:text-white transition duration-300" />
          </Link>
          <Link
            href="https://www.instagram.com/girlscriptsummerofcode/?hl=en"
            target="_blank"
          >
            <BsInstagram className="text-3xl text-gray-400 hover:text-white transition duration-300" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/girlscriptsoc/mycompany/"
            target="_blank"
          >
            <BsLinkedin className="text-3xl text-gray-400 hover:text-white transition duration-300" />
          </Link>
          <Link href="https://x.com/girlscriptsoc" target="_blank">
            <BsTwitterX className="text-3xl text-gray-400 hover:text-white transition duration-300" />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCBOlJtDcWNh0aUkS2CfI8Aw"
            target="_blank"
          >
            <BsYoutube className="text-3xl text-gray-400 hover:text-white transition duration-300" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-16 text-gray-400 text-sm"
        >
          © 2025 GirlScript Summer of Code. All rights reserved.
        </motion.div>
      </main>
    </div>
  );
};

export default HomePage;
