import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, Database, Layers, Sparkles, ExternalLink, Github } from "lucide-react";
import canteenImage from "@/assets/project-canteen.jpg";
import todoImage from "@/assets/project-todo.jpg";
import calculatorImage from "@/assets/project-calculator.jpg";

const Projects = () => {
  const projects = [
    {
      title: "College Canteen Partner App",
      tech: ["HTML", "CSS", "JavaScript", "Supabase"],
      description: "Full-stack web application for college canteen management with order tracking, menu CRUD operations, and real-time notifications.",
      highlights: ["Performance: 94/100", "SEO: 92/100", "Dark-themed UI"],
      icon: <Database className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      image: canteenImage,
    },
    {
      title: "To-Do List Website",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "User-friendly task management application with search, filtering, and status tracking features.",
      highlights: ["Performance: 95/100", "SEO: 93/100", "Dynamic State Management"],
      icon: <Layers className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      image: todoImage,
    },
    {
      title: "Calculator App",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "Responsive calculator optimized for mobile and desktop with core arithmetic operations.",
      highlights: ["Performance: 93/100", "SEO: 90/100", "Mobile Optimized"],
      icon: <Code2 className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
      image: calculatorImage,
    },
  ];

  return (
    <section id="projects" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-primary via-primary to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Glow Effect Behind Card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-pink-400/30 to-primary/30 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10" />
              
              <Card className="group relative bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-sm border-border/50 hover:border-primary/60 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-2xl z-10">
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden rounded-t-lg -m-[1px] mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Hover Overlay with Buttons */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/98 via-background/85 to-background/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-3 p-6 backdrop-blur-sm">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="shadow-2xl translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 hover:scale-110"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="shadow-2xl border-primary/40 hover:bg-primary/10 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 hover:scale-110"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative p-6 pt-0">
                <div className="mb-4 flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg group-hover:shadow-primary/50">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-all duration-300 group-hover:translate-x-1">
                    {project.title}
                  </h3>
                </div>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <Badge 
                      key={idx}
                      variant="secondary"
                      className="text-xs bg-secondary/80 backdrop-blur-sm hover:bg-primary/20 hover:border-primary/50 border border-border/50 transition-all duration-300 hover:scale-110 hover:shadow-lg group-hover:border-primary/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{project.description}</p>
                
                <div className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-all duration-300 group-hover:translate-x-1"
                      style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-pink-400 mr-3 group-hover:scale-150 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/50" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
