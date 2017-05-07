/**
 * Created by joybar on 09/04/2017.
 */
import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

import {HEAD_URL,STATUS_HAS_NOT_RECOMMEND,STATUS_HAS_RECOMMEND,TYPE_CREATE,TYPE_COPY,TYPE_REPRODUCE} from '../../config/configs'
import {logMsg,log} from '../../utils/consoleUtils'
export  default class PCItem extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }


   handleDelete(){

       let curThis = this;
       console.log('handleDelete');
       let formData = new FormData();
       formData.append("id",curThis.props.id);


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
           if(data.code==200){
               log('delete成功');
               curThis.props.handleReload();
           }else{
               log('server 出现异常');
           }


       }).catch(function (err) {
           console.log(err);
       });

   }


    handleChangeRecommendStaus(recommendStaus){

        let curThis = this;
        console.log('handleChangeRecommendStaus');
        let formData = new FormData();
        formData.append("id",curThis.props.id);
        formData.append("recommendStatus",recommendStaus);


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
            if(data.code==200){
                log('更改状态成功');
                curThis.props.handleReload();
            }else{
                log('server 出现异常');
            }


        }).catch(function (err) {
            console.log(err);
        });



    }




    render() {
        // <img src="./src/images/xiana.jpeg"/>
        let newDate = new Date();
        newDate.setTime(this.props.createTimeMillis);
        let dateStr = newDate.toLocaleDateString();

        let createType = this.props.type;
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

        if(this.props.recommendStatus==STATUS_HAS_NOT_RECOMMEND){
            recommendTip = "推荐";
            recommendStatus = STATUS_HAS_RECOMMEND;
        }else{
            recommendTip = "取消推荐";
            recommendStatus = STATUS_HAS_NOT_RECOMMEND;

        }

        
        
        return (
            <div >

                <div class="div_tail" >

                    <div class="tail1 text-5-overflow-ellipsis">
                        <p class="spanCreteType"> {typeDes}</p>
                        <p class="spanTitle"> {this.props.title}</p>
                        <p class="spanSubTitle"> {this.props.subTitle}</p>

                    </div>


                    <div class="tail2 text-overflow-ellipsis vertical-center">
                        <a target="_blank" href= {this.props.fromUrl}> {this.props.fromUrl}</a>
                    </div>

                    <div class="tail3 vertical-center text-overflow-ellipsis">
                        {this.props.author}
                    </div>

                    <div class="tail4 vertical-center">
                        {dateStr}
                    </div>

                    <div class="tail5 vertical-center">
                        <RaisedButton onClick={this.handleDelete.bind(this)}label="删除"  />
                        <RaisedButton onClick={this.handleChangeRecommendStaus.bind(this, recommendStatus)} label={recommendTip}  />
                    </div>

                    <div class="tail6 vertical-center">
                        {this.props.id}
                    </div>
                </div>


                <div class="clearBoth">
                    <Divider/>
                </div>
            </div>
        );
    }

}

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

};