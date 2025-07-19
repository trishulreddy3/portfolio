import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, MapPin, Languages, Target, Heart, Zap } from 'lucide-react';

const About = () => {
  const education = [
    {
      level: 'B.Tech (Current)',
      institution: 'Vidya Jyoti Institute of Technology (VJIT)',
      grade: '7.73 CGPA',
      status: 'ongoing'
    },
    {
      level: '12th Grade',
      institution: 'Sri Chaitanya Junior College',
      grade: '7.5%',
      status: 'completed'
    },
    {
      level: '10th Grade',
      institution: 'Sri Chaitanya Techno School',
      grade: '9.8 GPA',
      status: 'completed'
    }
  ];

  const interests = [
    { name: 'Full-Stack Development', icon: '💻' },
    { name: 'Machine Learning', icon: '🤖' },
    { name: 'Mobile UI/UX', icon: '📱' },
    { name: 'Problem Solving', icon: '🧩' },
    { name: 'Open Source', icon: '🌟' },
    { name: 'Tech Innovation', icon: '⚡' }
  ];

  const personalInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: 'Hyderabad, India'
    },
    {
      icon: <Languages className="h-5 w-5" />,
      label: 'Languages',
      value: 'English, Telugu, Hindi'
    },
    {
      icon: <Target className="h-5 w-5" />,
      label: 'Current Role',
      value: 'B.Tech Student & Learning Developer'
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate learner on a journey to create innovative solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story & Info */}
          <div className="space-y-8 fade-in-up animate" style={{ animationDelay: '0.2s' }}>
            <Card className="animated-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-tech-text">My Journey</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a <span className="text-foreground font-semibold">B.Tech student</span> and 
                    <span className="gradient-text font-semibold"> aspiring full-stack developer</span> passionate about 
                    bridging the gap between innovative technology and real-world solutions.
                  </p>
                  <p>
                    My journey started with curiosity about how apps work, which led me to dive deep into 
                    <span className="text-accent font-semibold"> mobile development with Flutter</span>, 
                    web development with <span className="text-primary font-semibold">React</span>, and 
                    exploring the fascinating world of <span className="text-tech-orange font-semibold">AI and Machine Learning</span>.
                  </p>
                  <p>
                    I believe in <span className="text-foreground font-semibold">learning by building</span>. 
                    Each project I create is a step towards mastering new technologies and solving real problems. 
                    From farmer marketplaces to AI-powered photo organizers, I love creating solutions that matter.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Personal Information */}
            <Card className="animated-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-accent" />
                  Personal Info
                </h3>
                <div className="space-y-4">
                  {personalInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Education & Interests */}
          <div className="space-y-8 fade-in-up animate" style={{ animationDelay: '0.4s' }}>
            {/* Education */}
            <Card className="animated-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Education
                </h3>
                <div className="space-y-6">
                  {education.map((edu) => (
                    <div key={edu.level} className="relative pl-6 border-l-2 border-primary/30">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold">{edu.level}</h4>
                          <Badge 
                            variant={edu.status === 'ongoing' ? 'default' : 'secondary'}
                            className={edu.status === 'ongoing' ? 'bg-accent text-accent-foreground' : ''}
                          >
                            {edu.status === 'ongoing' ? 'Current' : 'Completed'}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{edu.institution}</p>
                        <p className="text-sm font-medium text-primary">{edu.grade}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interests & Passions */}
            <Card className="animated-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-accent" />
                  Interests & Passions
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest) => (
                    <div 
                      key={interest.name}
                      className="p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer group"
                    >
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                        {interest.icon}
                      </div>
                      <p className="text-sm font-medium">{interest.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Career Objective */}
            <Card className="animated-border bg-gradient-primary text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Career Objective</h3>
                <p className="leading-relaxed">
                  To become a skilled full-stack developer and AI enthusiast who creates 
                  innovative, scalable, and beautifully designed solutions that solve real-world 
                  problems and make a positive impact on people's lives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;