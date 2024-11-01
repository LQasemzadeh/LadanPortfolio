import { content } from "../Content.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import steelarvin from "../assets/images/Testimonials/steelarvin.png";
import setaregan from "../assets/images/Testimonials/LogoSetaregan.png";
import ITtower from "../../src/assets/images/Testimonials/SITT.png"




const Testimonials = () => {

    const { Testimonials } = content;
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };



  return <section>
      <div className="md:container px-5 pt-14">
          <h2 className="title" data-aos="fade-down">{Testimonials.title}</h2>
          <h4 className="subtitle" data-aos="fade-down">{Testimonials.subtitle}</h4>
          <br/>

          <div className="mainContainer">
              <Slider {...settings}>
                  <div className="container">
                      <img src={steelarvin} alt="Falat"/>
                  </div>
                  <div className="container">
                      <img src={ITtower} alt="Jam"/>
                  </div>
                  <div className="container">
                      <img src={setaregan} alt="Marun"/>
                  </div>
              </Slider>
          </div>

      </div>

  </section>;
};

export default Testimonials;
