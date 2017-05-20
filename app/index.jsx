import React from 'react';
import ReactDOM from 'react-dom';
import {letterMap} from './letters/map';

class App extends React.PureComponent {
    state = {
        lowPriority: 1,
        timeSliced: false,
        value: 'react',
        value2: 'fiber',
    };

    componentDidMount() {
        setInterval(this.tick, 700);
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
        const children = value.split('').map((letter) => {
            return (
                <div style={{textAlign: 'left', display: 'inline-block', transform: `scale(${time / 8 + 0.4})`}}
                     key={letter}>
                    {map[letter]}
                </div>

            )
        });
        const children2 = value2.split('').map((letter) => {
            return (
                <div style={{textAlign: 'left', display: 'inline-block', transform: `scale(${time / 10 + 0.4})`}}
                     key={letter}>
                    {map[letter]}
                </div>

            )
        });
        return (
            <div>
                <div style={{position: 'absolute'}}>
                    <img src="epam.png" style={{height: '32px'}} />
                    {/*<Input onChange={this.onChange} value={value} />*/}
                    {/*<Input onChange={this.onChange2} value={value2} />*/}
                    <div style={{
                        position: 'fixed',
                        left: '10px',
                        top: 'calc(50% - 30px)',
                    }}>
                        <input disabled value={lowPriority - 1} style={{
                            width: '40px',
                            height: '40px',
                            textAlign: 'center',
                            fontSize: '32px',
                            marginBottom: '10px'
                        }} />
                        <br />
                        <CheckBox onChange={this.onToggle} value={timeSliced} />
                        <span style={{color: '#fff', fontSize: '16px'}}>Fiber</span>
                    </div>

                </div>
                <div style={{textAlign: 'center'}}>
                    {children}
                </div>
                <div style={{textAlign: 'center'}}>
                    {children2}
                </div>
            </div>
        );
    }
}


function Input({value, onChange}) {
    return <input value={value} onChange={onChange} />
}
Input.shouldComponentUpdate = ({value: oldValue}, {value}) => {
    return oldValue !== value
};
function CheckBox({active, onChange}) {
    return <input type="checkbox" value={active} onChange={onChange} />
}
CheckBox.shouldComponentUpdate = ({value: oldValue}, {value}) => {
    return oldValue !== value
};

let start = new Date().getTime();
let limit = 0;
let double = true;
let prev;
function update() {
    const pivot = 3;
    let current = ((new Date().getTime() - start) / 1000) % pivot;
    let time;
    if (limit < current) {
        time = current;
    } else {
        time = pivot - current;
    }
    limit = time;
    double = !double
    if (double) {
        time = prev;
    }
    prev = time;
    ReactDOM.render(
        <App time={time} />,
        document.getElementById('app')
    );
    requestAnimationFrame(update);
}
requestAnimationFrame(update);
