/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "EcoTracker",
    description: "A comprehensive carbon footprint tracking application that helps users monitor and reduce their environmental impact through detailed analytics and personalized recommendations.",
    shortDescription: "Track your carbon footprint",
    date: "2024-01-15",
    demoLink: "https://ecotracker.example.com",
    githubLink: "https://github.com/example/ecotracker",
    image: "/api/placeholder/400/250",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Tailwind CSS"],
    category: "Environmental",
    featured: true
  },
  {
    id: 2,
    name: "ArtGallery Online",
    description: "A digital art showcase platform where artists can display their work, connect with collectors, and sell their pieces in a beautiful, curated environment.",
    shortDescription: "Digital art showcase platform",
    date: "2023-12-20",
    demoLink: "https://artgalleryonline.example.com",
    githubLink: "https://github.com/example/artgallery",
    image: "/api/placeholder/400/250",
    technologies: ["Next.js", "Stripe", "AWS S3", "PostgreSQL", "Framer Motion"],
    category: "Creative",
    featured: true
  },
  {
    id: 3,
    name: "BudgetPlanner",
    description: "An intelligent budgeting application that helps users plan, track, and optimize their expenses with AI-powered insights and automated categorization.",
    shortDescription: "Plan and track expenses",
    date: "2023-11-10",
    demoLink: "https://budgetplanner.example.com",
    githubLink: "https://github.com/example/budgetplanner",
    image: "/api/placeholder/400/250",
    technologies: ["Vue.js", "Python", "Django", "Redis", "D3.js"],
    category: "Finance",
    featured: false
  },
  {
    id: 4,
    name: "HealthBeat",
    description: "A comprehensive health monitoring system that tracks heart rate zones, sleep patterns, and provides personalized health insights and recommendations.",
    shortDescription: "Monitor heart rate zones",
    date: "2023-10-30",
    demoLink: "https://healthbeat.example.com",
    githubLink: "https://github.com/example/healthbeat",
    image: "/api/placeholder/400/250",
    technologies: ["React Native", "Firebase", "TensorFlow", "HealthKit", "Expo"],
    category: "Health",
    featured: true
  },
  {
    id: 5,
    name: "RecipeFinder",
    description: "A smart recipe discovery platform that suggests personalized recipes based on available ingredients, dietary preferences, and cooking skill level.",
    shortDescription: "Discover new recipes",
    date: "2023-09-12",
    demoLink: "https://recipefinder.example.com",
    githubLink: "https://github.com/example/recipefinder",
    image: "/api/placeholder/400/250",
    technologies: ["Angular", "Node.js", "MySQL", "OpenAI API", "Docker"],
    category: "Food",
    featured: false
  },
  {
    id: 6,
    name: "JourneyLogger",
    description: "A travel journaling application that allows users to document their adventures with photos, stories, and interactive maps while sharing experiences with fellow travelers.",
    shortDescription: "Log your travels",
    date: "2023-08-01",
    demoLink: "https://journeylogger.example.com",
    githubLink: "https://github.com/example/journeylogger",
    image: "/api/placeholder/400/250",
    technologies: ["React", "Express.js", "MongoDB", "Google Maps API", "Cloudinary"],
    category: "Travel",
    featured: false
  },
  {
    id: 7,
    name: "StudyBuddy",
    description: "A collaborative learning platform that connects students for group study sessions, knowledge sharing, and interactive learning experiences.",
    shortDescription: "Collaborative learning platform",
    date: "2023-07-18",
    demoLink: "https://studybuddy.example.com",
    githubLink: "https://github.com/example/studybuddy",
    image: "/api/placeholder/400/250",
    technologies: ["Svelte", "Socket.io", "PostgreSQL", "WebRTC", "JWT"],
    category: "Education",
    featured: false
  },
  {
    id: 8,
    name: "TechTalk",
    description: "A curated tech news aggregator that provides personalized content recommendations, real-time updates, and community discussions on the latest technology trends.",
    shortDescription: "Tech news aggregator",
    date: "2023-06-05",
    demoLink: "https://techtalk.example.com",
    githubLink: "https://github.com/example/techtalk",
    image: "/api/placeholder/400/250",
    technologies: ["Next.js", "GraphQL", "Redis", "Elasticsearch", "AWS"],
    category: "Technology",
    featured: true
  },
  {
    id: 9,
    name: "FitTrack",
    description: "A comprehensive fitness tracking application that monitors workouts, nutrition, and progress with detailed analytics and personalized training plans.",
    shortDescription: "Fitness and workout tracker",
    date: "2023-05-22",
    demoLink: "https://fittrack.example.com",
    githubLink: "https://github.com/example/fittrack",
    image: "/api/placeholder/400/250",
    technologies: ["Flutter", "Firebase", "TensorFlow Lite", "HealthKit", "Google Fit"],
    category: "Fitness",
    featured: false
  },
  {
    id: 10,
    name: "MindfulMoments",
    description: "A meditation and mindfulness application that guides users through personalized meditation sessions, tracks progress, and promotes mental well-being.",
    shortDescription: "Meditation and mindfulness app",
    date: "2023-04-14",
    demoLink: "https://mindfulmoments.example.com",
    githubLink: "https://github.com/example/mindfulmoments",
    image: "/api/placeholder/400/250",
    technologies: ["React Native", "Node.js", "MongoDB", "Web Audio API", "Push Notifications"],
    category: "Wellness",
    featured: false
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://www.github.com/Abhay030405",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/abhay-agarwal-8563352b1/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Kaggle",
    link: "https://www.kaggle.com/abhayondata",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];


