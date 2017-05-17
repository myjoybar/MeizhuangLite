/**
 * Created by joybar on 09/04/2017.
 */
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export  default class MbDetail extends React.Component {

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


        const {location} = this.props
        var articleItem = location.state.articleItem
        console.log(articleItem.id)
        console.log(articleItem.title)
        console.log(articleItem.subTitle)


        let newDate = new Date();
        newDate.setTime(articleItem.createTimeMillis);
        let dateStr = newDate.toLocaleDateString();

        return (
            <div >
                <MuiThemeProvider >
                    <div>
                        <Divider />
                        <Card>
                            <CardHeader
                                title={'author: '+articleItem.author}
                                subtitle={'createTime: '+dateStr}
                                avatar="./src/images/avatar.jpg"
                            />
                            <CardMedia
                            >
                                <img src={articleItem.coverImgUrl}/>
                            </CardMedia>
                            <CardTitle title={articleItem.title} subtitle={articleItem.subTitle}/>
                            <CardText>
                                {articleItem.content}
                            </CardText>

                        </Card>
                        <Divider />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }

}