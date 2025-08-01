import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Star, GraduationCap, UserCheck } from 'lucide-react';

const leadership = [
  {
    name: 'Dr. Faculty Incharge',
    role: 'Faculty In-charge',
    department: 'Computer Science',
    image: '/Secretary/Ebha_mollick.jpg',
    type: 'faculty'
  },
  {
    name: 'Jagdish Singh',
    role: 'Secretary',
    year: 'Third Year',
    image: '/Secretary/jagdish_photo.jpg',
    type: 'secretary'
  },
  {
    name: 'Ebha Mollick',
    role: 'Secretary',
    year: 'Third Year',
    image: '/Secretary/Ebha_mollick.jpg',
    type: 'secretary'
  }
];

const members = {
  seniors: [
    { name: 'Senior Member 1', year: 'Third Year', specialization: 'Full Stack Development' },
    { name: 'Senior Member 2', year: 'Third Year', specialization: 'UI/UX Design' },
    { name: 'Senior Member 3', year: 'Third Year', specialization: 'AI/ML' },
    { name: 'Senior Member 4', year: 'Third Year', specialization: 'Web Development' }
  ],
  juniors: [
    { name: 'Junior Member 1', year: 'Second Year', specialization: 'Frontend Development' },
    { name: 'Junior Member 2', year: 'Second Year', specialization: 'Backend Development' },
    { name: 'Junior Member 3', year: 'First Year', specialization: 'Web Design' },
    { name: 'Junior Member 4', year: 'First Year', specialization: 'Content Writing' }
  ],
  alumni: [
    { name: 'Alumni 1', year: 'Graduated 2024', specialization: 'Software Engineer at Tech Corp' },
    { name: 'Alumni 2', year: 'Graduated 2023', specialization: 'Product Manager at Startup' },
    { name: 'Alumni 3', year: 'Graduated 2023', specialization: 'Frontend Developer at MNC' }
  ]
};

export function Members() {
  return (
    <section id="members" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the passionate individuals driving innovation at CIDC, from leadership
            to active members and our accomplished alumni.
          </p>
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8">Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass hover:border-primary/50 transition-all duration-300 text-center group">
                  <CardContent className="pt-6">
                    {/* Updated to use image or icon */}
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-primary/10 group-hover:bg-primary/20 transition-colors rounded-[5%]">
                        {leader.image ? (
                          <img
                            src={leader.image}
                            alt={leader.name}
                            className="h-auto w-40 object-cover border-primary"
                            style={{ borderRadius: '5%' }}
                          />
                        ) : (
                          <img
                            src="/default-profile.png" // Place a default-profile.png in your public folder
                            alt="Default Profile"
                            className="h-32 w-32 object-cover rounded-full border-4 border-primary mx-auto"
                          />
                        )}
                      </div>
                    </div>
                    <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {leader.name}
                    </h4>
                    <Badge variant="secondary" className="mb-2">
                      {leader.role}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      {leader.department || leader.year}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Members Sections */}
        <div className="space-y-16">
          {/* Seniors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Star className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Senior Members</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {members.seniors.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-1">{member.name}</h4>
                      <p className="text-sm text-primary mb-1">{member.year}</p>
                      <p className="text-xs text-muted-foreground">{member.specialization}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Juniors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Users className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Junior Members</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {members.juniors.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-1">{member.name}</h4>
                      <p className="text-sm text-primary mb-1">{member.year}</p>
                      <p className="text-xs text-muted-foreground">{member.specialization}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Alumni */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Alumni</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {members.alumni.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-1">{member.name}</h4>
                      <p className="text-sm text-primary mb-1">{member.year}</p>
                      <p className="text-xs text-muted-foreground">{member.specialization}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Join Us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="glass border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Want to Join Our Team?</h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for passionate students who want to make a difference
                through technology and innovation.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors"
              >
                Apply to Join CIDC
              </motion.button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}