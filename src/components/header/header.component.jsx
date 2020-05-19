import React from 'react';
import {ReactComponent as MobileBanner} from '../../assets/bg-header-mobile.svg'
import {ReactComponent as DesktopBanner} from '../../assets/bg-header-desktop.svg';

import { useMediaQuery } from 'react-responsive';

import './header.styles.scss';

const Header = () => {
        const isDektopOrLaptop = useMediaQuery({query: '(min-device-width: 1024px)'})
        const isMobile = useMediaQuery({query: '(max-device-width: 1023px)'})

    return (
        <div className="header">
            {isMobile && <MobileBanner className="mobile-banner"/>}
            {isDektopOrLaptop && <DesktopBanner className="desktop-banner"/>}
        </div>
    )
}

export default Header;