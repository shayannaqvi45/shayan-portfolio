export const portfolioData = {
  personalInfo: {
    name: "Syed Muhammad Shayan Naqvi",
    role: "Frontend Developer",
    email: "shayannaqvi45@gmail.com",
    phone: "+92-3363537913",
    location: "Lahore, Pakistan",
    linkedin: "https://linkedin.com/in/abdulazizharis",
    github: "https://github.com", // Add your github link here
    resumeUrl: "/Shayan_Naqvi_Resume.pdf", // Place your resume PDF in public/ folder
    bio: "Detail-oriented frontend developer with a Bachelors in Computer Science. Eager to apply technical skills through hands-on projects, crafting fluid interfaces and interactive digital experiences."
  },
  
  taglines: [
    "Frontend Development & UI Design",
    "React.js · Tailwind CSS · JavaScript",
    "Interactive Web Applications"
  ],

  credential: "BS Computer Science",

  myProcess: {
    badge: "My Process",
    heading: "Turning ideas into pixel-perfect experiences",
    description: "I follow a structured, design-first, and highly technical workflow to build clean, responsive, and high-performance frontend interfaces.",
    cards: [
      {
        number: "01",
        title: "Research & Design",
        text: "Understanding requirements, sketching wireframes, and setting up a solid architecture to ensure perfect UI/UX alignment."
      },
      {
        number: "02",
        title: "Structure & Semantics",
        text: "Writing clean, semantic HTML structure combined with modern styling patterns (like Tailwind CSS) for flexibility and speed."
      },
      {
        number: "03",
        title: "Interactive Logic",
        text: "Implementing dynamic state management, smooth transition controls (Framer Motion), and API bindings using React."
      },
      {
        number: "04",
        title: "Deployment & Optimization",
        text: "Analyzing page speeds, optimizing media assets, and deploying to cloud hosting for maximum response speeds."
      }
    ]
  },

  skills: [
    { name: "HTML5", icon: "🌐", level: "95%" },
    { name: "CSS3", icon: "🎨", level: "90%" },
    { name: "JavaScript (ES6+)", icon: "⚡", level: "88%" },
    { name: "React.js", icon: "⚛️", level: "85%" },
    { name: "Tailwind CSS", icon: "💅", level: "92%" },
    { name: "Bootstrap", icon: "🅱️", level: "85%" },
    { name: "Git & GitHub", icon: "🐙", level: "80%" },
    { name: "API Integration", icon: "🔌", level: "82%" }
  ],

  projects: [
    {
      id: "cynthia-clone",
      number: "01",
      badge: "🔥 Interactive Showcase",
      title: "Cynthia Ugwu Portfolio Clone",
      description: "Built a high-fidelity Cynthia Ugwu portfolio clone, replicating modern creative design aesthetics. Integrated smooth GSAP animations and Locomotive Scroll for seamless scrolling and mouse follower effects, delivering a premium, cinematic browsing experience focused heavily on UX.",
      techTags: ["HTML", "CSS", "JavaScript", "GSAP", "Locomotive Scroll"],
      links: {
        github: "https://github.com/shayannaqvi45/Cynthia-Ugwu-Portfolio-Clone-main.git",
        demo: "https://shayannaqvi45.github.io/Cynthia-Ugwu-Portfolio-Clone-main/"
      },
      isFlagship: true
    },
    {
      id: "movie-search",
      number: "02",
      badge: "🎬 Dynamic Web App",
      title: "Movie Search Web Application",
      description: "Developed a responsive movie search web application powered by real-time movie API integration. Structured clean state management using React hooks, allowing instant searches, rating displays, and dynamic visual layouts with asynchronous data fetching.",
      techTags: ["React.js", "JavaScript", "API Integration", "Tailwind CSS"],
      links: {
        github: "https://github.com/shayannaqvi45/Movie-Search--main.git",
        demo: "#"
      },
      isFlagship: false
    },
    {
      id: "number-guessing",
      number: "03",
      badge: "🎮 Frontend Logic",
      title: "Number Guessing Game",
      description: "Designed and engineered an interactive number guessing game featuring instant feedback, range bounds validation, and responsive score tracking. Emphasized clean DOM updates and animated victory states for high user engagement.",
      techTags: ["HTML5", "CSS3", "JavaScript", "Animations"],
      links: {
        github: "https://github.com/shayannaqvi45/Number-Guessing-Game-JS.git",
        demo: "https://shayannaqvi45.github.io/Number-Guessing-Game-JS/"
      },
      isFlagship: false
    },
    {
      id: "catalog-z",
      number: "04",
      badge: "📸 Media Gallery",
      title: "Catalog-Z - Premium Photo & Video Gallery",
      description: "A premium photo and video gallery platform featuring category filtering, media grid layouts, and lazy loading. Designed with fully responsive components and optimized for fast asset loading and fluid image viewing.",
      techTags: ["HTML5", "CSS3", "JavaScript", "Grid Layouts", "Media Streaming"],
      links: {
        github: "https://github.com/shayannaqvi45/FentixTech---Web-Dev-Internship-Task-3.git",
        demo: "https://gleaming-cucurucho-0ed0ec.netlify.app"
      },
      isFlagship: false
    },
    {
      id: "winter-portfolio",
      number: "05",
      badge: "❄️ Creative Portfolio",
      title: "Winter Portfolio — Photography Gallery",
      description: "A minimalist winter-themed photography portfolio. Implements responsive image galleries, clean lightboxes, and smooth hover effects to showcase landscape photography with high visual appeal.",
      techTags: ["HTML5", "CSS3", "JavaScript", "Flexbox", "Responsive Design"],
      links: {
        github: "https://github.com/shayannaqvi45/FentixTech---Web-Dev-Internship-Task-5.git",
        demo: "https://shayannaqvi45.github.io/FentixTech---Web-Dev-Internship-Task-5/"
      },
      isFlagship: false
    },
    {
      id: "mindful-space",
      number: "06",
      badge: "🧘 Focus Dashboard",
      title: "Mindful Space – Interactive Focus Dashboard",
      description: "An interactive focus and productivity dashboard. Features built-in pomodoro timers, ambient background audio tracks, custom task lists, and focus progress metrics utilizing browser local storage.",
      techTags: ["HTML5", "CSS3", "JavaScript", "Audio API", "Local Storage"],
      links: {
        github: "https://github.com/shayannaqvi45/DecodeLabs-Project-3.git",
        demo: "https://shayannaqvi45.github.io/DecodeLabs-Project-3/"
      },
      isFlagship: false
    }
  ],

  videoShowcase: {
    badge: "Cloud Showreel",
    heading: "Direct Video Showcases & Walkthroughs",
    description: "Here are video recordings of my projects. I host these in the cloud and stream them directly into the portfolio for zero-lag playback.",
    videos: [
      {
        id: "v1",
        title: "Cynthia Ugwu Clone Walkthrough",
        description: "A quick screen recording showcasing the cursor hover morphing, smooth mouse tracking, and slide transitions of the Cynthia Ugwu Clone.",
        url: "/videos/cynthia-demo.mp4",
        thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
        tags: ["UI Demo", "GSAP Animations"]
      },
      {
        id: "v2",
        title: "Mindful Space – Interactive Focus Dashboard",
        description: "A comprehensive walk-through of the Mindful Space focus dashboard. Showcases interactive productivity features including Pomodoro session timers, custom ambient sound mixers, dynamic task lists, and weekly progress analytics built for deep work.",
        url: "/videos/Mindful Space – Interactive Focus Dashboard.mp4",
        thumbnail: "/mindful-space.png",
        tags: ["Productivity", "Audio API", "Dashboard"]
      }
    ]
  },

  education: [
    {
      institution: "National College of Business Administration & Economics (NCBA&E)",
      degree: "Bachelor of Science in Computer Science",
      duration: "2024 – Present",
      location: "Lahore, Pakistan",
      gpa: "",
      details: "Focusing on Software Engineering, Web Systems, and frontend logic. Expected graduation in 2028."
    }
  ],

  certifications: [
    {
      name: "Full Stack Web Development Course",
      issuer: "Society of Education and Technology",
      location: "Lahore, Pakistan",
      duration: "Oct 2023 - March 2024",
      icon: "🎓"
    }
  ],

  softSkills: [
    {
      name: "Detail-Oriented",
      icon: "🔍",
      desc: "Pixel-perfect alignments, smooth transitions, and writing clean, structured code."
    },
    {
      name: "Eager Learner",
      icon: "📚",
      desc: "Constantly picking up new frontend frameworks and standard motion systems."
    },
    {
      name: "Problem Solver",
      icon: "🧩",
      desc: "Debugging state issues and structural logic issues with analytical reasoning."
    },
    {
      name: "Collaboration",
      icon: "🤝",
      desc: "Communicating project timelines and working in sync with design parameters."
    }
  ]
};
