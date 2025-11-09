import { motion } from 'framer-motion';
import { Github, Mail, FileText, Phone, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import heroImage from '@/assets/hero-coding.jpg';
import { useEffect, useRef, useState, useMemo } from 'react';
import myPortrait from '@/assets/my_portrait.jpg';

// Helper to get random position within a bounding box
const getRandomPosition = (maxX: number, maxY: number) => ({
  x: Math.random() * maxX - maxX / 2,
  y: Math.random() * maxY - maxY / 2,
});

const CodeParticle = ({
  delay,
  area = 200,
}: {
  delay: number;
  area?: number;
}) => {
  const symbols = useMemo(() => ['{', '}', '<', '>', '/', '[', ']'], []);
  const [symbol, setSymbol] = useState(
    () => symbols[Math.floor(Math.random() * symbols.length)]
  );
  const [pos, setPos] = useState(() => getRandomPosition(area, area));
  const [target, setTarget] = useState(() => getRandomPosition(area, area));

  useEffect(() => {
    const interval = setInterval(() => {
      setSymbol(symbols[Math.floor(Math.random() * symbols.length)]);
      setPos(target);
      setTarget(getRandomPosition(area, area));
    }, 2500 + delay * 1000);
    return () => clearInterval(interval);
  }, [target, delay, area, symbols]);

  return (
    <motion.span
      initial={{ opacity: 0, x: pos.x, y: pos.y }}
      animate={{
        opacity: [0, 1, 1, 0],
        x: [pos.x, target.x],
        y: [pos.y, target.y],
      }}
      transition={{
        duration: 2.5,
        delay,
        repeat: Infinity,
        repeatDelay: 1.5,
      }}
      className="absolute text-primary text-xl font-mono pointer-events-none select-none"
      aria-hidden="true"
      style={{ left: '50%', top: '50%' }}
    >
      {symbol}
    </motion.span>
  );
};

const Hero = () => {
  const typedText = useTypingEffect({
    words: ['Software Engineer', 'Full-Stack Developer', 'Mobile Developer'],
  });
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero Background Image */}
      {/* <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Developer coding at desk"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      </div> */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Left side: text and buttons */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm <span>John Paulose</span>
            </motion.h1>
            <div className="h-20 mb-8 flex items-center">
              <span className="text-2xl md:text-3xl text-muted-foreground font-light">
                <span className="text-primary font-mono">&gt;</span> {typedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className="inline-block w-0.5 h-8 bg-primary ml-1"
                />
              </span>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Not all heroes wear capes; some just push to GitHub
            </p>
            <div className="flex flex-wrap gap-6 mt-2">
              <div className="group relative">
                <a
                  href="tel:+60122334272"
                  className="p-3 rounded transition-colors"
                  aria-label="Phone"
                >
                  <Phone
                    size={32}
                    className="text-primary group-hover:scale-110 transition-transform"
                  />
                </a>
                <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 mt-2 w-max px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity z-20 whitespace-nowrap">
                  +60 12-233 4272
                </span>
              </div>
              <div className="group relative">
                <a
                  href="mailto:johnpaulose1990@gmail.com"
                  className="p-3 rounded transition-colors"
                  aria-label="Email"
                >
                  <Mail
                    size={32}
                    className="text-primary group-hover:scale-110 transition-transform"
                  />
                </a>
                <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 mt-2 w-max px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity z-20 whitespace-nowrap">
                  johnpaulose1990@gmail.com
                </span>
              </div>
              <div className="group relative">
                <a
                  href="https://www.linkedin.com/in/johnpaulose23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin
                    size={32}
                    className="text-primary group-hover:scale-110 transition-transform"
                  />
                </a>
                <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 mt-2 w-max px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity z-20 whitespace-nowrap">
                  LinkedIn
                </span>
              </div>
              <div className="group relative">
                <a
                  href="/assets/JohnPaulose_Nov_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded transition-colors"
                  aria-label="Resume"
                >
                  <FileText
                    size={32}
                    className="text-primary group-hover:scale-110 transition-transform"
                  />
                </a>
                <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 mt-2 w-max px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity z-20 whitespace-nowrap">
                  Resume
                </span>
              </div>
              <div className="group relative">
                <a
                  href="https://github.com/johnp2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded transition-colors"
                  aria-label="GitHub"
                >
                  <Github
                    size={32}
                    className="text-primary group-hover:scale-110 transition-transform"
                  />
                </a>
                <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 mt-2 w-max px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity z-20 whitespace-nowrap">
                  GitHub
                </span>
              </div>
            </div>
          </motion.div>{' '}
          <div className="relative">
            <img
              src={myPortrait}
              alt="My portrait"
              className="mx-auto mb-6 -mt-8 md:mt-0 w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full shadow-lg border-4 border-primary/30 bg-background"
            />
            {/* Code particles - moved to right side */}
            <div className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
              {Array.from({ length: 12 }).map((_, i) => (
                <CodeParticle key={i} delay={i * 0.2} area={320} />
              ))}
            </div>
            {/* Placeholder for additional 3D elements or graphics */}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
