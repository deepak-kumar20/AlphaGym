import React from "react";
import { motion } from "framer-motion";
import trainerPhoto from "../assets/gymtrainer.jpeg";

export default function TrainerShowcase() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Your Coach
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Train with the founder himself - expertise, passion, and dedication
            in every session
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -10 }}
          className="max-w-md mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
            <img
              src={trainerPhoto}
              alt="Tanuj Giri - Founder & Head Coach"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="mb-4">
                  <span className="bg-accent px-4 py-2 rounded-full text-sm font-semibold inline-block shadow-lg">
                    7+ Years Experience
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-2">Tanuj Giri</h3>
                <p className="text-xl text-red-400 font-semibold mb-3">
                  Head Coach & Founder
                </p>
                <p className="text-gray-200 text-sm leading-relaxed">
                  From Chandaus, Aligarh - Your dedicated coach committed to
                  helping you achieve your fitness goals with personalized
                  training and expert guidance.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
