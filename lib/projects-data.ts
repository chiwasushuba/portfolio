export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  fullDescription: string;
  features: string[];
  challenges: string[];
  outcomes: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'project-one',
    title: 'Project One',
    description: 'A brief description of your first project and what technologies you used.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    fullDescription: 'This project is a full-stack web application built with Next.js and TypeScript. It demonstrates modern web development practices including server-side rendering, API routes, and responsive design.',
    features: [
      'Server-side rendering for optimal performance',
      'Responsive design that works on all devices',
      'Real-time data updates',
      'User authentication and authorization',
      'RESTful API integration'
    ],
    challenges: [
      'Implementing efficient state management across components',
      'Optimizing performance for large datasets',
      'Creating a seamless user experience'
    ],
    outcomes: [
      'Reduced page load time by 40%',
      'Increased user engagement by 60%',
      'Successfully deployed to production serving 10k+ users'
    ],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project-one'
  },
  {
    id: 'project-two',
    title: 'Project Two',
    description: 'A brief description of your second project and the problem it solves.',
    tags: ['React', 'Node.js', 'MongoDB'],
    fullDescription: 'A comprehensive solution for managing and analyzing data. Built with React for the frontend and Node.js with MongoDB for the backend, this application provides real-time analytics and reporting.',
    features: [
      'Interactive data visualization dashboards',
      'Real-time data processing and analytics',
      'User role management system',
      'Export functionality for reports',
      'RESTful API with comprehensive documentation'
    ],
    challenges: [
      'Handling real-time data synchronization',
      'Implementing complex data queries efficiently',
      'Scaling the application for concurrent users'
    ],
    outcomes: [
      'Processed over 1 million data points daily',
      'Reduced manual reporting time by 80%',
      'Achieved 99.9% uptime in production'
    ],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project-two'
  },
  {
    id: 'project-three',
    title: 'Project Three',
    description: 'A brief description of your third project and its key features.',
    tags: ['Python', 'Django', 'PostgreSQL'],
    fullDescription: 'An enterprise-level application built with Django and PostgreSQL. This project showcases advanced backend development, database optimization, and secure API design.',
    features: [
      'Advanced database indexing and optimization',
      'JWT-based authentication system',
      'Automated testing with 90%+ coverage',
      'Comprehensive admin dashboard',
      'Integration with third-party services'
    ],
    challenges: [
      'Optimizing database queries for complex relationships',
      'Implementing secure authentication and authorization',
      'Managing large-scale data migrations'
    ],
    outcomes: [
      'Improved query performance by 70%',
      'Zero security vulnerabilities in production',
      'Successfully migrated 500k+ records with zero data loss'
    ],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project-three'
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getAllProjectIds(): string[] {
  return projects.map(project => project.id);
}
