"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "w-full top-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "fixed bg-background/90 shadow" : "absolute bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MyPortfolio</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#tech" className="hover:underline">Tech Stack</a>
        </nav>
      </div>
    </header>
  );
}