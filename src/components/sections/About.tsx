import { motion } from 'framer-motion';
import { Lightbulb, Target, Users, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Fostering creative thinking and breakthrough solutions to campus challenges'
  },
  {
    icon: Target,
    title: 'Impact',
    description: 'Creating meaningful change that improves student life and academic experience'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Building bridges between students, faculty, and administration through technology'
  },
  {
    icon: Rocket,
    title: 'Growth',
    description: 'Empowering students with real-world development skills and leadership experience'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">CIDC</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The College Innovation and Development Club is a student-led initiative 
            dedicated to building innovative solutions that enhance campus life and 
            prepare students for the digital future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">Our Mission</h3>
            <p className="text-lg text-muted-foreground">
              We believe that students are the best positioned to understand and solve 
              the challenges they face daily. CIDC serves as a platform where innovative 
              minds come together to create technology solutions that make campus life 
              more efficient, accessible, and enjoyable.
            </p>
            <p className="text-lg text-muted-foreground">
              From redesigning websites to developing AI-powered applications, our projects 
              span across various domains of technology, always with the goal of creating 
              meaningful impact for our college community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">Our Vision</h3>
            <p className="text-lg text-muted-foreground">
              To establish AIT as a hub of student-driven innovation, where every challenge 
              becomes an opportunity for creative problem-solving and technological advancement.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">
                  Bridge the gap between student needs and administrative solutions
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">
                  Provide hands-on experience in modern web technologies
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">
                  Foster a culture of innovation and entrepreneurship
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass hover:border-primary/50 transition-all duration-300 text-center group">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-6">Join Our Team</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a developer, designer, or just passionate about 
            innovation, there's a place for you in CIDC. Together, we're building the future 
            of our campus.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg"
            >
              <span className="text-primary font-medium">Web Developers</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg"
            >
              <span className="text-primary font-medium">UI/UX Designers</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg"
            >
              <span className="text-primary font-medium">Content Writers</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}