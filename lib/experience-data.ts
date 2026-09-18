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
    id: '5',
    company: 'Phitopolis',
    position: 'DevOps Engineer Intern',
    period: 'May 2026 - September 2026',
    description: 'Created an AIOps system that automates monitoring, alerting, Slack notifications, incident management, and integrations with ITSM and product manager boards (Kanban boards) to streamline incident management and improve response times.',
    responsibilities: [
      'Debugged and fixed the Ansible playbook used to deploy an application with a complex architecture, ensuring smooth deployment and configuration management.',
      'Developed an AIOps system that automates tasks and processes within company operations.',
      'Created CI/CD pipelines for the AIOps system to automate deployment and testing, enabling faster and more reliable software delivery.',
    ],
    technologies: ['Linux', 'Ansible', 'Bash Scripting', 'Docker', 'Nginx', 'CI/CD Pipeline', 'Advanced Git Techniques', 'AWS', 'Slack API', 'Ollama Integration', 'ITSM Integration', 'Incident Management', 'Monitoring and Alerting', 'Microservices Architecture', 'Agentic Architecture', 'Claude Code'],
  },
  {
    id: '4',
    company: 'Elinnov Technologies',
    position: 'Software Engineer Intern',
    period: 'January 2026 - May 2026',
    description: 'Engineered and architected a payroll generation system that streamlines payroll processing, ensuring accurate and timely salary disbursement for employees.',
    responsibilities: [
      'Engineered a payroll generation system using C# and ASP.NET Core, translating BRD/SDD research and UI mockups into a production-ready backend.',
      'Developed custom language adapters to integrate Python-based libraries into the C# ecosystem, enabling cross-language interoperability for specialized features.',
      'Containerized the application stack with Docker and led on-premises deployment using PostgreSQL, ensuring environment consistency and data persistence.',
    ],
    technologies: ['C#', 'ASP.NET Core', 'Python Integration', 'React JS', 'Vite JS', 'PostgreSQL', 'Playwright', 'Unit Testing', 'Docker', 'CI/CD', 'GitHub Actions', 'Linux'],
  },
  {
    id: '3',
    company: 'Symph',
    position: 'Full-Stack Developer Intern',
    period: 'September 2025 - December 2025',
    description: 'Worked on migrating and developing features for a payment gateway in a legacy codebase and AI image generation platform, enhancing user experience and system performance.',
    responsibilities: [
      'Migrated an existing application from full-stack Next.js to a monorepo architecture using Nest, Next, Nx, and Google Cloud Storage, improving code organization and deployment efficiency.',
      'Developed features to optimize AI image generation and automate image upload and generation workflows for seamless user interaction.',
      'Debugged and built new features for a payment gateway integrated with services like Dragonpay, ensuring smooth transactions and an easy development structure for other developers.',
    ],
    technologies: ['Next.js', 'Nest.js', 'Nx', 'Google Cloud Storage', 'Redis', 'Payment Gateway', 'AI/ML'],
  },
  {
    id: '2',
    company: 'Vertex Pro Inc',
    position: 'Software Developer Intern',
    period: 'May 2025 - August 2025',
    description: 'Developed tools that reduced workload and improved efficiency by automating manual processes, resulting in significant time savings and increased productivity.',
    responsibilities: [
      'Developed an employee verification and tracking system using time- and location-stamped photos via metadata to ensure on-site attendance compliance.',
      'Built an NBI clearance verification tool using AWS Textract to extract and validate data from government-issued documents, reducing manual review time.',
      'Implemented an automated letter-generation system based on predefined templates, improving administrative efficiency and reducing repetitive work.',
    ],
    technologies: ['Next.js', 'ReactJs', 'TypeScript', 'AWS', 'AWS Textract', 'Document Processing', 'Automation', 'Web Development'],
  },
  {
    id: '1',
    company: 'NGDumlao Inc',
    position: 'IT Assistant Staff',
    period: 'June 2023 - August 2023',
    description: 'Managed on-premise infrastructure and network systems to ensure optimal performance.',
    responsibilities: [
      'Maintained and monitored on-premise servers to ensure uptime and data integrity.',
      'Diagnosed and resolved network and server performance issues, improving office connectivity and speed.',
      'Handled LAN setup and troubleshooting of routers, switches, and office network devices.',
      'Provided basic web development support for the company website.',
    ],
    technologies: ['Server Management', 'Networking', 'LAN', 'Routers', 'Switches', 'Web Development', 'PHP', 'JavaScript'],
  },
];
