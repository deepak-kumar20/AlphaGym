import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  {
    name: "Varun Giri",
    text: "Alpha Gym changed my life — the trainers are incredible and results speak for themselves.",
  },
  {
    name: "Sijo John",
    text: "Great facilities and a welcoming community. Best gym experience I've ever had!",
  },
  {
    name: "Jubair Yaseen",
    text: "I finally hit my PRs thanks to their coaching. Tanuj's guidance is exceptional.",
  },
  {
    name: "Arun Kumar",
    text: "Amazing transformation in just 6 months. The personalized training programs work wonders.",
  },
  {
    name: "Luvkush Sharma",
    text: "Professional trainers, clean equipment, and motivating atmosphere. Highly recommended!",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((i + 1) % quotes.length);
  const prev = () => setI((i - 1 + quotes.length) % quotes.length);

  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          What members say
        </h3>
        <div className="mt-6 relative">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45 }}
              className="p-6 bg-gray-100 dark:bg-white/5 rounded-xl shadow-md"
            >
              <p className="text-gray-800 dark:text-gray-200">
                "{quotes[i].text}"
              </p>
              <cite className="mt-4 block font-semibold text-gray-900 dark:text-white">
                — {quotes[i].name}
              </cite>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-4 flex justify-center gap-4">
            <button
              onClick={prev}
              className="px-3 py-2 bg-gray-200 dark:bg-white/5 rounded text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-white/10 transition-colors"
            >
              Prev
            </button>
            <button
              onClick={next}
              className="px-3 py-2 bg-accent text-white rounded hover:bg-accent/90 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
