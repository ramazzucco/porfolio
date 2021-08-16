import React from "react";
import './buttons.css';

export default function buttonGoDown(props) {

    const goToNextSection = () => {
        window.scrollTo({
            top: document.querySelector(`.section .${props.section}`).offsetTop,
            behavior: 'smooth'
        })
    }

    return (
        <div className="button_go_down">
            <button title={props.tooltipTitle ? props.tooltipTitle : ''} onClick={goToNextSection} style={props.style ? props.style : {}}>
                <span>&#10096;</span>
                &#10096;
            </button>
        </div>
    );
}
