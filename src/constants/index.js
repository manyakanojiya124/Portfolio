import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI & Data Enthusiast",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Machine Learning Learner",
    icon: backend,
  },
  {
    title: "Hackathon Participant",
    icon: creator,
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Python", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  { name: "Three JS", icon: threejs },
  { name: "Docker", icon: docker },
];

const experiences = [
  {
    title: "AI & Data Project Trainee Intern",
    company_name: "Cron Systems Pvt. Ltd. — New Delhi, India",
    icon: starbucks,
    iconBg: "#383E56",
    date: "—",
    points: [
      "Worked under the mentorship of Mr. Alankrit Mathur, Senior Software Engineer & Team Lead.",
      "Contributed to AI-driven and data-centric projects to enhance data processing accuracy and workflow efficiency.",
      "Strengthened understanding of machine learning models, automation workflows, and cloud-based deployment concepts.",
      "Gained hands-on experience in debugging, performance optimization, and real-world project development.",
      "Demonstrated adaptability, teamwork, and professional discipline throughout the internship.",
    ],
  },
  ];

const testimonials = [
  {
    testimonial:
      "Manya’s innovative thinking and technical curiosity make her an exceptional learner and problem solver.",
    name: "Alankrit Mathur",
    designation: "Senior Software Engineer & Team Lead",
    company: "Cron Systems Pvt. Ltd.",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    testimonial:
      "Her ability to grasp complex AI and ML workflows quickly stood out during her internship.",
    name: "Team Cron",
    designation: "Engineering Team",
    company: "Cron Systems Pvt. Ltd.",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    testimonial:
      "Manya’s leadership and creativity during hackathons made a lasting impression on everyone involved.",
    name: "Hackathon Jury",
    designation: "Event Panel",
    company: "SGT University",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
];

const projects = [
  {
    name: "MEDSDB – Decentralized Medical Data Platform",
    description:
      "Blockchain-based platform enabling secure and transparent medical data sharing. Developed during The Glitter Idea Hackathon.",
    tags: [
      { name: "blockchain", color: "blue-text-gradient" },
      { name: "decentralization", color: "green-text-gradient" },
      { name: "hackathon", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/manyakanojiya124",
  },
  {
    name: "IoT Smart System – Innoverse’36 Hackathon",
    description:
      "IoT-driven automation and monitoring system integrating web and mobile interfaces for smart control and data visualization.",
    tags: [
      { name: "IoT", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "android", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/manyakanojiya124",
  },
  {
    name: "AI Internship Projects – Cron Systems",
    description:
      "Worked on AI and Data Science workflows focusing on model accuracy, automation, and deployment optimization.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "machinelearning", color: "green-text-gradient" },
      { name: "cloud", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://www.linkedin.com/in/manya-kanojia-7a0334290/",
  },
];

export { services, technologies, experiences, testimonials, projects };
