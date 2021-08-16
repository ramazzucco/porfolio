import React from "react";
import { useHistory } from "react-router-dom";

// Components.
import Gallery from "../../gallery/Gallery";

export default function Meatme(props) {

    const { banner, content, otherprojects } = props.data;

    const history = useHistory();

    return (
        <div className='meatme'>
            <div className="banner">
                <img src={banner} alt="banner meatme" width="100%" />
            </div>
            <div className="content">
                <div className="text">
                    <p>{ content.text }</p>
                    <a href={ content.link.page } target="_blank" rel="noopener noreferrer" style={{fontSize: '1rem', padding: '1rem'}}>
                        <p style={{ margin: '0 auto' }}>
                            Ir a la pagina web.
                        </p>
                    </a>
                    <a href={ content.link.url } target="_blank" rel="noopener noreferrer">
                        <div className="link">
                            { content.link.icon }
                            { content.link.title }
                        </div>
                    </a>
                </div>
                <div className="images">
                    <Gallery images={ content.gallery } />
                </div>
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
