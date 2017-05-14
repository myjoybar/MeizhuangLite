/**
 * Created by joybar on 09/04/2017.
 */
import React  from 'react'
import ReactDom  from 'react-dom'
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
import PCIndex from './component/pc_index';
import MbIndex from './component/mb_index';
import MbDetail from './component/mb_component/mb_detail';

import PCDetail from './component/pc_component/pc_admin/pc_detail';
import MediaQuery from 'react-responsive';

export  default class Rooter extends React.Component {

    render() {

        return (
            <div>

                <MediaQuery query='(min-device-width: 1224px)'>
                    <Router >
                        <Switch >
                            <Route component={PCIndex}  exact path="/"  > </Route>
                            <Route component={PCDetail}  path='/detail/:id' />
                        </Switch>
                    </Router>





                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                    <Router>
                        <Switch >
                            <Route  component={MbIndex} exact path="/" />
                            <Route component={MbDetail} path='/detail/:id' />
                        </Switch>
                    </Router>
                </MediaQuery>

            </div>

        );
    };
}

// <Switch >
//     <PCIndex/>
//     <Route component={<PCIndex/>} exact path="/"> </Route>
// </Switch>



ReactDom.render(<Rooter/>, document.getElementById('mainContainer'));

