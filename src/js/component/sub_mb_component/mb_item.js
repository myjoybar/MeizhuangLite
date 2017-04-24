/**
 * Created by joybar on 09/04/2017.
 */
import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
export  default class MobileItem extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {

        let  newDate = new Date();
        newDate.setTime(this.props.createTimeMillis);
        let dateStr = newDate.toLocaleDateString();
        return (
            <div >
                <Card>
                    <CardHeader
                        title={'author: '+this.props.author}
                        subtitle={'createTime: '+dateStr}
                        avatar="./src/images/avatar.png"
                    />
                    <CardMedia
                    >
                        <img src="./src/images/xiana.jpeg"/>
                    </CardMedia>
                    <CardTitle title={this.props.title} subtitle={this.props.subTitle}/>
                    <CardText>
                        {this.props.content}
                    </CardText>
                    <CardActions>
                        <FlatButton label="取消推荐"/>
                    </CardActions>
                </Card>
                <Divider />
            </div>
        );
    }

}