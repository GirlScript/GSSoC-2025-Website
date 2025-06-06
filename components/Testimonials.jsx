'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import useMeasure from 'react-use-measure';
import Image from 'next/image';

import cardbg9 from '../assets/card-bg-9.svg';
import commas from '../assets/commas.svg';
import stars from '../assets/stars.svg';


const testimonials = [
  {
    name: "Anshika Saini",
    imgUrl: "https://drive.google.com/uc?id=1xYc7IfxBA3bdI61MMl6HGPsDXCXYN1xB",
    role: "Core Team Member",
    feedback: `Being part of the GSSoC core team has been an epic adventure...`,
  },
  {
    name: "Jeevana Maradana",
    imgUrl: "https://drive.google.com/uc?id=1HJYiiz--2ILG_MueuwdflGxlcxyeAfE1",
    role: "Core Team Member",
    feedback: `As a Core team member of GSSoC'24 has been an incredibly enriching experience...`,
  },
  {
    name: "Payal Kumari",
    imgUrl: "https://drive.google.com/uc?id=1_HsL2GXcT18hReJphjwjvsq4QZwxx3uc",
    role: "Mentor",
    feedback: `Participating in GSSoC 2024 as a mentor has been an incredibly rewarding experience...`,
  },
  {
    name: "Rishi Mondal",
    imgUrl: "https://drive.google.com/uc?id=1PoNDKA9SNnJCJtcPlO8iNSV0Mow-PpAO",
    role: "Project Admin",
    feedback: `Serving as a Project Admin for GSSoC was an incredibly fulfilling experience...`,
  },
  {
    name: "Vuppala Sai Srija",
    imgUrl: "https://drive.google.com/uc?id=1ZV2bJWGGquPMK_NYBFSqVucHinNjArkp",
    role: "Contributor",
    feedback: `My journey through GSSoC'24 has been an exciting blend of learning and achievement...`,
  },
  {
    name: "Tina Borundia",
    imgUrl: "https://drive.google.com/uc?id=1LAMOYY4S3PP0hvSJSC0u-ym9THWvXdvn",
    role: "Contributor & Ambassador",
    feedback: `Participating in GSSoC 2024 has been an incredibly rewarding journey...`,
  },
];

const Testimonials = () => {
  const duration = 20;
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    setMustFinish(true);
  }, []);

  useEffect(() => {
    const finalPosition = -width / 2 - 12 * testimonials.length;
    const start = xTranslation.get();
    const remainingDuration = duration * (1 - start / finalPosition);

    const controls = animate(
      xTranslation,
      mustFinish ? [start, finalPosition] : [0, finalPosition],
      {
        ease: 'linear',
        duration: mustFinish ? remainingDuration : duration,
        repeat: mustFinish ? 0 : Infinity,
        repeatType: 'loop',
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      }
    );

    return () => controls.stop();
  }, [rerender, width, mustFinish]);

  return (
    <div ref={ref} className="w-full flex gap-6 overflow-hidden">
      {[...testimonials, ...testimonials].map((item, idx) => (
        <motion.div
          key={idx}
          style={{ x: xTranslation }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="relative min-w-[500px] aspect-5/3 border border-[#131839] bg-radial from-[#003BFF24] to-[#00020F] rounded-3xl p-6 flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mt-32 mb-44"
        >
          <Image
            src={cardbg9}
            alt="Card Background"
            className="absolute w-full h-full top-0 left-0 object-cover rounded-3xl"
            fill
          />

          <div className="z-10 h-12 w-12 rounded-xl overflow-hidden flex items-center justify-center">
            <Image src={commas} alt="Icon" width={48} height={48} />
          </div>

          <div className="text-xl text-[#A7ADBE] mt-10 text-center z-10 leading-tight font-semibold px-6 max-h-60 overflow-y-auto">
            {item.feedback}
          </div>

          <Image src={stars} alt="Stars" className="z-10 mt-6 w-[100px]" width={100} height={24} />

          <div className="flex items-center mt-10 z-10">
            <div className="h-12 w-12 rounded-xl overflow-hidden">
              <Image
                src={item.imgUrl}
                alt={item.name}
                className="w-full h-full object-cover"
                width={48}
                height={48}
              />
            </div>
            <div className="ml-4 text-left">
              <div className="text-[18px] font-medium">{item.name}</div>
              <div className="text-sm text-[#A7ADBE]">{item.role}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Testimonials;
