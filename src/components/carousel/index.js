import React from 'react';
import Slider from 'react-slick';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGit, FaCode } from 'react-icons/fa';
import {SiAdobeillustrator, SiAdobephotoshop, SiAdobeindesign, SiAdobeaftereffects, SiAdobepremierepro, SiAdobelightroom, SiFigma, SiUnity, SiMongodb} from 'react-icons/si';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

const skills = [
    { id: 1, icon: <FaHtml5 />},
    { id: 2, icon: <FaCss3 />},
    { id: 3, icon: <FaJs />},
    { id: 4, icon: <FaReact />},
    { id: 5, icon: <FaNodeJs />},
    { id: 6, icon: <FaGit />},
    { id: 7, icon: <FaCode />},
    { id: 8, icon: <SiAdobeillustrator />},
    { id: 9, icon: <SiAdobephotoshop />},
    { id: 10, icon: <SiAdobeindesign />},
    { id: 11, icon: <SiAdobelightroom />},
    { id: 12, icon: <SiAdobepremierepro />},
    { id: 13, icon: <SiAdobeaftereffects />},
    { id: 14, icon: <SiFigma />},
    { id: 15, icon: <SiUnity />},
    { id: 16, icon: <SiMongodb />},
];

const SkillsCarousel = () => {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow:10,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0.5,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
      <div className="skills-carousel">
        <Slider {...settings}>
          {skills.map((skill) => (
            <div key={skill.id} className="skill-item">
              <div className='icon text-6xl'>{skill.icon}</div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default SkillsCarousel;