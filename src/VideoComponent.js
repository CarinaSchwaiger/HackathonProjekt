import React from 'react';
import { Player } from 'video-react';

import "../node_modules/video-react/dist/video-react.css";
import Button from "@material-ui/core/Button";
import {Link as RouterLink} from "react-router-dom";

export default function Video(props) {
    return (
        <div>
            <h1>Deine nächste Gebärde: {props.word}</h1>
            <Player
                playsInline
                src={props.videoUrl}
                width="70%"
            />
            <p>
                <RouterLink to="/feedback" style={{ textDecoration: 'none', color: "#000000" }}>
                    <Button
                        variant = "outlined"
                    >
                        Ich bin fertig!
                    </Button>
                </RouterLink>
            </p>
        </div>
    )
}
