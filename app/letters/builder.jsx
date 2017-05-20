import React from 'react';

const pixelStyle = {
    width: '20px',
    height: '20px',
    margin: '2px',
    display: 'inline-block'
};

export function Space() {
    return <div style={pixelStyle}></div>;
}
Space.shouldComponentUpdate = () => {
    return false
};
export class Block extends React.Component {
    static shouldComponentUpdate = ({k: oldK, bg: oldBg}, {k, bg}) => {
        return oldK !== k || oldBg !== bg;
    };
    state = {
        hover: false
    };
    enter = () => {
        this.setState({hover: true})
    };

    leave = () => {
        this.setState({hover: false})
    };

    render() {
        const {k} = this.props;
        const bg = this.state.hover ? '#ff9100' : '#fff';
        return (
            <Pixel style={pixelStyle} onMouseEnter={this.enter} onMouseLeave={this.leave} bg={bg} k={k}>
            </Pixel>
        )
    }
}

export function Pixel({k, onMouseEnter, onMouseLeave, bg}) {
    const pixelStyle = {
        height: '8px',
        width: '8px',
        display: 'inline-block',
        margin: '1px 1px',
        cursor: 'default',
        color: bg,
    };
    return (
        <div
            style={{display: 'inline-block', height: '20px', fontSize: '12px', margin: '2px',cursor: 'default'}}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>

            <div style={{display: 'block', height: '10px'}}>
                <div style={pixelStyle}><PixelText k={k} /></div>
                <div style={pixelStyle}><PixelText k={k} /></div>
            </div>
            <div style={{display: 'block', height: '10px'}}>
                <div style={pixelStyle}><PixelText k={k} /></div>
                <div style={pixelStyle}><PixelText k={k} /></div>
            </div>

        </div>
    )
}
Pixel.shouldComponentUpdate = ({k: oldK, bg: oldBg}, {k, bg}) => {
    return oldK !== k || oldBg !== bg;
};

function PixelText({k}) {
    var e = performance.now() + 0.4;
    while (performance.now() < e) {
        // long execution time.
    }
    return k - 1;
}
PixelText.shouldComponentUpdate = ({k: oldValue}, {k}) => {
    return oldValue !== k
};