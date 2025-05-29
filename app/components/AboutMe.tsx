import { Skeleton } from "@/components/ui/skeleton";

export default function AboutMe() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <span className="uppercase text-sm tracking-wide text-primary font-medium mb-2 block text-center md:text-left">
        Introduction
      </span>
      <h2 className="text-3xl font-bold mb-6 text-center md:text-left">About Me</h2>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* LEFT: SKELETON IMAGE */}
        <div className="flex justify-center">
          <Skeleton className="w-96 h-96 rounded-2xl flex items-center justify-center bg-muted">
            <span className="text-muted-foreground text-center text-sm">No Image</span>
          </Skeleton>
        </div>

        {/* RIGHT: TEXT */}
        <div className="max-w-prose text-justify text-muted-foreground leading-relaxed">
          <p className="mb-4">
            Hi! I&apos;m Riyan, a passionate and curious web developer who loves combining creativity and logic
            to build impactful digital experiences. My journey started in 2020 and has been fueled by a deep
            interest in technology and continuous learning.
          </p>
          <p className="mb-4">
            I specialize in full-stack development using technologies like Next.js, Tailwind CSS, TypeScript, and MongoDB.
            I&apos;m also expanding my expertise into AI and Web3, with a growing portfolio that includes
            AI-integrated apps, decentralized tools, and collaborative platforms.
          </p>
          <p className="mb-4">
            Beyond just coding, I&apos;m driven by the idea of solving real-world problems. Whether it&apos;s through building smarter
            learning platforms, financial tools, or community-powered applications, I aim to create products
            that empower people and make technology more accessible.
          </p>
          <p>
            When I&apos;m not coding, I enjoy experimenting with animation tools like GSAP and Rive, exploring new ideas,
            and contributing to innovation challenges globally. I believe in learning by doing, and I’m always
            open to collaboration and new challenges.
          </p>
        </div>
      </div>
    </section>
  );
}
