"use client";
import React from "react";
import InnovationCard from "./InnovationCard";
import { Clock, Eye, Layers, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const Innovation = () => {
  return (
    <section className=" -mt-18  md:-mt-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto ">
        {/* Top Section - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6   relative">
          {/* Background decorative elements */}

          <InnovationCard
            title="Custom Software Solutions"
            description="SquadLog builds robust, scalable applications tailored to your business needs."
            type="integrations"
            delay={0}
          />
          <InnovationCard
            title="Secure Cloud Infrastructure"
            description="Reliable and secure cloud deployment for optimal performance."
            type="authentication"
            delay={0.2}
          />
          <InnovationCard
            title="Advanced AI Integration"
            description="Leverage the power of AI to automate and enhance your business processes."
            type="speech"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Innovation;
