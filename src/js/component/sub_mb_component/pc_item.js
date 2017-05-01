/**
 * Created by joybar on 09/04/2017.
 */
import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';


export  default class PCItem extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        // <img src="./src/images/xiana.jpeg"/>
        let  newDate = new Date();
        newDate.setTime(this.props.createTimeMillis);
         let dateStr = newDate.toLocaleDateString();
        return (
            <div >
                <div >
                    <view></view>
                    <view>eee</view>
                </div>
                <Avatar src={this.props.coverImgUrl} />
                <Divider />
            </div>
        );
    }

}


// <Card>
//     <CardHeader
//         title={'author: '+this.props.author}
//         subtitle={'createTime: '+this.props.createTimeMillis}
//         avatar="./src/images/avatar.jpg"
//     />
//     <CardMedia
//     >
//         <img style={styles.imgStyle} src={this.props.coverImgUrl}/>
//     </CardMedia>
//     <CardTitle title={this.props.title} subtitle={this.props.subTitle}/>
//     <CardText>
//         {this.props.content}
//     </CardText>
//     <CardActions>
//         <FlatButton label="取消推荐"/>
//     </CardActions>
// </Card>



const styles = {
    imgStyle: {
        weight:200,
        height: 200,
    },

};