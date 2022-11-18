import React from 'react';
import ReactPlayer from 'react-player/youtube'
import style from './Video.module.scss'

const Video = () => {
    return (
        <div className={style.videoContainer}>
            <ReactPlayer
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                controls={true}
                style={{margin: "auto"}}
                width={800}
                height={450}
            />
        </div>
    );
};

export default Video;