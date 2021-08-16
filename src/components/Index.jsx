import React, { useEffect } from "react";
import "../sass/output.css";

// Components.
import Header from "./header/Header";
import Section from "./section/Section";

export default function Index(props) {

    useEffect(() => {
        window.onclick = (e) => {
            const navItems = document.querySelector(".header .nav-items");

            if (navItems && e.target.tagName !== "svg" && navItems.className.includes("show")) {
                navItems.classList.toggle("show");
            }
        };

    }, []);

    return (
        <div className="index">
            <Header lenguage={props.lenguage} setLenguage={props.setLenguage} data={props.data.header} />
            <Section data={props.data.section} />
        </div>
    );
}

// sass --watch src/sass/input.scss:src/sass/output.css src/components/header/header.scss:src/components/header/header.css src/components/section/home/home.scss:src/components/section/home/home.css src/components/section/aboutme/aboutme.scss:src/components/section/aboutme/aboutme.css src/components/section/portfolio/portfolio.scss:src/components/section/portfolio/portfolio.css src/components/section/contact/contact.scss:src/components/section/contact/contact.css src/components/sticky_menu/sticky_menu.scss:src/components/sticky_menu/sticky_menu.css  src/components/buttons/buttons.scss:src/components/buttons/buttons.css src/components/scrollbar/scrollbar.scss:src/components/scrollbar/scrollbar.css src/components/page/aboutme/moreaboutme.scss:src/components/page/aboutme/moreaboutme.css src/components/page/portfolio/portfolio.scss:src/components/page/portfolio/portfolio.css
