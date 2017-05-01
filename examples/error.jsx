import React from 'react';


function ErrorComponent({error}) {
    throw new Error(error)
}


class RenderError extends React.Component {
    state = {
        error: 'error'
    };

    unstable_handleError() {
        this.setState({error: 'new error'})
    }

    render() {
        return (
            <div>
                <ErrorComponent error={this.state.error} />
            </div>
        )
    }
}
