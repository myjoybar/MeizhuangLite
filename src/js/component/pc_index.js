/**
 * Created by joybar on 09/04/2017.
 */
import React from 'react';
// import PCHeader from './pc_component/pcHeader';
// import PCHeaderTest from './pc_component/pcHeaderTest';
// import PCFooter from './pc_component/pcFooter';
import MobileHeader from './mb_component/mb_header';
import MobileTabs from './mb_component/mb_tabs';
// import MBFooter from './mb_component/mbFooter';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
export  default class MobileIndex extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {open: false};
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }


    handleClose() {
        this.setState({open: false});
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <div>
                        <MobileHeader
                            handleToggle={this.handleToggle.bind(this)}>
                        </MobileHeader>
                        <MobileTabs>
                        </MobileTabs>
                    </div>

                    <Drawer
                        docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}
                    >
                        <div>
                            <MenuItem onClick={this.handleClose.bind(this)}>Menu Item</MenuItem>
                            <MenuItem onClick={this.handleClose.bind(this)}>Menu Item 2</MenuItem>
                        </div>


                    </Drawer>
                </div>
            </MuiThemeProvider>





        );
    }

}