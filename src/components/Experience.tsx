import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award, Code } from 'lucide-react';
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  highlights: string[];
  type: 'work' | 'hackathon';
  award?: string;
  techStack?: string;
  images?: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 3,
    role: 'DeNate',
    company: 'AI-Driven Blockchain-based Charity Donation Platform',
    period: 'Varsity Hackathon USM 2025 (April 2025)',
    type: 'hackathon',
    award: 'Excellence in Bonus Achievement (Fintech and Blockchain)',
    techStack:
      'Next.js, Solidity, Scroll, Pinata, MongoDB, Chainlink Automation, The Graph, Gemini API, Deepseek R1 via OpenRouter',
    highlights: [
      'A decentralized platform revolutionizing charitable giving through smart contracts for transparency and efficiency.',
      'Features include gamification through NFTs, automated fund distribution and AI-powered forecasting and chatbots.',
    ],
    images: [
      '/assets/vhack_1.jpg',
      '/assets/vhack_3.jpg',
      '/assets/vhack_4.JPG',
      '/assets/vhack2.jpg',
    ],
  },
  {
    id: 4,
    role: 'MemeFist',
    company: 'Decentralized Meme Battle Platform',
    period: 'EthUprising Hackathon 2025 (March 2025)',
    type: 'hackathon',
    award: '1st Runner-Up in The Graph track',
    techStack:
      'Next.js, Solidity, Scroll, Pinata, Chainlink Automation, The Graph',
    highlights: [
      'A Web3 platform for community-driven meme competitions, where users upload memes, compete in categories (e.g., Crypto, Gaming), gather upvotes, and win mintable NFTs for monetization in an integrated marketplace.',
    ],
    images: [
      '/assets/eth_uprising_1.jpg',
      '/assets/eth_uprising_3.jpg',
      '/assets/eth_uprising_2.jpg',
    ],
  },
  {
    id: 1,
    role: 'Full Stack Developer Intern',
    company: 'A Serious AI',
    period: 'Aug 2024 - Dec 2024',
    type: 'work',
    highlights: [
      'Contributed to building SuDu.AI, a revolutionary AI-powered ERP system, while actively participating in Agile sprints as a full-stack developer using Node.js and Vue.js.',
      'Developed and optimized ERP modules such as Sales Invoice, Purchase Request, Sales Return, WM Inventory, and Stock Management.',
      'Worked closely with cross-functional teams to enhance database schemas, UI components, tax calculations, credit limit validations, and historical data management to improve system efficiency.',
      'Resolved over 60% of total bugs while doing sprints contributing to system stability.',
    ],
    images: ['/assets/aserious_1.jpg', '/assets/aserious_2.jpg'],
  },
  {
    id: 2,
    role: 'Software Engineer Intern',
    company: 'Shopper 360',
    period: 'Jul 2023 - Jul 2024',
    type: 'work',
    highlights: [
      'Assisted in building an audit management system for Shell using Symfony, DevExtreme, and Microsoft APIs.',
      'Led SharePoint integration, developing functions for filtering and retrieving image links, showcasing adeptness in external data handling and process optimization.',
      'Optimized data retrieval queries, reducing load times by 20% through efficient use of Microsoft APIs and SharePoint data structures.',
    ],
    images: ['/assets/shopper360_1.JPG', '/assets/shopper360_2.jpg'],
  },
];

const Experience = () => {
  const [selectedImage, setSelectedImage] = useState<{
    images: string[];
    currentIndex: number;
  } | null>(null);

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
                    <div
                      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 ${
                        exp.type === 'hackathon' ? 'bg-amber-500' : 'bg-primary'
                      } rounded-full border-4 border-background hidden md:block z-10 shadow-lg ${
                        exp.type === 'hackathon'
                          ? 'shadow-amber-500/50'
                          : 'shadow-primary/50'
                      }`}
                    />

                    {/* Content - Left or Right */}
                    <div
                      className={`${
                        isLeft ? 'md:col-start-1' : 'md:col-start-2'
                      }`}
                    >
                      <div className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                        <div className="p-6">
                          {/* Header with icon */}
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors text-primary flex-1">
                              {exp.type === 'hackathon' ? exp.period : exp.role}
                            </h3>
                            {exp.type === 'hackathon' && (
                              <Award
                                className="text-amber-500 flex-shrink-0 ml-2"
                                size={24}
                              />
                            )}
                          </div>
                          <p className="text-lg text-foreground mb-2">
                            {exp.type === 'hackathon' ? exp.role : exp.company}
                          </p>
                          {exp.type !== 'hackathon' && (
                            <div className="flex items-center gap-2 text-muted-foreground mb-4">
                              <Calendar size={16} />
                              <span className="text-sm">{exp.period}</span>
                            </div>
                          )}

                          {/* Award badge */}
                          {exp.award && (
                            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full">
                              <Award size={14} className="text-amber-500" />
                              <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
                                {exp.award}
                              </span>
                            </div>
                          )}

                          {/* Highlights */}
                          <ul className="space-y-2 mb-4">
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

                          {/* Tech Stack */}
                          {exp.techStack && (
                            <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                              <div className="flex items-center gap-2 mb-2">
                                <Code size={16} className="text-primary" />
                                <span className="text-sm font-semibold">
                                  Tech Stack:
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {exp.techStack}
                              </p>
                            </div>
                          )}

                          {/* Images Gallery */}
                          {exp.images && exp.images.length > 0 && (
                            <div className="mt-4">
                              <Carousel className="w-full">
                                <CarouselContent>
                                  {exp.images.map((image, idx) => (
                                    <CarouselItem key={idx}>
                                      <div
                                        className="relative aspect-video rounded-lg overflow-hidden cursor-pointer border border-border hover:border-primary/50 transition-colors"
                                        onClick={() =>
                                          setSelectedImage({
                                            images: exp.images!,
                                            currentIndex: idx,
                                          })
                                        }
                                      >
                                        <img
                                          src={image}
                                          alt={`${exp.role} screenshot ${
                                            idx + 1
                                          }`}
                                          className="w-full h-full object-cover"
                                        />
                                      </div>
                                    </CarouselItem>
                                  ))}
                                </CarouselContent>
                                {exp.images.length > 1 && (
                                  <>
                                    <CarouselPrevious className="left-2" />
                                    <CarouselNext className="right-2" />
                                  </>
                                )}
                              </Carousel>
                            </div>
                          )}
                        </div>
                      </div>
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

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={selectedImage.images[selectedImage.currentIndex]}
              alt="Project screenshot"
              className="w-full h-auto rounded-lg"
            />
            {selectedImage.images.length > 1 && (
              <div className="flex items-center justify-center gap-4 mt-4">
                <button
                  onClick={() =>
                    setSelectedImage({
                      ...selectedImage,
                      currentIndex:
                        selectedImage.currentIndex === 0
                          ? selectedImage.images.length - 1
                          : selectedImage.currentIndex - 1,
                    })
                  }
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                >
                  Previous
                </button>
                <span className="text-white">
                  {selectedImage.currentIndex + 1} /{' '}
                  {selectedImage.images.length}
                </span>
                <button
                  onClick={() =>
                    setSelectedImage({
                      ...selectedImage,
                      currentIndex:
                        selectedImage.currentIndex ===
                        selectedImage.images.length - 1
                          ? 0
                          : selectedImage.currentIndex + 1,
                    })
                  }
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Experience;
