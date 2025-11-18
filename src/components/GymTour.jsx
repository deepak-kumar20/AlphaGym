import React from "react";
import { motion } from "framer-motion";
import gymInterior from "../assets/GymInterior.jpeg";

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
            Welcome to Alpha Gym 2.0
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience our state-of-the-art facilities, premium equipment, and
            welcoming atmosphere
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={gymInterior}
              alt="Alpha Gym Interior"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
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
