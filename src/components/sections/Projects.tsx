import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const completedProjects = [
  {
    title: 'AIT Website',
    description: 'Complete redesign and development of the college website with modern UI/UX',
    status: 'Completed',
    team: '8 members',
    duration: '4 months'
  },
  {
    title: 'Projak',
    description: 'Project management platform for students and faculty collaboration',
    status: 'Completed',
    team: '6 members',
    duration: '3 months'
  },
  {
    title: 'Fodo AI',
    description: 'AI-powered food recommendation system for campus cafeteria',
    status: 'Completed',
    team: '5 members',
    duration: '2 months'
  },
  {
    title: 'Stumato',
    description: 'Student automation tool for academic tasks and scheduling',
    status: 'Completed',
    team: '4 members',
    duration: '3 months'
  }
];

const upcomingProjects = [
  {
    title: 'Hostel Suvidha',
    description: 'Digital platform for hostel management and student services',
    status: 'In Planning',
    team: 'Recruiting',
    duration: 'TBD'
  },
  {
    title: 'AIT Placements Website',
    description: 'Dedicated platform for placement activities and student portfolios',
    status: 'In Planning',
    team: 'Recruiting',
    duration: 'TBD'
  },
  {
    title: 'New AIT Website',
    description: 'Next-generation college website with enhanced features',
    status: 'In Planning',
    team: 'Recruiting',
    duration: 'TBD'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions developed by students, for students. 
            Building technology that improves campus life.
          </p>
        </motion.div>

        {/* Completed Projects */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 flex items-center gap-2"
          >
            <div className="w-1 h-6 bg-primary rounded-full" />
            Completed Projects
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {completedProjects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass hover:border-primary/50 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {project.description}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {project.team}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {project.duration}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="mt-4 p-0 h-auto text-primary hover:text-primary/80">
                      View Details <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Upcoming Projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 flex items-center gap-2"
          >
            <div className="w-1 h-6 bg-primary rounded-full" />
            Upcoming Projects
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {upcomingProjects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass hover:border-primary/50 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {project.description}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {project.team}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {project.duration}
                      </div>
                    </div>
                    <Button variant="default" size="sm" className="mt-4 bg-primary hover:bg-primary/90">
                      Join Project
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}