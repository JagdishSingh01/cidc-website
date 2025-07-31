import { motion } from 'framer-motion';
import { Mail, MessageCircle, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to innovate with us? Have a project idea or want to join our team? 
            We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="glass hover:border-primary/50 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Email Us</CardTitle>
                    <CardDescription>Get in touch via email</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-primary font-medium">cidc@ait.edu</p>
                <p className="text-sm text-muted-foreground mt-1">
                  We'll respond within 24 hours
                </p>
              </CardContent>
            </Card>

            <Card className="glass hover:border-primary/50 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Join Our Community</CardTitle>
                    <CardDescription>Connect with fellow innovators</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start border-primary/20 hover:bg-primary/10">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Discord Server
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-primary/20 hover:bg-primary/10">
                    <Users className="h-4 w-4 mr-2" />
                    WhatsApp Group
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="glass hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Office Hours</CardTitle>
                <CardDescription>Visit us on campus</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-primary">2:00 PM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-primary">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Computer Science Lab, Block A
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Have a question or want to propose a project? Fill out the form below.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        className="bg-accent/50 border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-accent/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      className="bg-accent/50 border-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your idea, question, or how you'd like to get involved..."
                      rows={6}
                      className="bg-accent/50 border-border focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 group">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-lg">How can I join CIDC?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Simply fill out our contact form or visit us during office hours. 
                  We welcome students from all departments who are passionate about innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-lg">Do I need programming experience?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Not necessarily! We have roles for designers, project managers, content creators, 
                  and more. If you want to learn programming, we'll help you get started.
                </p>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-lg">What projects can I work on?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We work on various projects from web development to AI applications. 
                  You can join existing projects or propose your own innovative ideas.
                </p>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-lg">Is there any fee to join?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No, CIDC membership is completely free. We believe in making innovation 
                  accessible to all students regardless of their financial background.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}