import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './portfolio.css';

// Components.
import Meatme from './Meatme';
import Webfutbol5 from './Webfutbol5';
import Appfutbol5 from './Appfutbol5';
import StickyMenu from '../../sticky_menu/StickyMenu';

export default function Portfolio(props) {

    const [ project, setProject ] = useState('')
    const [ style, setStyle ] = useState({})

    const params = useParams();

    const getProjectComponent = useCallback((params) => {
        switch (params.project) {
            case 'meatme':
                setProject(<Meatme data={props.data.meatme} />);
                setStyle({background: 'radial-gradient(#91241C,#CCA037)', color: '#91241C'})
                break;
            case 'webfutbol5':
                setProject(<Webfutbol5 data={props.data.futbol5_web} />);
                setStyle({background: '#28A745', color: '#28A745'})
                break;
            case 'appfutbol5':
                setProject(<Appfutbol5 data={props.data.futbol5_app} />)
                setStyle({background: '#7A9B76', color: '#5A2328'})
                break;
            default:
                break;
        }
    },[props.data])

    useEffect(() => {
        getProjectComponent(params);
        window.scrollTo({top: '0'});
    },[params, getProjectComponent])

    return (
        <div className='page-portfolio'>
            { project }
            <StickyMenu  style={style} />
        </div>
    )
}
