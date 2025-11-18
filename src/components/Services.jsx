import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Strength",
    desc: "Build muscle with structured progressive programs.",
  },
  {
    title: "Cardio",
    desc: "High-intensity cardio, cycling and endurance training.",
  },
  { title: "CrossFit", desc: "Functional fitness classes and WODs." },
  {
    title: "Yoga",
    desc: "Stretch, recover and find mobility with expert teachers.",
  },
];

export default function Services() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          Services
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: i * 0.12 }}
              className="p-6 bg-gray-100 dark:bg-white/5 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-xl font-semibold text-gray-900 dark:text-white">
                {s.title}
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
