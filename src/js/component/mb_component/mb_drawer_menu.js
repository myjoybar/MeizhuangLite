/**
 * Created by joybar on 09/04/2017.
 */
import React from 'react';
import Avatar from 'material-ui/Avatar';
import MenuItem from 'material-ui/MenuItem';

export  default class MbDrawerMenu extends React.Component {

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
            <div id="mb_drawer ">
                <div class="div-parent-center " style={styles.mbDrawerUserStyle}>
                    <Avatar
                        class="div-child-center"
                        src="../src/images/avatar.jpg"
                        size={50}
                        style={styles.avatarStyle}
                    />


                    <div style={styles.userNameStyle}>
                        Joy
                    </div>

                    <div style={styles.userDesStyle}>
                        Live well, love lots, and laugh often.
                    </div>
                </div>

                <div style={styles.mbDrawerMenu}>
                    <MenuItem onClick={this.props.handleClose}>个人中心</MenuItem>
                    <MenuItem onClick={this.props.handleClose}>我的收藏</MenuItem>
                    <MenuItem onClick={this.props.handleClose}>夜间模式</MenuItem>
                    <MenuItem onClick={this.props.handleClose}>反馈建议</MenuItem>
                    <MenuItem onClick={this.props.handleClose}>设置</MenuItem>
                    <MenuItem onClick={this.props.handleClose}>退出</MenuItem>
                </div>
            </div>
        );
    }

}

const styles = {


    mbDrawerUserStyle: {
        backgroundColor: '#00ACC1',

    },

    mbDrawerMenu: {
        backgroundColor: '#80DEEA',
        "height": "100%",
        // paddingLeft: 20,
        // paddingRight: 10,
        paddingTop: 35,
        paddingBottom: 100,

    },

    avatarStyle: {

        marginRight: 10,
        marginLeft: 10,
        marginTop: 15,
        marginBottom: 2,


    },

    userNameStyle: {
        color: "#a3be8c",
        fontSize: "20px"

    },
    userDesStyle: {
        color: "#998899",
        fontSize: "14px",
        marginTop: 5,
        marginRight: 20,
        marginLeft: 20,
        paddingBottom: 15,

    },

};