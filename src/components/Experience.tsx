import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const Experience = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const timeline = [
    {
      type: 'work',
      icon: Briefcase,
      title: 'Senior Full-Stack Developer',
      organization: 'Tech Startup Inc.',
      period: '2023 - Present',
      description:
        'Leading development of AI-powered SaaS platform. Built microservices architecture handling 100K+ daily users. Mentored junior developers and established best practices.',
      achievements: [
        'Reduced API response time by 60%',
        'Implemented CI/CD pipeline',
        'Led team of 5 developers',
      ],
      color: 'from-primary to-primary/50',
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'MERN Stack Developer',
      organization: 'Digital Agency Co.',
      period: '2021 - 2023',
      description:
        'Developed 15+ client projects using MERN stack. Specialized in e-commerce solutions and real-time applications with WebSocket integration.',
      achievements: [
        'Delivered projects 20% ahead of schedule',
        'Achieved 98% client satisfaction',
        'Integrated payment gateways',
      ],
      color: 'from-secondary to-secondary/50',
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'B.Tech in Computer Science',
      organization: 'Top University',
      period: '2017 - 2021',
      description:
        'Specialized in Algorithms and Machine Learning. Graduated with honors. Active member of coding club and hackathon organizer.',
      achievements: ['CGPA: 3.8/4.0', 'Won 3 national hackathons', 'Published 2 research papers'],
      color: 'from-accent to-accent/50',
    },
    {
      type: 'achievement',
      icon: Award,
      title: 'Competitive Programming',
      organization: 'LeetCode & Codeforces',
      period: '2019 - Present',
      description:
        'Consistently solving DSA problems to sharpen problem-solving skills. Achieved top rankings in multiple coding contests.',
      achievements: [
        'LeetCode: 500+ problems (Top 5%)',
        'Codeforces: Specialist rank',
        'Global rank #256 in weekly contest',
      ],
      color: 'from-primary to-secondary',
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return Briefcase;
      case 'education':
        return GraduationCap;
      case 'achievement':
        return Award;
      default:
        return Briefcase;
    }
  };

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl font-black text-center mb-4 text-gradient">
          Journey & Achievements
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16" />

        <div ref={ref} className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = getIcon(item.type);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } ${inView ? 'animate-fade-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`flex-1 ${isEven ? 'md:pr-12' : 'md:pl-12'} pl-20 md:pl-0`}>
                    <Card
                      className={`p-6 border-border hover-glow group ${
                        isEven ? 'md:text-right' : 'md:text-left'
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          isEven ? 'md:justify-end' : 'md:justify-start'
                        }`}
                      >
                        <Badge
                          variant="outline"
                          className={`bg-gradient-to-r ${item.color} border-none text-foreground font-semibold`}
                        >
                          {item.period}
                        </Badge>
                      </div>

                      <h3 className="text-2xl font-bold mb-1 text-gradient group-hover:glow-effect transition-all">
                        {item.title}
                      </h3>
                      <p className="text-lg text-primary font-semibold mb-3">{item.organization}</p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <ul
                        className={`space-y-2 ${
                          isEven ? 'md:text-right' : 'md:text-left'
                        } text-sm`}
                      >
                        {item.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-muted-foreground flex items-center gap-2 md:inline-flex"
                          >
                            <span className="text-accent">▸</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>

                  <div
                    className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center z-10 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-6 w-6 text-foreground" />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
