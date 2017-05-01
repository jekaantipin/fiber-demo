import React from 'react';
import ReactDOM from 'react-dom';

function Angry() {
    throw new Error('Please, do not render me.');
}

class AmazingApp extends React.Component {
    state = {
        error: true
    };
    unstable_handleError(error, info) {
        this.setState({error: false})
    }

    render() {
        if (this.state.error) {
            return <Angry />
        }
        return <div />
    }
}

(new RenderError).unstable_handleError()
ReactDOM.render(
    <RenderError />,
    document.getElementById('app')
);
// ReactDOM.unstable_deferredUpdates
