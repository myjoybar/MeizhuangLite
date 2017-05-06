/**
 * Created by joybar on 09/04/2017.
 */
import React from 'react';
export  default class Base extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div >
            </div>
        );
    }

}