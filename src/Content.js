// import images
import Hero_person from "./assets/images/Hero/ladan1.webp";

import Ae from "./assets/images/Skills/Ae.png";
import Ai from "./assets/images/Skills/Ai.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import tailwind from "./assets/images/Skills/tailwind.png";
import materialUI from "./assets/images/Skills/materialUI.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "../src/assets/images/Projects/steelarvin.png";
import project2 from "./assets/images/projects/setaregan.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/ladan2.webp";

import steelarvin from "./assets/images/Testimonials/steelarvin.png";
import setaregan from "./assets/images/Testimonials/setaregan.png";


import Hireme_person from "./assets/images/Hireme/ladan2 copy.webp";
import Hireme_person2 from "./assets/images/Hireme/ladan2 copy.webp";

// import icons from react-icons
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
    title: "UX/UI Designer",
    firstName: "Ladan",
    LastName: "Qasemzadeh",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "4+",
        text: "Years of Experinse in Web development",
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
        name: "material UI",
        logo: materialUI,
      },
      {
        name: "adobe photoshop",
        logo: ps,
      },
      {
        name: "adobe illustrator",
        logo: Ai,
      },
      {
        name: "adobe afterEffect",
        logo: Ae,
      },
    ],

  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Designer",
        para: "I expertise in web design, specifically using technologies such as React, Tailwind, and Material UI.",
        logo: services_logo1,
      },
      {
        title: "UX / UI Designing",
        para: "I possess strong skills in UX/UI design, enabling me to create intuitive and visually appealing interfaces that prioritize user experience.",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "With my Photoshop skills, I can bring your vision to life and produce high-quality edits that surpass your expectations.",
        logo: services_logo3,
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
        para: "UX/UI Design, React.js, Tailwindcss",
        image: project1,
      },
      {
        title: "https://setaregan.co/",
        para: "UX/UI Design, Graphic Design",
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
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "If you need a UX/UI designer or a web designer, please contact me.",
    btnText: "Hire Me",
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
        text: "+989176778724",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "LQasemzadeh",
        icon: FaGithub,
        link: "https://github.com/LQasemzadeh",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
