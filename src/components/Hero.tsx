import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, Code, Sparkles } from 'lucide-react';
import profileHero from '@/assets/profile-hero.jpg';
import codingWorkspace from '@/assets/coding-workspace.jpg';
import geometricAnimation from '@/assets/geometric-animation.jpg';
import aiNetwork from '@/assets/ai-network.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Learning Student & AI Enthusiast';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Floating elements with animated images */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-24 rounded-lg overflow-hidden opacity-20 animate-float">
          <img src={codingWorkspace} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-40 right-20 w-28 h-28 rounded-full overflow-hidden opacity-30 animate-pulse delay-1000">
          <img src={geometricAnimation} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-20 left-20 w-36 h-24 rounded-lg overflow-hidden opacity-25 animate-bounce-slow">
          <img src={aiNetwork} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-primary rounded-full opacity-30 float-animation"></div>
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-accent rounded-full opacity-20 float-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-tech-blue rounded-full opacity-40 float-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8 fade-in-up animate">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="gradient-text">Gannaram</span>
              <br />
              <span className="text-foreground">Trishul Reddy</span>
            </h1>
            
            <div className="h-12 flex items-center justify-center lg:justify-start">
              <span className="text-xl lg:text-2xl text-muted-foreground">
                {text}
                <span className={`border-r-2 border-primary ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
                  |
                </span>
              </span>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl">
              B.Tech Student passionate about creating innovative solutions through 
              <span className="gradient-tech-text font-semibold"> full-stack development</span>,
              <span className="gradient-text font-semibold"> machine learning</span>, and
              <span className="text-accent font-semibold"> modern UI/UX design</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              className="btn-hero px-8 py-6 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline px-8 py-6 text-lg"
              onClick={() => scrollToSection('projects')}
            >
              <Code className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center lg:justify-start">
            <a href="https://github.com/gannaramtrishulreddy" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-card border border-border rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-glow">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/gannaram-trishul-reddy" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-card border border-border rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-glow">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:gannaramtrishulreddy@gmail.com"
               className="p-3 bg-card border border-border rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-glow">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="relative flex justify-center lg:justify-end fade-in-up animate" style={{ animationDelay: '0.3s' }}>
          <div className="relative">
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 scale-110"></div>
            
            {/* Profile image */}
            <div className="profile-photo relative z-10 w-80 h-80 lg:w-96 lg:h-96">
              <img 
                src={profileHero} 
                alt="Trishul Reddy"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full"></div>
              
              {/* Floating tech icons */}
              <div className="absolute -top-4 -right-4 p-3 bg-card border border-border rounded-full shadow-lg animate-bounce">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 p-3 bg-card border border-border rounded-full shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;