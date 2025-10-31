import { motion } from 'framer-motion';
import { Code, Database, Cloud, Wrench } from 'lucide-react';

interface Skill {
  name: string;
  icon?: string;
  customImage?: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: <Code className="text-primary" size={24} />,
    skills: [
      {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
      {
        name: 'PHP',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      },
      {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        name: 'TypeScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
      {
        name: 'Java',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      },
      {
        name: 'C++',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      },
      {
        name: 'R',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
      },
      {
        name: 'Solidity',
        customImage: '/assets/solidity.svg',
      },
      {
        name: 'HTML',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      },
      {
        name: 'CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: <Database className="text-primary" size={24} />,
    skills: [
      {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'React Native',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'Next.js',
        customImage: '/assets/nextjs.png',
      },
      {
        name: 'Vue.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      },
      {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'Laravel',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
      },
      {
        name: 'Symfony',
        customImage: '/assets/symfony.jpg',
      },
      {
        name: 'ASP.NET',
        customImage: '/assets/aspnet.png',
      },
      {
        name: 'FastAPI',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      },
      {
        name: 'Prisma ORM',
        customImage: '/assets/prisma.jpg',
      },
    ],
  },
  {
    title: 'Cloud & Databases',
    icon: <Cloud className="text-primary" size={24} />,
    skills: [
      {
        name: 'AWS Lambda',
        customImage: '/assets/lambda.png',
      },
      {
        name: 'AWS S3',
        customImage: '/assets/s3.png',
      },
      {
        name: 'AWS SQS',
        customImage: '/assets/sqs.png',
      },
      {
        name: 'AWS DynamoDB',
        customImage: '/assets/dynamodb.png',
      },
      {
        name: 'AWS Elastic Beanstalk',
        customImage: '/assets/beanstalk.png',
      },
      {
        name: 'PostgreSQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      },
      {
        name: 'MySQL',
        customImage: '/assets/mysql.png',
      },
      {
        name: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
      {
        name: 'Supabase',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
      },
    ],
  },
  {
    title: 'Tools & Practices',
    icon: <Wrench className="text-primary" size={24} />,
    skills: [
      {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
      {
        name: 'REST APIs',
        customImage: '/assets/restapi.png',
      },
      {
        name: 'Postman',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
      },
      {
        name: 'Playwright',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg',
      },
      {
        name: 'Stripe',
        customImage: '/assets/stripe.png',
      },
      {
        name: 'Agile/Scrum',
        customImage: '/assets/scrum.png',
      },
      {
        name: 'Model Context Protocol',
        customImage: '/assets/mcp.png',
      },
    ],
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

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="group relative px-4 py-3 bg-secondary/50 rounded-xl text-sm border border-primary/20 hover:border-primary/50 hover:bg-secondary/70 transition-all duration-300 cursor-default shadow-sm hover:shadow-md hover:shadow-primary/10"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 flex items-center justify-center bg-background/80 rounded-lg p-1 group-hover:scale-110 transition-transform duration-300">
                          <img
                            src={skill.customImage || skill.icon}
                            alt={skill.name}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              // Fallback if image fails to load
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
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
