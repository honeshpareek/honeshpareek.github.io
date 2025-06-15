import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

// get both pupils
const pupils = document.querySelectorAll(".eye .pupil");
window.addEventListener("mousemove", (e) => {
  pupils.forEach((pupil) => {
    // get x and y postion of cursor
    var rect = pupil.getBoundingClientRect();
    var x = (e.pageX - rect.left) / 30 + "px";
    var y = (e.pageY - rect.top) / 30 + "px";
    pupil.style.transform = "translate3d(" + x + "," + y + ", 0px)";
  });
});


export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
          <meta name="google-site-verification" content="SYeZBg5U-ovWM4OEaAmSOkEgcBd4MZzz7364VnQS2TI" />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div className="h_bg-image flex items-center order-1 order-lg-2 h-100">
             <div class="eyes">
                  <div class="eye">
                  <div class="pupil"></div>
                </div>
                <div class="eye">
                  <div class="pupil"></div>
                </div>
              </div>
          </div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="text-xl mb-5 max-sm:mb-2">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x inline-flex gap-3"> 
                  <span>I am a</span>
                  <span>
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                        introdata.animated.fourth,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 5,
                      
                    }}
                  />
                  </span>
                </h1>
                <p className="mb-5 hyphens-none max-sm:mb-2">{introdata.description}</p>
                <div className="intro_btn-action mt-3 flex gap-5 justify-between max-sm:flex-row max-sm:gap-1">
                  <Link to="/portfolio" className="text_2 text-xs">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
