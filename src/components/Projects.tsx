import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description:
        'Full-stack MERN application with real-time data visualization and ML-driven insights. Features predictive analytics using TensorFlow.js and responsive charts with Recharts.',
      image: '🤖',
      tech: ['React', 'Node.js', 'MongoDB', 'TensorFlow', 'Express'],
      liveUrl: 'https://demo.com',
      githubUrl: 'https://github.com/yourusername/project',
      gradient: 'from-primary to-secondary',
    },
    {
      title: 'Real-Time Chat Platform',
      description:
        'WebSocket-based messaging app with end-to-end encryption. Built with React, Socket.io, and Redis for session management. Supports file sharing and group chats.',
      image: '💬',
      tech: ['React', 'Socket.io', 'Node.js', 'Redis', 'MongoDB'],
      liveUrl: 'https://demo.com',
      githubUrl: 'https://github.com/yourusername/project',
      gradient: 'from-accent to-primary',
    },
    {
      title: 'E-Commerce Marketplace',
      description:
        'Scalable online store with Stripe integration, JWT authentication, and advanced search. Features admin dashboard, inventory management, and order tracking.',
      image: '🛒',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind'],
      liveUrl: 'https://demo.com',
      githubUrl: 'https://github.com/yourusername/project',
      gradient: 'from-secondary to-accent',
    },
    {
      title: 'Machine Learning Model Hub',
      description:
        'Platform for training and deploying ML models. Integrates PyTorch backend with React frontend. Includes model versioning, A/B testing, and performance metrics.',
      image: '🧠',
      tech: ['React', 'Flask', 'PyTorch', 'Docker', 'AWS'],
      liveUrl: 'https://demo.com',
      githubUrl: 'https://github.com/yourusername/project',
      gradient: 'from-primary to-accent',
    },
    {
      title: 'Algorithm Visualizer',
      description:
        'Interactive tool for visualizing data structures and algorithms. Built with React and D3.js. Supports 20+ sorting/searching algorithms with step-by-step breakdowns.',
      image: '📊',
      tech: ['React', 'D3.js', 'TypeScript', 'Vite', 'Tailwind'],
      liveUrl: 'https://demo.com',
      githubUrl: 'https://github.com/yourusername/project',
      gradient: 'from-accent to-secondary',
    },
    {
      title: 'Social Media Aggregator',
      description:
        'Dashboard aggregating feeds from multiple platforms. Uses GraphQL for efficient data fetching and Redux for state management. Features sentiment analysis on posts.',
      image: '🌐',
      tech: ['React', 'GraphQL', 'Node.js', 'MongoDB', 'OpenAI'],
      liveUrl: 'https://demo.com',
      githubUrl: 'https://github.com/yourusername/project',
      gradient: 'from-secondary to-primary',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl font-black text-center mb-4 text-gradient">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Showcasing real-world applications built with modern tech stacks. Each project demonstrates
          unique problem-solving approaches and technical expertise.
        </p>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-border hover-glow transition-all ${
                inView ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="p-6 space-y-4">
                <div
                  className={`text-7xl mb-4 transition-transform duration-500 ${
                    hoveredIndex === index ? 'scale-110 rotate-12' : ''
                  }`}
                >
                  {project.image}
                </div>

                <h3 className="text-2xl font-bold text-gradient group-hover:glow-effect transition-all">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed min-h-[120px]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className={`border-primary/50 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent font-semibold`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    size="sm"
                    className={`flex-1 bg-gradient-to-r ${project.gradient} hover:opacity-90 font-semibold`}
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <div
                className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient} transform origin-left transition-transform duration-500 ${
                  hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-foreground hover:bg-primary/10 font-semibold group"
            asChild
          >
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
