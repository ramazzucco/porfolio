import React from "react";
import "./portfolio.css";

// Components.
import ButtonGoDown from "../../buttons/ButtonGoDown";
import { Link } from "react-router-dom";

export default function Mywork(props) {
    return (
        <div className="portfolio" id="portfolio">
            <div className="container">
                {props.data.map((item, i) => {
                    return (
                        <div className="card" key={i}>
                            <div className="imgBx" datatext={item.title}>
                                {item.icon}
                            </div>
                            <div className="content">
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                    <Link to={item.link}>
                                        {item.titlelink}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <ButtonGoDown tooltipTitle="go to contact" section="contact" />
        </div>
    );
}
