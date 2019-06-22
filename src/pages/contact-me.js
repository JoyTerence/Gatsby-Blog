import React from "react";

import Layout from "../components/layout";

import { MdMail } from "react-icons/md";
import { IconContext } from "react-icons";

const contactPage = () => (
    <Layout>
        <a href="mailto:joyterencebarnes@gmail.com" style={{textDecorations:`none`, color:`inherit`, display: `flex`, justifyContent: `center`}}>
            <div><IconContext.Provider value={{ color:`green`, size: `2em`}}><MdMail/></IconContext.Provider></div><div><h2>{`joyterencebarnes@gmail.com`}</h2></div>
        </a>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <h2>Ph no: +91 8660318813</h2>
        </div>
    </Layout>
)

export default contactPage;