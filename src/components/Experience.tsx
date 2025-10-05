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
    role: 'Full Stack Developer Intern',
    company: 'A Serious AI',
    period: 'Aug 2024 - Dec 2024',
    highlights: [
      'Contributed to building SuDu.AI, a revolutionary AI-powered ERP system, while actively participating in Agile sprints as a full-stack developer using Node.js and Vue.js.',
      'Developed and optimized ERP modules such as Sales Invoice, Purchase Request, Sales Return, WM Inventory, and Stock Management.',
      'Worked closely with cross-functional teams to enhance database schemas, UI components, tax calculations, credit limit validations, and historical data management to improve system efficiency.',
      'Resolved over 60% of total bugs while doing sprints contributing to system stability.',
    ],
  },
  {
    id: 2,
    role: 'Software Engineer Intern',
    company: 'Shopper 360',
    period: 'Jul 2023 - Jul 2024',
    highlights: [
      'Assisted in building an audit management system for Shell using Symfony, DevExtreme, and Microsoft APIs.',
      'Led SharePoint integration, developing functions for filtering and retrieving image links, showcasing adeptness in external data handling and process optimization.',
      'Optimized data retrieval queries, reducing load times by 20% through efficient use of Microsoft APIs and SharePoint data structures.',
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

          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block -translate-x-1/2" />

            <div className="space-y-16">
              {experiences.map((exp, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative grid md:grid-cols-2 gap-8 items-center ${
                      isLeft ? '' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background hidden md:block z-10 shadow-lg shadow-primary/50" />

                    {/* Content - Left or Right */}
                    <div
                      className={`${
                        isLeft ? 'md:col-start-1' : 'md:col-start-2'
                      }`}
                    >
                      <motion.div
                        whileHover={{ y: -8, scale: 1.03 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                      >
                        <div className="p-6">
                          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors text-primary">
                            {exp.role}
                          </h3>
                          <p className="text-lg text-foreground mb-2">
                            {exp.company}
                          </p>
                          <div className="flex items-center gap-2 text-muted-foreground mb-4">
                            <Calendar size={16} />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                          <ul className="space-y-2">
                            {exp.highlights.map((highlight, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-muted-foreground"
                              >
                                <span className="text-primary mt-1">▹</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </div>
                    {/* Spacer for opposite side */}
                    <div
                      className={`hidden md:block ${
                        isLeft ? 'md:col-start-2' : 'md:col-start-1'
                      }`}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
