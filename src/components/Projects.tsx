import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, FolderGit2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'DeNate',
    description:
      'AI-driven blockchain platform for transparent, gamified charity donations.',
    longDescription:
      'A decentralized platform revolutionizing charitable giving through smart contracts for transparency and efficiency. Features include gamification through NFTs, automated fund distribution, and AI-powered forecasting and chatbots. Award: Excellence in Bonus Achievement (Fintech and Blockchain) for Varsity Hackathon USM 2025.',
    tech: [
      'Next.js',
      'Solidity',
      'Scroll',
      'Pinata',
      'MongoDB',
      'Chainlink Automation',
      'The Graph',
      'Gemini API',
    ],
    github: 'https://github.com/ivanwong1223/DeNate',
    live: 'https://de-nate.vercel.app/',
    image: '/assets/denate.JPG',
  },
  {
    id: 2,
    title: 'MemeFist',
    description:
      'Decentralized Web3 platform for meme battles and NFT rewards.',
    longDescription:
      'A Web3 platform for community-driven meme competitions, where users upload memes, compete in categories, gather upvotes, and win mintable NFTs for monetization in an integrated marketplace. Award: 1st Runner-Up in The Graph track at EthUprising Hackathon 2025.',
    tech: [
      'Next.js',
      'Solidity',
      'Scroll',
      'Pinata',
      'Chainlink Automation',
      'The Graph',
    ],
    github: 'https://github.com/johnp2003/MemeFist-EthUprising',
    live: 'https://meme-fist-eth-uprising.vercel.app/',
    image: '/assets/memefist.JPG',
  },
  {
    id: 3,
    title: 'deShip',
    description:
      'Decentralized platform for fair, accountable, and bias-free scholarships.',
    longDescription:
      'A decentralized web platform that ensures fairness, accountability, and on-time scholarships to students while also eliminating demographic bias using zkProofs.',
    tech: [
      'Next.js',
      'Supabase',
      'Hardhat',
      'Chainlink Automation',
      'The Graph',
      'Privy Auth',
      'zKProof',
    ],
    github: 'https://github.com/JohnsonChin1009/DeShip',
    live: 'https://de-ship.vercel.app/',
    image: '/assets/deship.JPG',
  },
  {
    id: 4,
    title: 'Couponly',
    description:
      'AI-powered smart coupon platform with NFC sharing and recommendations.',
    longDescription:
      'A comprehensive smart coupon management system with AI-driven mobile app, web scraper, admin-vendor platform, and AI-powered recommendations. Features include semantic search, personalized recommendations, and OCR coupon scanning.',
    tech: [
      'React Native',
      'Next.js',
      'Supabase',
      'FastAPI',
      'LightFM',
      'Python',
      'OneSignal',
      'Playwright',
    ],
    github: 'https://github.com/johnp2003/couponly',
    live: 'https://github.com/johnp2003/couponly',
    image: '/assets/couponly.JPG',
  },
  {
    id: 5,
    title: 'AlzGuard',
    description:
      'Cloud-based system for monitoring and locating missing Alzheimer’s patients.',
    longDescription:
      'A cloud-based platform to locate missing Alzheimer’s patients with real-time alerts, GPS tracking, and coordination features for caregivers, volunteers, and healthcare providers deployed on Elastic Beanstalk.',
    tech: [
      'Next.js',
      'AWS DynamoDB',
      'AWS Lambda',
      'AWS S3',
      'AWS SQS',
      'AWS Elastic Beanstalk',
    ],
    github: 'https://github.com/Aidenthien/AlzGuard',
    live: 'https://github.com/Aidenthien/AlzGuard',
    image: '/assets/alzguard.JPG',
  },
  {
    id: 6,
    title: 'YoYo Furniture',
    description:
      'Desktop app for inventory and sales management in the furniture industry.',
    longDescription:
      'Developed a desktop application using pure OOP concepts and Swing GUI for inventory and sales management in the furniture industry.',
    tech: ['Apache NetBeans', 'Java', 'Swing GUI', 'Pure OOP'],
    github: 'https://github.com/johnp2003/YoYo-Furniture',
    live: 'https://github.com/johnp2003/YoYo-Furniture',
    image: '/assets/yoyo.JPG',
  },
  {
    id: 7,
    title: 'Purrfect Care',
    description: 'Web platform for multi-role appointment scheduling.',
    longDescription:
      'Created a web platform for scheduling appointments with up to 4 roles.',
    tech: ['PHP', 'MySQL'],
    github: 'https://github.com/johnp2003/Purrfect-Care-A-Petcare-System',
    live: 'https://github.com/johnp2003/Purrfect-Care-A-Petcare-System',
    image: '/assets/purrfect_care.JPG',
  },
  {
    id: 8,
    title: 'CaptifyAI',
    description:
      'SaaS for AI-powered caption generation with authentication and payments.',
    longDescription:
      'Built a SaaS application for AI-powered caption generation with user authentication and payment integration.',
    tech: [
      'Next.js',
      'Clerk Auth',
      'Google Gemini AI',
      'Drizzle ORM',
      'Stripe',
    ],
    github: 'https://github.com/johnp2003/captify-ai',
    live: 'https://captify-ai.vercel.app/',
    image: '/assets/captify_ai.JPG',
  },
  {
    id: 9,
    title: 'File Management App',
    description: 'Web application for file organization and management.',
    longDescription: 'A web application for file organization and management.',
    tech: ['Vue.js', 'Laravel', 'phpMyAdmin'],
    github: 'https://github.com/johnp2003/File-Management-System',
    live: 'https://github.com/johnp2003/File-Management-System',
    image: '/assets/file_management.JPG',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <FolderGit2 className="text-primary" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
          </div>

          {/* Card Grid */}
          <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CardContainer className="inter-var" containerClassName="py-0">
                  <CardBody className="bg-card relative group/card border border-border hover:border-primary/50 rounded-xl p-6 h-[32rem] w-full flex flex-col">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-foreground mb-2"
                    >
                      {project.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-muted-foreground text-sm mb-4 line-clamp-2 min-h-[2.5rem]"
                    >
                      {project.description}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mb-4 h-56">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain rounded-lg group-hover/card:shadow-xl bg-black"
                      />
                    </CardItem>
                    <div className="flex-1 flex flex-col justify-end">
                      <CardItem translateZ="50" className="mb-4 min-h-[3.5rem]">
                        <div className="flex flex-wrap gap-2 line-clamp-3 overflow-hidden">
                          {project.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardItem>
                    </div>
                    <div className="flex gap-3 mt-auto">
                      <CardItem
                        translateZ={20}
                        as={Button}
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        onClick={() => setSelectedProject(project)}
                      >
                        View Details
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as={Button}
                        size="sm"
                        variant="ghost"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} />
                        </a>
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as={Button}
                        size="sm"
                        variant="ghost"
                        asChild
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <div className="space-y-4">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full aspect-video object-cover rounded-lg"
              />
              <p className="text-muted-foreground">
                {selectedProject.longDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3 pt-4">
                <Button asChild className="flex-1">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
