import React from "react";

const TopBarComponent = (props) => {
    const progress = props.progress;

    const defaultColors = [ 'rgba(14,24,95,1)', 'rgba(0,255,209,1)', 'rgba(49,225,247,1)' ];

    let colors;
    if (props.colors) {
        // case 3 colors
        if (props.colors instanceof Array) {
            colors = [ props.colors[0], props.colors[1], props.colors[2] ];
            // control colors depending on progress value,.i.e., progress <= 50% --> 2 colors, progress > 50% --> 3 colors
            if (progress <= 50) {
                return(
                    <div 
                    style={{ height: `${props.height}`, width: `${progress}%`, 
                    background: `linear-gradient(90deg, ${colors[0]} 0%, ${colors[1]} 50%`,
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    position: 'fixed', top: '0'
                    }}>
                    </div>
                );
            } else {
                return(
                    <div 
                    style={{ height: `${props.height}`, width: `${progress}%`, 
                    background: `linear-gradient(90deg, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)`,
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    position: 'fixed', top: '0'
                    }}>
                    </div>
                );
            };
        } else {
            // case 1 color
            colors = props.colors ;

            return(
                <div 
                style={{ height: `${props.height}`, width: `${progress}%`, 
                backgroundColor: `${colors}`,
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                position: 'fixed', top: '0'
                }}>
                </div>
            );
        };
    };

    // default case
    if (progress <= 50) {
        return(
            <div 
            style={{ height: `${props.height}`, width: `${progress}%`, 
            background: `linear-gradient(90deg, ${defaultColors[0]} 0%, ${defaultColors[1]} 50%)`,
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            position: 'fixed', top: '0'
            }}>
        </div>
        );
    } else {
        return(
            <div 
            style={{ height: `${props.height}`, width: `${progress}%`, 
            background: `linear-gradient(90deg, ${defaultColors[0]} 0%, ${defaultColors[1]} 50%, ${defaultColors[2]} 100%)`,
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            position: 'fixed', top: '0'
            }}>
            </div>
        );
    };
};

export { TopBarComponent };
