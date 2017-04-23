/**
 * Created by joybar on 09/04/2017.
 */
import React from 'react';
import MobileHeader from './mb_component/mb_header';
import MobileTabs from './mb_component/mb_tabs';
// import MBFooter from './mb_component/mbFooter';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export  default class MbIndex extends React.Component {
    render() {
        return (
            <div>
                <MobileHeader></MobileHeader>
                <MobileTabs></MobileTabs>

            </div>
                
        );
    }

}