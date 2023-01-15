import React from "react";

const CircleBarComponent = (props) => {
    const trackColor = props.trackColor;
    const progressColor = props.progressColor;

    const textFont = props.textFont;

    const size = props.size >= 50 ? props.size : 50;
    const strokeWidth = size / 10;
    const center = size / 2;
    const radius = center - strokeWidth;
    
    const progress = props.progress;

    const arcLength = 2 * Math.PI * radius;
    const arcOffset = arcLength * (-(100 - progress) / 100);

    const fontSize = strokeWidth >= 15 ? strokeWidth : 15;

    return(
        <svg className="svg-indicator" height={ size } width={ size } style={{ margin: "auto", background: "none" }} >
            <circle className="svg-indicator-track"
            cx={ center } cy={ center } r={ radius }
            fill={ 'transparent' }
            stroke={ trackColor } strokeWidth={ strokeWidth } 
            />
            
            <circle className="svg-indicator-indication"
            cx={ center } cy={ center } r={ radius }
            fill={ 'transparent' }
            stroke={ progressColor } strokeDasharray={ arcLength } strokeWidth={ strokeWidth } strokeDashoffset={ arcOffset }
            />

            <text x={ center } y={ center + 5 } fontFamily={ textFont } fontSize={ fontSize } fill={ progressColor } textAnchor="middle">
                { progress }%
            </text>
        </svg>
    );
};

export { CircleBarComponent };
