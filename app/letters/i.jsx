import React from 'react';
import {Block, Space} from './builder';
import {getRowStyle} from './utils';
export default class I extends React.PureComponent {
    render() {
        const {k} = this.props;
        const classRow = getRowStyle(k);
        return (
            <div>
                <div style={classRow}>
                    <Space />
                    <Space />
                    <Block k={k}/>
                    <Space />
                    <Space />
                </div>
                <div style={classRow}>
                    <Space />
                    <Space />
                    <Block k={k}/>
                </div>
                <div style={classRow}>
                    <Space />
                    <Space />
                    <Block k={k}/>
                </div>
                <div style={classRow}>
                    <Space />
                    <Space />
                    <Block k={k}/>
                </div>
                <div style={classRow}>
                    <Space />
                    <Space />
                    <Block k={k}/>
                </div>
                <div style={classRow}>
                    <Space />
                    <Space />
                    <Block k={k}/>
                </div>
                <div style={classRow}>
                    <Space />
                    <Space />
                    <Block k={k}/>
                </div>
                <div style={classRow}>
                    <Space />
                    <Space />
                    <Block k={k}/>
                </div>
                <div style={classRow}>
                    <Space />
                    <Space />
                    <Block k={k}/>
                </div>
            </div>
        )
    }
}
