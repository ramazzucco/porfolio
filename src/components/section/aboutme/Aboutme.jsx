import React from "react";
import "./aboutme.css";

// Components.
import ButtonGoDown from "../../buttons/ButtonGoDown";
import { useHistory } from "react-router-dom";

export default function Aboutme(props) {

    const {title, subtitle, text, cite, button} = props.data;
    const history = useHistory();

    return (
        <div className="aboutme" id="aboutme">
            <div className="content">
                <div className="titles">
                    <h1>{ title }</h1>
                    <br />
                    <br />
                    <h2>{ subtitle }</h2>
                </div>
                <p>{ text }</p>
                <cite>{ cite }</cite>
                <button className="button-more" onClick={() => history.push('/Portofolio/moreaboutme')}>
                    <span>{ button }</span>
                    <span>{ button }</span>
                </button>
                <ButtonGoDown
                    tooltipTitle="go to portfolio"
                    section="portfolio"
                />
            </div>
        </div>
    );
}
