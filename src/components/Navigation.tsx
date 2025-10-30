import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { FloatingDock } from '@/components/ui/floating-dock';
import {
  IconUser,
  IconFolder,
  IconBriefcase,
  IconStar,
} from '@tabler/icons-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      title: 'About',
      icon: <IconUser className="w-6 h-6 text-black" stroke={2} />,
      href: '#about',
    },
    {
      title: 'Projects',
      icon: <IconFolder className="w-6 h-6 text-black" stroke={2} />,
      href: '#projects',
    },
    {
      title: 'Experience',
      icon: <IconBriefcase className="w-6 h-6 text-black" stroke={2} />,
      href: '#experience',
    },
    {
      title: 'Skills',
      icon: <IconStar className="w-6 h-6 text-black" stroke={2} />,
      href: '#skills',
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to content
      </a>
      <div className="fixed top-1/2 right-16 -translate-y-1/2 z-50 w-fit">
        <FloatingDock
          items={navItems}
          desktopClassName="flex-col h-auto gap-6 px-4 py-6 bg-white/40 border border-gray-200 shadow-lg backdrop-blur-lg"
          mobileClassName="flex-col"
        />
      </div>
    </>
  );
};

export default Navigation;
