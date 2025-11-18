import React from "react";
import { motion } from "framer-motion";

export default function PricingCard({ title, price, features, popular }) {
  const handleWhatsApp = () => {
    const message = `Hi Tanuj! I'm interested in the *${title}* membership plan at ${price}. Please provide more details about joining Alpha Gym.`;
    const phoneNumber = "918533019090"; // Your WhatsApp number without + or spaces
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const handleEmail = () => {
    const subject = `Membership Inquiry - ${title} Plan`;
    const body = `Hi Tanuj,\n\nI'm interested in the ${title} membership plan at ${price}.\n\nPlease provide more details about:\n- Joining process\n- Available timings\n- Any current offers\n\nLooking forward to hearing from you!\n\nBest regards`;
    const mailtoLink = `mailto:Tanujgiri2000@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`p-6 rounded-2xl shadow-lg ${
        popular
          ? "bg-gradient-to-br from-accent to-pink-500 text-white"
          : "bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-semibold">{title}</h4>
        {popular && (
          <span className="text-sm bg-black/20 px-2 py-1 rounded">Popular</span>
        )}
      </div>
      <div className="mt-4 text-3xl font-bold">{price}</div>
      <ul className="mt-4 space-y-2 text-sm">
        {features.map((f) => (
          <li key={f}>• {f}</li>
        ))}
      </ul>

      <div className="mt-6 space-y-3">
        <button
          onClick={handleWhatsApp}
          className={`w-full py-2.5 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
            popular
              ? "bg-white text-accent hover:bg-gray-100"
              : "bg-accent text-white hover:bg-accent/90"
          }`}
        >
          <span>💬</span>
          WhatsApp Inquiry
        </button>
        <button
          onClick={handleEmail}
          className={`w-full py-2.5 rounded-lg font-semibold transition-all border-2 ${
            popular
              ? "border-white text-white hover:bg-white/10"
              : "border-accent text-accent dark:text-white hover:bg-accent/10"
          }`}
        >
          📧 Email Inquiry
        </button>
      </div>
    </motion.div>
  );
}
