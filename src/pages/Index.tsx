import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <BackgroundGradientAnimation containerClassName="fixed inset-0 z-0" />
      <div className="relative z-10">
        <Navigation />
        <main id="main">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
