import React from "react";

import Layout from "../components/layout";

import { MdMail } from "react-icons/md";
import { IconContext } from "react-icons";
import { GoOctoface } from "react-icons/go";
import { FaLinkedin, FaMedium, FaFacebook } from "react-icons/fa";

const contactPage = () => (
    <Layout>
        <div style={{display: "flex", justifyContent: "space-between", padding:`5em 1.0875rem 0rem`}}>
            <a href="https://in.linkedin.com/in/joyterencebarnes" target="_blank" rel="noopener noreferrer">
              <IconContext.Provider value={{color:`#0077b5`, size: `2em`}}>
                < FaLinkedin />
              </IconContext.Provider>
            </a>
            <a href="https://github.com/JoyTerence" target="_blank" rel="noopener noreferrer">
              <IconContext.Provider value={{ color:`gray`, size: `2em`}}>
                < GoOctoface />
              </IconContext.Provider>
            </a>
            <a href="https://medium.com/@joyterencebarnes" target="_blank" rel="noopener noreferrer">
              <IconContext.Provider value={{ color:`black`, size: `2em`}}>
                < FaMedium />
              </IconContext.Provider>
            </a>
            <a href="https://www.facebook.com/joy.terence.9" target="_blank" rel="noopener noreferrer">
              <IconContext.Provider value={{ color:`#365da8`, size: `2em`}}>
                < FaFacebook />
              </IconContext.Provider>
            </a>
            <a href="mailto:joyterencebarnes@gmail.com" style={{textDecorations:`none`, color:`inherit`, display: `flex`, justifyContent: `center`}}>
                <IconContext.Provider value={{ color:`green`, size: `2em`}}>
                    <MdMail/>
                </IconContext.Provider>
            </a>
        </div>
        <div style={{display: "flex", justifyContent: "space-between", fontFamily: `sans-serif`, padding:`0em 0.5rem 0rem`}}>
            <p>
                LinkedIn
            </p>
            <p>
                Github
            </p>
            <p>
                Medium
            </p>
            <p>
                Facebook
            </p>
            <p>
                Email
            </p>
        </div>
    </Layout>
)

export default contactPage;