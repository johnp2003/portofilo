import { motion } from 'framer-motion';
import { Github, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import heroImage from '@/assets/hero-coding.jpg';
import { useEffect, useRef, useState, useMemo } from 'react';

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Hero Background Image removed */}
      <div className="container mx-auto px-6 py-20 relative z-10">
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
              Crafting elegant solutions to complex problems through clean code
              and innovative design.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="relative group overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <Mail size={20} />
                    Contact Me
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-primary/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:border-primary group"
                >
                  <span className="flex items-center gap-2">
                    <FileText size={20} />
                    Resume
                  </span>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="ghost"
                  className="hover:text-primary"
                >
                  <Github size={20} />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <div className="hidden lg:block relative">
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
