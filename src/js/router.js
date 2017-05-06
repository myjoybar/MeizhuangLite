/**
 * Created by joybar on 09/04/2017.
 */
import React  from 'react'
import ReactDom  from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import PCIndex from './component/pc_index';
import MbIndex from './component/mb_index';
import MediaQuery from 'react-responsive';

export  default class Rooter extends React.Component {

    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width: 1224px)'>
                    <Router>
                        <PCIndex></PCIndex>
                    </Router>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                    <Router>
                        <MbIndex></MbIndex>
                    </Router>
                </MediaQuery>

            </div>

        );
    };
}

ReactDom.render(<Rooter/>, document.getElementById('mainContainer'));

