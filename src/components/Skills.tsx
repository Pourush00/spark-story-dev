import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Code2, Database, Smartphone, Brain, Server, GitBranch } from 'lucide-react';

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Next.js', level: 85 },
      ],
    },
    {
      icon: Server,
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 90 },
        { name: 'RESTful APIs', level: 95 },
        { name: 'GraphQL', level: 75 },
      ],
    },
    {
      icon: Database,
      title: 'Database',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Redis', level: 75 },
        { name: 'Firebase', level: 85 },
      ],
    },
    {
      icon: Brain,
      title: 'AI/ML',
      skills: [
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'OpenAI APIs', level: 90 },
      ],
    },
    {
      icon: GitBranch,
      title: 'DSA & Languages',
      skills: [
        { name: 'C++', level: 95 },
        { name: 'JavaScript', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'Data Structures', level: 95 },
      ],
    },
    {
      icon: Smartphone,
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'CI/CD', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl font-black text-center mb-4 text-gradient">
          Technical Arsenal
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16" />

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className={`p-8 border border-border/50 bg-card/50 backdrop-blur-sm group transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 ${
                  inView ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-primary font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: inView ? `${skill.level}%` : '0%',
                            transitionDelay: `${(index * 0.1 + skillIndex * 0.05)}s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
