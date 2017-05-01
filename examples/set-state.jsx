// no lifecycle methods for component
import React from 'react';
class Component1 extends React.Component {
    shouldComponentUpdate = function () {
        console.log('shouldComponentUpdate');
        return true;
    };

    componentDidMount() {
        this.setState({a: 'a'});
        this.setState({b: 'b'});
        this.setState({c: 'c'});
    }

    render() {
        return <div></div>
    }
}


class Component2 extends React.Component {
    state = {
        a: 0
    };
    shouldComponentUpdate = function () {
        console.log('shouldComponentUpdate');
        return true;
    };

    onClick = () => {
        setTimeout(() => {
            this.setState({a: 'aa'});
            this.setState({a: 'bb'});
        }, 100)
    };

    render() {
        return <div onClick={this.onClick}>{this.state.a}</div>
    }
}
