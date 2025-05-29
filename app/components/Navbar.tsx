// components/Navbar.tsx
"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        <h1 className="text-xl font-bold">404ryan</h1>

        <nav className="hidden md:flex space-x-4 items-center">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#tech" className="hover:underline">Tech Stack</a>
          <ModeToggle/>
        </nav>

        <div className="space-x-3 md:hidden p-2">
          <ModeToggle/>
          <Button
            variant={"ghost"}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <Menu />
          </Button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-background z-40 px-6 pt-6">
          <div className="flex justify-end">
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X className="w-8 h-8" />
            </button>
          </div>
          <div className="flex flex-col items-start justify-center h-full space-y-6">
            <a
              href="#about"
              className="text-3xl font-bold hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="text-3xl font-bold hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#tech"
              className="text-3xl font-bold hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Tech Stack
            </a>

          </div>
        </div>
      )}

    </header>
  );
}
