export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-muted">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div className="p-6 bg-background rounded-lg shadow">
          <h3 className="text-xl font-semibold">Project One</h3>
          <p className="text-sm">Description of project one goes here...</p>
        </div>
        <div className="p-6 bg-background rounded-lg shadow">
          <h3 className="text-xl font-semibold">Project Two</h3>
          <p className="text-sm">Description of project two goes here...</p>
        </div>
      </div>
    </section>
  );
}