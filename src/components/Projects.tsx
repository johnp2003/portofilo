import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, FolderGit2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

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
    title: 'EcoTrack',
    description: 'Carbon footprint tracker with AI-powered recommendations',
    longDescription: 'A comprehensive platform that helps users track and reduce their carbon footprint through personalized AI recommendations, community challenges, and real-time impact visualization.',
    tech: ['React', 'Node.js', 'MongoDB', 'OpenAI'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'DevCollab',
    description: 'Real-time collaborative coding platform for remote teams',
    longDescription: 'A real-time collaborative development environment featuring live code editing, integrated video chat, and AI-powered code review to enhance remote team productivity.',
    tech: ['Next.js', 'WebRTC', 'Socket.io', 'PostgreSQL'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'HealthHub',
    description: 'Telemedicine platform connecting patients with doctors',
    longDescription: 'An end-to-end telemedicine solution with secure video consultations, electronic health records, prescription management, and appointment scheduling.',
    tech: ['React Native', 'Firebase', 'Stripe', 'Twilio'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'TaskFlow AI',
    description: 'Smart project management with ML-based task prioritization',
    longDescription: 'An intelligent project management tool that uses machine learning to automatically prioritize tasks, predict project timelines, and optimize team workflows.',
    tech: ['Vue.js', 'Python', 'TensorFlow', 'Redis'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop',
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

          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block -translate-x-1/2" />

            <div className="space-y-16">
              {projects.map((project, index) => {
                const isLeft = index % 2 === 0;
                
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className={`relative grid md:grid-cols-2 gap-8 items-center ${
                      isLeft ? '' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background hidden md:block z-10 shadow-lg shadow-primary/50" />

                    {/* Content - Left or Right */}
                    <div className={`${isLeft ? 'md:col-start-1' : 'md:col-start-2'}`}>
                      <motion.div
                        whileHover={{ y: -8 }}
                        className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                      >
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        
                        <div className="p-6">
                          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">{project.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex gap-3">
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1"
                              onClick={() => setSelectedProject(project)}
                            >
                              View Details
                            </Button>
                            <Button size="sm" variant="ghost" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github size={16} />
                              </a>
                            </Button>
                            <Button size="sm" variant="ghost" asChild>
                              <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <ExternalLink size={16} />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className={`hidden md:block ${isLeft ? 'md:col-start-2' : 'md:col-start-1'}`} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <div className="space-y-4">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full aspect-video object-cover rounded-lg"
              />
              <p className="text-muted-foreground">{selectedProject.longDescription}</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3 pt-4">
                <Button asChild className="flex-1">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    View Code
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
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
