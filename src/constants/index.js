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
  meteoapp,
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
      "Rédaction et modification d'articles sourcés en langue française. Sujets culturels et de Tech",
    name: "Wikipedia France",
    link: "https://fr.wikipedia.org/wiki/Sp%C3%A9cial:Contributions/Poudlardo",
    image: "http://img3.wikia.nocookie.net/__cb20110206214754/worldlanguages/images/6/63/Wikipedia-logo.png",
  },
  {
    testimonial:
      "Modification cartographiques des voies, infrastructures, et versement de traces GPX",
    name: "OpenStreetMap",
    link: "https://www.openstreetmap.org/user/poudlardo/history",
    image: "https://supporting.openstreetmap.org/wp-content/uploads/2018/12/Public-images-osm_logo.png",
  },
];

const projects = [

  {
    name: "Météo Web App",
    description:
      "Web App Météo responsive utilisant l'API d'OpenWeatherMap. Recherche de lieux dans le monde, affichage des tempéarature actuelles et à venir",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "gray-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "APIs",
        color: "pink-text-gradient",
      },
    ],
    image: meteoapp,
    source_code_link: "https://github.com/Poudlardo/meteo-app",
  },{
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
        name: "web scraping",
        color: "green-text-gradient",
      },
      {
        name: "puppeteer",
        color: "pink-text-gradient",
      },
    ],
    image: allocine,
    source_code_link: "https://github.com/Poudlardo/Allocine2Letterboxd",
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
