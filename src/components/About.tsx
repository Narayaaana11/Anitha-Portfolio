import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sparkles, Github, Linkedin, Mail, Heart, Code2, Rocket } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Code2 className="h-5 w-5" />,
      title: "Craftsmanship",
      description: "Every line of code is an opportunity to create something meaningful"
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "User-Centric",
      description: "Building experiences that people love to use"
    },
    {
      icon: <Rocket className="h-5 w-5" />,
      title: "Innovation",
      description: "Always exploring new technologies and approaches"
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-background to-secondary/20 border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm px-6 py-2 text-sm font-medium animate-fade-in">
            <Sparkles className="mr-2 h-4 w-4 inline" />
            Get to Know Me
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            About <span className="bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[350px_1fr] gap-12 items-start">
            {/* Profile Section */}
            <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-border/50 p-8 text-center lg:sticky lg:top-24 animate-scale-in">
              <div className="mb-6 inline-block">
                <Avatar className="h-48 w-48 border-4 border-primary/20 shadow-[0_0_40px_hsl(330_85%_75%/0.3)] transition-all duration-500 hover:shadow-[0_0_60px_hsl(330_85%_75%/0.5)] hover:scale-105">
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback className="text-6xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                    JD
                  </AvatarFallback>
                </Avatar>
              </div>
              
              <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
                Anitha
              </h3>
              <p className="text-lg text-muted-foreground mb-2">Full-Stack Developer</p>
              <p className="text-sm text-muted-foreground/80 italic mb-6">
                "Building digital experiences with passion and precision"
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_hsl(330_85%_75%/0.4)]"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_hsl(330_85%_75%/0.4)]"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:hello@example.com"
                  className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_hsl(330_85%_75%/0.4)]"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </Card>

            {/* Bio & Values Section */}
            <div className="space-y-8">
              {/* Introduction */}
              <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-border/50 p-8 md:p-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="h-1 w-8 bg-gradient-to-r from-primary to-pink-400 rounded-full"></span>
                  My Story
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    I'm a dedicated MCA student at Aditya University with a strong foundation in computer applications 
                    and a passion for solving complex problems. My journey in technology started with curiosity and has 
                    grown into a deep commitment to creating meaningful digital experiences.
                  </p>
                  <p className="text-lg">
                    What drives me is the intersection of creativity and logic — where beautiful design meets elegant code. 
                    I believe that the best applications are those that not only work flawlessly but also bring joy to their users.
                  </p>
                  <p className="text-lg">
                    When I'm not coding, you'll find me exploring new technologies, participating in coding competitions, 
                    or contributing to open-source projects. I'm a firm believer in continuous learning and the power of 
                    community-driven development.
                  </p>
                </div>
              </Card>

              {/* Core Values */}
              <div className="grid md:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <Card 
                    key={index}
                    className="bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-sm border-border/50 p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(330_85%_75%/0.2)] group animate-scale-in"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="mb-4 inline-flex p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
