import React from "react";
import { motion } from "framer-motion";
import Trainers from "../components/Trainers";
import useSmoothScroll from "../hooks/useSmoothScroll";
import tanujPhoto2 from "../assets/tanujgiri2.png";
import picImage from "../assets/pic.png";

export default function About() {
  useSmoothScroll();

  const values = [
    {
      title: "Excellence",
      desc: "We strive for the highest standards in everything we do",
      icon: "⭐",
    },
    {
      title: "Community",
      desc: "Building a supportive environment where everyone belongs",
      icon: "🤝",
    },
    {
      title: "Growth",
      desc: "Continuous improvement for our members and team",
      icon: "📈",
    },
    {
      title: "Integrity",
      desc: "Honest, transparent, and ethical in all our practices",
      icon: "💎",
    },
  ];

  const milestones = [
    {
      year: "2023",
      event: "Alpha Gym founded by Tanuj Giri in Chandaus, Aligarh",
    },
    { year: "2024", event: "Expanded facility with modern equipment" },
    { year: "2024", event: "Launched personalized training programs" },
    {
      year: "2025",
      event: "Upgraded to Alpha Gym 2.0 with enhanced facilities",
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white"
        >
          About Alpha Gym
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          More than just a gym—we're a community dedicated to helping you
          achieve your fitness goals and live your best life.
        </motion.p>

        {/* History Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Our Story
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                Founded in 2023 by Tanuj Giri from Chandaus, Aligarh, Alpha Gym
                began with a simple passion for fitness and a dream to help
                others transform their lives. What started as a personal journey
                of a regular gym enthusiast evolved into a mission to create a
                welcoming space where everyone could pursue their fitness goals.
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                As someone who experienced the life-changing benefits of fitness
                firsthand, Tanuj built Alpha Gym on the foundation of genuine
                support, expert guidance, and community spirit. With over 7
                years of training experience, he combined his knowledge with a
                vision to offer premium facilities accessible to all—from
                beginners taking their first steps to seasoned athletes pushing
                their limits.
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                Today, Alpha Gym stands as a testament to what dedication and
                passion can achieve, serving our community with modern
                equipment, personalized training, and an atmosphere that
                motivates everyone who walks through our doors.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-80 rounded-2xl overflow-hidden shadow-2xl relative group"
            >
              <img
                src={tanujPhoto2}
                alt="Tanuj Giri - Founder of Alpha Gym"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-2xl font-bold mb-2">Excellence Since 2023</p>
                <p className="text-sm opacity-90">
                  Building Champions, One Rep at a Time
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-2 gap-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-br from-accent to-pink-500 rounded-2xl text-white"
          >
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="mt-4 text-white/90 leading-relaxed">
              To empower individuals of all fitness levels with expert guidance,
              premium facilities, and a supportive community that fosters
              lasting transformation and wellness.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Our Vision
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              To become the most trusted fitness partner in our community,
              inspiring healthier lifestyles and helping people discover their
              full potential.
            </p>
          </motion.div>
        </motion.section>

        {/* Trainers Section */}
        <div className="mt-20">
          <Trainers />
        </div>

        {/* Trainer's Advice Quote Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={picImage}
              alt="Alpha Gym Motivation"
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div className="absolute inset-0 flex items-end justify-center p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-3xl mb-8"
              >
                <div className="text-6xl mb-6">💪</div>
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  "Your body can stand almost anything. It's your mind that you
                  have to convince."
                </h3>
                <p className="text-lg md:text-xl text-gray-300 mb-4">
                  Success in fitness isn't about being better than someone else,
                  it's about being better than you used to be.
                </p>
                <div className="mt-8 pt-6 border-t border-white/30">
                  <p className="text-lg font-semibold text-white">Tanuj Giri</p>
                  <p className="text-sm text-gray-400">
                    Founder & Head Coach, Alpha Gym
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Core Values */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
            Our Core Values
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center"
              >
                <div className="text-5xl mb-4">{v.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {v.title}
                </h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
            Our Journey
          </h2>
          <div className="mt-12 max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-center gap-6 mb-8"
              >
                <div className="w-24 text-right">
                  <span className="text-2xl font-bold text-accent">
                    {m.year}
                  </span>
                </div>
                <div className="w-4 h-4 bg-accent rounded-full flex-shrink-0"></div>
                <div className="flex-1 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <p className="text-gray-900 dark:text-white">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
