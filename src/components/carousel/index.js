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
    { id: 8, icon: <SiMongodb />},
];

const skills2 = [
  { id: 1, icon: <SiAdobeillustrator />},
  { id: 2, icon: <SiAdobephotoshop />},
  { id: 3, icon: <SiAdobeindesign />},
  { id: 4, icon: <SiAdobelightroom />},
  { id: 5, icon: <SiAdobepremierepro />},
  { id: 6, icon: <SiAdobeaftereffects />},
  { id: 7, icon: <SiFigma />},
  { id: 8, icon: <SiUnity />},
]

const SkillsCarousel = () => {
    const settings = {
      infinite: true,
      speed: 1000,
      slidesToShow:7,
      slidesToScroll: 0.2,
      autoplay: true,
      autoplaySpeed: 0.2,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 6,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 4,
          },
        },
      ],
    };

    const settings2 = { // Settings for the second Slider
      ...settings, // Inherit settings from the first Slider
      autoplaySpeed: 0.1, // Adjust this value for smoother movement
      rtl: true, // Set direction to right-to-left for the second Slider
    };
  
    return (
      <div className="skills-carousel px-48 flex-col">
        <Slider {...settings} className='mb-6'>
          {skills.map((skill) => (
            <div key={skill.id} className="skill-item">
              <div className='icon text-6xl max-sm:text-4xl'>{skill.icon}</div>
            </div>
          ))}
        </Slider>

        <Slider {...settings2}>
          {skills2.map((skill2) => (
            <div key={skill2.id} className="skill-item">
              <div className='icon text-6xl max-sm:text-4xl'>{skill2.icon}</div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default SkillsCarousel;