"use client";
import React from "react";
import { motion } from "framer-motion";
import { Package } from "lucide-react";

const ProductHeader = () => {
  return (
    <div className="text-center mb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
      >
        <div className="w-5 h-5 rounded-full bg-[#EFFC76] flex items-center justify-center">
          <Package size={12} className="text-black" />
        </div>
        <span className="text-gray-300 text-sm">Products</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-sans text-white mb-6 leading-tight"
      >
        Our SaaS Products for
        <br />
        <span className="text-gray-400">Modern Businesses</span>
      </motion.h2>
    </div>
  );
};

export default ProductHeader;
