import React, { useEffect, useState } from "react";
import "./header.css";

export default function Header(props) {

    const [ width, setWidth ] = useState(0)

    useEffect(() => {
        window.onresize = () => {
            const root = document.getElementById('root');

            setWidth(root.clientWidth);
        }

        if(width > 768){
            const navItems = document.querySelector('.nav-items');

            if(navItems && navItems.className.includes('show')) navItems.classList.remove('show');
        }
    },[width])

    const showNavItems = (e) => {
        const navItems = document.querySelector('.nav-items');

        navItems.className.includes('show')
            ? navItems.classList.remove('show')
            : navItems.classList.add('show');

    }

    const changeLengauge = () => {
        props.data.lenguage === 'Español'
            ? props.setLenguage('en')
            : props.setLenguage('es');

        props.data.lenguage === 'Español'
            ? localStorage.setItem('language', 'en')
            : localStorage.setItem('language', 'es');
    }

    return (
        <div className="header">
            <nav>
                <div className="brand">
                    <svg width="100" height="50" className='logo-md'>
                        <circle cx="25" cy="25" r="20" fill="currentColor" />
                        <circle cx="27" cy="25" r="18" fill="#000" />
                        <text x="35" y="30" fill="currentColor" fontSize='1rem'>RSM</text>
                        <text x="40" y="37" fill="silver" fontSize='.5rem'>Developer</text>
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-list"
                        viewBox="0 0 16 16"
                        onClick={showNavItems}
                    >
                        <path
                            fillRule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                        />
                    </svg>
                </div>
                <div className="nav-items">
                    {
                        props.data.links.map( (item, i) => {
                            return (
                                <div className="nav-item" key={i}>
                                    <a href={`${item.link}`}>
                                        <span>&#10100;</span>
                                            {item.title}
                                        <span>&#10101;</span>
                                    </a>
                                </div>
                            )
                        })
                    }
                    <button onClick={changeLengauge}>
                        {props.data.lenguage === 'Español' ? 'Idioma' : 'Lenguage'}:
                        <span>
                            {props.data.lenguage}
                        </span>
                    </button>
                </div>
            </nav>
        </div>
    );
}
