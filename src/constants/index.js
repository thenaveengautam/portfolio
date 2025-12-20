import {
  nitk,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  tda,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  ethindia,
  genai,
  genai2,
  webdev,
  llm,
  full_stack,
  res,
  chatai,
  job,
  resumeanaly,
  collab
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiSolidity,
  SiNetlify,
  SiVercel,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiAmazonaws,
  SiDigitalocean,
  SiDocker,
  SiApache,
  SiNginx,
  SiReactrouter,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiRender,
} from "react-icons/si";

import {
  FaHardHat,
  FaRust
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import {
  FaGolang
} from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1NlqwetjUgmO7bR6aA5dfLRMFKcdcWGO0/view?usp=drive_link";
export const repoLink = "";

export const callToAction = "https://www.linkedin.com/in/thenaveengautam/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Certifications",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: "IFTM University",
    degree: "Bachelor of Technology",
    duration: "October 2022 - Current",
    content1: "Domain: Full-Stack Web Development"
    // content1: "Major: Electronics and Communication Engineering",
    // content2: "Minor: Information Technology",
  },
  {
    id: "education-2",
    icon: pba,
    title: "OPGM Senior Seconday School",
    degree: "",
    duration: "April 2021 - March 2022",
    // content1: "Graduated with a distinction in the fifth cohort of the OPGM Senior Seconday School at the National University of Singapore.",
    content1: "Intermediate"
  },
  {
    id: "education-2",
    icon: pba,
    title: "OPGM Senior Seconday School",
    degree: "",
    duration: "April 2019 - March 2020",
    // content1: "Graduated with a distinction in the fifth cohort of the OPGM Senior Seconday School at the National University of Singapore.",
    content1: "High School"
  },
];

