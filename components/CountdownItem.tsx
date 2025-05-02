"use client";

import React from "react";
import { motion } from "framer-motion";

const CountdownItem = ({ value, label }: { value: string; label: string }) => {
  return (
    <motion.div
      className="flex flex-col items-center min-w-20 border px-6 py-4 rounded-md border-gray-100"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-4xl md:text-5xl font-bold">{value}</div>
      <div className="text-sm md:text-base text-yellow-400 uppercase tracking-wider mt-1">
        {label}
      </div>
    </motion.div>
  );
};

export default CountdownItem;
