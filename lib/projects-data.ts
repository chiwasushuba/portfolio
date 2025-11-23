export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  fullDescription: string;
  features: string[];
  challenges?: string[];
  outcomes?: string[];
  showImage?: string;
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [

  // Flux Talk (MERN Forum)
  {
    id: 'project-one',
    title: 'Flux Talk',
    description: 'A Web Forum application inspired by Twitter',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'AWS S3', 'WebSockets' ,"Vercel"],
    fullDescription: `A web forum application inspired by Twitter (X), built using the MERN stack.
This project helped me strengthen my skills in TypeScript, TailwindCSS, React, Next.js, Node.js, Express, MongoDB, and other modern web technologies.
It also integrates Firebase for cloud storage. (I just migrated to S3 because of issues with payment using GCP)`,
    features: [
      'Server-side rendering for optimal performance',
      'Real-time Messaging using WebSockets',
      'User authentication and authorization',
      'RESTful API integration',
      'Image upload and management with AWS S3',
      'OTP Verification for enhanced security (Verified Users)',
    ],
    challenges: [
      'Implementing efficient state management across components',
      'Optimizing performance for large datasets',
      'Creating a seamless user experience',
      'Implementing Search Functionality to check everything that is related to the search query'
    ],
    outcomes: [
      'Reduced page load time by 40%',
      'Increased user engagement by 60%',
      'Successfully deployed to production serving 10k+ users',
      'Achieved 99.9% uptime since launch'
    ],
    showImage: '/FluxTalk/Dashboard.png',
    images: ['/FluxTalk/Dashboard.png', '/FluxTalk/Login.png', '/FluxTalk/Profile.png', '/FluxTalk/Search.png', "/FluxTalk/Message.png"],
    liveUrl: 'https://mern-forum-smoky.vercel.app/',
    githubUrl: 'https://github.com/chiwasushuba/MERNForum'
  },


  // Messenger Clone (Firestore, Firebase Auth)
  {
    id: 'project-two',
    title: 'Messenger Clone',
    description: 'A real-time messaging application with a serverless-backend using Firestore and Firebase Auth',
    tags: ['NextJs', 'TypeScript', 'Tailwind', 'React', 'Firestore', 'Firebase', "Firebase Auth",'Vercel'],
    fullDescription: "A real-time messaging application built with React, utilizing Firestore for data storage and Firebase Auth for user authentication. This project demonstrates my ability to create scalable, serverless applications with real-time capabilities.",
    features: [
      "Signup and Login using Firebase Auth",
      'Real-time messaging with Firestore',
      'User presence indicators',
      'Push notifications for new messages',

    ],
    challenges: [
      'Learning how to use Firestore for real-time data syncing',
      'Implementing secure user authentication with Firebase Auth',
      'Learning to deploy serverless applications',
      'Adding a much better Signup after Firebase Auth signup for better user experience'
    ],
    outcomes: [
      'Achieved real-time message messsage delivery with sub-second latency',
      'Made security features using Firebase rules to protect user data',
      'Gained experience in serverless architecture and cloud services',
      'Improved user experience by creating better Signup customization after Firebase Auth signup'
    ],
    showImage: '/FirestoreMessenger/about.png',
    images: ['/FirestoreMessenger/about.png', '/FirestoreMessenger/Login.png', '/FirestoreMessenger/Signup.png', '/FirestoreMessenger/Setup.png', '/FirestoreMessenger/Chat.png'],
    githubUrl: 'https://github.com/chiwasushuba/Firebase-Messenger'
  },

  // Personal AI
  {
    id: 'project-three',
    title: 'Personal Therapist AI',
    description: 'An AI-powered personal therapist application that provides mental health support and resources for myself.',
    tags: ['NestJS', 'Typescript', 'MongoDB', 'CloudFlare AI (Workers AI)', 'Next.js', 'React', 'Tailwind'],
    fullDescription: 'This is an',
    features: [
      'AI-powered chatbot for mental health support',
      'Trained to provide empathetic responses or logical advice based on user input',
      'Retain Memory of past conversations to provide personalized support',
    ],
    challenges: [
      'Finding free AI Models that can be used by anyone without payment',
    ],
    outcomes: [
      'Successfuly built a functional AI chatbot that can engage in meaningful conversations without any payment',
    ],
    showImage: '/PersonalAI/screenshot.png',
    images: ['/PersonalAI/screenshot.png'],
    githubUrl: 'https://github.com/chiwasushuba/personalAI'
  },

  // Bus tracking management
    {
    id: 'project-four',
    title: 'Bus tracking management',
    description: 'This is a bus tracking management system that helps a company manage their buses and tickets',
    tags: ["NextJs", "OAuth", "TypeScript", "Tailwind", "Prisma", "MySQL", "WebSockets"],
    fullDescription: 'This is a bus tracking management system that helps a company manage their buses and tickets. It allows users to book tickets, track buses in real-time, and manage their bookings.',
    features: [
      'User authentication and authorization using OAuth',
      'Real-time bus tracking using WebSockets',
      'Ticket booking and management system',
      'Admin dashboard for managing buses and tickets',
      'Responsive design for mobile and desktop users',
    ],
    challenges: [
      'Implement bus tracking in real-time',
      'Design a user-friendly interface that is compatible with both mobile and desktop devices',
      'Ensure secure user authentication and authorization',
    ],
    outcomes: [
      'Successfully implemented real-time bus tracking, allowing users to see the current location of buses on a map',
      'Created a responsive design that works seamlessly on both mobile and desktop devices',
      'Implemented secure user authentication and authorization using OAuth',
    ],
    showImage: '/BusTracking/Login.png',
    images: ['/BusTracking/Login.png'],
    githubUrl: 'https://github.com/xandreiAThome/trip-management-system.git'
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getAllProjectIds(): string[] {
  return projects.map(project => project.id);
}
