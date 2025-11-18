import React from "react";
import { motion } from "framer-motion";

// Import product images
import creatineImg from "../assets/Creatine-Monohydrate.webp";
import bcaaImg from "../assets/bcaa.avif";
import oatsImg from "../assets/oats.webp";
import peanutButterImg from "../assets/peanutButter.webp";
import preworkoutImg from "../assets/preworkout.jpeg";
import proteinImg from "../assets/protein.png";
import massgainerImg from "../assets/massgainer.png";
import multivitaminImg from "../assets/multivitamin.webp";

const products = [
  {
    title: "Whey Protein",
    desc: "Fast-absorbing whey protein concentrate with 24g protein per serving. Perfect for post-workout muscle recovery and lean muscle development. Supports strength gains and faster recovery.",
    image: proteinImg,
  },
  {
    title: "Mass Gainer",
    desc: "High-calorie formula with complex carbs and quality protein. Ideal for hard gainers looking to pack on lean muscle mass. Contains 50g+ protein per serving with essential vitamins.",
    image: massgainerImg,
  },
  {
    title: "Creatine Monohydrate",
    desc: "Pure micronized creatine monohydrate for enhanced strength, power, and muscle volume. Clinically proven to boost workout performance and accelerate muscle growth. 5g per serving.",
    image: creatineImg,
  },
  {
    title: "Peanut Butter",
    desc: "100% natural peanut butter with 28g protein per 100g. Rich in healthy fats, fiber, and essential nutrients. No added sugar or preservatives. Perfect for high-protein snacks and shakes.",
    image: peanutButterImg,
  },
  {
    title: "Premium Oats",
    desc: "Slow-digesting complex carbohydrates for sustained energy. Rich in fiber, vitamins, and minerals. Ideal for pre-workout meals or mass-building nutrition. Gluten-free option available.",
    image: oatsImg,
  },
  {
    title: "Pre-Workout",
    desc: "Advanced formula with caffeine, beta-alanine, and citrulline for explosive energy and focus. Enhances endurance, pumps, and workout intensity. Sugar-free with great taste.",
    image: preworkoutImg,
  },
  {
    title: "BCAA 2:1:1",
    desc: "Branch Chain Amino Acids in optimal 2:1:1 ratio (Leucine, Isoleucine, Valine). Prevents muscle breakdown, reduces fatigue, and speeds up recovery. Ideal for intra-workout consumption.",
    image: bcaaImg,
  },
  {
    title: "Multivitamin",
    desc: "Complete daily multivitamin complex with 25+ essential vitamins and minerals. Supports immunity, energy levels, and overall health. Specially formulated for active lifestyles.",
    image: multivitaminImg,
  },
];

const handleWhatsAppOrder = (productName) => {
  const message = `Hi, I'm interested in ordering ${productName}. Please share the price and availability.`;
  const whatsappUrl = `https://wa.me/918533019090?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappUrl, "_blank");
};

export default function ProgramsList() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Genuine Products at Best Rates
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          All products are 100% authentic. Contact us via WhatsApp for current
          prices and availability.
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-contain p-6"
                />
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex-1">
                  <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-gray-200 dark:border-gray-700 mt-auto">
                  <button
                    onClick={() => handleWhatsAppOrder(p.title)}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <span className="text-xl">💬</span>
                    <span>Contact for Price on WhatsApp</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
