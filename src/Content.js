// import images
import Hero_person from "./assets/images/Hero/ladan1.webp";

import php from "./assets/images/skills/images.jpeg";
import JS from "./assets/images/Skills/JavaScript-logo.png";
import TS from "./assets/images/Skills/Typescript_logo_2020.svg.png";
import reactjs from "./assets/images/Skills/react.png";
import tailwind from "./assets/images/Skills/tailwind.png";
import Next from "./assets/images/Skills/Next.webp";


import project1 from "./assets/images/Projects/steelarvin.png";
import project2 from "./assets/images/Projects/setaregan.png";
import project3 from "./assets/images/projects/FaFa.png";
import person_project from "./assets/images/projects/ladan2.webp";

import steelarvin from "./assets/images/Testimonials/steelarvin.png";
import setaregan from "./assets/images/Testimonials/LogoSetaregan.png";



// import icons from react-icons
import { FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { MdCall } from "react-icons/md";
import { FaGithub } from 'react-icons/fa';
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Developer",
    firstName: "Ladan",
    LastName: "Qasemzadeh",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "4+",
        text: "Years of experience in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "react js",
        logo: reactjs,
      },
      {
        name: "tailwind css",
        logo: tailwind,
      },
      {
        name: "Next.js",
        logo: Next,
      },
      {
        name: "JavaScript",
        logo: JS,
      },
      {
        name: "TypeScript",
        logo: TS,
      },
      {
        name: "php",
        logo: php,
      },
    ],

  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "https://steelarvintav.com/",
        para: "Front-End Developer, React.js, Tailwindcss",
        image: project1,
      },
      {
        title: "https://setaregan.co/",
        para: "UX/UI Developer, Graphic Design",
        image: project2,
      },
      {
        title: "@setareganrose(social media)",
        para: "Photoshop, After Effects, Illustrator",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        img: steelarvin,
        review: "https://steelarvintav.com/",
        name: "Steel ArvinTav Indutrial Company",
      },
      {
        img: setaregan,
        review: "https://setaregan.co/",
        name: "Setaregan Computer Company",
      },
    ],
  },

  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "lqasemzadeh@gmail.com",
        icon: GrMail,
        link: "mailto:lqasemzadeh@gmail.com",
      },
      {
        text: "LQasemzadeh",
        icon: FaGithub,
        link: "https://github.com/LQasemzadeh",
      },
      { text: "LadanQasemzadeh",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/ladanqasemzadeh/",
      },
      {
        text: "+4915734651375",
        icon: MdCall,
        link: "tel:+4915734651375",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
