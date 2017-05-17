/**
 * Created by joybar on 09/04/2017.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {HEAD_URL} from '../../config/configs'
import Snackbar from 'material-ui/Snackbar';
import CircularProgress from 'material-ui/CircularProgress';
var inputTypeName = {
    title: 'title',
    subTitle: 'subTitle',
    coverImgUrl: 'coverImgUrl',
    content: 'content',
    author: 'author',
    fromUrl: 'fromUrl',

}


export  default class ProgressDialog extends React.Component {



    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dialogIsShow: true,

        };
    }

    componentWillMount() {

    }

    componentDidMount() {

    }






    render() {

  //  class="transparent"


        return (
            <div >

                <Dialog

                    modal={true}
                    open={this.state.dialogIsShow}
                    // onRequestClose={this.dismissLoginDialog().bind(this)}
                    autoScrollBodyContent={true}
                >
                    <div class="div-parent-center" >
                        <CircularProgress class = 'div-child-center'  size={60} thickness={7} />

                    </div>

                </Dialog>

            </div>
        );
    }

}