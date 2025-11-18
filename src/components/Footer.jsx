import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-black/50 backdrop-blur-md py-8 border-t border-gray-300 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 text-gray-600 dark:text-gray-300">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Alpha Gym
            </h3>
            <p className="mt-2 text-sm">
              Premium training, modern facilities, expert coaches.
            </p>
          </div>
          <div className="flex gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Contact
              </h4>
              <p className="text-sm">Kaseru road, Chandaus, Aligarh</p>
              <p className="text-sm">+91 8533019090</p>
              <p className="text-sm">Tanujgiri2000@gmail.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Follow
              </h4>
              <a
                href="https://www.instagram.com/tanuj_giri__/"
                target="_blank"
                rel="noreferrer"
                className="text-sm hover:text-accent transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} Alpha Gym — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
