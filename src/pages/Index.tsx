import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import Starfield from '@/components/Starfield';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Starfield />
      <Navigation />
      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
