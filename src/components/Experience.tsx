import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

function Experience() {
  const experiences = [
    // {
    //   title: "Pre-employment Program (Back-End Developer)",
    //   company: "Revature LLC",
    //   location: "El Paso, TX",
    //   period: "September 2024 - November 2024",
    //   description: "Implemented project work including construction of functional REST APIs using Test Driven Development methodologies.",
    //   achievements: [
    //     "Increased application performance by 40% through optimization",
    //     "Led a team of 5 developers on multiple projects",
    //     "Implemented CI/CD pipeline reducing deployment time by 60%",
    //     "update this section"
    //   ],
    //   technologies: ["Java", "SQL", "JDBC", "Maven", "Git", "Javalin", "JUnit", "Mockito", "Spring", "Spring Boot", "Spring Web", "Spring Data JPA"]
    // },
    {
      title: "Data Engineer",
      company: "Cognizant Technology Solutions Corp.",
      location: "El Paso, TX",
      period: "April 2022 - June 2023",
      description: "Enhanced the reliability, maintainability, and performance of large-scale data systems through clean code practices and rigorous testing.",
      achievements: [
        "Identified and resolved a critical data pipeline issue, leading cross functional efforts to implement a timely fix and ensure uninterrupted data transfer, meeting all delivery deadlines.",
        "Refactored initial data loading stage reducing code base size by 30%",
        "Designed test that achieved 98% line coverage and 100% class coverage"
      ],
      technologies: ["Scala", "PostgresSQL", "AWS S3", "Apache Spark", "Hive", "JaCoCo", "Jira"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text mb-4">
              Work Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My professional journey and key achievements
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background hidden md:block" />
                  
                  <Card className="md:ml-20 p-8 bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-glow transition-all duration-500">
                    <div className="space-y-4">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                          <div className="flex items-center space-x-4 text-muted-foreground">
                            <div className="flex items-center space-x-2">
                              <Briefcase className="h-4 w-4" />
                              <span className="font-medium text-white">{exp.company}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-white">
                          <Calendar className="h-4 w-4 text-chrome-silver" />
                          <span className="font-medium whitespace-nowrap text-chrome-silver">{exp.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-2 text-muted-foreground ">
                              <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge 
                              key={tech}
                              variant="outline"
                              className="bg-primary/10 text-sky-cyan border-sky-cyan hover:bg-primary/20 hover:scale-120 transition-all"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;