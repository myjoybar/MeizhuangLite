/**
 * Created by joybar on 09/04/2017.
 */
import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import ProgressDialog from '../../component/sub_mb_component/progress_dialog';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

import {
    HEAD_URL,
    STATUS_HAS_NOT_RECOMMEND,
    STATUS_HAS_RECOMMEND,
    TYPE_CREATE,
    TYPE_COPY,
    TYPE_REPRODUCE
} from '../../config/configs'
import {logMsg, log} from '../../utils/consoleUtils'
import PCDetails from '../pc_component/pc_admin/pc_detail';

export  default class PCItem extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            progressDialogIsShow:false
        };
    }


    handleDelete(e) {
        e.stopPropagation();//屏蔽冒泡
        e.preventDefault();//阻止默认事件
        let curThis = this;
        console.log('handleDelete');
        let formData = new FormData();
        formData.append("id", curThis.props.articleItemData.id);


        fetch(HEAD_URL + "/articleDeleteById", {
            method: "POST",
            headers: {
                // "Content-Type": "application/json",
                //   'Content-Type': 'application/x-www-form-urlencoded'
                // 'Content-Type':'multipart/form-data',
            },
            mode: "cors",
            body: formData,
        }).then(function (res) {
            if (res.status === 200) {
                return res.json()
            } else {
                return Promise.reject(res.json())
            }
        }).then(function (data) {
            console.log(data);
            if (data.code == 200) {
                log('delete成功');
                curThis.props.handleReload();
            } else {
                log('server 出现异常');
            }


        }).catch(function (err) {
            console.log(err);
        });

    }


    handleChangeRecommendStaus(e, recommendStaus) {
        e.stopPropagation();//屏蔽冒泡
        e.preventDefault();//阻止默认事件
        let curThis = this;
        console.log('handleChangeRecommendStaus');
        let formData = new FormData();
        formData.append("id", curThis.props.articleItemData.id);
        formData.append("recommendStatus", recommendStaus);


        fetch(HEAD_URL + "/article/recommendstatus", {
            method: "POST",
            headers: {
                // "Content-Type": "application/json",
                //   'Content-Type': 'application/x-www-form-urlencoded'
                // 'Content-Type':'multipart/form-data',
            },
            mode: "cors",
            body: formData,
        }).then(function (res) {
            if (res.status === 200) {
                return res.json()
            } else {
                return Promise.reject(res.json())
            }
        }).then(function (data) {
            console.log(data);
            if (data.code == 200) {
                log('更改状态成功');
                curThis.props.handleReload();
            } else {
                log('server 出现异常');
            }


        }).catch(function (err) {
            console.log(err);
        });


    }





    handleRedirect(e) {
        e.stopPropagation();//屏蔽冒泡
        e.preventDefault();//阻止默认事件
        let curThis = this;
        console.log('handleRedirect');
       // window.location.href=this.props.articleItemData.fromUrl;
        window.open(this.props.articleItemData.fromUrl);
    }

    handleItemClick() {
        log('handleItemClick');
    }


    render() {
        // <img src="./src/images/xiana.jpeg"/>
        let newDate = new Date();
        newDate.setTime(this.props.articleItemData.createTimeMillis);
        let dateStr = newDate.toLocaleDateString();

        let createType = this.props.articleItemData.type;
        let typeDes = "";
        if (createType == 0) {
            typeDes = "原创";
        } else if (createType == 1) {
            typeDes = "抄袭";
        } else if (createType == 2) {
            typeDes = "转载";
        }


        let recommendTip = "";
        let recommendStatus = "";

        if (this.props.articleItemData.recommendStatus == STATUS_HAS_NOT_RECOMMEND) {
            recommendTip = "推荐";
            recommendStatus = STATUS_HAS_RECOMMEND;
        } else {
            recommendTip = "取消推荐";
            recommendStatus = STATUS_HAS_NOT_RECOMMEND;

        }
        //  <Link to={/detail/+this.props.id}>
        var linkPath = '/detail/' + this.props.articleItemData.id;
        // <Link to={{ pathname: linkPath, query: { name: 'ryan' } }}>


//         <Link to={{
//   pathname: linkPath,
// }}>

        // state: { articleItemData2: this.props.articleItemData ,
        return (
            <Paper onClick={this.handleItemClick.bind(this)}>


                <Link to={{
                            pathname: linkPath,
                            state: { articleItem: this.props.articleItemData }
                 }}>


                    <div>


                        <div id="div_column">

                            <div class="col_1 vertical_center_150">
                                {this.props.articleItemData.id}
                            </div>

                            <div class="col_4 text-3-overflow-ellipsis vertical_center_150 ">
                                <p class="spanCreteType"> {typeDes}</p>
                                <p class="spanTitle"> {this.props.articleItemData.title}</p>
                                <p class="spanSubTitle"> {this.props.articleItemData.subTitle}</p>

                            </div>


                            <div class="col_3 text-overflow-ellipsis vertical_center_150 ">

                                <RaisedButton onClick={e => this.handleRedirect(e)} label={this.props.articleItemData.fromUrl}/>



                            </div>

                            <div class="col_1  text-overflow-ellipsis vertical_center_150">
                                {this.props.articleItemData.author}
                            </div>

                            <div class="col_1 vertical_center_150">
                                {dateStr}
                            </div>

                            <div class="col_2 vertical_center_60">
                                <RaisedButton onClick={e => this.handleDelete(e)} label="删除"/>
                                <RaisedButton onClick={e => this.handleChangeRecommendStaus(e,recommendStatus)}
                                              label={recommendTip}/>

                                <Link to={{
                            pathname: linkPath,
                            state: { articleItem: this.props.articleItemData }
                 }}>
                                </Link>
                            </div>


                        </div>


                        <div class="clearBoth">
                            <Divider/>
                        </div>


                    </div>

                </Link>

            </Paper>
        );
    }

}

//原来的url跳转

// <a target="_blank"
//    href={this.props.articleItemData.fromUrl}> {this.props.articleItemData.fromUrl}</a>


//点击router跳转
//<Link to={/detail/+this.props.id}>
//<Link to={/detail/+this.props.id}> <RaisedButton  label="详情"/></Link>
// <Link to='/detail/2'> <RaisedButton  label="详情"/></Link>


// <Route component={ComponentDetail} path="/detail"/>
// Divider

// //
//     <div >
//         //
//         <view></view>
//         //
//         <view>eee</view>
//         // </div>
// //
//     <Avatar src={this.props.coverImgUrl}/>


//
//  <Card>
// <CardHeader
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
        weight: 200,
        height: 200,
    },
    raisedButton: {
        height: 20,
        weight: 20,
    },
    columnPadding: {
        paddingLeft: 10,
        paddingRight: 10,
    }


};