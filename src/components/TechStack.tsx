import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Code, 
  Smartphone, 
  Database, 
  Cloud, 
  Palette, 
  Brain,
  Terminal,
  Layers,
  Cpu,
  GitBranch,
  Zap,
  Globe
} from 'lucide-react';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const techCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: <Code className="h-6 w-6" />,
      color: 'tech-blue',
      skills: [
        { name: 'React.js', level: 90, icon: '⚛️' },
        { name: 'Tailwind CSS', level: 85, icon: '🎨' },
        { name: 'Flutter', level: 80, icon: '📱' },
        { name: 'JavaScript', level: 85, icon: '🟨' },
        { name: 'HTML/CSS', level: 90, icon: '🌐' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: <Database className="h-6 w-6" />,
      color: 'tech-green',
      skills: [
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'Django', level: 75, icon: '🏗️' },
        { name: 'Flask', level: 70, icon: '🌶️' },
        { name: 'Node.js', level: 65, icon: '📗' },
        { name: 'Firebase', level: 80, icon: '🔥' }
      ]
    },
    mobile: {
      title: 'Mobile Development',
      icon: <Smartphone className="h-6 w-6" />,
      color: 'tech-purple',
      skills: [
        { name: 'Flutter', level: 80, icon: '📱' },
        { name: 'Android Studio', level: 70, icon: '🤖' },
        { name: 'Java', level: 60, icon: '☕' },
        { name: 'Cross-platform UI', level: 85, icon: '🎯' }
      ]
    },
    ai: {
      title: 'AI & Machine Learning',
      icon: <Brain className="h-6 w-6" />,
      color: 'tech-orange',
      skills: [
        { name: 'Python ML', level: 75, icon: '🤖' },
        { name: 'NumPy', level: 70, icon: '🔢' },
        { name: 'Pandas', level: 75, icon: '🐼' },
        { name: 'Matplotlib', level: 65, icon: '📊' },
        { name: 'DeepFace', level: 60, icon: '👤' }
      ]
    },
    tools: {
      title: 'Tools & APIs',
      icon: <Terminal className="h-6 w-6" />,
      color: 'primary',
      skills: [
        { name: 'Git & GitHub', level: 85, icon: '📝' },
        { name: 'Zegocloud', level: 70, icon: '📞' },
        { name: 'Pusher', level: 65, icon: '⚡' },
        { name: 'Prisma DB', level: 60, icon: '💾' },
        { name: 'Firebase Auth', level: 80, icon: '🔐' }
      ]
    }
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-tech-text">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about learning and building with modern technologies. 
            Here's what I work with to bring ideas to life.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up animate" style={{ animationDelay: '0.2s' }}>
          {Object.entries(techCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-3 px-6 py-4 rounded-lg border transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'bg-card border-border hover:border-primary hover:shadow-tech'
              }`}
            >
              {category.icon}
              <span className="font-medium hidden sm:block">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-up animate" style={{ animationDelay: '0.4s' }}>
          {techCategories[activeCategory as keyof typeof techCategories].skills.map((skill, index) => (
            <Card key={skill.name} className="animated-border card-hover">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{skill.icon}</span>
                  <div>
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Learning'}
                    </p>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-primary transition-all duration-1000 ease-out`}
                      style={{
                        width: `${skill.level}%`,
                        transitionDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Path */}
        <div className="mt-16 text-center fade-in-up animate" style={{ animationDelay: '0.6s' }}>
          <Card className="animated-border p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Currently Learning</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="p-4 bg-muted rounded-full">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium">TensorFlow</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-4 bg-muted rounded-full">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Java DSA</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-4 bg-muted rounded-full">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Full-Stack</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-4 bg-muted rounded-full">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Advanced ML</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechStack;