import { motion } from "framer-motion";
import Image from "next/image";
import postmanRemovedBg from "@/assets/postman-removed-bg.png";
import sbg from "@/assets/section-bg-mid-part.svg";
import { SparklesCore } from "./sparkles";

export const containerVariants = {
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

export default function PostmanCertificationSection() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="relative isolate w-full overflow-hidden bg-cover bg-center py-28 md:py-36"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#000c1c]/70 via-[#020618]/60 to-[#00040a]/90 opacity-70" />
      <Image
        src={postmanRemovedBg}
        alt="Background"
        className="absolute top-[56%] left-[48%] -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 object-contain opacity-35 blur-[2px] transition-all duration-300"
      />

      <Image
        src={sbg}
        alt="Background"
        className="absolute top-20 object-contain scale-x-[-1] left-1/2 -translate-x-1/2"
      />

      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={0.8}
        particleDensity={80}
        particleSpeed={0.2}
        className="absolute top-30 left-[48%] -translate-x-1/2 w-1/3 h-[300px]"
        particleColor="#FFFFFF"
      />

      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center text-slate-50"
      >
        <h2 className="text-3xl font-bold tracking-wide leading-14 sm:text-4xl lg:text-5xl">
          <div className="font-semibold">Earn Free</div>&nbsp;
          <span className="text-[#FF6C37] font-extrabold">
            Postman API Fundamentals
          </span>
          <div className="font-semibold">Student Expert Certification</div>
        </h2>

        <p className="mx-auto mt-6 w-2/3 text-lg/relaxed text-[#F8F8FF]">
          Complete the Postman Student Expert Program with GirlScript and stand
          a chance to win exciting Postman swag.
        </p>

        {/* Steps */}
        <div className="flex flex-row items-center justify-center w-full mt-10">
          <div className="w-1/4 bg-gradient-to-r from-transparent to-[#171D45] h-[2px]" />
          <span className="text-[#C4C8D4] mx-4 text-center text-[12px] md:text-[16px]">
            Registration Steps
          </span>
          <div className="w-1/4 bg-gradient-to-l from-transparent to-[#171D45] h-[2px]" />
        </div>

        <ol className="mx-auto mt-10 max-w-4xl list-decimal space-y-3 pl-16 text-left text-base/relaxed marker:[FCFAFA] mb-11 tracking-wide">
          <li className="pl-1">
            Register in the Postman Student Program via the link below.
          </li>
          <li className="pl-1">
            Once registered as a student, signup or signin to Postman Academy
            with your Postman account.
          </li>
          <li className="pl-1">
            Check your inbox for a confirmation email from Postman Academy.
          </li>
          <li className="pl-1">
            Head to your <strong>Dashboard</strong> and locate the course
            listing.
          </li>
          <li className="pl-1">
            Click <strong>“Get Started”</strong>, then follow the lectures by
            Postman & LetsUpgrade to finish the course.
          </li>
          <li className="pl-1">
            After completing all modules and quizzes you&apos;ll receive your
            official API Fundamentals Student Expert certification, completely
            free!
          </li>
        </ol>
        <a
          href="https://swi.y.co/postman"
          target="_blank"
          className="text-white px-5 py-3 rounded-full bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] font-normal cursor-pointer text-[12px] md:text-[14px] mt-10"
        >
          Register Now
        </a>

        <div className="mt-8 space-y-4 text-sm/relaxed text-[#F8F8FF]">
          <p className="flex justify-center gap-1">
            <span>Join the</span>
            <a
              href="https://discord.com/invite/kXqjE86gn9"
              className="underline decoration-dotted underline-offset-2 hover:text-indigo-300"
              target="_blank"
            >
              Postman Discord server
            </a>
            &nbsp;for support.
          </p>
          <p>
            Attend the lectures daily and participate in social‑media challenges
            for a chance to win exclusive Postman swag kits.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
