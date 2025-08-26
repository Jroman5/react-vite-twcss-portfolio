import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from '../assets/portfolio_hero_image2.png';
import {scrollToSection} from '../lib/util-func';
import { preload } from "react-dom";




function Hero(){
  preload(heroImage, {as: 'image', fetchPriority: 'high'})
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero z-10" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl  font-bold bg-clip-text text-white animate-in slide-in-from-bottom-10 duration-1000">
              Jonathan Roman
            </h1>
            <h2 className="text-2xl md:text-3xl text-chrome-silver text-muted-foreground animate-in slide-in-from-bottom-10 duration-1000 delay-200">
              Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-10 duration-1000 delay-300">
              Passionate about creating beautiful, functional web applications with modern technologies. 
              I turn ideas into digital reality.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in slide-in-from-bottom-10 duration-1000 delay-500">
            <Button size="lg" className="hover:shadow-glow  bg-gradient-secondary text-chrome-silver hover:bg-gradient-secondary-hover hover:scale-110 hover:text-white transition-all duration-300" onClick={() =>  scrollToSection("contact")}>
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button  size="lg" className="bg-gradient-secondary text-chrome-silver hover:bg-gradient-secondary-hover hover:scale-110 hover:text-white transition-all duration-300" onClick={() => window.open("https://drive.google.com/file/d/1rkgtt1R4TMm40hQjq2f6qy6Mo35Mklz0/view","_self")}>
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 animate-in slide-in-from-bottom-10 duration-1000 delay-700">
            <a href="https://github.com/Jroman5" className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 transition-all duration-300 hover:scale-110">
              <Github className="h-6 w-6 text-chrome-silver" />
            </a>
            <a href="https://www.linkedin.com/in/jonathanroman25/" className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 transition-all duration-300 hover:scale-110">
              <Linkedin className="h-6 w-6 text-chrome-silver" />
            </a>
          </div>
        </div>
      </div>
      </section>
  );
}
export default Hero;