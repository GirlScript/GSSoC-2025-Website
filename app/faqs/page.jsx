"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ShootingStars } from "@/components/shooting-stars";
import { StarsBackground } from "@/components/stars-background";
import Image from "next/image";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from  "../../assets/instagram.svg";
import iconbg from "../../assets/icon-bg.svg";
import cardbg1 from "../../assets/box-bg.svg"; // use SVG/png background for soft effect
import sbg2 from "@/assets/section-bg-mid-part-2.svg";
import { SparklesCore } from "@/components/sparkles";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const faqs = [
  {
    question: "Eligibility for Contributors?",
    answer: " Anyone with a zeal to learn, grow their skills, and actively contribute to open source. Whether you're a beginner or experienced, if you're passionate about making an impact - you're at the right place!"
  },
  {
    question: " I'm a beginner, can I participate in GSSoC?",
    answer: "Absolutely! GSSoC is a beginner-friendly open-source program and offers a great opportunity to understand how open source works while helping you build valuable technical skills."
  },
  {
    question: " Do prior experience or open-source contributions needed?",
    answer: " Not necessarily. While it’s helpful to know languages like HTML, CSS, Python, etc., as many projects use them, open-source experience is not mandatory. We warmly welcome everyone—from curious beginners to experienced developers."
  },
  {
    question: " Eligibility for Mentors and Project Admins?",
    answer: " Individuals with proven experience in their preferred tech stack. Your expertise matters—be sure to fill out the form thoroughly! However, please note Mentors / PAs can’t be Contributors."
  },
  {
    question: " Can professionals with 1-2 years of experience participate?",
    answer: " Yes! GSSoC is open to all, regardless of your academic or professional background. If you're passionate about tech and open source, you're welcome."
  },
  {
    question: " Can one be both a Contributor and Campus Ambassador or Contributor and Project Admin?",
    answer: "Campus Ambassadors are free to apply for any additional role. However, if you're selected as a Project Admin or Mentor, you cannot participate as a Contributor."
  },
  {
    question: "Will Contributors be assigned to projects, or can we choose ourselves?",
    answer: " You have the freedom to choose the projects you're most interested in. Find what excites you and start contributing—it's entirely up to you!"
  },
  {
    question: " How many projects can a Contributor work on at the same time?",
    answer: " There's no fixed limit; you can contribute to as many projects as you can manage effectively. Just make sure you maintain quality and consistency in your contributions."
  },
  {
    question: " As a prospective participant, how can I start preparing for GSSoC 2025?",
    answer: "Start by brushing up on your technical skills and exploring the basics of open source. Once the selected projects are announced, you can check them out—and don’t worry, Project Admins and the respective mentors will guide you in getting started! "
  },
  {
    question: " What will be the perks and benefits for Contributors for successfully doing the contribution work?",
    answer: "Contributors will be evaluated using a rubric-based system (will be shared with selected participants). Based on performance and impact, top contributors will receive certificates, swags, and Letters of Recommendation (LORs), along with the priceless experience of real-world collaboration."
  },
  // {
  //   question: "Do prior experience or open source contributions matter?",
  //   answer: "They are preferred but not mandatory. Having basic knowledge in HTML, CSS, or Python helps."
  // },
  // {
  //   question: "How can I apply as a Contributor in GSSoC?",
  //   answer: "Registration details will be shared soon. Apply through the official form when it's live."
  // },
  // {
  //   question: "I'm a beginner. I need a roadmap.",
  //   answer: "Start by learning GitHub basics. Explore HTML/CSS/JS or Python. Join our community for guidance."
  // },
  // {
  //   question: "Can we participate as both Contributor and Campus Ambassador?",
  //   answer: "Yes. However, a Contributor cannot be selected as a Project Admin or Mentor."
  // },
  // {
  //   question: "Can working professionals from a non-tech background participate?",
  //   answer: "Yes, GSSoC is open to everyone. If you're willing to learn, you're welcome to join."
  // },
  // {
  //   question: "How are projects selected and maintained?",
  //   answer: "Project Admins propose and maintain them. Mentors guide Contributors throughout the program."
  // },
  // {
  //   question: "What are your expectations from Contributors?",
  //   answer: "We expect Contributors to be enthusiastic and eager to learn throughout the journey."
  // },
  // {
  //   question: "Is this project beginner-friendly?",
  //   answer: "Most projects are. The required skills will be listed with each project."
  // },
  // {
  //   question: "What tech stack should I know?",
  //   answer: "It depends on the project. Common stacks include HTML, CSS, JavaScript, React, Python, etc."
  // },
  // {
  //   question: "What are the eligibility requirements?",
  //   answer: "Full-time students are eligible for Contributor and Campus Ambassador roles. Mentor and Project Admin roles are open to all."
  // },
  // {
  //   question: "What does the program timeline look like?",
  //   answer: "It starts with a bonding phase, followed by contributions, evaluations, and final results."
  // },
  // {
  //   question: "How does mentorship work?",
  //   answer: "Mentors guide Contributors on issues, pull requests, and project milestones throughout the program."
  // },
  // {
  //   question: "What’s the selection process like?",
  //   answer: "Selection is based on the registration form, enthusiasm, and alignment with the program goals."
  // },
  // {
  //   question: "Are there internship opportunities after the program?",
  //   answer: "Not officially. However, top Contributors may receive Letters of Recommendation, swags, and networking opportunities."
  // },
  // {
  //   question: "Will there be a community platform?",
  //   answer: "Yes. Discord and Telegram will be used for communication and support."
  // },
  // {
  //   question: "How to become a Mentor?",
  //   answer: "You should have relevant tech experience. Fill out the Mentor form when it's live."
  // },
  // {
  //   question: "How much do we need to know to contribute?",
  //   answer: "Basic development knowledge helps. Learn and build as you go during the program."
  // },
  // {
  //   question: "How to join the GSSoC Core Team?",
  //   answer: "Start with other roles and stay consistent. Core Team roles are limited and selected based on involvement."
  // },
  // {
  //   question: "Is GSSoC open for professionals with 1–2 years of experience?",
  //   answer: "Yes, the program is open to all who are interested."
  // },
  // {
  //   question: "Is this the same as GSoC?",
  //   answer: "No. GSoC is by Google, while GSSoC is conducted by GirlScript Foundation."
  // },
  // {
  //   question: "Can anyone contribute?",
  //   answer: "Yes! GSSoC welcomes everyone interested in open source."
  // },
  // {
  //   question: "Which organizations will participate?",
  //   answer: "They will be listed on the official GSSoC website soon."
  // },
  // {
  //   question: "What are the fields for contribution?",
  //   answer: "Fields include Web Development, Machine Learning, App Development, APIs, Documentation, and more."
  // },
  // {
  //   question: "What are the perks and benefits for Contributors?",
  //   answer: "Top performers will receive certificates, swags, and Letters of Recommendation."
  // },
  // {
  //   question: "How to get selected for GSSoC?",
  //   answer: "Fill out the form sincerely. Showcase your enthusiasm and basic understanding."
  // },
  // {
  //   question: "How to prepare for GSSoC 2025?",
  //   answer: "Learn Git, understand the basics of coding, join Discord, and explore previous projects."
  // },
  // {
  //   question: "Is a BCA student eligible?",
  //   answer: "Yes, all full-time students including BCA are eligible to apply."
  // },
  // {
  //   question: "What is the selection criteria?",
  //   answer: "Form responses, enthusiasm, and interest in the tech stack and projects."
  // },
  // {
  //   question: "How to become a Core Contributor?",
  //   answer: "Be consistent, helpful, and go beyond just completing tasks. Engage even after GSSoC."
  // },
  // {
  //   question: "I’m in 1st year and learning AI/ML. Can I contribute?",
  //   answer: "Yes! Choose a matching project and start contributing."
  // }
];


