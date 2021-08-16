import React from "react";
import { useHistory } from "react-router-dom";

// Components.
import Gallery from "../../gallery/Gallery";

export default function Webfutbol5(props) {

    const { banner, content, otherprojects } = props.data;

    const history = useHistory();

    return (
        <div className="sitio-futbol5">
            <div className="banner">
                <img
                    src={banner.image}
                    alt="banner futbol5"
                    width="100%"
                    height="300px"
                />
                <div className="title">
                    <h1>{ banner.title }</h1>
                </div>
            </div>
            <div className="content">
                <div className="image">
                    <img
                        src={content.image}
                        alt="formulario"
                        width="100%"
                    />
                </div>
                <div className="text">
                    <p>{ content.text }</p>
                    <a
                        href={ content.link.url }
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        { content.link.title }
                    </a>
                </div>
            </div>
            <div className="code">
                <p>{ content.code.text }</p>
                <a
                    href={ content.code.link.url }
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="link">
                        { content.code.link.icon }
                        { content.code.link.title }
                    </div>
                </a>
            </div>
            <div className="images">
                <Gallery images={ content.gallery } />
            </div>
            <div className="otherprojects">
                <div className="title">
                    <h2>{ otherprojects.title }</h2>
                </div>
                {
                    otherprojects.cards.map( (card, i) => {
                        return (
                            <div className="card-project" key={i}>
                                <img src={ card.image.url } alt={ card.image.alt } />
                                <div className="link">
                                    <p>{ card.link.title }</p>
                                    <button onClick={() => history.push(card.link.button.path)}>
                                        { card.link.button.title }
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
