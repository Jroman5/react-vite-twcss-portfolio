import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; 

function Skills(){
    const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Vite", "HTML5", "CSS3", "JavaScript"],
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    },
    {
      title: "Backend",
      skills: ["Java", "SpringBoot","MySql", "Python", "PostgreSQL", "MongoDB", "Scala", "SQL"],
      color: "bg-green-500/10 text-green-400 border-green-500/20"
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "Docker", "Junit", "Mockito", "GitHub"],
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    }];

    return (
        <section id="skills" className="py-20"> 
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text mb-4">
                            Skills & Technologies
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive toolkit for building modern web applications
                        </p>
                    </div>
          
                    <div className="grid md:grid-cols-2 gap-8">
                        {skillCategories.map((category, index) => (
                            <Card 
                                key={category.title}
                                className="p-8 bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill) => (
                                        <Badge 
                                            key={skill}
                                            variant="outline"
                                            className={`px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-110 ${category.color}`}
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );

}
export default Skills;