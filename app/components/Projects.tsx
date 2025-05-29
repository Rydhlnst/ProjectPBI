import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const projects = [
  {
    title: "Devflow",
    description:
      "Platform komunitas developer mirip StackOverflow dengan fitur AI bawaan untuk menjawab pertanyaan secara otomatis.",
    image: "/images/devflow.png"
  },
  {
    title: "MUNU",
    description:
      "Personal finance tracker berbasis web dengan AI Financial Advisor. Desain minimalis, mirip MetaMask, dan mendukung rencana integrasi API bank."
    // no image
  },
  {
    title: "404ryan.com",
    description:
      "Website portofolio pribadi dibangun dengan Next.js, Tailwind, dan ShadCN UI. Fitur: Monaco Editor intro, Tech Stack Graph interaktif pakai GSAP.",
    image: "/images/404ryan.png"
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
                <Card className="h-full px-4">
                  <div className="relative h-48 w-full">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    ) : (
                      <Skeleton className="h-full w-full flex items-center justify-center">
                        <span className="text-muted-foreground text-sm">No Image</span>
                      </Skeleton>
                    )}
                  </div>
                  <CardHeader className="py-0 px-2">
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="py-0 px-2">
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
