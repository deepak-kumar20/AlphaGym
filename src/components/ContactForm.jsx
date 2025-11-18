import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create email subject and body
    const subject = `Contact Form Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

    // Open default email client
    window.location.href = `mailto:Tanujgiri2000@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
  };

  const handleWhatsApp = () => {
    const message = `Hi Tanuj!%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0AMessage:%0A${formData.message}`;
    window.open(`https://wa.me/918533019090?text=${message}`, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 dark:bg-white/5 p-6 rounded-xl max-w-2xl shadow-md"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className="p-3 bg-white dark:bg-transparent border border-gray-300 dark:border-white/10 rounded text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="p-3 bg-white dark:bg-transparent border border-gray-300 dark:border-white/10 rounded text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        />
      </div>
      <input
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
        className="mt-4 p-3 bg-white dark:bg-transparent border border-gray-300 dark:border-white/10 rounded w-full text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        rows="5"
        required
        className="mt-4 p-3 bg-white dark:bg-transparent border border-gray-300 dark:border-white/10 rounded w-full text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
      ></textarea>
      <div className="mt-4 flex gap-3">
        <button
          type="submit"
          className="px-4 py-2 bg-accent text-white rounded font-semibold hover:bg-accent/90 transition-colors"
        >
          📧 Send via Email
        </button>
        <button
          type="button"
          onClick={handleWhatsApp}
          className="px-4 py-2 border border-gray-300 dark:border-white/10 rounded text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/5 transition-colors"
        >
          💬 Send via WhatsApp
        </button>
      </div>
    </form>
  );
}
