import { Github, Linkedin, Mail, Heart, Code, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="h-5 w-5" />,
      url: 'https://github.com/trishulreddy3',
      color: 'hover:text-tech-purple'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      url: 'https://www.linkedin.com/in/gannaramtrishul-reddy-393439274/',
      color: 'hover:text-tech-blue'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="h-5 w-5" />,
      url: 'https://www.instagram.com/trishulreddi3/',
      color: 'hover:text-accent'
    },
    {
      name: 'Email',
      icon: <Mail className="h-5 w-5" />,
      url: 'mailto:gannaramtrishulreddy@gmail.com',
      color: 'hover:text-tech-green'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Branding */}
          <div className="text-center md:text-left">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
            >
              Trishul Reddy
            </button>
            <p className="text-muted-foreground mt-2">
              Learning Developer & AI Enthusiast
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-muted rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-glow ${social.color}`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Right - CTA */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground mb-3">
              Ready to collaborate?
            </p>
            <Button 
              className="btn-outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Gannaram Trishul Reddy.</span>
              <span>Made with</span>
              <Heart className="h-4 w-4 text-accent animate-pulse" />
              <span>and</span>
              <Code className="h-4 w-4 text-primary" />
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Built with React, TypeScript & Tailwind CSS</span>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;