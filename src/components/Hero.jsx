import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero({ onCTAClick }) {
  return (
    <section className="pt-12 pb-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Train like a champion at{" "}
            <span className="text-accent">Alpha Gym</span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl">
            State-of-the-art facilities, expert coaches and programs crafted to
            help you reach peak performance. From strength training to mindful
            yoga — find your fit.
          </p>
          <div className="mt-6 flex gap-4">
            <button
              onClick={onCTAClick}
              className="px-6 py-3 bg-accent text-white rounded-lg font-semibold shadow-lg hover:bg-accent/90 transition-colors"
            >
              Join Now
            </button>
            <Link
              to="/shop"
              className="px-6 py-3 border border-gray-300 dark:border-white/10 rounded-lg text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
            >
              View Programs
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="w-full flex justify-center"
        >
          <div className="w-full max-w-md rounded-xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80"
              alt="Modern Gym Interior - Alpha Gym Facilities"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
