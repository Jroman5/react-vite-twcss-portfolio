import { Card } from "@/components/ui/card";

function About() {
  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold  bg-clip-text  mb-4 text-white">
              About Me
            </h2>
            <p className="text-xl text-chrome-silver text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with a love for creating innovative solutions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
                <h3 className="text-2xl font-bold mb-4 ">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I first found my passion for software development when I started attending the University of Texas at El Paso and had to choose between Mechanical, Electrical, or Software Engineering. 
                  I knew I wanted my work to impact as many people as possible, so naturally I gravitated towards software because of its ability to scale. 
                  During my time as a student I became a tutor for the topics where I saw my classmates strugling the most, these topics include Intro to CS, Data Structures and Algorithms, and Computer Architechture. 
                  I currently have a year of experience in software development in an agile environment and am looking to continue improving in my journey as a software developer.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I specialize in full-stack development, with expertise in React, SpringBoot, Java, SQL and modern 
                  web technologies. I love working on projects that challenge me to learn and grow.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, enjoying motorsports or reading up on Software Engeneering practices.
                </p>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-3 h-3 bg-muted-foreground rounded-full animate-pulse" />
                  <h4 className="text-lg font-semibold">Problem Solver</h4>
                </div>
                <p className="text-muted-foreground">
                  I approach every challenge with analytical thinking and creative solutions.
                </p>
              </Card>
              
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-3 h-3 bg-muted-foreground rounded-full animate-pulse" />
                  <h4 className="text-lg font-semibold">Team Player</h4>
                </div>
                <p className="text-muted-foreground">
                  Collaborative approach to development, always ready to help teammates succeed.
                </p>
              </Card>
              
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-3 h-3 bg-muted-foreground rounded-full animate-pulse" />
                  <h4 className="text-lg font-semibold">Continuous Learner</h4>
                </div>
                <p className="text-muted-foreground">
                  Always staying updated with the latest technologies and best practices.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;