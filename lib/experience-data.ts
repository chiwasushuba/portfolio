export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Symph',
    position: 'Full-Stack Developer Intern',
    period: 'September 2025 - December 2025',
    description: 'Worked on migrating and developing features for a payment gateway in a legacy codebase and AI image generation platform, enhancing user experience and system performance.',
    responsibilities: [
      'Migrated an existing application from Full-stack NextJs to a monorepo architecture with the use of Nest, Next, Nx and Google Cloud Storage, improving the code organization and deployment efficiency',
      'Developed Features such as optimizing AI Image generations, automatic image upload/generation workflow for seamless user interactivity',
      'Debugged and built new features for a payment gateway application integrated with services like Dragonpay, ensuring smooth transaction and easy development structure for other developers',
    ],
    technologies: ['Next.js', 'Nest.js', 'Nx', 'Google Cloud Storage', 'Payment Gateway', 'AI/ML', 'Redis'],
  },
  {
    id: '2',
    company: 'Vertex Pro Inc',
    position: 'Software Developer Intern',
    period: 'May 2025 - August 2025',
    description: 'Developed various tools to help their small company reduce workload and improve efficiency. This helped the company to automate several manual processes, leading to significant time savings and increased productivity.',
    responsibilities: [
      'Developed an employee verification and tracking system that used time- and location-stamped photos (via metadata) to ensure on-site attendance compliance',
      'Built an NBI clearance verification tool using AWS Textract to automatically extract and validate data from government-issued documents, reducing manual review time',
      'Implemented an automated letter-generation system based on pre-defined templates, improving administrative efficiency and reducing repetitive work',
    ],
    technologies: ['Next.js','AWS Textract', 'AWS', 'Document Processing', 'Automation', 'Web Development','ReactJs', 'Typescript'],
  },
    {
    id: '3',
    company: 'Freelance',
    position: 'Full-Stack Developer',
    period: 'January 2024 - Present',
    description: 'Providing custom web development solutions for various clients, specializing in modern full-stack applications and automation tools.',
    responsibilities: [
      'Developed and deployed custom web applications for small to medium-sized businesses using modern tech stacks',
      'Built responsive e-commerce platforms with integrated payment gateways and inventory management systems',
      'Created RESTful APIs and microservices architecture for scalable client applications',
      'Implemented automated testing and CI/CD pipelines to ensure code quality and deployment efficiency',
      'Collaborated directly with clients to gather requirements, provide technical consultations, and deliver solutions on time',
      'Optimized application performance and database queries, reducing load times by up to 60%',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'Tailwind CSS', 'Express.js'],
  },
  {
    id: '4',
    company: 'NGDumlao Inc',
    position: 'IT Assistant Staff',
    period: 'June 2023 - August 2023',
    description: 'Managed on-premise infrastructure and network systems to ensure optimal performance.',
    responsibilities: [
      'Maintained and monitored on-premise servers to ensure uptime and data integrity',
      'Diagnosed and resolved network and server performance issues, improving office connectivity and speed',
      'Handled LAN setup and troubleshooting of routers, switches, and office network devices',
      'Basic Web development skills for company website ',
    ],
    technologies: ['Server Management', 'Networking', 'LAN', 'Routers', 'Switches', 'Web Development', 'PHP', 'JavaScript'],
  },
];
