export const profile = {
  name: "Dagmawi Asegid",
  role: "CS & Math Student @ Vassar College",
  location: "Poughkeepsie, NY",
  email: "dagmawi2219@gmail.com",
  contactEmail: "dagmawidesta2219@gmail.com",
  avatar: "/images/avatar.jpg",
  github: "https://github.com/Dagmawi-Asegid",
  githubHandle: "Dagmawi-Asegid",
  linkedin: "https://linkedin.com/in/dagmawi-asegid-a036003a5",
  linkedinHandle: "dagmawi-asegid-a036003a5",
  tagline:
    "Building full-stack software and figuring out the fastest way to actually understand something new.",
  bio: [
    "I grew up in Debre Markos, Ethiopia, before coming to Vassar College to study Computer Science and Mathematics. Back home I built my high school's first website from scratch, which is honestly what got me hooked on software in the first place.",
    "At Vassar I'm president of the African Students Union, where I lead the team building our own web platform for around 150 members, and I work IT support for the whole campus. This fall I'm starting as a teaching assistant for our functional programming course.",
    "I'm bilingual in English and Amharic, and I spent last summer mentoring Ethiopian high schoolers through the U.S. college application process. I care about building things that work for people outside the default assumption of who's using them.",
  ],
};

export type Job = {
  role: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    role: "Computing & Information Services (CIS) Assistant",
    org: "Vassar College Computing and Information Services",
    location: "Poughkeepsie, NY",
    period: "Sep 2025 — Present",
    bullets: [
      "First point of contact for technical support across campus, resolving issues on Windows, macOS, mobile, and campus applications.",
      "Troubleshoot network connectivity, printer/scanner access, and account-related issues.",
      "Escalate complex technical issues to specialized IT teams while maintaining clear documentation.",
    ],
  },
  {
    role: "Teaching Assistant — CS 145: Foundations of Functional Programming (OCaml)",
    org: "Vassar College Department of Computer Science",
    location: "Poughkeepsie, NY",
    period: "Fall 2026 (Incoming)",
    bullets: [
      "Selected to support the Fall 2026 offering of CS 145, assisting students with OCaml syntax, functional programming concepts, and problem set debugging.",
    ],
  },
  {
    role: "Teaching Assistant — Mathematics (Calculus)",
    org: "Vassar College Department of Mathematics",
    location: "Poughkeepsie, NY",
    period: "Spring 2026",
    bullets: [
      "Held weekly office hours, helping students work through problem sets and prepare for exams.",
      "Graded homework and quizzes, providing feedback to reinforce core calculus concepts.",
      "Led small-group review sessions ahead of midterms and finals.",
    ],
  },
  {
    role: "Web Editor Intern",
    org: "Vassar College International Students Office",
    location: "Poughkeepsie, NY",
    period: "Dec 2025 — Present",
    bullets: [
      "Collaborate with IT staff to improve website accessibility, usability, and content clarity for international students.",
      "Manage and publish web content on international student resources, immigration policies, and campus events via the college's CMS.",
    ],
  },
  {
    role: "President",
    org: "Vassar African Students Union",
    location: "Poughkeepsie, NY",
    period: "Oct 2025 — Present",
    bullets: [
      "Lead the executive board organizing cultural, social, and community events — including Afro Eat and the Afro Fashion Feast — for roughly 150 African students at Vassar.",
      "Set strategic direction and represent VASU in campus-wide student government and administration meetings.",
      "Connect new African students to campus resources, peer support, and community guidance to ease their transition.",
    ],
  },
  {
    role: "Secretary & Executive Board Member",
    org: "VC++ (Vassar College Computer Science Club)",
    location: "Poughkeepsie, NY",
    period: "Oct 2025 — Present",
    bullets: [
      "Manage club communications, meeting agendas, and minutes.",
      "Co-organized a campus-wide hackathon for Vassar's tech students, coordinating logistics, registration, and judging.",
    ],
  },
  {
    role: "Instructor / Mentor (Volunteer)",
    org: "CTP Ethiopia (College and Test Preparation Ethiopia)",
    location: "Addis Ababa, Ethiopia",
    period: "Jun 2025 — Aug 2025",
    bullets: [
      "Instructed and mentored Ethiopian students on the U.S. college application process — university selection, essay writing, and application strategy.",
      "Helped facilitate financial aid for testing and application fees for students from rural areas, expanding access to international education.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  href?: string;
  featured?: boolean;
  images?: string[];
};

export const projects: Project[] = [
  {
    title: "Vassar African Students Association Website",
    description:
      "Official web platform for VASU: a dynamic landing page, secure student-only sign-up/login flow, an internal resource hub (SSN, CPT/OPT, housing, insurance guides), and an internal dashboard/chat system. Live and in active use by ~150 members.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase"],
    href: "https://vassar-africans.vercel.app",
    featured: true,
    images: [
      "/images/projects/vassar-africans/hero.png",
      "/images/projects/vassar-africans/resources.png",
      "/images/projects/vassar-africans/login.png",
      "/images/projects/vassar-africans/signup.png",
    ],
  },
  {
    title: "Employee Management System",
    description:
      "Solo backend project: a RESTful API for full CRUD management of employee records, with MySQL persistence and a layered controller/service/repository architecture. Includes OpenAPI/Swagger docs and validation on every endpoint.",
    stack: ["Java", "Spring Boot", "MySQL", "REST API"],
    href: "https://github.com/Dagmawi-Asegid/employee-management-system",
    featured: true,
    images: ["/images/projects/employee-management-system/hero.jpg"],
  },
  {
    title: "Lunch Box",
    description:
      "Android app for finding real nearby restaurants on an interactive map (free OpenStreetMap Overpass API, no billing), getting directions, ordering (demo), and leaving reviews. Kotlin + Firebase Auth/Firestore, MVVM architecture. Built and tested end-to-end on a real emulator and a real Firebase backend.",
    stack: ["Kotlin", "Firebase", "Android SDK", "OpenStreetMap"],
    href: "https://lunch-box-showcase.vercel.app",
    images: ["/images/projects/lunch-box/hero.png"],
  },
  {
    title: "Midnight Courier",
    description:
      "A top-down neon night-city bike-delivery game built from scratch on HTML5 Canvas: procedurally generated city with five distinct districts, physics-based bike handling with drift and boost, traffic AI with lights and NPC vehicles, a minimap and navigation system, and a fully custom, polished UI with pause/settings menus, all persisted locally.",
    stack: ["React", "Vite", "JavaScript", "HTML5 Canvas", "Web Audio API"],
    href: "https://github.com/Dagmawi-Asegid/midnight-courier",
    featured: true,
    images: [
      "/images/projects/midnight-courier/hero.jpg",
      "/images/projects/midnight-courier/menu.jpg",
      "/images/projects/midnight-courier/settings.jpg",
      "/images/projects/midnight-courier/garage.jpg",
    ],
  },
  {
    title: "Exchange Rate Predictor",
    description:
      "Full-stack web app predicting currency exchange rates, with a React frontend and a Flask backend running a linear-regression trend forecast over live FX history.",
    stack: ["React.js", "Python", "Flask", "REST API"],
    href: "https://exchange-rate-predictor.vercel.app",
    images: ["/images/projects/exchange-rate-predictor/hero.jpg"],
  },
  {
    title: "Cryptocurrency Market Trends Dashboard",
    description:
      "Fetches real-time cryptocurrency market data from the CoinGecko API and visualizes price trends and market movements with Chart.js.",
    stack: ["JavaScript", "Chart.js", "REST APIs"],
    href: "https://crypto-dashboard-puce-five.vercel.app",
    images: ["/images/projects/crypto-dashboard/hero.jpg"],
  },
  {
    title: "Weather Dashboard",
    description:
      "Interactive dashboard displaying current conditions and a 5-day forecast for any searched city, using the Open-Meteo API.",
    stack: ["JavaScript", "Open-Meteo API"],
    href: "https://weather-dashboard-seven-pied.vercel.app",
    images: ["/images/projects/weather-dashboard/hero.jpg"],
  },
  {
    title: "Debre Markos High School Website",
    description:
      "Designed and built a website for my high school in Ethiopia, with responsive pages for school info, announcements, and contact details.",
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://debre-markos-hs.vercel.app",
    images: ["/images/projects/debre-markos-hs/hero.jpg"],
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C", "C++", "Kotlin", "OCaml"],
  },
  {
    category: "Frameworks",
    items: ["React.js", "Next.js", "Node.js", "Express.js", "Flask", "Spring Boot"],
  },
  {
    category: "Data",
    items: ["SQL", "PostgreSQL", "MongoDB", "MySQL", "Firebase", "REST API design"],
  },
  {
    category: "Tools",
    items: ["Docker", "Vercel", "CI/CD", "Tailwind CSS"],
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub"],
  },
];

export const education = {
  school: "Vassar College",
  location: "Poughkeepsie, NY",
  degree: "B.S. in Computer Science and Mathematics",
  period: "Expected May 2029",
};

export const honors = [
  {
    title: "3rd Place, Mind Plus Math Recognition",
    org: "Ethiopian Ministry of Education",
    date: "May 2022",
  },
];
