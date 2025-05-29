import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Devflow",
    description:
      "Platform komunitas developer mirip StackOverflow dengan fitur AI bawaan untuk menjawab pertanyaan secara otomatis."
  },
  {
    title: "MUNU",
    description:
      "Personal finance tracker berbasis web dengan AI Financial Advisor. Desain minimalis, mirip MetaMask, dan mendukung rencana integrasi API bank."
  },
  {
    title: "404ryan.com",
    description:
      "Website portofolio pribadi dibangun dengan Next.js, Tailwind, dan ShadCN UI. Fitur: Monaco Editor intro, Tech Stack Graph interaktif pakai GSAP."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-muted">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <Carousel className="w-full">
          <CarouselContent>
            {projects.map((project, i) => (
              <CarouselItem
                key={i}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
