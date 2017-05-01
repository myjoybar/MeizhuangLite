/**
 * Created by joybar on 09/04/2017.
 */
import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MobileItem from '../sub_mb_component/mb_item';
import MobileList from './mb_list';
import MobileListNoRefresh from './mb_list_no_refresh';

export  default class MobileTabs extends React.Component {


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            value: "0",
        };
    }

    componentWillMount() {

    }



    handleTabClick(value) {
        console.log("value=" + value);
        this.setState({value: value});
    }


    // onClick={this.handleTabClick.bind(this,"1")}
    // onClick={this.handleTabClick.bind(this,"2")}
    // onClick={this.handleTabClick.bind(this,this.state.value)}
    //  onChange={this.handleChange(this.state.value)}
//{newsItem.title}

    // <mobileItem
    //     author={newsItem.author}
    //     createTimeMillis={newsItem.createTimeMillis}
    //     title={newsItem.title}
    //     content={newsItem.content}
    // />


    render() {
        return (
            <MuiThemeProvider >
                <div>
                    <div>
                        <Tabs
                            value={this.state.value}
                        >
                            <Tab label="未推荐" value="0"
                                 onClick={this.handleTabClick.bind(this, "0")}>
                                <div>
                                    <MobileList
                                        recommendStatus={"0"}
                                    ></MobileList>
                                </div>
                            </Tab>
                            <Tab label="已推荐" value="1"
                                 onClick={this.handleTabClick.bind(this, "1")}>
                                <div>
                                    <MobileList
                                        recommendStatus={"1"}
                                    ></MobileList>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>

                    <div>

                    </div>
                </div>
            </MuiThemeProvider>
        );
    }

}


// <Card>
//     <CardHeader
//         title="URL Avatar"
//         subtitle="Subtitle"
//         avatar="./src/images/avatar.png"
//     />
//     <CardMedia
//         overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
//     >
//         <img src="./src/images/xiana.jpeg"/>
//     </CardMedia>
//     <CardTitle title="Card title" subtitle="Card subtitle"/>
//     <CardText>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
//         Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
//         Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
//     </CardText>
//     <CardActions>
//         <FlatButton label="Action1"/>
//         <FlatButton label="Action2"/>
//     </CardActions>
//</Card>


const styles = {
    headlineStyle: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },

};