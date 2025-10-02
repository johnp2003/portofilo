import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: 'Software Engineering Intern',
    company: 'TechCorp Inc.',
    period: 'Jun 2024 - Aug 2024',
    highlights: [
      'Developed microservices architecture serving 100K+ daily users',
      'Reduced API response time by 40% through optimization',
    ],
  },
  {
    id: 2,
    role: 'Full-Stack Developer',
    company: 'StartupXYZ',
    period: 'Jan 2024 - May 2024',
    highlights: [
      'Built responsive web applications using React and Node.js',
      'Implemented CI/CD pipeline reducing deployment time by 60%',
    ],
  },
  {
    id: 3,
    role: 'Research Assistant',
    company: 'University AI Lab',
    period: 'Sep 2023 - Dec 2023',
    highlights: [
      'Contributed to machine learning research on NLP models',
      'Published findings in university research symposium',
    ],
  },
  {
    id: 4,
    role: 'Teaching Assistant',
    company: 'Computer Science Department',
    period: 'Jan 2023 - Aug 2023',
    highlights: [
      'Mentored 50+ students in Data Structures & Algorithms',
      'Created educational content improving student engagement by 30%',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-primary" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-0 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-1">{exp.role}</h3>
                        <p className="text-lg text-foreground">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
