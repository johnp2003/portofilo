import { motion } from 'framer-motion';
import { MapPin, Code2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const technologies = [
    'React.js',
    'TypeScript',
    'Node.js',
    'Python',
    'Next.js',
    'Vue.js',
    'PostgreSQL',
    'AWS',
    'Laravel',
    'Symfony',
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="text-primary" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Recent BSc (Hons) Software Engineering graduate with hands-on
                experience in full-stack development, blockchain development,
                and AI integration through internships and projects. Skilled in
                web technologies, database management, and agile methodologies
                to build scalable applications. Passionate about leveraging
                programming expertise to innovate and enhance software systems
                in collaborative environments.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or diving into the latest
                trends in AI and machine learning.
              </p>

              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={20} className="text-primary" />
                <span>Kuala Lumpur, Malaysia</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Technologies I Work With
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Badge
                      variant="outline"
                      className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-colors cursor-default text-base py-2 px-4"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
