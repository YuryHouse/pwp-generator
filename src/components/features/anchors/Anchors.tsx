import React from 'react';
import style from './Anchors.module.scss'
import {anchorData} from "../../../common/data/anchor-data";


export const Anchors = () => {
    return (
        <div className={style.anchorContainer}>
            <ul className={style.anchorList}>
                {
                    anchorData.map(el => {
                       return <li key={el.id}>
                            <a className={style.anchorLinks} href={el.url}>{el.title}</a>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};