export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

 return (
 <div className="min-h-screen w-full  text-white relative overflow-hidden   bg-[#00020f]">
    {/* 🌌 Starry Background */}
    <div className="absolute inset-0 z-0">
      <StarsBackground />
      <ShootingStars />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-[#0a0a23]" />
    </div>

    {/* 💬 FAQs Container */}
    <div className="relative z-10 max-w-7xl mx-auto">
      {/* FAQ Header */}
      <motion.section
        id="faq"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
        className="relative flex flex-col items-center bg-[#00020f] text-white overflow-hidden px-4"
      >
        <motion.div
          variants={itemVariants}
          className="w-full relative flex flex-col items-center text-white py-24"
        >
          {/* Decorative Background */}
          <Image
            src={sbg2}
            alt="Background"
            className="absolute top-0 left-1/2 -translate-x-1/2 object-contain scale-x-[-1] z-0 max-w-[80%] opacity-40"
          />

          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={0.8}
            particleDensity={80}
            particleSpeed={0.2}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[300px] z-0"
            particleColor="#FFFFFF"
          />

          {/* Title Content */}
          <div className="text-center relative z-10">
            <p className="text-[11px] md:text-[13px] mb-6 text-[#A7ADBE] bg-[#FFFFFF15] inline-block px-6 py-2 rounded-full tracking-wider uppercase shadow-md backdrop-blur-sm">
              FAQs
            </p>
            <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-5">
              Frequently Asked <br className="hidden md:block" /> Questions
            </h1>
            <p className="text-sm md:text-base text-[#A7ADBE] max-w-xl mx-auto leading-relaxed">
              Everything you need to know about GSSoC ‘25 — process, participation, and more.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* FAQ Cards */}
     <div className="relative z-20 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mb-16 items-start">
  {faqs.map((faq, index) => {
    const isOpen = openIndex === index;

    return (
      <motion.div
        key={index}
        whileHover={{ scale: 1.015 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        viewport={{ once: true }}
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="relative w-full bg-transparent bg-gradient-to-b from-[#00041f] to-[#00041f00] rounded-3xl border border-[#131839] flex flex-col p-8 shadow-2xl shadow-blue-500/20 cursor-pointer overflow-hidden"
      >
        {/* Background Image */}
        <Image
          src={cardbg1}
          alt="Card Background"
          className="absolute inset-0 w-full h-full object-cover rounded-3xl z-0"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col">
          <div className="flex justify-between items-center mb-2 text-[14px] md:text-[18px] text-white font-semibold">
            <h3>{faq.question}</h3>
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="text-blue-400 w-5 h-5" />
            </motion.span>
          </div>

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="mt-2 text-[12px] md:text-[14px] text-[#A7ADBE] leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  })}
</div>


      {/* 📬 Contact Section Footer */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
        className="w-full bg-[#00041F] text-white py-20 mt-24"
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-snug">
            GirlScript Summer <br className="md:hidden" /> Of Code 2025
          </h1>
          <p className="text-xs md:text-sm text-[#A7ADBE] mb-6">
            Get In Touch With Us Via Email Or Social Media
          </p>

          <a
            href="mailto:gssoc@girlscript.tech"
            className="inline-block bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] hover:opacity-90 transition px-6 py-3 rounded-full font-medium text-sm"
          >
            Contact Us
          </a>

          <div className="flex justify-center items-center gap-6 mt-10">
            {[{
              href: "https://www.linkedin.com/company/girlscriptsoc/",
              icon: linkedin,
              alt: "LinkedIn",
            }, {
              href: "https://x.com/girlscriptsoc",
              icon: twitter,
              alt: "Twitter/X",
            }, {
              href: "https://www.instagram.com/girlscriptsummerofcode",
              icon: instagram,
              alt: "Instagram",
            }].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-12 w-12 rounded-lg overflow-hidden flex items-center justify-center bg-[#0F0F2F] hover:bg-[#1A1A40] transition"
              >
                <Image
                  src={social.icon}
                  alt={social.alt}
                  className="w-6 h-6 object-contain transition-transform duration-200 ease-in-out group-hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  </div>
);
}
