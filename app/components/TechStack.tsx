import { Badge } from "@/components/ui/badge";

const techStacks = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Prisma",
  "Python",
  "Solidity",
  "GSAP",
  "Rive",
  "Mongoose",
  "ShadCN UI",
  "OpenAI API",
  "Vercel",
  "Git",
  "Figma"
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Tech Stack</h2>
      <ul className="flex flex-wrap justify-center gap-3">
        {techStacks.map((tech) => (
          <li key={tech}>
            <Badge variant="outline" className="text-sm px-3 py-1">{tech}</Badge>
          </li>
        ))}
      </ul>
    </section>
  );
}
