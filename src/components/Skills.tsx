import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Palette, 
  Server, 
  Database, 
  GitBranch, 
  Wrench, 
  Lightbulb,
  Users,
  MessageSquare,
  Target,
  Star,
  Zap
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Palette className="h-5 w-5" />,
      color: "from-blue-500/20 to-cyan-500/10",
      borderColor: "border-blue-500/30",
      skills: [
        { name: "React", icon: <Code2 className="h-4 w-4" />, featured: true },
        { name: "TypeScript", icon: <Code2 className="h-4 w-4" />, featured: true },
        { name: "JavaScript", icon: <Code2 className="h-4 w-4" />, featured: true },
        { name: "HTML/CSS", icon: <Code2 className="h-4 w-4" />, featured: true },
        { name: "Tailwind CSS", icon: <Palette className="h-4 w-4" />, featured: true },
        { name: "Next.js", icon: <Code2 className="h-4 w-4" /> },
        { name: "Sass", icon: <Palette className="h-4 w-4" /> },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="h-5 w-5" />,
      color: "from-purple-500/20 to-pink-500/10",
      borderColor: "border-purple-500/30",
      skills: [
        { name: "Node.js", icon: <Server className="h-4 w-4" />, featured: true },
        { name: "Python", icon: <Code2 className="h-4 w-4" />, featured: true },
        { name: "Java", icon: <Code2 className="h-4 w-4" /> },
        { name: "REST APIs", icon: <Server className="h-4 w-4" />, featured: true },
        { name: "SQL", icon: <Database className="h-4 w-4" />, featured: true },
        { name: "MongoDB", icon: <Database className="h-4 w-4" /> },
        { name: "Express.js", icon: <Server className="h-4 w-4" /> },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="h-5 w-5" />,
      color: "from-orange-500/20 to-red-500/10",
      borderColor: "border-orange-500/30",
      skills: [
        { name: "Git & GitHub", icon: <GitBranch className="h-4 w-4" />, featured: true },
        { name: "VS Code", icon: <Code2 className="h-4 w-4" />, featured: true },
        { name: "Figma", icon: <Palette className="h-4 w-4" />, featured: true },
        { name: "Supabase", icon: <Database className="h-4 w-4" /> },
        { name: "Vercel", icon: <Zap className="h-4 w-4" /> },
        { name: "Docker", icon: <Server className="h-4 w-4" /> },
      ],
    },
    {
      title: "Core Concepts",
      icon: <Lightbulb className="h-5 w-5" />,
      color: "from-green-500/20 to-emerald-500/10",
      borderColor: "border-green-500/30",
      skills: [
        { name: "Data Structures", icon: <Database className="h-4 w-4" />, featured: true },
        { name: "System Design", icon: <Server className="h-4 w-4" />, featured: true },
        { name: "OOP", icon: <Code2 className="h-4 w-4" />, featured: true },
        { name: "DBMS", icon: <Database className="h-4 w-4" />, featured: true },
        { name: "Algorithms", icon: <Target className="h-4 w-4" /> },
        { name: "Design Patterns", icon: <Lightbulb className="h-4 w-4" /> },
      ],
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-5 w-5" />,
      color: "from-pink-500/20 to-rose-500/10",
      borderColor: "border-pink-500/30",
      skills: [
        { name: "Team Collaboration", icon: <Users className="h-4 w-4" />, featured: true },
        { name: "Communication", icon: <MessageSquare className="h-4 w-4" />, featured: true },
        { name: "Problem Solving", icon: <Target className="h-4 w-4" />, featured: true },
        { name: "Adaptability", icon: <Lightbulb className="h-4 w-4" />, featured: true },
        { name: "Leadership", icon: <Star className="h-4 w-4" /> },
        { name: "Time Management", icon: <Target className="h-4 w-4" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-secondary/20 to-background border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="relative animate-fade-in group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Enhanced Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-pink-400/20 to-primary/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000 -z-10" />
              
              <Card className={`relative bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-sm border-2 ${category.borderColor} hover:border-primary/60 p-8 transition-all duration-700 overflow-hidden hover:-translate-y-3 hover:shadow-2xl z-10 h-full`}>
                {/* Dynamic Background Pattern */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative">
                  {/* Enhanced Category Header */}
                  <div className="mb-8 flex items-center gap-4 pb-6 border-b-2 border-border/30 group-hover:border-primary/30 transition-colors duration-500">
                    <div className="relative">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                        {category.icon}
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 to-pink-400/40 rounded-xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-1 group-hover:translate-y-0">
                        {category.skills.length} skills
                      </p>
                    </div>
                  </div>

                  {/* Modern Skills Grid */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, index) => (
                      <div
                        key={index}
                        className={`relative animate-fade-in group/skill ${
                          skill.featured 
                            ? 'order-first'
                            : ''
                        }`}
                        style={{ animationDelay: `${(idx * 0.1) + (index * 0.05)}s` }}
                      >
                        <Badge
                          className={`relative flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold transition-all duration-300 cursor-default border-0 ${
                            skill.featured
                              ? 'bg-gradient-to-r from-primary/15 to-pink-400/15 text-primary border border-primary/20 hover:from-primary/25 hover:to-pink-400/25 hover:scale-105 shadow-lg hover:text-primary'
                              : 'bg-secondary/80 text-foreground hover:bg-secondary hover:text-foreground hover:scale-105 border border-border/30'
                          } group-hover:shadow-xl`}
                        >
                          {/* Skill Icon with Animation */}
                          <div className={`transition-all duration-300 group-hover/skill:scale-110 ${
                            skill.featured ? 'text-primary' : 'text-foreground'
                          }`}>
                            {skill.icon}
                          </div>
                          
                          {/* Skill Name */}
                          <span className="font-medium">{skill.name}</span>
                          
                          {/* Featured Star Indicator */}
                          {skill.featured && (
                            <Star className="h-3 w-3 fill-current text-primary group-hover/skill:scale-125 transition-all duration-300" />
                          )}
                          
                          {/* Subtle Glow for Featured Skills */}
                          {skill.featured && (
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-pink-400/20 rounded-lg blur opacity-0 group-hover/skill:opacity-60 transition-opacity duration-300 -z-10" />
                          )}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  
                  {/* Skill Count Indicator */}
                  <div className="mt-6 pt-4 border-t border-border/30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Featured: {category.skills.filter(skill => skill.featured).length}</span>
                      <span>Total: {category.skills.length}</span>
                    </div>
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

export default Skills;
