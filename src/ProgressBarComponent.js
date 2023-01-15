import React, { useEffect, useState } from "react";
import { CircleBarComponent } from "./Components/CircleBarComponent";
import { LineBarComponent } from "./Components/LineBarComponent";
import { TopBarComponent } from "./Components/TopBarComponent";

const ProgressBarComponent = (props) => {
    const trackColor = props.trackColor ? props.trackColor : '#ddd';
    const progressColor = props.progressColor ? props.progressColor : 'blue';

    const textFont = props.textFont ? props.textFont : 'Arial';

    const size = props.size ? props.size : 100;

    const shape = props.shape ? props.shape : 'round';

    const [progress, setProgress] = useState(props.progress ? props.progress : 5);

    const height = props.height ? props.height : '20px';

    useEffect(() => {
        if (progress < 90 && props.method === 'auto') {
            setTimeout(() => {
                setProgress(progress + 10)
            }, 250);
        };
    });

    if (props.type === 'circle') {
        return(
            <div>
                <CircleBarComponent trackColor={ trackColor } progressColor={ progressColor } size={ size } progress={ progress } textFont={ textFont } />
            </div>
        );
    };

    if (props.type === 'line') {
        return(
            <div>
                <LineBarComponent trackColor={ trackColor } progressColor={ progressColor } size={ size } shape={ shape } progress={ progress } textFont={ textFont } textColor={ props.textColor } />
            </div>
        );
    };

    // else / default return type 'topBar'
    return(
        <div>
            <TopBarComponent progress={ progress } colors={ props.colors } height={ height } />
        </div>
    );
};

export { ProgressBarComponent }