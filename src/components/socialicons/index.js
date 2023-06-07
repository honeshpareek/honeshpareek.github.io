import React from "react";
import "./style.css";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
  FaWhatsapp
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon flex-col-reverse mt-3">
      <ul className="mt-4">
        {socialprofils.whatsapp && (
          <li>
            <a href={socialprofils.whatsapp} target="_blank">
              <FaWhatsapp />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github} target="_blank">
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin} target="_blank">
              <FaLinkedin />
            </a>
          </li>
        )}
        
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
