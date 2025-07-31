import { motion } from 'framer-motion';
import { Calendar, MapPin, Trophy, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const pastEvents = [
  {
    title: 'DesignHack 2k25',
    description: 'A 48-hour design and development hackathon bringing together creative minds to solve real-world problems',
    date: 'March 15-17, 2025',
    location: 'AIT Campus',
    participants: '150+ students',
    prizes: '₹50,000 total',
    status: 'Completed',
    highlights: [
      '20+ innovative project submissions',
      'Industry mentors and judges',
      'Networking with tech professionals',
      'Winner projects showcased to industry partners'
    ]
  }
];

const upcomingEvents = [
  {
    title: 'AIT Placements Website Redesign',
    description: 'Collaborative design workshop to redesign the placement portal for better user experience',
    date: 'Coming Soon',
    location: 'Computer Lab',
    participants: 'Open for all',
    duration: '2 days',
    status: 'Planning'
  },
  {
    title: 'Library Website Redesign',
    description: 'Student-led initiative to modernize the library digital platform with improved accessibility',
    date: 'TBA',
    location: 'Library & Tech Hub',
    participants: 'Open for all',
    duration: '3 days',
    status: 'Planning'
  }
];

export function Events() {
  return (
    <section id="events" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bringing together creative minds through hackathons, workshops, and collaborative projects.
          </p>
        </motion.div>

        {/* Past Events */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 flex items-center gap-2"
          >
            <div className="w-1 h-6 bg-primary rounded-full" />
            Past Events
          </motion.h3>
          
          {pastEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-2xl">{event.title}</CardTitle>
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                          {event.status}
                        </Badge>
                      </div>
                      <CardDescription className="text-lg">
                        {event.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">{event.participants}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-primary" />
                      <span className="text-sm">{event.prizes}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Event Highlights:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {event.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Events */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 flex items-center gap-2"
          >
            <div className="w-1 h-6 bg-primary rounded-full" />
            Upcoming Events
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass hover:border-primary/50 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {event.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {event.description}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                        {event.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm">{event.participants}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm">{event.duration}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Get Notified
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