// Add your past achievments here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: genai,
    event: "Generative AI Engineering",
    position: "IBM",
    content1: "Generative AI Architectures & Large Language Models",
    content2: "Tokenization, Attention, Fine-Tuning & Prompt Engineering",
    content3: "RAG Apps with PyTorch, HuggingFace & LangChain",
    project: "https://coursera.org/verify/professional-cert/TQION33DZMNY",
  },
  {
    id: "a-2",
    icon: genai2,
    event: "Generative AI for Software Developers",
    position: "Microsoft",
    content1: "Boost productivity with GitHub Copilot",
    content2: "Apply AI in code review & development workflows",
    content3: "Practical generative AI skills for real-world engineering",
    project: "https://coursera.org/verify/specialization/WFDM0NGRQ73C",
  },
  {
    id: "a-3",
    icon: webdev,
    event: "HTML, CSS, and Javascript for Web Developers",
    position: "Johns Hopkins University",
    content1: "HTML, CSS & JavaScript fundamentals",
    content2: "Responsive layouts & mobile-first design",
    content3: "DOM, events & interactive web development",
    project: "https://coursera.org/verify/PRBK1SBT9VOG",
  },
  {
    id: "a-4",
    icon: full_stack,
    event: "Foundations of Coding Full-Stack",
    position: "Coursera",
    content1: "Full-Stack Web Development Fundamentals",
    content2: "Frontend & Backend Integration",
    content3: "Real-World Web App Architecture & Logic Building",
    project: "https://coursera.org/verify/1GSRF7W09SKQ",
  },
  {
    id: "a-5",
    icon: llm,
    event: "Introduction to Large Language Models",
    position: "Google Cloud",
    content1: "Fundamentals of Large Language Models (LLMs)",
    content2: "Prompt Engineering & Model Capabilities",
    content3: "Real-world AI & NLP Use Cases",
    project: "https://coursera.org/verify/IJOPLAXM1I81",
  },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-7",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-6",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-8",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-9",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-10",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-12",
        icon: SiTypescript,
        name: "TypeScript",
      }
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-2",
        icon: SiNodedotjs,
        name: "Node.js",
      },
      {
        id: "f-3",
        icon: SiExpress,
        name: "Express.js",
      },
      {
        id: "f-4",
        icon: SiReact,
        name: "React",
      },
      {
        id: "t-5",
        icon: SiVite,
        name: "Vite",
      },
      {
        id: "f-6",
        icon: SiReactrouter,
        name: "React Router",
      },
      {
        id: "f-7",
        icon: SiRedux,
        name: "Redux",
      },
      {
        id: "f-8",
        icon: SiNextdotjs,
        name: "Next.js",
      },
    ],
  },
  {
    title: "Tools/Platforms",
    items: [
      {
        id: "t-1",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-5",
        icon: SiVercel,
        name: "Vercel",
      },
      {
        id: "t-6",
        icon: SiRender,
        name: "Render",
      },
      {
        id: "t-7",
        icon: SiDigitalocean,
        name: "DigitalOcean",
      },
      {
        id: "t-8",
        icon: SiAmazonaws,
        name: "AWS",
      },
      {
        id: "t-9",
        icon: SiNginx,
        name: "Nginx",
      },
      {
        id: "t-10",
        icon: SiDocker,
        name: "Docker",
      },
      {
        id: "t-11",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-12",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-13",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "Cloud Computing",
    logo: oracle,
    link: "https://www.oracle.com/in/",
    positions: [
      {
        title: "IIT Kharagpur",
        duration: "October 2024",
        content: [
          {
            text: "Working in the Database as a Service Control Plane team for Oracle Cloud Infrastructure.",
            link: "",
          },
        ],
      },
      {
        title: "Member of Technical Staff Intern",
        duration: "May 2023 - Jul 2023",
        content: [
          {
            text: "Worked with the Exadata Cloud@Customer team in the Database Unit.",
            link: "",
          },
          {
            text: "Wrote APIs in Java to help gracefully migrate a running ExaC@C infrastructure to a new region in the case of a region failure",
            link: ""
          }
        ],
      },
    ],
  },
  {
    organisation: "Averlon",
    logo: averlon,
    link: "https://averlon.ai/",
    positions: [
      {
        title: "Software Developer Intern",
        duration: "Sept 2023 - Feb 2024",
        content: [
          {
            text: "Added support for the discoverability of Microsoft Azure assets utilising Go and Gremlin.",
            link: ""
          },
          {
            text: "Extended support for Azure for reachability analysis of assets for cloud security posture management.",
            link: ""
          }
        ],
      },
    ],
  },
  {
    organisation: "IRIS, NITK",
    logo: iris,
    link: "https://iris.nitk.ac.in/about_us",
    positions: [
      {
        title: "Tech Lead",
        duration: "Apr 2023 - Apr 2024",
        content: [
          {
            text: "Led a team of 40+ students in digitizing administrative, academic and alumni-related work.",
            link: "",
          },
          {
            text: "Managed all phases of Software Development Life Cycle (SDLC) for 15+ modules.",
            link: "",
          },
        ],
      },
      {
        title: "Web Lead",
        duration: "Apr 2022 - Present",
        content: [
          {
            text: "Managed a team of 6 student developers while also overlooking multiple modules.",
            link: "",
          },
        ],
      },
      {
        title: "Web Developer",
        duration: "Nov 2021 - Apr 2022",
        content: [
          {
            text: "Added Conditional Fields support to the Forms Module.",
            link: "",
          },
        ],
      },
      {
        title: "Web Developer Intern",
        duration: "Jun 2021 - Oct 2021",
        content: [
          {
            text: "Developed a multi-role approval flow system to facilitate data collection and display on the Institute's Department Websites.",
            link: "",
          },
        ],
      },
    ],
  }
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Chat AI",
    github: "https://github.com/thenaveengautam/chat-ai",
    link: "https://chat-ai-gray-eight.vercel.app/",
    image: chatai,
    content:
      "Smart AI chatbot for instant queries, conversations, and productivity support.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTypescript,
        name: "TypeScript"
      },
      {
        id: "icon-3",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-4",
        icon: SiVite,
        name: "Vite"
      },
      {
        id: "icon-5",
        icon: SiNodedotjs,
        name: "Node.js"
      },
      {
        id: "icon-6",
        icon: SiExpress,
        name: "Express.js"
      },
      {
        id: "icon-7",
        icon: SiOpenai,
        name: "OpenAI"
      },
    ],
  },
  {
    id: "project-2",
    title: "JobReady AI",
    github: "https://github.com/thenaveengautam/JobReady-AI",
    link: "https://job-ready-ai-self.vercel.app",
    image: job,
    content:
      "AI-powered platform for job readiness and career growth.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript"
      },
    ],
  },
  {
    id: "project-3",
    title: "ResumeAnalyzer AI",
    github: "https://github.com/thenaveengautam/ResumeAnalyzer-AI",
    link: "https://resume-analyzer-ai-psi.vercel.app",
    image: resumeanaly,
    content:
      "Smart AI tool to analyze and improve your resume.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiReactrouter,
        name: "React Router"
      },
      {
        id: "icon-3",
        icon: SiTypescript,
        name: "TypeScript"
      },
      {
        id: "icon-4",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
    ],
  },
  {
    id: "project-4",
    title: "Zaika",
    github: "https://github.com/thenaveengautam/Zaika",
    link: "https://thenaveengautam.github.io/Zaika/",
    image: res,
    content:
      "Geolocate nearby restaurants and order food online.",
    stack: [
      {
        id: "icon-1",
        icon: SiHtml5,
        name: "HTML5"
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
      {
        id: "icon-3",
        icon: SiCss3,
        name: "CSS3"
      },
    ],
  },
  {
    id: "project-5",
    title: "Collaborative Tool",
    github: "https://github.com/thenaveengautam/collaborative-tool",
    link: "https://thenaveengautam.github.io/collaborative-tool/",
    image: collab,
    content:
      "Real-time collaboration platform for teams and projects.",
    stack: [
      {
        id: "icon-1",
        icon: SiNodedotjs,
        name: "Node.js"
      },
      {
        id: "icon-2",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-3",
        icon: SiCss3,
        name: "CSS3"
      },
    ],
  },
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have induldged in like - student clubs, joining research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "Devfolio",
    title: "UniDAO Lead",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
      },
      {
        text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
      },
    ],
    logo: devfolio,
  },
  {
    id: 2,
    organisation: "Google Developer Student Club, NITK",
    title: "Co-Chair",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
        link: "",
      },
      {
        text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
        link: "https://incident.nitk.ac.in/",
      },
    ],
    logo: gdsc,
  },
  {
    id: 3,
    organisation: "Genesis, NITK",
    title: "Competitions Head",
    duration: "Sep 2021 - Present",
    content: [
      {
        text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
        link: "",
      },
      {
        text: "Won 7 inter-college solo dance competitions",
        link: "",
      },
    ],
    logo: genesis,
  },
  {
    id: 4,
    organisation: "IRIS, NITK",
    title: "Tutor",
    duration: "Jan 2022 - Jan 2022",
    content: [
      {
        text: "Mentored 150+ students in a month-long Web Development and Ruby on Rails Bootcamp",
        link: "https://github.com/IRIS-NITK/IRIS-RoR-Bootcamp-2021",
      },
    ],
    logo: iris,
  },
  {
    id: 5,
    organisation: "E-Cell, NITK",
    title: "Executive Member",
    duration: "Sep 2021 - Apr 2022",
    content: [
      {
        text: "Organised the season 3 of the E-Cell NITK Podcast",
        link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
      },
      {
        text: "Member of the Sponsorship and E-Talks team for E-Summit'22",
        link: "",
      },
    ],
    logo: ecell,
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/thenaveengautam/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/thenaveengautam",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "https://mailto:dmnaveengautam@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://www.x.com/thenaveengautam",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/iamnaveen._",
  },
];

// Your professional summary
export const aboutMe = {
    name: "Naveen Gautam",
    githubUsername: 'mittal-parth',
    // tagLine: "MTS-1 @Oracle | ex-Tech Lead @IRIS,NITK | ETHIndia'22,24 Winner | 8x Hackathon Winner | NITK'24 | PBA-5",
    intro: "Software Developer from India who is either busy improving his craft or pondering over the next big idea."
}

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format. 
export const includedRepos = ['publiclab/plots2', 'zulip/zulip', 'paritytech/polkadot-sdk'];
