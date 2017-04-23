/**
 * Created by joybar on 09/04/2017.
 */
import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';


export  default class MobileHeader extends React.Component {

    handleTouchTap() {
        alert('onTouchTap triggered on the title component');

    };


    render() {
        return (
            <div id = "mobileheader">
                <header>
                    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                        <div>
                            <AppBar
                                title="美妆Lite"
                                iconElementRight={<FlatButton label="MB" />}
                                onTitleTouchTap={this.handleTouchTap.bind(this)}
                            />

                        </div>
                    </MuiThemeProvider>
                </header>
            </div>
        );
    }

}