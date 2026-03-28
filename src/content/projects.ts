export type CaseStudy = {
  overview: string;
  features: string[];
  architecture: string[];
  roleDescription: string;
  keyContributions: string[];
  problem: string;
  solution: string[];
  result: string[];
  impact: string[];
  learnings: string[];
};

export type Project = {
  title: string;
  description: string;
  role: string;
  tech: string[];
  image: string;
  liveUrl: string;
  repoUrl?: string;
  caseStudy?: CaseStudy;
};

/** All repos listed below are under github.com/themanvendra00 (curated). */
export const featuredProjects: Project[] = [
  {
    title: "QuickDevTools",
    description: "A collection of developer tools for quick use.",
    role: "End-to-end Developer",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn/ui"],
    image: "/images/projects/note-app.svg",
    liveUrl: "https://quickdevtools.vercel.app/",
    repoUrl: "https://github.com/themanvendra00/quickdevtools",
  },
  {
    title: "David's Bridal Clone",
    description: "David's Bridal is a clothier in the United States that specializes in wedding dresses, prom gowns, and other formal wear.",
    role: "Full-stack Developer",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
    image: "/images/projects/fitness.svg",
    liveUrl: "https://glambridal.netlify.app/",
    repoUrl: "https://github.com/themanvendra00/simplistic-yam-3636",
  },
  {
    title: "OLX Clone",
    description: "OLX is a web application that allows users to buy and sell used goods in their local area.",
    role: "Full-stack Developer",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
    image: "/images/projects/note-app.svg",
    liveUrl: "https://gleeful-chaja-f20a1c.netlify.app/",
    repoUrl: "https://github.com/themanvendra00/OLX_Clone",
  },
  {
    title: "Coffee shop landing",
    description:
      "A responsive, marketing-style landing page focused on layout, typography, and mobile-first styling.",
    role: "Design and front-end implementation",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/fitness.svg",
    liveUrl: "https://coffee-shop-home.netlify.app/",
    repoUrl: "https://github.com/themanvendra00/coffe-shop-7067",
  },
  {
    title: "Vet Appointment System",
    description: "Veterinary appointment booking platform which provides a facility for users to book an appointment for their pets.",
    role: "Full-stack Developer",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
    image: "/images/projects/note-app.svg",
    liveUrl: "https://cool-elf-0374a9.netlify.app/",
    repoUrl: "https://github.com/Tushargandhi07/Veterinary-appointment-booking",
  },
  {
    title: "Cabin Booking Platform",
    description:
      "Cabin booking platform which provides a facility for users to reserve co-reading and co-working spaces.",
    role: "Software Engineer",
    tech: ["NestJs", "MongoDB", "PostgreSQL", "TypeScript", "HTML", "CSS", "JavaScript"],
    image: "/images/projects/fitness.svg",
    liveUrl: "https://app.cabinmate.in/",
    caseStudy: {
      overview: "This project is a multi-platform cabin booking system designed for co-reading and co-working spaces. It includes a web app, mobile app, admin panel (Axpert), and a custom Node.js caching layer to optimize performance and reduce backend costs.\nUsers can browse available spaces, select cabin types, choose duration, and complete bookings with an integrated payment gateway.",
      features: [
        "Browse co-reading & co-working spaces",
        "Select cabin type (AC / Non-AC)",
        "Choose booking duration (Full-time / Shift-based)",
        "Interactive cabin layout selection",
        "Secure payments via PayU",
        "View active bookings",
        "Raise service requests",
        "Search franchises",
        "Profile management",
        "Community news updates"
      ],
      architecture: [
        "Frontend (Web + Mobile) → Communicates with backend APIs",
        "Node.js Backend (Caching Layer) → Handles API requests, caching, and business logic",
        "MongoDB → Stores cached data",
        "Axpert (Low-code platform) → Primary database & admin panel"
      ],
      roleDescription: "I worked on building a high-performance backend layer to optimize API usage and improve response time.",
      keyContributions: [
        "Designed and implemented a Node.js caching layer",
        "Built REST APIs for frontend communication",
        "Developed POST APIs to sync data with the main database (Axpert)",
        "Integrated external services including PayU payment gateway",
        "Created and managed data sources in Axpert",
        "Designed and implemented cabin layout systems for franchises"
      ],
      problem: "The primary backend system (Axpert APIs) had usage costs and performance limitations, making direct frontend calls inefficient and expensive.",
      solution: [
        "I introduced a custom caching layer using Node.js and MongoDB:",
        "When a request is made: Check if data exists in cache (MongoDB). If yes → return cached response instantly. If no → fetch from Axpert → store in cache → return response",
        "For data updates: Sync changes from both Web/Mobile apps and Admin panel (Axpert) to ensure cache consistency across all sources"
      ],
      result: [
        "Reduced dependency on paid APIs",
        "Improved response time significantly",
        "Optimized system scalability and performance"
      ],
      impact: [
        "Faster API responses using caching",
        "Reduced backend operational cost",
        "Improved user experience with real-time data",
        "Scalable architecture for multiple franchises"
      ],
      learnings: [
        "Designing caching strategies for real-world systems",
        "Handling data consistency across multiple sources",
        "Integrating external APIs in production systems",
        "Working with low-code platforms (Axpert) alongside custom backend"
      ]
    }
  },
  {
    title: "Edito",
    description: "Online collaborative code editor.",
    role: "Full-stack Developer",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "Socket.io"],
    image: "/images/projects/note-app.svg",
    liveUrl: "https://codedito.netlify.app/",
    repoUrl: "https://github.com/Mr-Soni532/Edito---Code-Editor",
  },
  {
    title: "Cronometer clone",
    description: "A fitness app that allows users to track their calories, diet, exercise and health data.",
    role: "Front-end Developer",
    tech: ["HTML", "CSS"],
    image: "/images/projects/fitness.svg",
    liveUrl: "https://earnest-vacherin-fa152b.netlify.app",
    repoUrl: "https://github.com/themanvendra00/amiable-suggestion-2246",
  },
  {
    title: "Analog clock",
    description:
      "A browser clock with a polished UI and light/dark modes — good practice for DOM, CSS, and state in vanilla JS.",
    role: "Frontend",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/note-app.svg",
    liveUrl: "https://stalwart-sherbet-64a857.netlify.app/",
    repoUrl: "https://github.com/themanvendra00/Aesthetic_Clock",
  },
];
