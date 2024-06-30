import { useRef } from "react";
import { content } from "../Content.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/pagination';
import project1 from "../../src/assets/images/Projects/steelarvin.png";
import project2 from "../../src/assets/images/Projects/setaregan.png";
import project3 from "../../src/assets/images/Projects/img3.png";







const Projects = () => {
  const { Projects } = content;

    const data = [
        {
            img: project1,
            name: "UX/UI Design, React.js, Tailwindcss",
        },
        {
            img: project2,
            name: "UX/UI Design, Graphic Design",
        },
        {
            img: project3,
            name: "Photoshop, After Effects, Illustrator",
        },
    ];

    const slider = useRef(null);

    const settings = {
        accessibility: true,
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
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
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between ">
          <div>
              <h2 className="title" data-aos="fade-down">{Projects.title}</h2>
              <h4 className="subtitle" data-aos="fade-down">{Projects.subtitle}</h4>
              <br/>
          </div>
          <div data-aos="fade-up" className=" mt-5">
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
                                  className=" h-56 rounded-t-xl w-full"
                              />
                          </div>

                          <div className=" flex flex-col justify-center items-center">
                              <h1 className=" font-semibold text-lg pt-4">{e.name}</h1>
                          </div>
                      </div>
                  ))}
              </Slider>
          </div>
      </div>

  </section>;
};

export default Projects;
