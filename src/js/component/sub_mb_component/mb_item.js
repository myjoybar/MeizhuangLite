/**
 * Created by joybar on 09/04/2017.
 */
import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import {logMsg, log} from '../../utils/consoleUtils'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

export  default class MobileItem extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    handleItemClick() {
        log('handleItemClick');
        e.stopPropagation();//屏蔽冒泡
        e.preventDefault();//阻止默认事件
    }


    render() {
        // <img src="./src/images/xiana.jpeg"/>
        let newDate = new Date();
        newDate.setTime(this.props.articleItemData.createTimeMillis);
        let dateStr = newDate.toLocaleDateString();
        var linkPath = '/detail/' + this.props.articleItemData.id;
        return (
            <Paper onClick={this.handleItemClick.bind(this)}>

                <div >
                    <Link to={{
                            pathname: linkPath,
                            state: { articleItem: this.props.articleItemData }
                 }}
                          activeStyle={{
    fontWeight: 'bold',
    color: 'red'
   }}>
                        <Card>
                            <CardHeader
                                title={'author: '+this.props.articleItemData.author}
                                subtitle={'createTime: '+dateStr}
                                avatar="../src/images/avatar.jpg"
                            />
                            <CardMedia
                            >
                                <img src={this.props.articleItemData.coverImgUrl}/>

                            </CardMedia>
                            <CardTitle title={this.props.articleItemData.title}
                                       subtitle={this.props.articleItemData.subTitle}/>
                            <CardText >
                                {this.props.articleItemData.content}

                            </CardText>

                        </Card>
                        <Divider />
                    </Link>
                </div>
            </Paper>
        );
    }

}

const styles = {
    linkStyle: {
        fontWeight: 'bold',
        color: 'red'
    },



};