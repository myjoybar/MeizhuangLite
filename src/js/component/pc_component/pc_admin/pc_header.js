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
import FromDialog from '../../sub_mb_component/form_dialog';

import {globalStore,} from '../../store/store'

import {createActionShowFormDialog, createActionDismissFormDialog} from '../../action/actions'
import {createStore}  from 'redux';
import reducer  from '../../reducer/reducers';

export  default class PCHeader extends React.Component {



    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isShowFormDialog:globalStore.getState().formDialogVisibility,
        };
    }


    componentDidMount() {

    }



    handleFormDialog() {

        // console.log("globalStore.getState().formDialogVisibility111=" + globalStore.getState().formDialogVisibility)
        //
        // //也可以让FormDialog一直处于显示的状态,然后通过属性改变header的状态实现
        // if (!globalStore.getState().formDialogVisibility) {
        //     console.log("is not Shown")
        //
        //
        //
        //     console.log("globalStore.getState().formDialogVisibility=" + globalStore.getState().formDialogVisibility)
        //     globalStore.dispatch(createActionShowFormDialog());
        //     console.log("globalStore.getState().formDialogVisibility=" + globalStore.getState().formDialogVisibility)
        //
        //     this.setFormDialog( globalStore.getState().formDialogVisibility);
        //
        // } else {
        //     console.log("isShown")
        //     this.setFormDialog(false);
        //
        // }

        if(!this.state.isShowFormDialog){
            this.setFormDialogStatus(true);
        }



    }


    setFormDialogStatus(status) {
        this.setState(
            {isShowFormDialog: status}
        );
    }


    dismissFormDialog(){
        this.setFormDialogStatus(false);
    }


    render() {

        var  fromDialogView = this.state.isShowFormDialog ?
            (<FromDialog

                dismissFormDialog={this.dismissFormDialog.bind(this)} >
            </FromDialog> ) :
            (null);


        return (
            <div id="mobileheader">
                <header>

                    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                        <div>
                            <AppBar
                                title={<div >美妆Lite</div>}
                                iconElementRight={<FlatButton label="" />}
                                iconElementLeft={<IconButton ><NavigationMenu /></IconButton>}
                                iconElementRight={<FlatButton onClick={this.handleFormDialog.bind(this)} label="Add" />}
                            />
                            {fromDialogView}


                        </div>
                    </MuiThemeProvider>
                </header>
            </div>
        );
    }

    // {fromDialogView}

}