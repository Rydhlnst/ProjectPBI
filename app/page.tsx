import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
     <main className="min-h-screen bg-background text-foreground font-poppins">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <TechStack />
      <ContactMe/>
      <Footer />
    </main>
  );
}
