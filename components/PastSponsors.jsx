'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Logos
import postmanLogo from '../assets/postman1.svg';
import vercelLogo from '../assets/vercel.svg';
import filecoinLogo from '../assets/filecoin.svg';
import moralisLogo from '../assets/moralis.svg';
import taskadeLogo from '../assets/taskade.svg';
import pricelineLogo from '../assets/priceline.svg';
import bluelearnLogo from '../assets/bluelearn.jpg';
import quineLogo from '../assets/quine.png';
import xyzLogo from '../assets/xyz.svg';
import mentroLogo from '../assets/mentro.png';

const PastSponsors = () => {
  return (
    <motion.section
      id="sponsors"
      className="w-full px-4 sm:px-6 lg:px-8 my-20 relative flex flex-col items-center bg-[#00020f] text-white py-16"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center">
        Our Past Sponsors
      </h1>

      <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 bg-white/5 rounded-2xl py-10 px-4 shadow-lg">
        <SponsorCard src={postmanLogo} alt="Postman" scale="scale-[1.2]" />
        <SponsorCard src={vercelLogo} alt="Vercel" scale="scale-[1.1]" />
        <SponsorCard src={filecoinLogo} alt="Filecoin" scale="scale-[1.3]" />
        <SponsorCard src={moralisLogo} alt="Moralis" scale="scale-[1.1]" />
        <SponsorCard src={taskadeLogo} alt="Taskade" />
        <SponsorCard src={pricelineLogo} alt="Priceline" />
        <SponsorCard src={bluelearnLogo} alt="Bluelearn" scale="scale-[1.1]" />
        <SponsorCard src={quineLogo} alt="Quine" scale="scale-[0.9]" />
        <SponsorCard src={xyzLogo} alt="XYZ" />
        <SponsorCard src={mentroLogo} alt="Mentro" scale="scale-[1.1]" />
      </div>
    </motion.section>
  );
};

const SponsorCard = ({ src, alt, scale = '' }) => (
  <div className="flex items-center justify-center bg-white rounded-xl shadow-md p-4 h-24 sm:h-28 md:h-32 lg:h-36">
    <Image
      src={src}
      alt={alt}
      className={`object-contain max-h-full w-auto transition-transform duration-300 ${scale}`}
    />
  </div>
);

export default PastSponsors;
