
// no lifecycle methods for component
import React from 'react';
function Component1() {
    return <div></div>
}
Component1.shouldComponentUpdate = function () {
    console.log('shouldComponentUpdate');
    return false;
};

Component1.componentWillReceiveProps = function () {
    console.log('componentWillReceiveProps');
};

Component1.componentDidUpdate = function () {
    console.log('componentDidUpdate');
};


// stateless context