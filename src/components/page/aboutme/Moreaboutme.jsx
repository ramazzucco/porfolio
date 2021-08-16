import React, { useEffect } from "react";
import './moreaboutme.css';

// Components.
import StickyMenu from "../../sticky_menu/StickyMenu";

export default function Moreaboutme(props) {

    useEffect(() => {
        window.scrollTo({top: 0})
    },[])

    const { certificate, studies } = props.data;

    return (
        <div className="moreaboutme">
            <div className="certificate">
                <div className="text">
                    <p>{ certificate.text }</p>
                    <a href={ certificate.link.url } target="_blank" rel="noopener noreferrer">{ certificate.link.title }</a>
                </div>
                <div className="diploma">
                    <a href={ certificate.diploma.url }>
                        <img src={ certificate.diploma.image } alt="Diploma" width="100%" />
                    </a>
                </div>
            </div>
            <div className="studies">
                <div className="fullstack">
                    <h4>{ studies.fullstack.title }</h4>
                    {
                        studies.fullstack.tools.map( (tool, i) => {
                            return (
                                <div className={ tool.class } key={i}>
                                    <h5>{ tool.title }</h5>
                                    <ul>
                                        {
                                            tool.icons.map( (icon, i) => {
                                                return (
                                                    <li key={i}>
                                                        {icon}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="othertoolsused">
                    <h4>{ studies.other.title }</h4>
                    <div className="tools">
                        <ul>
                            {
                                studies.other.icons.map( (icon, i) => {
                                    return (
                                        <li key={i}>
                                            {icon}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <StickyMenu style={{background: '#CC9900', color: '#FFCC00'}} />
        </div>
    );
}
