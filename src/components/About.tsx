import { motion } from 'framer-motion';
import { MapPin, Code2 } from 'lucide-react';

const About = () => {
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
                I’m a Software Engineering graduate who loves turning complex
                ideas into smooth, well-crafted applications. My passion lies in
                building software that’s functional, thoughtful, and makes a
                real impact.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I’m not coding, you’ll find me checking out new tech trends
                or diving into a few rounds of gaming.
              </p>

              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={20} className="text-primary" />
                <span>Kuala Lumpur, Malaysia</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center h-full"
            >
              <div className="border-l-2 border-primary/40 pl-6">
                <p className="text-xl md:text-2xl text-muted-foreground italic leading-relaxed">
                  Still learning, still building, still curious.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
