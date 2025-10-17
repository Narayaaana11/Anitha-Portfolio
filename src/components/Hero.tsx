import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, ArrowDown, Sparkles } from "lucide-react";
import AnimatedEye from "@/components/AnimatedEye";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center border-b border-border/50 overflow-hidden">
      {/* Enhanced Animated Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary glow orbs with complex animations */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/15 rounded-full blur-[140px] animate-float opacity-60" 
             style={{ animationDuration: '8s' }} />
        <div className="absolute top-20 right-40 w-[400px] h-[400px] bg-pink-400/10 rounded-full blur-[100px] animate-pulse opacity-40" 
             style={{ animationDelay: '0.5s', animationDuration: '4s' }} />
        
        {/* Secondary animated orbs */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-float opacity-50" 
             style={{ animationDelay: '2s', animationDuration: '10s' }} />
        <div className="absolute bottom-40 left-20 w-[350px] h-[350px] bg-accent/10 rounded-full blur-[90px] animate-pulse" 
             style={{ animationDelay: '1s', animationDuration: '5s' }} />
        
        {/* Accent orbs for depth */}
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-primary/8 rounded-full blur-[80px] animate-float" 
             style={{ animationDelay: '3s', animationDuration: '12s' }} />
        <div className="absolute top-1/3 right-1/3 w-[250px] h-[250px] bg-pink-300/8 rounded-full blur-[70px] animate-pulse opacity-30" 
             style={{ animationDelay: '1.5s', animationDuration: '6s' }} />
        
        {/* Floating particles */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-40" 
             style={{ animationDuration: '5s', animationDelay: '0s' }} />
        <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-primary/60 rounded-full animate-float opacity-30" 
             style={{ animationDuration: '7s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/2 w-2 h-2 bg-accent rounded-full animate-pulse opacity-50" 
             style={{ animationDuration: '3s', animationDelay: '1s' }} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="text-left space-y-8 animate-fade-in-up order-2 lg:order-1">
            {/* Small Introduction */}
            <div className="inline-flex items-center gap-2 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="text-lg">Hey there</span>
              <span className="text-2xl animate-bounce-in" style={{ animationDelay: '0.3s' }}>👋</span>
              <span className="text-lg">I'm</span>
            </div>

            {/* Large Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="block mb-3">Anitha Rajeswari</span>
              <span className="block bg-gradient-to-r from-primary via-pink-400 to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                Nulu
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Full-Stack Developer & Competitive Programmer crafting elegant digital solutions through innovative development and programming excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_40px_hsl(330_85%_75%/0.4)] hover:shadow-[0_0_80px_hsl(330_85%_75%/0.7)] transition-all duration-500 group px-8 py-6 text-lg animate-glow-pulse hover:scale-105 backdrop-blur-sm border border-primary/20"
                onClick={() => scrollToSection("#projects")}
              >
                <Sparkles className="mr-2 h-5 w-5 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/40 hover:bg-primary/10 backdrop-blur-sm px-8 py-6 text-lg group hover:border-primary/60 hover:shadow-[0_0_40px_hsl(330_85%_75%/0.3)] transition-all duration-500 hover:scale-105"
                onClick={() => scrollToSection("#contact")}
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 animate-scale-in" style={{ animationDelay: '0.8s' }}>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(330_85%_75%/0.5)] hover:scale-110"
              >
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-110" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(330_85%_75%/0.5)] hover:scale-110"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-110" />
              </a>
              <a 
                href="tel:+916301253789" 
                className="group relative p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(330_85%_75%/0.5)] hover:scale-110"
              >
                <Phone className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Right Column - Animated Eye */}
          <div className="flex items-center justify-center order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <AnimatedEye />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection("#about")}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
            aria-label="Scroll to next section"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
