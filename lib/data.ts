import { IProject } from '@/types';

export const GENERAL_INFO = {
  email: 'jhaseeb718@gmail.com',

  emailSubject: "Let's collaborate on a project",
  emailBody: 'Hi Haseeb, I am reaching out to you because...',

  oldPortfolio: 'https://haseebportfolio-ten.vercel.app/',
  upworkProfile: 'https://www.upwork.com/freelancers/~013e8017d65274c785?mp_source=share',
};

export const SOCIAL_LINKS = [
  { name: 'github', url: 'https://github.com/HaseeburRehma' },
  { name: 'linkedin', url: 'https://www.linkedin.com/in/haseeb-ur-rehman-3b8b771b7/' },

  { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
  frontend: [
    {
      name: 'Javascript',
      icon: '/logo/js.png',
    },
    {
      name: 'Typescript',
      icon: '/logo/ts.png',
    },
    {
      name: 'React',
      icon: '/logo/react.png',
    },
    {
      name: 'Next.js',
      icon: '/logo/next.png',
    },
    {
      name: 'Redux',
      icon: '/logo/redux.png',
    },
    {
      name: 'Tailwind CSS',
      icon: '/logo/tailwind.png',
    },
    {
      name: 'GSAP',
      icon: '/logo/gsap.png',
    },
    {
      name: 'Frammer Motion',
      icon: '/logo/framer-motion.png',
    },
    {
      name: 'SASS',
      icon: '/logo/sass.png',
    },
    {
      name: 'Bootstrap',
      icon: '/logo/bootstrap.svg',
    },
  ],
  backend: [
    {
      name: 'Node.js',
      icon: '/logo/node.png',
    },
    {
      name: 'Nest.js',
      icon: '/logo/nest.svg',
    },
    {
      name: 'Express.js',
      icon: '/logo/express.png',
    },
  ],
  database: [
    {
      name: 'MySQL',
      icon: '/logo/mysql.svg',
    },
    {
      name: 'PostgreSQL',
      icon: '/logo/postgreSQL.png',
    },
    {
      name: 'MongoDB',
      icon: '/logo/mongodb.svg',
    },
    {
      name: 'Prisma',
      icon: '/logo/prisma.png',
    },
  ],
  tools: [
    {
      name: 'Git',
      icon: '/logo/git.png',
    },
    {
      name: 'Docker',
      icon: '/logo/docker.svg',
    },
    {
      name: 'AWS',
      icon: '/logo/aws.png',
    },
  ],
};

export const PROJECTS: IProject[] = [

  // === New GitHub Projects ===
  {
    title: 'Ytmp4 Downloader',
    slug: 'ytmp4',
    techStack: ['Next.js', 'TypeScript', 'Python', 'JavaScript', 'Debian Linux', 'Docker'],
    thumbnail: '/projects/thumbnail/ytmp4.png',
    longThumbnail: '/projects/long/ytmp4.png',
    images: [
      '/projects/images/ytmp4-1.png',
      '/projects/images/ytmp4-2.png',
      '/projects/images/ytmp4-3.png',
    ],
    sourceCode: 'https://github.com/HaseeburRehma/ytmp4',
    liveUrl: 'https://youtubetomp4download.com/',
    year: 2025,
    description: `Ytmp4 is a high‑performance YouTube‑to‑MP4 converter built with a TypeScript/React frontend and Python backend. It uses ffmpeg under the hood and runs inside Docker on Debian for rock‑solid reliability.`,
    role: `Lead Developer<br/>
    - Designed and containerized the conversion pipeline using Python and ffmpeg.<br/>
    - Built a responsive React/TypeScript UI with progress tracking.<br/>
    - Automated builds & deployments with Docker and CI/CD pipelines.`,
  },
  {
    title: 'VoiceAi Transcriber',
    slug: 'voiceai',
    techStack: ['React', 'Node.js', 'OpenAI Whisper API', 'TypeScript'],
    thumbnail: '/projects/thumbnail/voiceai.png',
    longThumbnail: '/projects/long/voiceai.png',
    images: [
      '/projects/images/voiceai-1.png',
      '/projects/images/voiceai-2.png',
    ],
    sourceCode: 'https://github.com/HaseeburRehma/VoiceAi',
    liveUrl: '',
    year: 2025,
    description: `VoiceAi leverages OpenAI’s Whisper API to transcribe and analyze audio in real time. It provides speaker‑diarization, keyword extraction, and a clean, searchable transcript UI.`,
    role: `Full‑Stack Developer<br/>
    - Integrated Whisper API for accurate speech‑to‑text conversion.<br/>
    - Built a TypeScript/React frontend with real‑time progress updates.<br/>
    - Developed a Node.js backend for job queuing and transcript storage.`,
  },
  {
    title: '3D Model Simulation',
    slug: 'hand-tracking-opencv',
    techStack: ['Python', 'OpenCV', 'Unity', 'Socket.io', 'MediaPipe', '3D Modeling', 'URP Lighting'],
    thumbnail: '/projects/thumbnail/hand-tracking-opencv.jpeg',
    longThumbnail: '/projects/long/hand-tracking-opencv.jpeg',
    images: [
      '/projects/images/hand-tracking-opencv.jpeg',
      '/projects/images/hand-tracking-opencv-1.jpeg',
      '/projects/images/hand-tracking-opencv-2.jpeg',
    ],
    sourceCode: 'https://github.com/HaseeburRehma/Hand-Tracking-using-openCV',
    liveUrl: '',
    year: 2023,
    description: `A Unity‑based 3D car simulation controlled entirely by real‑time hand gestures. OpenCV and MediaPipe detect your hand in Python, then stream commands via Socket.io into Unity for immersive control.`,
    role: `R&D Lead<br/>
    - Implemented Python/MediaPipe hand‑landmark detection.<br/>
    - Streamed gesture data with Socket.io into Unity scenes.<br/>
    - Configured URP lighting & physics for a smooth simulation.`,
  },
  // === Client Websites ===
  {
    title: 'Peter Thomas Roth',
    slug: 'peter-thomas-roth',
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    thumbnail: '/projects/thumbnail/peter-thomas-roth.png',
    longThumbnail: '/projects/long/peter-thomas-roth.png',
    images: [
      '/projects/images/peter-thomas-roth-1.png',
    ],
    liveUrl: 'https://www.peterthomasroth.com/',
    year: 2024,
    description: `Official e-commerce website for Peter Thomas Roth, showcasing premium skincare products.`,
    role: `Front-End Developer<br/>
      - Implemented custom Shopify theme.<br/>
      - Optimized for performance and SEO.<br/>
      - Integrated third-party review widget.`,
  },
  {
    title: 'Alkabir Developer',
    slug: 'alkabir-developer',
    techStack: ['WordPress', 'Bootstrap', 'PHP', 'JavaScript'],
    thumbnail: '/projects/thumbnail/alkabir-developer.png',
    longThumbnail: '/projects/long/alkabir-developer.png',
    images: [
      '/projects/images/alkabir-developer-1.png',
    ],
    liveUrl: 'https://alkabirdeveloper.com/',
    year: 2024,
    description: `Corporate website for Alkabir Developer, highlighting real estate projects and company portfolio.`,
    role: `WordPress Developer<br/>
      - Built custom layouts with html5, css3, bootstrap and php.<br/>
      - Added dynamic sections via PHP templates.<br/>
      - Ensured cross-browser compatibility.`,
  },
  {
    title: 'WearMeDFit',
    slug: 'wearmedfit',
    techStack: ['Codeignitor', 'Shopify', 'PHP', 'JavaScript'],
    thumbnail: '/projects/thumbnail/wearmedfit.png',
    longThumbnail: '/projects/long/wearmedfit.png',
    images: [
      '/projects/images/wearmedfit.png',
    ],
    liveUrl: 'https://wearmedfit.com/?srsltid=AfmBOop_8IXEFYqx0G09Pww_BVtlXiKNA4Nmzj02_nISIRChXgfLaRcl',
    year: 2024,
    description: `E-commerce platform for WearMeDFit, offering custom-fit wearable products with seamless shopping experience.`,
    role: `php Developer<br/>
      - Customized product pages and checkout flow.<br/>
      - Integrated payment gateways.<br/>
      - Enhanced UX with responsive design.`,
  },
  {
    title: 'Gladiator Password Vault',
    slug: 'gladiator-password-vault',
    techStack: ['React', 'Express.js', 'MongoDB', 'Node.js', 'Tailwind CSS', 'JavaScript'],
    thumbnail: '/projects/thumbnail/gladiator-password-vault.png',
    longThumbnail: '/projects/long/gladiator-password-vault.png',
    images: ['/projects/images/gladiator-password-vault-1.png'],
    sourceCode: 'https://github.com/HaseeburRehma/gladiator-password-vault',
    liveUrl: '',
    year: 2024,
    description: `A secure credential manager that encrypts and stores your passwords in MongoDB. Features include AES encryption, JWT‑based auth, and an intuitive React/Tailwind UI.`,
    role: `Full‑Stack Developer<br/>
    - Designed Express.js REST APIs with AES‑256 encryption.<br/>
    - Architected a MongoDB schema for secure vault storage.<br/>
    - Built React/Tailwind frontend with vault CRUD operations.`,
  },
  {
    title: 'Lead Magnet Generator',
    slug: 'lead-magnet-generator',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    thumbnail: '/projects/thumbnail/lead-magnet-generator.webp',
    longThumbnail: '/projects/long/lead-magnet-generator.webp',
    images: [
      '/projects/images/lead-magnet-generator-1.webp',
      '/projects/images/lead-magnet-generator-2.webp',
    ],
    sourceCode: 'https://github.com/HaseeburRehma/lead-magnet',
    liveUrl: '',
    year: 2025,
    description: `An automated tool that creates on‑brand lead magnets (eBooks, checklists) from template libraries. It generates styled PDF outputs based on user inputs.`,
    role: `Full‑Stack Developer<br/>
    - Built generation engine with Node.js and dynamic templates.<br/>
    - Developed a Next.js UI for selecting templates and live previews.<br/>
    - Styled components with Tailwind and handled PDF output.`,
  },
  {
    title: 'U‑MART Web App',
    slug: 'u-mart-webapp',
    techStack: ['Vue.js', 'Firebase', 'Vuetify', 'JavaScript'],
    thumbnail: '/projects/thumbnail/u-mart-webapp.webp',
    longThumbnail: '/projects/long/u-mart-webapp.webp',
    sourceCode: 'https://github.com/HaseeburRehma/U-MART-WebApp',
    images: [],
    liveUrl: '',
    year: 2024,
    description: `A PWA shopping platform powered by Firebase for authentication, Firestore, and serverless functions. Users enjoy offline support and real‑time inventory updates.`,
    role: `Frontend Developer<br/>
    - Crafted responsive layouts using Vuetify.<br/>
    - Integrated Firebase Auth & Firestore with real‑time listeners.<br/>
    - Implemented service workers for offline capabilities.`,
  },
  {
    title: 'Pacman Game in Unity',
    slug: 'pacman-game-unity',
    techStack: ['C#', 'Unity'],
    thumbnail: '/projects/thumbnail/pacman-game-unity.webp',
    longThumbnail: '/projects/long/pacman-game-unity.webp',
    sourceCode: 'https://github.com/HaseeburRehma/Pacman-Game-in-unity',
    images: [],
    liveUrl: '',
    year: 2022,
    description: `A faithful Pacman remake in Unity featuring custom ghost AI, smooth tile‑based movement, and classic sound effects.`,
    role: `Game Developer<br/>
    - Designed maze layouts and implemented tile movement.<br/>
    - Coded state‑driven ghost AI and power‑up mechanics.<br/>
    - Integrated UI and audio for an authentic arcade feel.`,
  },
  {
    title: 'Computer Vision Experiments',
    slug: 'computer-vision',
    techStack: ['Python', 'OpenCV', 'TensorFlow'],
    thumbnail: '/projects/thumbnail/computer-vision.webp',
    longThumbnail: '/projects/long/computer-vision.webp',
    sourceCode: 'https://github.com/HaseeburRehma/Computer-Vision',
    images: [],
    liveUrl: '',
    year: 2023,
    description: `A suite of CV prototypes covering object detection (YOLO), semantic segmentation, and tracking using OpenCV and TensorFlow.`,
    role: `Lead Researcher<br/>
    - Built YOLO‑based detection pipelines.<br/>
    - Implemented segmentation models with TensorFlow.<br/>
    - Created demo scripts and visualization tools.`,
  },
  {
    title: 'Data Science Portfolio',
    slug: 'data-science-portfolio',
    techStack: ['Python', 'pandas', 'NumPy', 'Matplotlib', 'scikit-learn'],
    thumbnail: '/projects/thumbnail/data-science.webp',
    longThumbnail: '/projects/long/data-science.webp',
    sourceCode: 'https://github.com/HaseeburRehma/Data-Science-',
    images: [],
    liveUrl: '',
    year: 2024,
    description: `A showcase of end‑to‑end DS workflows: EDA, visualization, feature engineering, and ML model deployment.`,
    role: `Data Scientist<br/>
    - Conducted exploratory data analysis and feature selection.<br/>
    - Trained & evaluated regression and classification models.<br/>
    - Developed production‑ready code for model inference.`,
  },


];


export const MY_EXPERIENCE = [
  {
    title: 'Software Developer ',
    company: 'Alev Digital',
    duration: 'Dec 2024 - Present',
  },
  {
    title: 'Associate Software Developer',
    company: 'ENCS',
    duration: 'Jan 2024 - Nov 2024',
  },
  {
    title: 'Software Engineer Intern',
    company: 'MedoConnect',
    duration: 'June 2023 - Dec 2023',
  },


];
