import React from 'react';
import ReactDOM from 'react-dom';
import {letterMap} from './letters/map';

const getStyle = (x, y, width, number) => {
    return {
        position: 'absolute',
        top: y,
        left: x,
        display: 'block',
        width: `${width}px`,
        height: `${width}px`,
        fontSize: '12px',
        border: '1px solid grey',
        borderRadius: '8px'
    }
}
const getStyle2 = (x, y, width) => {
    return {
        position: 'absolute',
        top: y,
        left: x,
        display: 'block',
        width: `${width}px`,
        height: `${width}px`,
        // border: '1px solid red'
    }
}
function Rectangle({x, y, width, number, time}) {
    var e = performance.now() + 0.8;
    while (performance.now() < e) {
    }

    if (width <= 32) {
        return <div style={getStyle(0, 0, width, time)}>{number}</div>
    }
    return (
        <div style={getStyle2(x, y, width)}>
            <Rectangle x={0} y={0} width={width / 2} number={number} time={time} />
            <Rectangle x={0 + width / 2} y={0} width={width / 2} number={number} time={time} />
            <Rectangle x={0} y={0 + width / 2} width={width / 2} number={number} time={time} />
            <Rectangle x={0 + width / 2} y={0 + width / 2} width={width / 2} number={number} time={time} />
        </div>
    )

}
class App extends React.Component {
    state = {
        lowPriority: 0,
        timeSliced: false,
        value: '',
        value2: '',
    };

    componentDidMount() {
        setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        console.log('willunp')
    }

    onToggle = () => {
        this.setState({timeSliced: !this.state.timeSliced});
    };
    tick = () => {
        if (this.state.timeSliced) {
            ReactDOM.unstable_deferredUpdates(() => {
                this.setState(state => {
                    return {lowPriority: (state.lowPriority % 10) + 1}
                });
            });
        } else {
            this.setState(state => {
                return {lowPriority: (state.lowPriority % 10) + 1}
            })
        }
    };
    onChange = (e) => {
        this.setState({
            value: e.target.value
        })
    };
    onChange2 = (e) => {
        this.setState({
            value2: e.target.value
        })
    };

    render() {
        const {time} = this.props;
        const {lowPriority, value, timeSliced, value2} = this.state;

        const map = letterMap(lowPriority);
        // const children = value.split('').map((letter) => {
        //     return (
        //         <div style={{display: 'inline-block', transform: `scale(${time / 10 + 0.4})`}}>
        //             {map[letter]}
        //         </div>
        //
        //     )
        // });
        // const children2 = value2.split('').map((letter) => {
        //     return (
        //         <div style={{display: 'inline-block', transform: `scale(${time / 10 + 0.4})`}}>
        //             {map[letter]}
        //         </div>
        //
        //     )
        // });
        // console.log(value)
        return (
            <div>
                {/*<div>*/}
                {/*<Input onChange={this.onChange} value={value} />*/}
                {/*<Input onChange={this.onChange2} value={value2} />*/}
                {/*</div>*/}
                <div>
                    <input disabled value={lowPriority} />
                </div>
                <div>
                    <CheckBox onChange={this.onToggle} value={timeSliced} />
                </div>
                <div style={{
                    position: 'relative', transform: `scale(${(1 + time / 20)}) translateX(${time * 20}px)`,
                }}>

                    <Rectangle x={0} y={0} width={216} number={lowPriority} time={time} />
                </div>
            </div>
        );
    }
}


function Input({value, onChange}) {
    return <input value={value} onChange={onChange} />
}

function CheckBox({active, onChange}) {
    return <input type="checkbox" value={active} onChange={onChange} />
}
let start = new Date().getTime();
let limit = 0;
function update() {
    const pivot = 10;
    let current = ((new Date().getTime() - start) / 1000) % pivot;
    let time;
    if (limit < current) {
        time = current;
    } else {
        time = pivot - current;
    }
    limit = time;
    console.log(time)
    ReactDOM.render(
        <App time={time} />,
        document.getElementById('app')
    );
    requestAnimationFrame(update);
}
requestAnimationFrame(update);
