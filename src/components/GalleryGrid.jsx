import React from "react";
import { motion } from "framer-motion";
import gymInterior from "../assets/GymInterior.jpeg";

// Real gym equipment images from Unsplash
const imgs = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1623874228601-f4193c7b1818?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=400&fit=crop",
];

export default function GalleryGrid() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          Gallery
        </h3>

        {/* Featured Main Gym Interior Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 mb-8 rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src={gymInterior}
            alt="Alpha Gym - Modern Gym Interior with Premium Equipment"
            className="w-full h-64 md:h-96 object-cover"
          />
        </motion.div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {imgs.map((src, i) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={src}
              className="overflow-hidden rounded-lg bg-gray-100 dark:bg-white/5 shadow-md"
            >
              <img
                src={src}
                alt={`gym-${i}`}
                className="w-full h-40 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
