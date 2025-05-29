export default function TechStack() {
  return (
    <section id="tech" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Tech Stack</h2>
      <ul className="flex flex-wrap justify-center gap-4">
        {['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Node.js', 'MongoDB'].map((tech) => (
          <li key={tech} className="px-4 py-2 bg-muted rounded-full text-sm font-medium">
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
}