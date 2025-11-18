import React from "react";
import useSmoothScroll from "../hooks/useSmoothScroll";
import PricingCard from "../components/PricingCard";

export default function Plans() {
  useSmoothScroll();
  const plans = [
    {
      title: "1 Month",
      price: "₹700/mo",
      features: [
        "24/7 Access",
        "Group Classes",
        "Free Wi-Fi",
        "Locker Facility",
      ],
      popular: false,
    },
    {
      title: "3 Months",
      price: "₹2000/3mo",
      features: [
        "Everything in 1 Month",
        "3 Personal Training Sessions",
        "Nutrition Guidance",
      ],
      popular: true,
    },
    {
      title: "6 Months",
      price: "₹3600/6mo",
      features: [
        "Best Value",
        "Unlimited Classes",
        "Priority Support",
        "Free Gym Merchandise",
      ],
      popular: false,
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Membership Plans
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Choose a plan that fits your schedule and goals.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <PricingCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}
