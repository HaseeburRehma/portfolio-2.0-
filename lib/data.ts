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

export const MY_STACK: Record<string, { name: string; icon?: string }[]> = {
  frontend: [
    { name: 'TypeScript', icon: '/logo/ts.png' },
    { name: 'JavaScript', icon: '/logo/js.png' },
    { name: 'React', icon: '/logo/react.png' },
    { name: 'Next.js', icon: '/logo/next.png' },
    { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
    { name: 'GSAP', icon: '/logo/gsap.png' },
    { name: 'Motion', icon: '/logo/framer-motion.png' },
  ],
  mobile: [
    { name: 'React Native', icon: '/logo/react.png' },
    { name: 'Expo' },
  ],
  backend: [
    { name: 'Node.js', icon: '/logo/node.png' },
    { name: 'Express.js', icon: '/logo/express.png' },
    { name: 'PHP / Laravel' },
    { name: 'Python' },
  ],
  database: [
    { name: 'PostgreSQL', icon: '/logo/postgreSQL.png' },
    { name: 'Supabase' },
    { name: 'MySQL', icon: '/logo/mysql.svg' },
    { name: 'MongoDB', icon: '/logo/mongodb.svg' },
  ],
  tools: [
    { name: 'Git', icon: '/logo/git.png' },
    { name: 'Docker', icon: '/logo/docker.svg' },
    { name: 'Playwright' },
    { name: 'Linux' },
  ],
};

export const PROJECTS: IProject[] = [
  {
    title: 'FixDone',
    slug: 'fixdone',
    category: 'Web platform',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'OpenAI', 'Leaflet', 'Resend'],
    thumbnail: '/projects/v2/fixdone/thumb.webp',
    longThumbnail: '/projects/v2/fixdone/1.webp',
    images: ['/projects/v2/fixdone/1.webp', '/projects/v2/fixdone/2.webp', '/projects/v2/fixdone/3.webp'],
    sourceCode: 'https://github.com/HaseeburRehma/fixdone-platform',
    liveUrl: 'https://fixdone-platform.vercel.app',
    year: 2026,
    description: `Lead-to-job platform for a German bathroom-renovation business. A conversion-focused landing page collects consultation requests, and a dashboard turns them into jobs: an OpenAI step scores every incoming lead and returns a structured JSON decision (dispatch now, schedule or follow up), technicians are matched by skill, area and workload, and jobs are shown on a map.`,
    role: `Full-stack developer (freelance)<br/>
    - Built the Next.js App Router front end and the Supabase/PostgreSQL backend.<br/>
    - Added LLM lead scoring with structured output and a fallback when the model call fails.<br/>
    - Zod-validated lead webhook, role-based areas for admins and partners, transactional email with Resend.`,
  },
  {
    title: 'RLS Benchmark',
    slug: 'postgres-rls-benchmark',
    category: 'Open source research',
    techStack: ['PostgreSQL', 'pgbench', 'SQL', 'Python'],
    thumbnail: '/projects/v2/postgres-rls-benchmark/thumb.webp',
    longThumbnail: '/projects/v2/postgres-rls-benchmark/1.webp',
    images: ['/projects/v2/postgres-rls-benchmark/1.webp', '/projects/v2/postgres-rls-benchmark/2.webp', '/projects/v2/postgres-rls-benchmark/3.webp'],
    sourceCode: 'https://github.com/HaseeburRehma/postgres-rls-benchmark',
    year: 2026,
    description: `What does row-level security cost in a multi-tenant app? I compared 7 tenant-isolation setups on 2 million rows with pgbench and saved query plans. Every policy isolated tenants correctly, but the same query took <b>0.19 ms</b> with one policy and <b>225 ms</b> with another, and up to 9 s with a per-row function, because a membership subquery turns into a filter over every row instead of an index condition.`,
    role: `Author<br/>
    - Designed the synthetic schema (200 organisations, 2 million shifts) and the 7 policy variants.<br/>
    - Ran the benchmark, captured EXPLAIN plans and checked isolation for every variant.<br/>
    - Wrote the report with charts and practical rules for writing fast RLS policies.`,
  },
  {
    title: 'Dentovilla Center',
    slug: 'dentovilla',
    category: 'Website',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Motion', 'Lenis'],
    thumbnail: '/projects/v2/dentovilla/thumb.webp',
    longThumbnail: '/projects/v2/dentovilla/1.webp',
    images: ['/projects/v2/dentovilla/1.webp', '/projects/v2/dentovilla/2.webp', '/projects/v2/dentovilla/3.webp'],
    sourceCode: 'https://github.com/HaseeburRehma/Dentovilla-Center',
    liveUrl: 'https://dentovilla-center.vercel.app',
    year: 2026,
    description: `Website for a dental clinic in Islamabad with a calm, editorial design: treatment pages, patient reviews, clinic details and one-tap WhatsApp booking.`,
    role: `Design-to-code and development<br/>
    - Built the responsive layout in Next.js and Tailwind CSS.<br/>
    - Scroll and reveal animations with Motion and Lenis, kept light on mobile.<br/>
    - Optimised images and fonts for fast loads.`,
  },
  {
    title: 'Research Bridge',
    slug: 'research-bridge',
    category: 'Website',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Motion'],
    thumbnail: '/projects/v2/research-bridge/thumb.webp',
    longThumbnail: '/projects/v2/research-bridge/1.webp',
    images: ['/projects/v2/research-bridge/1.webp', '/projects/v2/research-bridge/2.webp', '/projects/v2/research-bridge/3.webp'],
    sourceCode: 'https://github.com/HaseeburRehma/research-bridge',
    liveUrl: 'https://research-bridge-gamma.vercel.app',
    year: 2026,
    description: `Marketing site for a research-support service for MPhil and PhD students: services, a clear four-step process, testimonials and a contact flow.`,
    role: `Front-end developer<br/>
    - Built the site in Next.js 16 with Tailwind CSS and Motion.<br/>
    - Contact form through Web3Forms, so no server keys live in the browser.<br/>
    - Responsive, accessible components and smooth scrolling.`,
  },
  {
    title: 'Dev N Scale',
    slug: 'devnscale',
    category: 'Website',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Motion', 'Resend', 'Vitest'],
    thumbnail: '/projects/v2/devnscale/thumb.webp',
    longThumbnail: '/projects/v2/devnscale/1.webp',
    images: ['/projects/v2/devnscale/1.webp', '/projects/v2/devnscale/2.webp'],
    sourceCode: 'https://github.com/HaseeburRehma/devnscale',
    liveUrl: 'https://www.devnscale.com',
    year: 2026,
    description: `Website for an IT consulting and development agency, built pixel-accurate from Figma: service panels, case studies, client logos and a project enquiry form.`,
    role: `Front-end developer<br/>
    - Turned the Figma design into Next.js 16 components with Tailwind CSS.<br/>
    - Animations with Motion and Lenis; enquiry emails sent through Resend.<br/>
    - Unit tests with Vitest for the form logic.`,
  },
  {
    title: 'Med Wear Fit',
    slug: 'medwearfit',
    category: 'E-commerce & POS',
    techStack: ['Laravel', 'PHP', 'Shopify', 'Zapier'],
    thumbnail: '/projects/v2/medwearfit/thumb.webp',
    longThumbnail: '/projects/v2/medwearfit/1.webp',
    images: ['/projects/v2/medwearfit/1.webp', '/projects/v2/medwearfit/2.webp', '/projects/v2/medwearfit/3.webp', '/projects/v2/medwearfit/4.webp'],
    liveUrl: 'https://wearmedfit.com',
    year: 2025,
    description: `Medical-wear brand in Pakistan (built at ALEV Digital). I developed and maintained the Laravel point-of-sale portal behind the store and connected it to WhatsApp, email, the Shopify web store and Google Sheets through Zapier. The screenshots show the public storefront.`,
    role: `Web developer<br/>
    - Developed and maintained the PHP/Laravel POS portal.<br/>
    - Built order and customer automations across WhatsApp, email, Shopify and Google Sheets.<br/>
    - Optimised the portal to a Google PageSpeed score of 98.`,
  },
  {
    title: 'VoiceAi Transcriber',
    slug: 'voiceai',
    category: 'AI tool',
    techStack: ['React', 'Node.js', 'TypeScript', 'OpenAI Whisper'],
    thumbnail: '/projects/v2/voiceai/thumb.webp',
    longThumbnail: '/projects/v2/voiceai/1.webp',
    images: ['/projects/v2/voiceai/1.webp', '/projects/v2/voiceai/2.webp'],
    sourceCode: 'https://github.com/HaseeburRehma/VoiceAi',
    year: 2025,
    description: `Speech-to-text tool built on OpenAI Whisper: upload or record audio, follow progress live, and get a clean, searchable transcript.`,
    role: `Full-stack developer<br/>
    - Integrated Whisper for transcription.<br/>
    - Built the React/TypeScript front end with live progress updates.<br/>
    - Node.js backend for queuing jobs and storing transcripts.`,
  },
  {
    title: 'Peter Thomas Roth',
    slug: 'peter-thomas-roth',
    category: 'E-commerce',
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    thumbnail: '/projects/v2/peter-thomas-roth/thumb.webp',
    longThumbnail: '/projects/v2/peter-thomas-roth/1.webp',
    images: ['/projects/v2/peter-thomas-roth/1.webp'],
    liveUrl: 'https://www.peterthomasroth.com/',
    year: 2024,
    description: `Storefront work for the US skincare brand Peter Thomas Roth (at ENCS Networks), plus a product-knowledge chatbot that classifies customer questions against a structured product knowledge base.`,
    role: `Front-end developer<br/>
    - Shopify theme work in Liquid, JavaScript and CSS.<br/>
    - Performance and SEO improvements.<br/>
    - Built the product-knowledge chatbot.`,
  },
  {
    title: 'Gladiator Password Vault',
    slug: 'gladiator-password-vault',
    category: 'Security app',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
    thumbnail: '/projects/v2/gladiator-password-vault/thumb.webp',
    longThumbnail: '/projects/v2/gladiator-password-vault/1.webp',
    images: ['/projects/v2/gladiator-password-vault/1.webp'],
    year: 2024,
    description: `A credential-management (password vault) web app built at ENCS Networks for storing and organising sensitive logins.`,
    role: `Front-end developer<br/>
    - Built the vault UI in React, TypeScript and Vite.<br/>
    - Accessible components with Tailwind CSS and shadcn/ui.<br/>
    - Search, grouping and secure copy flows for credentials.`,
  },
  {
    title: 'Alkabir Developer',
    slug: 'alkabir-developer',
    category: 'Website',
    techStack: ['WordPress', 'PHP', 'Bootstrap', 'JavaScript'],
    thumbnail: '/projects/v2/alkabir-developer/thumb.webp',
    longThumbnail: '/projects/v2/alkabir-developer/1.webp',
    images: ['/projects/v2/alkabir-developer/1.webp', '/projects/v2/alkabir-developer/2.webp'],
    liveUrl: 'https://alkabirdeveloper.com/',
    year: 2024,
    description: `Corporate website for Alkabir Developer, a real-estate developer, presenting its housing projects and company profile.`,
    role: `WordPress developer<br/>
    - Custom layouts with PHP templates, HTML, CSS and Bootstrap.<br/>
    - Dynamic project sections managed from WordPress.<br/>
    - Cross-browser and responsive testing.`,
  },
  {
    title: '3D Model Simulation',
    slug: 'hand-tracking-opencv',
    category: 'Final-year project',
    techStack: ['Python', 'OpenCV', 'MediaPipe', 'Unity', 'C#'],
    thumbnail: '/projects/v2/hand-tracking-opencv/thumb.webp',
    longThumbnail: '/projects/v2/hand-tracking-opencv/1.webp',
    images: ['/projects/v2/hand-tracking-opencv/1.webp', '/projects/v2/hand-tracking-opencv/2.webp', '/projects/v2/hand-tracking-opencv/3.webp'],
    sourceCode: 'https://github.com/HaseeburRehma/Hand-Tracking-using-openCV',
    year: 2023,
    description: `My final-year project (graded A): a 3D scene in Unity controlled entirely by real-time hand gestures. A Python pipeline with OpenCV and MediaPipe detects the hand and streams commands into Unity.`,
    role: `Developer<br/>
    - Hand-landmark detection and gesture classification in Python.<br/>
    - Real-time streaming of gesture commands into Unity.<br/>
    - Unity scene, physics and lighting.`,
  },
];


export const MY_EXPERIENCE = [
  {
    title: 'Full-Stack Developer',
    company: 'Digital To Design',
    duration: 'Feb 2026 - Present',
  },
  {
    title: 'Web Developer',
    company: 'ALEV Digital',
    duration: 'Dec 2024 - Jan 2026',
  },
  {
    title: 'Web Application Developer',
    company: 'ENCS Networks',
    duration: 'Sep 2023 - Dec 2024',
  },
  {
    title: 'Software Engineer Intern',
    company: 'MedoConnect',
    duration: 'June 2023 - Dec 2023',
  },
];
