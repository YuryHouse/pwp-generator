import React from 'react';
import style from './Footer.module.scss'

export const Footer = () => {
    return (
        <div className={style.footerContainer}>
            <p className={style.bigText}>{'All rights reserved.'}</p>
            <p className={style.smallText}>{'This site is not a part of the Facebook website or Facebook Inc.' +
                'Additionally. This site is NOT endorsed by Facebook in any way.' +
                'FACEBOOK is a trademark of FACEBOOK, Inc. Narlex Holdings Ltd Globalserve Business Centre,' +
                'Vasili Michaelidi 9, Limassol 3026, Cyprus'}</p>
        </div>
    );
};