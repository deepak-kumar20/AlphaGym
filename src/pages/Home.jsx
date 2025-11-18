import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Trainers from "../components/Trainers";
import ProgramsList from "../components/ProgramsList";
import GalleryGrid from "../components/GalleryGrid";
import GymTour from "../components/GymTour";
import TrainerShowcase from "../components/TrainerShowcase";
import useSmoothScroll from "../hooks/useSmoothScroll";

export default function Home() {
  useSmoothScroll();
  const navigate = useNavigate();

  const onJoin = () => {
    navigate("/plans");
  };

  const stats = [
    { value: "500+", label: "Active Members" },
    { value: "15+", label: "Expert Trainers" },
    { value: "50+", label: "Classes Weekly" },
    { value: "24/7", label: "Access" },
  ];

  const features = [
    {
      icon: "💪",
      title: "Premium Equipment",
      desc: "State-of-the-art machines and free weights",
    },
    {
      icon: "🏃",
      title: "Group Classes",
      desc: "Dynamic classes for all fitness levels",
    },
    {
      icon: "🎯",
      title: "Personal Training",
      desc: "One-on-one coaching tailored to your goals",
    },
    {
      icon: "🧘",
      title: "Recovery & Wellness",
      desc: "Yoga, stretching, and recovery programs",
    },
  ];

  return (
    <div>
      <Hero onCTAClick={onJoin} />

      {/* Stats Section with stagger animation */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gradient-to-r from-accent to-pink-500"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl md:text-5xl font-bold">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm md:text-base opacity-90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Services />

      <GymTour />

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white"
          >
            Why Choose Alpha Gym?
          </motion.h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg text-center"
              >
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TrainerShowcase />

      {/* <ProgramsList /> */}
      {/* <Trainers /> */}
      <Testimonials />

      {/* CTA Section with parallax effect */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Ready to Transform Your Life?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-lg text-gray-300"
          >
            Join Alpha Gym today and start your fitness journey with expert
            guidance, premium facilities, and a supportive community.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/plans"
              className="px-8 py-4 bg-accent text-white rounded-lg font-semibold text-lg shadow-xl hover:bg-accent/90 transition-colors"
            >
              View Membership Plans
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              Schedule a Tour
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
