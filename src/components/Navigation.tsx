import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import "../index.css";


function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    //   setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" }
  ];

  return (
    <nav className={`nav-fixed ${
      isScrolled 
        ? "bg-background backdrop-blur-md border-b border-border/50 shadow-card" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* logo */}
        <Button className="bg-gradient-primary text-transparent font-bold text-2xl bg-clip-text hover:bg-gradient-primary-hover hover:scale-120 tansition-all duration-300" onClick={()=> scrollToSection("hero")}>JR</Button>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (<button className="text-chrome-silver hover:scale-110 hover:text-white transition-all duration-300" key={item.id} onClick={() => scrollToSection(item.id)}>{item.label}</button>) )}
             <Button 
                className="btn-gradient"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </Button>
          </div>
         
        </div>

      </div>
    </nav>
   
  );
}
export default Navigation;