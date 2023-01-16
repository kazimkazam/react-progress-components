import React from "react";

const LineBarComponent = (props) => {
    const trackColor = props.trackColor;
    const progressColor = props.progressColor;

    const textFont = props.textFont;
    const textColor = props.textColor ? props.textColor : 'white';

    const size = props.size >= 200 ? props.size : 200;
    const strokeWidth = (size / 10) - 10;

    const start = size * 0.05;
    
    const progress = props.progress;

    const lineLength = size - size * 0.05;
    const lineOffset = lineLength * ((progress) / 100);

    console.log(lineLength);

    const shape = props.shape;

    const fontSize = strokeWidth >= 15 ? strokeWidth : 15;

    return(
        <svg height={ size / 4 } width={ size } style={{ background: "none" }} >
            {/* track */}
            <line x1={ start } y1={ size / 8 } x2={ lineLength } y2={ size / 8 } stroke={ trackColor } strokeWidth={ strokeWidth } strokeLinecap={ shape } />
            {/* progress */}
            <line x1={ start } y1={ size / 8 } x2={ lineOffset } y2={ size / 8 } stroke={ progressColor } strokeWidth={ strokeWidth } strokeLinecap={ shape } />
            <text x={ (size / 2) + (size * 0.02) } y={ (size / 8) + (size / 8) * 0.2 } fontFamily={ textFont } fontSize={ fontSize } fill={ textColor } textAnchor="middle">
                { progress }%
            </text>
        </svg>
    );
};

export { LineBarComponent };
