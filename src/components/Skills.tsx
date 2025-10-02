import { motion } from 'framer-motion';
import { Code, Database, Cloud, Wrench } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: <Code className="text-primary" size={24} />,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Redux'],
  },
  {
    title: 'Backend',
    icon: <Database className="text-primary" size={24} />,
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
  },
  {
    title: 'Cloud & DevOps',
    icon: <Cloud className="text-primary" size={24} />,
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Terraform'],
  },
  {
    title: 'Tools & Others',
    icon: <Wrench className="text-primary" size={24} />,
    skills: ['Git', 'Figma', 'Jest', 'Webpack', 'Linux', 'Agile/Scrum'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <Code className="text-primary" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold">Skills</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-secondary/50 rounded-full text-sm border border-primary/20 hover:border-primary/50 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
