import React from "react";
import { motion } from "framer-motion";
import gymTourVideo from "../assets/WhatsApp Video 2025-11-17 at 9.16.41 PM.mp4";

export default function GymTour() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Take a Virtual Tour
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience Alpha Gym 2.0 - Explore our state-of-the-art facilities,
            premium equipment, and welcoming atmosphere
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-black">
            <video
              controls
              className="w-full h-auto"
              poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=675&fit=crop&q=80"
            >
              <source src={gymTourVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Feature highlights below video */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            >
              <div className="text-4xl mb-3">🏋️</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Premium Equipment
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Latest gym machines and free weights for all fitness levels
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            >
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Modern Facility
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Clean, spacious, and well-maintained training environment
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            >
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Expert Guidance
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Professional coaching to help you achieve your fitness goals
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
