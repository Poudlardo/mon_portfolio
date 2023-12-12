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
  dedra,
  ohparleur,
  odinproject,
  freecodecamp,
  pomodoro,
  dedrasite,
  allocine,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Expertise",
  },
  {
    id: "work",
    title: "Expériences",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Développement Web/Mobile",
    icon: web,
  },
  {
    title: "Développement Frontend (ReactJs)",
    icon: mobile,
  },
  {
    title: "Développement Backend (NodeJS)",
    icon: backend,
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
    {
    title: "Créateur, Développeur Frontend",
    company_name: "OhParleur!",
    icon: ohparleur,
    iconBg: "#FFFFFF",
    link: "https://web.archive.org/web/20230130210855/https:/ohparleur.fr/",
    date: "Septembre 2018 - Juillet 2022",
    points: [
      "Installation et développement autour du CMS WordPress",
      "Développement de composants en HTML / CSS sur le site",
      "Création d'une application web de génération d'images en React",
      "Design de composants et de contenu sur Photoshop et Figma. Logistique sur Notion",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "freeCodeCamp",
    icon: freecodecamp,
    iconBg: "#0B0923",
    link: "https://www.freecodecamp.org/Poudlardo",
    date: "Janvier 2022 - Juillet 2023",
    points: [
      "3 certifications obtenues : Front End Development Libraries, JavaScript Algorithms and Data Structures, Responsive Web Design",
      "900 heures d'exercices de codage accomplies en HTML5/CSS3 et en algorithmie Javascript",
      "Manipulation de structures de données (Arrays, Objects), APIs REST",
      "Projets finaux (Markdown previewer, Random quote machine, Cash register algorithm, etc.)",
    ],
  },
  {
    title: "Parcours Full Stack JavaScript",
    company_name: "The Odin Project",
    icon: odinproject,
    iconBg: "#111827",
    link: "https://www.theodinproject.com/paths",
    date: "Janvier 2022 - Juillet 2023",
    points: [
      "Réalisations de sites statiques et d'applications web (Calculatrice, Paint, Jeu du morpion, Chronomère pomodoro, etc.)",
      "Etudes approfondies de notions Javascript avancées (Async-await, APIs, Module Pattern, Factory functions, etc.)",
    ],
  },
,
  {
    title: "Développeur Web React",
    company_name: "Dedra Games",
    icon: dedra,
    iconBg: "#FFFFFF",
    link: "https://dedragames.onrender.com",
    date: "Mai 2023 - Octobre 2023",
    points: [
      "Refonte complète du site internet du studio de jeu vidéo",
      "Maquettage du site sur Figma",
      "Stack technique : HTML/CSS, ReactJS, NodeJS, Windows, Ubuntu, Git, librairies NPM, Visual Studio, MaterialUI",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [

  {
    name: "Site Web Dedra Games",
    description:
      "Site vitrine du studio de jeu vidéo parisien Dedra Games.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dedrasite,
    source_code_link: "https://github.com/Poudlardo/dedr4-site/",
  },
  {
    name: "Allocine2Letterboxd",
    description:
      "Script qui permet d'importer sur Letterboxd sa liste de films vus et notés sur Allociné, vers Letterboxd. Les données 'scrapées' sont convertis en un fichier .csv",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "scraping",
        color: "green-text-gradient",
      },
      {
        name: "puppeteer",
        color: "pink-text-gradient",
      },
    ],
    image: allocine,
    source_code_link: "https://https://github.com/Poudlardo/Allocine2Letterboxd",
  },
  {
    name: "Chronomètre Pomodoro",
    description:
      "Web App d'un chronomètre pomodoro (25 minutes de travail / 5min de pause).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "font-awesome",
        color: "pink-text-gradient",
      },
    ],
    image: pomodoro,
    source_code_link: "https://github.com/Poudlardo/pomodoro_clock",
  }
];

export { services, technologies, experiences, testimonials, projects };
