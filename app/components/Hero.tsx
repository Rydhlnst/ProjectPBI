"use client";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I’m <span className="text-primary">Riyan</span>
      </h1>
      <p className="text-lg md:text-xl max-w-xl text-muted-foreground mb-6">
        I’m a Web Developer who loves building{" "}
        <span className="font-semibold text-foreground">interactive</span> and{" "}
        <span className="font-semibold text-foreground">beautiful</span> web experiences.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="text-base" asChild>
          <a href="#projects">Explore Projects</a>
        </Button>
        <Button size="lg" variant="outline" className="text-base" asChild>
          <a href="/Riyan_CV.pdf" target="_blank" rel="noopener noreferrer" download>
            Download CV
          </a>
        </Button>
      </div>

      <a href="#about" className="mt-12 animate-bounce text-primary" aria-label="Scroll to About">
        <ArrowDown size={32} />
      </a>
    </section>
  );
}
