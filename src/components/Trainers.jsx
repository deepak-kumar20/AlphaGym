import React from "react";
import { motion } from "framer-motion";
import tanujPhoto1 from "../assets/tanujgiri1.png";
import tanujPhoto2 from "../assets/tanujgiri2.png";

export default function Trainers() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Meet Your Trainer
        </h3>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Train with the founder himself - expertise, passion, and dedication in
          every session
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Main Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 lg:col-span-1 flex flex-col gap-6"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <img
                src={tanujPhoto1}
                alt="Tanuj Giri - Founder"
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-2">
                  <span className="bg-accent px-4 py-1 rounded-full text-sm font-semibold">
                    7+ Years Experience
                  </span>
                </div>
                <h4 className="text-3xl font-bold mb-2">Tanuj Giri</h4>
                <p className="text-xl text-red-400 font-semibold mb-3">
                  Founder & Head Coach
                </p>
                <p className="text-gray-200 text-sm leading-relaxed">
                  From Chandaus, Aligarh - A passionate fitness enthusiast who
                  turned his love for the gym into a mission to help others
                  achieve their fitness goals.
                </p>
              </div>
            </div>

            {/* Hindi Motivation Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-900 via-black to-gray-800 p-8 rounded-2xl text-white text-center shadow-2xl relative overflow-hidden border border-accent/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-4">💪</div>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">
                  तगड़े होने पर ध्यान दो
                </h3>
                <div className="h-1 w-24 bg-accent mx-auto mb-3 rounded-full"></div>
                <p className="text-base md:text-lg font-semibold text-accent mb-2">
                  Focus on Getting Strong
                </p>
                <p className="text-sm opacity-80 italic">
                  "Strength doesn't come from what you can do. It comes from
                  overcoming the things you once thought you couldn't."
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Secondary Image with Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 lg:col-span-1 flex flex-col gap-6"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group flex-grow">
              <img
                src={tanujPhoto2}
                alt="Tanuj Giri Training"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl text-white text-center shadow-lg"
              >
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-sm opacity-90">Members Trained</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl text-white text-center shadow-lg"
              >
                <div className="text-3xl font-bold mb-1">7+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="col-span-2 bg-gradient-to-br from-accent to-red-700 p-6 rounded-xl text-white text-center shadow-lg"
              >
                <div className="text-3xl font-bold mb-1">2023</div>
                <div className="text-sm opacity-90">Founded</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
