import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";
import bankImage from '../assets/etienne-martin-2_K82gx9Uk8-unsplash (1).jpg';
import cyber from '../assets/markus-spiske-iar-afB0QQw-unsplash.jpg';

function Projects(){
  const projects = [
    {
      title: "Banking Application",
      description: "A banking application that allows users to handle financial transactions involving their bank accounts and loans while allowing Admins to monitor bank cash flow and review loan applications",
      image: `${bankImage}`,
      technologies: ["Spring Data", "Spring security", "Spring Web", "JdbcTemplate", "Maven"," Java", "Git", "Docker", "Javascript", "React", 
"HTML", "CSS", "Stripe API", "MaterialUI Charts", "BootStrap", "MySQL"
],
      github: "https://github.com/elchananbloom/init2WinIt",
      live: "#",
      featured: true,
      stars: 45
    },
    
    {
      title: "Findings Reportings Information Console (FRIC)",
      description: `Assists the U.S. Cyber Experimentation & Analysis Division team (CEAD) 
      in distributing and managing work with documentation of cyber security tests amongst analysts`,
      image: `${cyber}`,
      technologies: ["Python", "Pymongo", "xlsxwriter", "python-docx", "python-pptx", "MongoDB"],
      github: "https://github.com/miguelmunozh/SE-project",
      live: "#",
      featured: true,
      stars: 32
    },
    {
      title: "Social media blog API",
      description: "A RESTful API for managing users and posts with full CRUD functionality",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["Spring Data", "Spring Web", "Spring Hibernate", "Maven", "Java", "GIT"],
      github: "https://github.com/Jroman5/Jroman5-pep-spring-project",
      live: "#",
      featured: false,
      stars: 28
    },
    {
      title: "Shop API",
      description: "A RESTful API for managing customers, orders, and products with full CRUD functionality.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Java", "Maven", "Spring Web", "Spring JDBC", "SpringBoot Data JPA", "Hibernate", "H2Database"],
      github: "https://github.com/Jroman5/shop_CRUD_API",
      live: "#",
      featured: false,
      stars: 19
    },
    
    // {
    //   title: "Portfolio Website",
    //   description: "A modern, responsive portfolio website showcasing projects and skills with beautiful animations and interactions.",
    //   image: "https://images.unsplash.com/photo-grey-concrete-building-2_K82gx9Uk8?w=600&h=400&fit=crop",
    //   technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    //   github: "#",
    //   live: "#",
    //   featured: false,
    //   stars: 15
    // }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className=" py-20 ">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>
          
          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline"
                        className="bg-primary/10 text-sky-cyan border-sky-cyan "
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4 pt-4">
                    
                    <Button variant="outline" size="sm" className="bg-gradient-secondary  hover:bg-gradient-secondary-hover hover:scale-110" onClick={() => {window.open(project.github, "_self")}}>
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Other Projects Grid */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-sky-cyan">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <Card 
                  key={project.title}
                  className="p-6 bg-card/50 backdrop-blur-sm border-chrome-silver shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h4 className="text-lg font-bold text-chrome-silver">{project.title}</h4>
                      
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge 
                          key={tech}
                          variant="outline"
                          className="text-xs bg-primary/5 text-sky-cyan border-sky-cyan "
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs bg-muted/50 text-muted-foreground text-sky-cyan border-sky-cyan">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      
                      <Button size="sm" variant="outline" className="flex-1 bg-gradient-secondary  hover:bg-gradient-secondary-hover hover:scale-110" onClick={() => {window.open(project.github, "_self")}}>
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
