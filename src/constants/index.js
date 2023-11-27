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
  tailwind,
  nodejs,
  git,
  figma,
  carrent,
  jobit,
  poohport,
  threejs,
  blender,
  tripguide,
  gofive,
  university,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "blender",
    icon: blender,
  },
];

const experiences = [
  {
    title: "Bachelor of Engineering Software Engineering",
    company_name: "Thammasat University Rangsit Campus",
    icon: university,
    iconBg: "#FFD13E",
    date: "August 2019 - August 2024",
    points: [
      "Senior with the fourth-year academic status in the Faculty of Engineering in Software Engineering ",
      "Expected to extend studying duration to August 2024"],
  },
  {
    title: "Intern as Front-end developer",
    company_name: "Gofive Co. Ltd.",
    icon: gofive,
    iconBg: "#FFFFFF",
    date: "June 2023 - July 2023",
    points: [
      "Developed Angular applications using TypeScript in collaboration with backend developers and testers within an Agile team.",
      "Implemented Micro frontend architecture to architect and construct modular, scalable, and maintainable front-end applications.",
      "Generated comprehensive documentation utilizing Notion to facilitate clear communication and knowledge sharing within the team.",
      "Implemented Design Systems to guarantee uniformity, efficiency, and a superior user experience across applications.",
      "Implemented GitFlow for optimized version control and seamless collaboration within the development process.",
      "Utilized Jira for issue management, fostering enhanced teamwork and ensuring the success of projects.",
    ],
  },
];

const projects = [
  {
    name: "Design UI, UX for Mobile application",
    description:
      "Make a demo. Application to serve as a single platform for communicating shifting times for nurse ",
    tags: [
      {
        name: "UX,UI design",
        color: "blue-text-gradient",
      },
      {
        name: "College group project",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
    url: "https://www.figma.com/proto/k8nDZVaSThiIqWeZQqqNmB/app-(Copy)?node-id=181-6473&scaling=scale-down&page-id=0%3A1&starting-point-node-id=181%3A6473&show-proto-sidebar=1",
  },
  {
    name: "Design UI, UX for MOC Application",
    description: "Create MOC Application for Android device ",
    tags: [
      {
        name: "UX,UI design",
        color: "blue-text-gradient",
      },
      {
        name: "College group project",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/SF342-Project",
    url: "https://www.figma.com/file/UKwocP2h8zjBTEbAgsiwkR/MOC-APP?node-id=0%3A1",
  },
  {
    name: "Full stack developer for an online platform",
    description: "Create an online platform for sharing images",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss ",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "College group project",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/6210743073/Phototo",
    url: "https://phototo.netlify.app/",
  },
  {
    name: "Full stack developer Crafting a Comprehensive Online Portfolio",
    description:
      "Develop an online professional web portfolio to effectively represent my professional profile and personal accomplishments",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss ",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "College group project",
        color: "green-text-gradient",
      },
    ],
    image: poohport,
    source_code_link: "https://github.com/6210743073/poohport",
    url: "https://poohmipun.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
