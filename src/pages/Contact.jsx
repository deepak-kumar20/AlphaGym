import React from "react";
import ContactForm from "../components/ContactForm";
import useSmoothScroll from "../hooks/useSmoothScroll";

export default function Contact() {
  useSmoothScroll();
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Contact Us
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Get in touch for membership inquiries or support.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <ContactForm />

          <div className="bg-gray-100 dark:bg-white/5 p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Location & Contact
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Kaseru road, Chandaus, Aligarh
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Phone: +91 8533019090
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Email: Tanujgiri2000@gmail.com
            </p>

            <div className="mt-6">
              <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
                <div className="text-center">
                  <div>📍 Map placeholder</div>
                  <div className="text-xs mt-2">(Embed Google Maps iframe)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
