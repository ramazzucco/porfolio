import React, { useEffect } from "react";
import './home.css';

// Components.
import ButtonGoDown from "../../buttons/ButtonGoDown";

export default function Home(props) {
    const animateLogo = () => {

        const intervalCircle = setInterval(() => {
            const cxElement = document.querySelector('.logo svg .circle2');
            const cx = Number(cxElement.getAttribute('cx'));

            if(cx > 53){
                cxElement.setAttribute('cx', cx - 3)
            }else{

                const intervalText = setInterval(() => {
                    const text1 = document.querySelector('.logo svg text.text1');
                    const x1 = Number(text1.getAttribute('x'))
                    const text2 = document.querySelector('.logo svg text.text2');

                    text1.setAttribute('opacity', '1');
                    if(x1 < 70){
                        text1.setAttribute('x', x1 + 1)
                    }else{
                        text2.setAttribute('opacity', '1')
                        clearInterval(intervalText)
                    }
                }, 5)

                clearInterval(intervalCircle);
            }
        }, 10)
    }

    useEffect(() => {
        const text = document.querySelector(".circle-text p");
        text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

        const element = document.querySelectorAll(".circle-text p span");
        for (let i = 0; i < element.length; i++) {
            element[i].style.transform = "rotate(" + i * 9.5 + "deg)";
        }

        animateLogo()
    }, []);

    return (
        <div className="home" id='home'>
            <div className="background"></div>
            <div className="content">
                <div className="presentation">
                    <div className="logo">
                        <svg width="150" height="100">
                            <circle cx="50" cy="50" r="40" fill="currentColor" />
                            <circle cx="200" cy="50" r="37" fill="#000" className='circle2' />
                            <text x="10" y="60" fill="currentColor" fontSize='2rem' opacity='0' className='text1'>RSM</text>
                            <text x="85" y="72" fill="silver" fontSize='.7rem' opacity='0' className='text2'>Developer</text>
                        </svg>
                    </div>
                    <div className="name">
                        <h1>Ramiro S. Mazzucco</h1>
                        <h2>{props.data.title}<br/><br/>Full Stack Web !</h2>
                    </div>
                </div>
                <ButtonGoDown tooltipTitle="go to about me" section="aboutme" style={{ color: 'inherit'}} />
            </div>
            <div className="circle-text-container">
                <div className="circle-text">
                    <p>Bienvenido - Welcome - Benvenuto - Bem vindo -</p>
                </div>
            </div>
        </div>
    );
}
