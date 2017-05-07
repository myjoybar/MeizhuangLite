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
import PCList from './pc_list';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FromDialog from '../sub_mb_component/form_dialog';
export  default class PCTabs extends React.Component {


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


//
// <div class="div-right">
// <FloatingActionButton >
// <ContentAdd />
// </FloatingActionButton>
// </div>
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
                                <div >

                                    <PCList
                                        recommendStatus={"0"}
                                    ></PCList>


                                </div>
                            </Tab>
                            <Tab label="已推荐" value="1"
                                 onClick={this.handleTabClick.bind(this, "1")}>
                                <div>
                                  
                                    <PCList
                                        recommendStatus={"1"}
                                    ></PCList>
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


const styles = {
    headlineStyle: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    contentAddStyle: {
        marginLeft: "auto",
        marginRight: "2px",
        width: "300px",
    }


};