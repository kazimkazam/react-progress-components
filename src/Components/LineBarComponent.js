import React from "react";

const LineBarComponent = (props) => {
    const trackColor = props.trackColor;
    const progressColor = props.progressColor;

    const textFont = props.textFont;

    const textColor = props.textColor ? props.textColor : 'white';

    let size;
    if (props.size) {
        size = props.size >= 200 ? props.size : 200;

        if (size < 400) {
            textColor = 'transparent';
        };
    };

    const strokeWidth = (size / 15) - 10;

    const start = size * 0.05;
    
    const progress = props.progress;

    const lineLength = size - size * 0.05;
    const lineOffset = lineLength * ((progress) / 100);

    const shape = props.shape;

    const fontSize = strokeWidth >= 15 ? strokeWidth : 15;

    const height = size / 10;

    return(
        <svg height={ height } width={ size } style={{ background: "none" }} >
            {/* track */}
            <line x1={ start } y1={ height / 2  } x2={ lineLength } y2={ height / 2 } stroke={ trackColor } strokeWidth={ strokeWidth } strokeLinecap={ shape } />
            {/* progress */}
            <line x1={ start } y1={ height / 2 } x2={ lineOffset } y2={ height / 2 } stroke={ progressColor } strokeWidth={ strokeWidth } strokeLinecap={ shape } />
            <text x={ (size / 2) + (size * 0.02) } y={ height - (height * 0.32) } fontFamily={ textFont } fontSize={ fontSize } fill={ textColor } textAnchor="middle">
                { progress }%
            </text>
        </svg>
    );
};

export { LineBarComponent };
