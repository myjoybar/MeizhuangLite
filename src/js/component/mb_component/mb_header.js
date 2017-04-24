/**
 * Created by joybar on 09/04/2017.
 */
import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
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
                                title={<div >美妆Lite</div>}
                                iconElementRight={<FlatButton label="" />}
                                iconElementLeft={<IconButton onClick = {this.props.handleToggle}><NavigationMenu /></IconButton>}
                                onTitleTouchTap={this.handleTouchTap.bind(this)}
                            />

                        </div>
                    </MuiThemeProvider>
                </header>
            </div>
        );
    }

}