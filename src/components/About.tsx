import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Award, Code2, Trophy, Zap } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [counters, setCounters] = useState({ projects: 0, problems: 0, stars: 0, hours: 0 });

  const stats = [
    { icon: Code2, label: 'Projects Built', target: 50, suffix: '+', color: 'text-primary' },
    { icon: Trophy, label: 'DSA Problems Solved', target: 500, suffix: '+', color: 'text-accent' },
    { icon: Award, label: 'GitHub Stars', target: 200, suffix: '+', color: 'text-secondary' },
    { icon: Zap, label: 'Coding Hours', target: 2000, suffix: '+', color: 'text-primary' },
  ];

  useEffect(() => {
    if (inView) {
      const keys = ['projects', 'problems', 'stars', 'hours'] as const;
      const targets = [50, 500, 200, 2000];
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      keys.forEach((key, index) => {
        let current = 0;
        const increment = targets[index] / steps;
        const timer = setInterval(() => {
          current += increment;
          if (current >= targets[index]) {
            current = targets[index];
            clearInterval(timer);
          }
          setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }, stepTime);
      });
    }
  }, [inView]);

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-black text-center mb-4 text-gradient">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16" />

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className={`${inView ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl blur-2xl" />
              <Card className="relative overflow-hidden border-primary/20 card-elevated">
                <div className="aspect-square bg-gradient-to-br from-card via-card to-muted flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </Card>
            </div>
          </div>

          <div className={`space-y-6 ${inView ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <h3 className="text-3xl font-bold text-gradient">
              Full-Stack Developer & AI Enthusiast
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Hey there! I'm a passionate developer who loves turning complex problems into elegant solutions. 
              My journey started with competitive programming in C++, solving hundreds of DSA challenges on LeetCode 
              and Codeforces.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Now, I specialize in building full-stack applications with the MERN stack, while integrating cutting-edge 
              AI/ML models using TensorFlow and PyTorch. Whether it's crafting responsive React dashboards or deploying 
              scalable Node.js APIs, I thrive on creating impactful digital experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              When I'm not coding, you'll find me exploring new tech trends, contributing to open-source, or brewing 
              the perfect cup of coffee ☕
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className={`text-center p-6 border-border hover-glow transition-all ${
                  inView ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className={`h-10 w-10 mx-auto mb-4 ${stat.color}`} />
                <div className="text-4xl font-black mb-2 text-gradient">
                  {counters[Object.keys(counters)[index] as keyof typeof counters]}
                  {stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
