import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/ismaelstrey", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/ismaelstrey", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://instagram.com/ismaelstrey", label: "Instagram" },
  ];

  return (
    <footer className="flex fixed bottom-0 my-auto items-center justify-center w-screen py-4 border-t text-sm bg-gray-100/40 dark:bg-gray-800/40">
      <div className="flex items-center gap-6">
        <span className="text-gray-600 dark:text-gray-300">ismael strey pereira</span>
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon className="w-5 h-5" />
              <span className="sr-only">{social.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
