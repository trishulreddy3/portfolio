import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Play, Star, Users, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Farmer-Buyer Marketplace',
      description: 'Revolutionary platform connecting farmers directly with buyers, eliminating middlemen and ensuring fair prices for agricultural products.',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop',
      tags: ['Flutter', 'Firebase', 'Authentication', 'Real-time DB'],
      features: ['Direct farmer-buyer connection', 'Modern animated UI', 'Profile management', 'Secure transactions'],
      status: 'Completed',
      github: '#',
      demo: '#',
      impact: '200+ Farmers Connected'
    },
    {
      title: 'WhatsApp Clone Chat App',
      description: 'Feature-rich messaging application with real-time chat, audio/video calls, file sharing, and modern UI animations.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop',
      tags: ['Flutter', 'Firebase', 'Zegocloud', 'Pusher', 'Google Auth'],
      features: ['Real-time messaging', 'Video/Audio calls', 'File sharing', 'Google authentication'],
      status: 'Completed',
      github: '#',
      demo: '#',
      impact: 'Full WhatsApp Features'
    },
    {
      title: 'Flutter Music Player',
      description: 'Beautiful music player with local playback, album creation, metadata extraction, and smooth animations.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      tags: ['Flutter', 'Local Storage', 'Metadata', 'Animations'],
      features: ['Local music playback', 'Album art extraction', 'Shuffle/Repeat modes', 'Favorite songs'],
      status: 'Completed',
      github: '#',
      demo: '#',
      impact: 'Rich Music Experience'
    },
    {
      title: 'Face Grouping & Album Organizer',
      description: 'AI-powered photo organizer using facial recognition to automatically group and organize photos by people.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      tags: ['Python', 'DeepFace', 'DBSCAN', 'Machine Learning', 'Computer Vision'],
      features: ['Facial recognition', 'Auto-grouping', 'Folder organization', 'Web interface'],
      status: 'In Development',
      github: '#',
      demo: '#',
      impact: 'Smart Photo Organization'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-accent text-accent-foreground';
      case 'In Development': return 'bg-primary text-primary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-tech-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions that bridge technology and real-world problems.
            Each project represents a journey of learning, creativity, and impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="project-card overflow-hidden fade-in-up animate"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="h-4 w-4" />
                    <span>{project.impact}</span>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="tech-item">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Zap className="h-3 w-3 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button className="btn-hero flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="btn-outline">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up animate" style={{ animationDelay: '0.8s' }}>
          <Card className="animated-border p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">More Projects Coming Soon!</h3>
            <p className="text-muted-foreground mb-6">
              I'm constantly working on new projects and learning new technologies. 
              Check out my GitHub for the latest updates and contributions.
            </p>
            <Button className="btn-hero px-8 py-3">
              <Github className="mr-2 h-5 w-5" />
              View All on GitHub
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;