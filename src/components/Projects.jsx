import { useRef } from "react";
import { content } from "../Content.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/pagination';
import project1 from "../../src/assets/images/Projects/steelarvin.png";
import project2 from "../../src/assets/images/Projects/setaregan.png";
import project3 from "../../src/assets/images/Projects/FaFa1.png";
import project4 from "../../src/assets/images/Projects/ITtower.webp";
import project5 from "../../src/assets/images/Projects/Matin.png";
import project6 from "../../src/assets/images/Projects/AiPfh.png";
import project7 from "../../src/assets/images/Projects/NoMeat.png";
import project8 from "../../src/assets/images/Projects/Markazi.png";







const Projects = () => {
  const { Projects } = content;

    const data = [
        {
            img: project1,
            name: "SteelArvinTav",
            link: "https://steelarvintav.com/",
        },
        {
            img: project4,
            name: "Shiraz IT Tower",
            link: "https://siittir.netlify.app/",
        },
        {
            img: project2,
            name: "Setaregan",
            link: "https://setaregan.co/",
        },
        {
            img: project3,
            name: "FaFa IT",
            link: "https://fafait.net/",
        },
        {
            img: project5,
            name: "Matin",
            link: "https://www.matin.co/",
        },
        {
            img: project6,
            name: "AI@PFH",
            link: "https://ai-pfh.netlify.app/",
        },
        {
            img: project7,
            name: "No Meat Factory",
            link: "https://nomeatfactory.netlify.app/",
        },
        {
            img: project8,
            name: "Markazi",
            link: "https://www.markazi.co/",
        },
    ];

    const slider = useRef(null);

    const settings = {
        accessibility: true,
        dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
        ],
    };

  return <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 py-16 flex flex-col justify-between ">
          <div>
              <h2 className="title" data-aos="fade-down">{Projects.title}</h2>
              <h4 className="subtitle" data-aos="fade-down">{Projects.subtitle}</h4>
              <br/>

          </div>

          <div data-aos="fade-up" className="mt-5">
              <style>
                  {`  
        .slick-next:before, .slick-prev:before {  
            color: gray !important;  
        }  
    `}
              </style>

              <Slider ref={slider} {...settings}>
                  {data.map((e, index) => (
                      <div
                          className="h-[300px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
                          key={index}
                      >
                          <div>
                              <img
                                  src={e.img}
                                  alt="img"
                                  className="h-46 rounded-t-xl w-full"
                              />
                          </div>

                          <div className="flex flex-col justify-center items-center">
                              <a
                                  href={e.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-semibold text-base pt-4 text-blue-600 hover:underline"
                              >
                                  {e.name}
                              </a>
                          </div>
                      </div>
                  ))}
              </Slider>
          </div>
      </div>

  </section>;
};

export default Projects;
