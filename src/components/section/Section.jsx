import React, { useEffect } from 'react';
import { ScrollOut } from '../../functions/scroll';

// Components.
import Home from './home/Home';
import Aboutme from './aboutme/Aboutme';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';
import StickyMenu from '../sticky_menu/StickyMenu';

export default function Section(props) {

    useEffect(() => {
        ScrollOut({
            targets: 'h1,h2,p,.button-more,cite,.card,ul,#home,#aboutme,#portfolio,#contact'
        })
    },[])

    return (
        <div className="section">
            <Home data={props.data.home} />
            <Aboutme data={props.data.aboutme} />
            <Portfolio data={props.data.portfolio} />
            <Contact data={props.data.contact} />
            <StickyMenu />
        </div>
    )
}
