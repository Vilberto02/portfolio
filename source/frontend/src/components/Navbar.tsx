"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50`}>
      <nav className={`flex justify-between items-center px-8 md:px-24 py-4`}>
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#home" className="flex items-center gap-2 group">
            <div className="bg-[#A259FF] shadow-lg py-1 px-2 transition-transform group-hover:scale-105">
              <p className="uppercase font-bold text-lg text-white font-header tracking-wider">
                pj
              </p>
            </div>
          </a>
        </motion.div>

        {/* Links Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`flex gap-8 px-4 py-2 items-center transition-all duration-300 ${
            isScrolled
              ? "bg-white/70 backdrop-blur-md"
              : "bg-transparent"
          }`}
        >
          {[
            { name: "Inicio", href: "#home" },
            { name: "Sobre mí", href: "#about" },
            { name: "Habilidades", href: "#skill" },
            { name: "Proyectos", href: "#project" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-stone-700 font-medium hover:text-[#A259FF] px-2 py-1 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#A259FF] after:left-0 after:bottom-0 after:transition-[width] hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      </nav>
    </div>
  );
}
