import React from 'react';
import { useHistory } from 'react-router-dom';

// Components.
import Gallery from '../../gallery/Gallery';

export default function Appfutbol5(props) {

    const {
        banner,
        text,
        link,
        description,
        code,
        gallery,
        captions,
        otherprojects
    } = props.data;

    const history = useHistory();

    return (
        <div className='app-futbol5'>
            <div className="banner">
                <div className="image">
                    <img src={ banner.image } alt={banner.alt} />
                </div>
                <div className="text">
                    <p>{ text }</p>
                    <a
                        href={ link.url }
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        { link.title }
                    </a>
                </div>
            </div>
            <div className="description">
                <div className="functionality">
                    <h2>{ description.title }</h2>
                    <ul>
                        {
                            description.list.map( (item, i) => {
                                return (
                                    <li key={i}>
                                        &#10004; { item }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="code">
                    <a
                        href={ code.url }
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="link">
                            { code.icon }
                            { code.title }
                        </div>
                    </a>
                </div>
            </div>
            <div className="images">
                <h2>{ gallery.title }</h2>
                <Gallery images={ gallery.images } />
            </div>
            <div className="content">
                {
                    captions.map( (item, i) => {
                        return (
                            <div className={`captions ${ item.class }`}>
                                <div className="images">
                                    {
                                        item.image.map( (img, i) => {
                                            return (
                                                <img src={ img.url } alt={ img.alt } />
                                            )
                                        })
                                    }
                                </div>
                                <p>{ item.text }</p>
                            </div>
                        )
                    })
                }
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
    )
}