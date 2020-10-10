import React from 'react';
import { Player } from 'video-react';

import "../node_modules/video-react/dist/video-react.css";

export default function Video(props) {
    return (
        <div>
            <h1>Deine nächste Gebärde: {props.word}</h1>
            <Player
                playsInline
                src={props.videoUrl}
            />
        </div>
    )
}
