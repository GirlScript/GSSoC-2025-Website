"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';


const faqs = [
  {
    question: "When will the registration begin? Where and how to apply?",
    answer: "We will soon release the registration details so stay tuned!! Follow GSSoC LinkedIn and Discord for timely updates."
  },
  {
    question: "Can a person participate as both contributor and project admin?",
    answer: "Campus Ambassadors can apply for any role. You cannot apply for a contributor if you’re selected for the role of Project Admin or Mentor."
  },
  {
    question: "What are the requirements to qualify for GSSoC?",
    answer: "We have some categories and based on that rubric (to be shared with selected candidates), contributors will be provided with perks."
  },
  {
    question: "When will you release the GSSoC date?",
    answer: "The timeline will be released soon. Stay tuned to our official platforms."
  },
  {
    question: "How to participate and what is the procedure?",
    answer: "Register once the link is live. After selection, choose projects and start contributing under mentor guidance."
  },
  {
    question: "I'm a beginner to open source, can I participate in GSSOC?",
    answer: "Absolutely! GSSoC is beginner-friendly and a great way to get started in open source."
  },
  {
    question: "How many projects will be there? Am I selected for contribution?",
    answer: "Number of projects will be announced later. Selection depends on form responses and profile."
  },
  {
    question: "Can I propose a Spring Boot API project and also join as participant?",
    answer: "Yes! We will soon release registration for Project Admins. Beginners are welcome."
  },
  {
    question: "What is the selection process for GSSoC 2025?",
    answer: "Based on your registration form, enthusiasm, past work (if any), and responses."
  },
  {
    question: "Do prior experience or open source contributions matter?",
    answer: "Not necessarily. Preferred, but not mandatory. Knowing basic tech like HTML, CSS, Python helps."
  },
  {
    question: "How can I apply as a contributor in GSSoC?",
    answer: "Registration details will be shared soon. Apply through the official form."
  },
  {
    question: "I'm a beginner. I need a roadmap.",
    answer: "Start by learning GitHub basics, explore HTML/CSS/JS or Python, and join our community."
  },
  {
    question: "Can we participate as both contributor and campus ambassador?",
    answer: "Yes. Only constraint is Contributor can't be Project Admin or Mentor."
  },
  {
    question: "Can working professionals in non-tech background participate?",
    answer: "Yes, GSSoC is open to all. If you're willing to learn, you can participate."
  },
  {
    question: "How are projects selected and maintained?",
    answer: "Project Admins propose and maintain them. Mentors guide contributors."
  },
  {
    question: "What are your expectations from contributors?",
    answer: "To be enthusiastic and willing to learn throughout the journey."
  },
  {
    question: "Is this project beginner-friendly?",
    answer: "Most projects are. Skills required will be listed per project."
  },
  {
    question: "What tech stack should I know?",
    answer: "Depends on the project. Generally HTML, CSS, JS, React, Python, etc."
  },
  {
    question: "What are the eligibility requirements?",
    answer: "Full-time students for contributor/campus ambassador roles. Open for all for mentor/admin."
  },
  {
    question: "What does the program timeline look like?",
    answer: "Starts with bonding, followed by contributions, evaluations, and final results."
  },
  {
    question: "How does mentorship work?",
    answer: "Mentors guide contributors through issues, PRs, and project goals."
  },
  {
    question: "What’s the selection process like?",
    answer: "Based on form, enthusiasm, and fit with program goals."
  },
  {
    question: "Are there internship opportunities after the program?",
    answer: "Not officially, but contributors may receive LORs, swags, and networking."
  },
  {
    question: "Will there be a community platform?",
    answer: "Yes. Discord and Telegram will be used for discussion and support."
  },
  {
    question: "How to become a mentor?",
    answer: "Have relevant tech experience. Fill the mentor form when it’s live."
  },
  {
    question: "How much do we need to know to contribute?",
    answer: "Basic development knowledge is helpful. Learn and build during GSSoC."
  },
  {
    question: "How to join GSSoC core team?",
    answer: "Join other roles first and stay consistent. Core team roles are limited."
  },
  {
    question: "Is GSSoC open for professionals with 1-2 years of experience?",
    answer: "Yes. All are welcome."
  },
  {
    question: "Is this same as GSoC?",
    answer: "No. GSoC is by Google. GSSoC is by GirlScript Foundation."
  },
  {
    question: "Can anyone contribute?",
    answer: "Yes! GSSoC welcomes everyone interested in open source."
  },
  {
    question: "Which organizations will participate?",
    answer: "They will be listed on the official site."
  },
  {
    question: "What are the fields for contribution?",
    answer: "Web Dev, ML, App Dev, APIs, Documentation, etc."
  },
  {
    question: "What are the perks and benefits for contributors?",
    answer: "Top performers will receive certificates, swags, and LORs."
  },
  {
    question: "How to get selected for GSSoC?",
    answer: "Fill the form sincerely. Show enthusiasm and basic understanding."
  },
  {
    question: "How to prepare for GSSoC 2025?",
    answer: "Learn Git, coding basics, join Discord, and follow past projects."
  },
  {
    question: "Is BCA student eligible?",
    answer: "Yes, full-time students are eligible."
  },
  {
    question: "What is the selection criteria?",
    answer: "Form responses, enthusiasm, skill interest."
  },
  {
    question: "How to become a core contributor?",
    answer: "Be consistent, helpful, and go beyond tasks. Engage post-GSSoC too."
  },
  {
    question: "I’m in 1st year and learning AI/ML. Can I contribute?",
    answer: "Yes! Choose a matching project and get started."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0a0a23] text-white py-20 px-6" id="faq">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-14 text-blue-400 drop-shadow"
      >
        🙋 FAQs - GSSoC '25
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.015 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-tr from-[#111132] to-[#1f1f3c] p-6 rounded-2xl border border-[#262640] transition-all hover:shadow-blue-500/20 shadow-sm cursor-pointer"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="text-blue-400" />
              </motion.span>
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-gray-300 leading-relaxed"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}