import React from "react";

import HomeLayout from "../components/home-layout"
import '../components/contacts.css'

import { MdMail } from "react-icons/md";
import { IconContext } from "react-icons";
import { GoOctoface } from "react-icons/go";
import { FaLinkedin, FaMedium, FaFacebook } from "react-icons/fa";

const contactPage = () => (
    <HomeLayout>
        <span className="main-title"> <b> Contact me here ... </b> </span>
        <div className="main-bar-container"></div>
        <div className="contact-container">
          <div className="contact-card">
            <a href="https://in.linkedin.com/in/joyterencebarnes" target="_blank" rel="noopener noreferrer">
              <div className="contact-icon">
                <IconContext.Provider value={{color:`#0077b5`, size: `2em`}}>
                  < FaLinkedin />
                </IconContext.Provider>
              </div>
              <div className="contact-icon-desc">LinkedIn</div>
            </a>
          </div>
          <div className="contact-card">
            <a href="https://github.com/JoyTerence" target="_blank" rel="noopener noreferrer">
              <div className="contact-icon">  
                <IconContext.Provider value={{ color:`gray`, size: `2em`}}>
                  < GoOctoface />
                </IconContext.Provider>
              </div>
              <div className="contact-icon-desc">Github</div>
            </a>
          </div>
          <div className="contact-card">
            <a href="https://medium.com/@joyterencebarnes" target="_blank" rel="noopener noreferrer">
              <div className="contact-icon">
                <IconContext.Provider value={{ color:`black`, size: `2em`}}>
                  < FaMedium />
                </IconContext.Provider>
              </div>
              <div className="contact-icon-desc">Medium</div>
            </a>
          </div>
          <div className="contact-card">
            <a href="https://www.facebook.com/joy.terence.9" target="_blank" rel="noopener noreferrer">
              <div className="contact-icon">
                <IconContext.Provider value={{ color:`#365da8`, size: `2em`}}>
                  < FaFacebook />
                </IconContext.Provider>
              </div>
              <div className="contact-icon-desc">Facebook</div>
            </a>
          </div>
          <div className="contact-card">
            <a href="mailto:joyterencebarnes@gmail.com">
              <div className="contact-icon">
                <IconContext.Provider value={{ color:`green`, size: `2em`}}>
                  <MdMail/>
                </IconContext.Provider>
              </div>
              <div className="contact-icon-desc">E-mail</div>
            </a>
          </div>
        </div>
    </HomeLayout>
)

export default contactPage;