import React from 'react';
import {ReactComponent as MobileBanner} from '../../assets/bg-header-mobile.svg'
import './header.styles.scss';

const Header = () => {
    return (
        <div className="header">
            <MobileBanner className="mobile-banner"/>
        </div>
    )
}

export default Header;