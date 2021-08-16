import React from "react";
import "./contact.css";

export default function Contact(props) {
    const { title, subtitle, socialnetwork } = props.data;

    return (
        <div className="contact" id="contact">
            <h1>{title}</h1>
            <div className="emailme">
                <h2>&#10095; {subtitle} &#10094;</h2>
                <a href="mailto:ramazzucco@hotmail.com">
                    ramazzucco@hotmail.com
                </a>
            </div>
            <div className="social-media">
                {socialnetwork.map((item, i) => {
                    return (
                        <ul key={i}>
                            <li>
                                <a href={item.link} {...item.attributeslink}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span>{ item.icon }</span>
                                </a>
                            </li>
                        </ul>
                    );
                })}
            </div>
            <p>Rosario, Santa Fe, Zona norte - CP 2000</p>
        </div>
    );
}
