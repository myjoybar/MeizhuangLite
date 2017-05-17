/**
 * Created by joybar on 09/04/2017.
 */
import React from 'react';
import MobileHeader from './mb_component/mb_header';
import MobileTabs from './mb_component/mb_tabs';
// import MBFooter from './mb_component/mbFooter';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MbDrawerMenu from './mb_component/mb_drawer_menu';


export  default class MbIndex extends React.Component {

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
                            <MbDrawerMenu
                                handleClose={this.handleClose.bind(this)}>
                            </MbDrawerMenu>
                        </div>


                    </Drawer>
                </div>
            </MuiThemeProvider>





        );
    }

// <MobileHeader></MobileHeader>
// <MobileTabs></MobileTabs>

// <RaisedButton
// label="Open Drawer"
// onClick={this.handleToggle.bind(this)}
// />
}

const styles = {
    mbDrawerMenu: {
        backgroundColor: '#80DEEA',
    },
}