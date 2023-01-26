import React, { useEffect, useState } from "react";
import { CircleBarComponent } from "./Components/CircleBarComponent";
import { LineBarComponent } from "./Components/LineBarComponent";

const ProgressBarComponent = (props) => {
    const trackColor = props.trackColor ? props.trackColor : '#ddd';
    const progressColor = props.progressColor ? props.progressColor : 'blue';

    const textFont = props.textFont ? props.textFont : 'Arial';

    const size = props.size ? props.size : 100;

    const shape = props.shape ? props.shape : 'round';

    if (props.method === 'auto') {
        var [progress, setProgress] = useState(props.progress ? props.progress : 5);
    };

    if (props.method === 'manual') {
        if (props.progress) {
            if (props.progress >= 0 && props.progress <= 100) {
                var progress = props.progress;
            };
        } else {
            var progress = 5;
        };
    };

    useEffect(() => {
        if (progress < 90 && props.method === 'auto') {
            setTimeout(() => {
                setProgress(progress + 10)
            }, 250);
        };
    });

    // if (props.type === 'circle') {
    //     return(
    //         <div>
    //             <CircleBarComponent trackColor={ trackColor } progressColor={ progressColor } size={ size } progress={ progress } textFont={ textFont } />
    //         </div>
    //     );
    // };

    if (props.type === 'line') {
        return(
            <div>
                <LineBarComponent trackColor={ trackColor } progressColor={ progressColor } size={ size } shape={ shape } progress={ progress } textFont={ textFont } textColor={ props.textColor } />
            </div>
        );
    };

    return(
        <div>
            <CircleBarComponent trackColor={ trackColor } progressColor={ progressColor } size={ size } progress={ progress } textFont={ textFont } />
        </div>
    );
};

export { ProgressBarComponent }