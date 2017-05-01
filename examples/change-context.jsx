import React from 'react';
class Component1 extends React.Component {

    static contextTypes = {
        foo: React.PropTypes.string.isRequired,
    }

    componentWillReceiveNewProps() {
        console.log(this.context.foo)
        console.log('componentWillReceiveNewProps');

    }

    render() {
        console.log(this.context.foo)
        return <div></div>
    }
}


let a = 0;
class App1 extends React.Component {
    static childContextTypes = {
        foo: React.PropTypes.string.isRequired
    };

    getChildContext() {
        return {foo: a >1 ?"context-new":"context1"};
    }
    componentDidMount(){
        this.setState({a:1})
    }

    render() {
        a++;
        return <Component1></Component1>
    }
}