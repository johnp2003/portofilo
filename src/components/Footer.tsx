import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Phone, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/johnp2003',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/johnpaulose23',
      label: 'LinkedIn',
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:johnpaulose1990@gmail.com',
      label: 'Email',
    },
    {
      icon: <Phone size={20} />,
      href: 'tel:+60122334272',
      label: 'Phone',
    },
    {
      icon: <FileText size={20} />,
      href: '/assets/JohnPaulose_Nov_CV.pdf',
      label: 'Resume',
    },
  ];

  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:text-primary hover:bg-primary/10"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="text-center space-y-2">
            {/* <p className="text-sm text-muted-foreground flex items-center gap-2 justify-center">
              Built with <Heart size={16} className="text-red-500" /> using
              Next.js, Tailwind CSS, Framer Motion & Spline
            </p> */}
            <p className="text-xs text-muted-foreground">
              © 2025 John Paulose. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
