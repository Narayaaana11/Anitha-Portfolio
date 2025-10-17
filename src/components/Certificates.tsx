import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Sparkles, ExternalLink, GraduationCap } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "2024",
      description: "Comprehensive course covering HTML, CSS, JavaScript, React, Node.js, and MongoDB",
      icon: "🎓",
    },
    {
      title: "Python Programming",
      issuer: "Coursera",
      date: "2023",
      description: "Advanced Python programming including data structures, algorithms, and OOP concepts",
      icon: "🐍",
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "HackerRank",
      date: "2023",
      description: "Proficiency in implementing and optimizing various data structures and algorithms",
      icon: "🧮",
    },
    {
      title: "Database Management Systems",
      issuer: "LinkedIn Learning",
      date: "2023",
      description: "SQL, database design, normalization, and query optimization techniques",
      icon: "💾",
    },
    {
      title: "Git & GitHub Essentials",
      issuer: "GitHub",
      date: "2022",
      description: "Version control, collaboration workflows, and best practices for team development",
      icon: "📦",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2022",
      description: "Modern CSS techniques, Flexbox, Grid, and mobile-first design principles",
      icon: "📱",
    },
  ];

  return (
    <section id="certificates" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm px-6 py-2 text-sm font-medium">
            <Sparkles className="mr-2 h-4 w-4 inline" />
            Achievements
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Certifications &{" "}
            <span className="bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
              Awards
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Continuous learning and professional development through recognized certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-border/50 hover:border-primary/60 transition-all duration-500 p-8 hover:shadow-[0_20px_60px_hsl(330_85%_75%/0.25)] animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Icon */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Award className="h-5 w-5" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="text-xs border-primary/40">
                    {cert.issuer}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{cert.date}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {cert.description}
                </p>

                {/* Action Button */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group/btn border-primary/40 hover:bg-primary/10"
                >
                  <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                  View Certificate
                </Button>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-pink-400/20 to-primary/20 blur-xl" />
              </div>
            </Card>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-24">
          <div className="mb-12 text-center">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm px-6 py-2 text-sm font-medium">
              <Sparkles className="mr-2 h-4 w-4 inline" />
              Academic Journey
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">Education</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-border/50 hover:border-primary/60 p-8 hover:shadow-[0_20px_60px_hsl(330_85%_75%/0.25)] transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Master of Computer Applications (MCA)</h3>
                  <p className="text-primary/90 mb-3 font-medium text-lg">Aditya University, Surampalem</p>
                  <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      August 2024 - May 2026
                    </span>
                    <span className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      SGPA: 7.85/10
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-border/50 hover:border-primary/60 p-8 hover:shadow-[0_20px_60px_hsl(330_85%_75%/0.25)] transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-primary/90 mb-3 font-medium text-lg">Aditya Degree College, Bhimavaram</p>
                  <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      August 2021 – May 2024
                    </span>
                    <span className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      CGPA: 7.24/10
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
