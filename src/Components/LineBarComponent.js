import React from "react";

const LineBarComponent = (props) => {
    const trackColor = props.trackColor;
    const progressColor = props.progressColor;

    const textFont = props.textFont;
    const textColor = props.textColor ? props.textColor : 'white';

    const size = props.size >= 500 ? props.size : 500;
    const strokeWidth = (size / 10) - 10;

    const start = size * 0.05;
    
    const progress = props.progress;

    const lineLength = size - 50;
    const lineOffset = lineLength * ((progress) / 100);

    const shape = props.shape;

    const fontSize = strokeWidth >= 15 ? strokeWidth : 15;

    return(
        <svg height={ size * 0.1 } width={ size } style={{ margin: "auto", background: "none" }} >
            {/* track */}
            <line x1={ start } y1={ start } x2={ size * 0.9 } y2={ start } stroke={ trackColor } strokeWidth={ strokeWidth } strokeLinecap={ shape } />
            {/* progress */}
            <line x1={ start } y1={ start } x2={ lineOffset } y2={ start } stroke={ progressColor } strokeWidth={ strokeWidth } strokeLinecap={ shape } />
            <text x={ (size / 2) + (size * 0.02) } y={ start * 1.5 } fontFamily={ textFont } fontSize={ fontSize } fill={ textColor } textAnchor="middle">
                { progress }%
            </text>
        </svg>
    );
};

export { LineBarComponent };
