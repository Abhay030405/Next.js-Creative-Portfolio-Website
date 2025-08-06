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
    description: "A comprehensive carbon footprint tracking application that helps users monitor their environmental impact. Features include daily activity logging, carbon emission calculations, and personalized sustainability recommendations. Built with React and Node.js.",
    detailedDescription: [
      "EcoTracker empowers users to take control of their environmental impact by providing intuitive tools for tracking daily activities and calculating carbon emissions.",
      "The app offers personalized sustainability tips, visualizes progress with charts, and encourages eco-friendly habits through gamification.",
      "Built with a modern MERN stack, EcoTracker is optimized for both desktop and mobile experiences."
    ],
    images: [
      "/background/projects-background.png",
      "/background/home-background.png"
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "TailwindCSS"],
    features: [
      "Daily carbon footprint logging",
      "Personalized sustainability tips",
      "Progress visualization with charts",
      "Mobile-friendly design"
    ],
    githubLink: "https://github.com/yourusername/ecotracker",
    liveLink: "https://ecotracker.example.com",
    date: "2022-08-15",
    demoLink: "https://ecotracker.example.com",
  },
  {
    id: 2,
    name: "ArtGallery Online",
    description: "A digital art showcase platform where artists can display their work and art enthusiasts can discover new pieces. Includes features like virtual exhibitions, artist profiles, and secure payment processing for art purchases.",
    detailedDescription: [
      "ArtGallery Online connects artists and collectors in a vibrant digital space.",
      "Artists can upload high-resolution images, create virtual exhibitions, and manage their portfolios.",
      "Buyers can browse, favorite, and securely purchase artwork."
    ],
    images: [
      "/background/about-background.png",
      "/background/projects-background.png"
    ],
    techStack: ["Next.js", "Firebase", "Stripe API", "TailwindCSS"],
    features: [
      "Virtual exhibitions",
      "Artist profiles",
      "Secure payment integration",
      "Favorites and wishlists"
    ],
    githubLink: "https://github.com/yourusername/artgallery-online",
    liveLink: "https://artgalleryonline.example.com",
    date: "2022-06-20",
    demoLink: "https://artgalleryonline.example.com",
  },
  {
    id: 3,
    name: "BudgetPlanner",
    description: "An intuitive expense tracking and budgeting application that helps users manage their finances effectively. Features include expense categorization, budget goal setting, financial reports, and bill reminders.",
    detailedDescription: [
      "BudgetPlanner simplifies personal finance management with easy-to-use tools for tracking expenses and setting budget goals.",
      "Users can categorize transactions, visualize spending trends, and receive reminders for upcoming bills.",
      "The app supports multi-device sync and secure cloud storage."
    ],
    images: [
      "/background/contact-background.png",
      "/next.svg"
    ],
    techStack: ["Vue.js", "Firebase", "Chart.js", "TailwindCSS"],
    features: [
      "Expense categorization",
      "Budget goal setting",
      "Financial reports",
      "Bill reminders"
    ],
    githubLink: "https://github.com/yourusername/budgetplanner",
    liveLink: "https://budgetplanner.example.com",
    date: "2022-09-10",
    demoLink: "https://budgetplanner.example.com",
  },
  {
    id: 4,
    name: "HealthBeat",
    description: "A comprehensive health monitoring application that tracks heart rate zones, workout sessions, and overall fitness metrics. Integrates with wearable devices and provides detailed health analytics and personalized recommendations.",
    detailedDescription: [
      "HealthBeat integrates with popular wearables to provide real-time health analytics.",
      "Users can monitor heart rate zones, log workouts, and receive personalized fitness recommendations.",
      "The dashboard offers interactive charts and progress tracking."
    ],
    images: [
      "/background/projects-background.png",
      "/background/contact-background.png"
    ],
    techStack: ["React Native", "Redux", "D3.js", "Bluetooth API"],
    features: [
      "Wearable device integration",
      "Heart rate zone tracking",
      "Personalized recommendations",
      "Interactive analytics dashboard"
    ],
    githubLink: "https://github.com/yourusername/healthbeat",
    liveLink: "https://healthbeat.example.com",
    date: "2022-05-30",
    demoLink: "https://healthbeat.example.com",
  },
  {
    id: 5,
    name: "RecipeFinder",
    description: "A recipe discovery platform that helps users find new dishes based on available ingredients, dietary preferences, and cooking skill level. Features include recipe ratings, user reviews, and step-by-step cooking instructions.",
    detailedDescription: [
      "RecipeFinder makes it easy to discover new recipes tailored to your preferences.",
      "Users can search by ingredients, filter by dietary needs, and follow step-by-step instructions.",
      "Community ratings and reviews help surface the best dishes."
    ],
    images: [
      "/background/home-background.png",
      "/background/about-background.png"
    ],
    techStack: ["Angular", "Firebase", "TailwindCSS"],
    features: [
      "Ingredient-based search",
      "Dietary filters",
      "Step-by-step instructions",
      "User ratings and reviews"
    ],
    githubLink: "https://github.com/yourusername/recipefinder",
    liveLink: "https://recipefinder.example.com",
    date: "2022-07-12",
    demoLink: "https://recipefinder.example.com",
  },
  {
    id: 6,
    name: "JourneyLogger",
    description: "A travel logging application that allows users to document their adventures with photos, location tracking, and personal notes. Features include trip planning, expense tracking, and social sharing capabilities.",
    detailedDescription: [
      "JourneyLogger is your digital travel diary, letting you log trips with photos, notes, and maps.",
      "Plan future adventures, track expenses, and share highlights with friends.",
      "All data is securely stored and synced across devices."
    ],
    images: [
      "/background/projects-background.png",
      "/background/contact-background.png"
    ],
    techStack: ["React", "Firebase", "Google Maps API", "TailwindCSS"],
    features: [
      "Photo and note logging",
      "Trip planning",
      "Expense tracking",
      "Social sharing"
    ],
    githubLink: "https://github.com/yourusername/journeylogger",
    liveLink: "https://journeylogger.example.com",
    date: "2022-10-01",
    demoLink: "https://journeylogger.example.com",
  },
  {
    id: 7,
    name: "StudyBuddy",
    description: "A collaborative learning platform that connects students for group study sessions, knowledge sharing, and academic support. Features include virtual study rooms, resource sharing, and progress tracking.",
    detailedDescription: [
      "StudyBuddy connects students for collaborative learning and academic support.",
      "Virtual study rooms, resource sharing, and progress tracking help users stay motivated and organized.",
      "The platform is accessible on web and mobile."
    ],
    images: [
      "/background/about-background.png",
      "/background/home-background.png"
    ],
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "TailwindCSS"],
    features: [
      "Virtual study rooms",
      "Resource sharing",
      "Progress tracking",
      "Web and mobile support"
    ],
    githubLink: "https://github.com/yourusername/studybuddy",
    liveLink: "https://studybuddy.example.com",
    date: "2022-04-18",
    demoLink: "https://studybuddy.example.com",
  },
  {
    id: 8,
    name: "TechTalk",
    description: "A tech news aggregator that curates the latest developments in technology from various sources. Features include personalized news feeds, bookmarking, and discussion forums for tech enthusiasts.",
    detailedDescription: [
      "TechTalk aggregates the latest tech news from trusted sources.",
      "Users can personalize their news feed, bookmark articles, and join discussions with other tech enthusiasts.",
      "The app is optimized for fast loading and a clean reading experience."
    ],
    images: [
      "/background/projects-background.png",
      "/background/about-background.png"
    ],
    techStack: ["Next.js", "Node.js", "MongoDB", "TailwindCSS"],
    features: [
      "Personalized news feed",
      "Bookmarking",
      "Discussion forums",
      "Fast, clean UI"
    ],
    githubLink: "https://github.com/yourusername/techtalk",
    liveLink: "https://techtalk.example.com",
    date: "2022-11-05",
    demoLink: "https://techtalk.example.com",
  },
  {
    id: 9,
    name: "FitTrack",
    description: "A comprehensive fitness tracking application that monitors workouts, nutrition, and overall health metrics. Features include workout planning, progress visualization, and integration with fitness devices.",
    detailedDescription: [
      "FitTrack helps users monitor workouts, nutrition, and health metrics in one place.",
      "Plan routines, visualize progress, and sync with popular fitness devices.",
      "The app supports goal setting and community challenges."
    ],
    images: [
      "/background/contact-background.png",
      "/background/projects-background.png"
    ],
    techStack: ["React Native", "Redux", "D3.js", "Bluetooth API"],
    features: [
      "Workout planning",
      "Nutrition tracking",
      "Device integration",
      "Community challenges"
    ],
    githubLink: "https://github.com/yourusername/fittrack",
    liveLink: "https://fittrack.example.com",
    date: "2022-03-22",
    demoLink: "https://fittrack.example.com",
  },
  {
    id: 10,
    name: "MindfulMoments",
    description: "A meditation and mindfulness application that guides users through various meditation techniques and tracks their mindfulness journey. Features include guided sessions, progress tracking, and daily mindfulness reminders.",
    detailedDescription: [
      "MindfulMoments offers guided meditation sessions and mindfulness tracking.",
      "Users can set daily reminders, track their progress, and explore a library of meditation techniques.",
      "The app is designed for both beginners and experienced practitioners."
    ],
    images: [
      "/background/home-background.png",
      "/background/about-background.png"
    ],
    techStack: ["React Native", "Expo", "Firebase", "TailwindCSS"],
    features: [
      "Guided meditation sessions",
      "Progress tracking",
      "Daily reminders",
      "Beginner-friendly design"
    ],
    githubLink: "https://github.com/yourusername/mindfulmoments",
    liveLink: "https://mindfulmoments.example.com",
    date: "2022-02-14",
    demoLink: "https://mindfulmoments.example.com",
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  { label: "Loading Demo", link: "/loading-demo", icon: "home", newTab: false },
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


