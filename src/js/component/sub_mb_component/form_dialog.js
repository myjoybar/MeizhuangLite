/**
 * Created by joybar on 09/04/2017.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {HEAD_URL} from '../../config/configs'
import Snackbar from 'material-ui/Snackbar';
import ProgressDialog from './progress_dialog';

var inputTypeName = {
    title: 'title',
    subTitle: 'subTitle',
    coverImgUrl: 'coverImgUrl',
    content: 'content',
    author: 'author',
    fromUrl: 'fromUrl',

}


export  default class FromDialog extends React.Component {



    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            thisFromdialogIsShow: true,
            snackBarShow: false,
            form: {
                title: {
                    valid: false,
                    value: '',
                    error: ''
                },
                subTitle: {
                    valid: false,
                    value: '',
                    error: ''
                },
                coverImgUrl: {
                    valid: false,
                    value: '',
                    error: ''
                },
                content: {
                    valid: false,
                    value: '',
                    error: ''
                },
                author: {
                    valid: false,
                    value: '',
                    error: ''
                },
                fromUrl: {
                    valid: false,
                    value: '',
                    error: ''
                },
            }
        };
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    showSnackBar() {
        this.setState({snackBarShow: true});
        // this.setLoginDialogStatus(true);
    }

    dismissSnackBar() {
        this.setState({snackBarShow: false});
    }

    //http://www.tuicool.com/articles/YRvUVfz
    handleSubmit(e) {
        let curThis = this;
        console.log('handleSubmit');
        e.preventDefault();
        const {form: {title, subTitle, coverImgUrl, content, author, fromUrl}} = this.state;

        if (!title.valid || !subTitle.valid || !coverImgUrl.valid || !content.valid || !author.valid || !fromUrl.valid) {
            // alert('请填写正确的信息后重试');
            console.log('showSnackBar');
            curThis.showSnackBar();
            return;
        }

        console.log('title:' + title.value);
        console.log('subTitle:' + subTitle.value);
        console.log('coverImgUrl:' + coverImgUrl.value);
        console.log('content:' + content.value);
        console.log('author:' + author.value);
        console.log('fromUrl:' + fromUrl.value);



        let formData = new FormData();
        formData.append("creatorId",1);
        formData.append("title",title.value);
        formData.append("subTitle",subTitle.value);
        formData.append("coverImgUrl",coverImgUrl.value);
        formData.append("content",content.value);
        formData.append("author",author.value);
        formData.append("fromUrl",fromUrl.value);
        formData.append("type",0);
        formData.append("recommendStatus",0);


        // formData.append("creatorId",1);
        // formData.append("title","自然发酵苏秘37° 一抹“镜”现四季灵动轻妆");
        // formData.append("subTitle","引领自然发酵护肤理念的苏秘37°（SU:M37°）打破传统底妆局限");
        // formData.append("coverImgUrl","http://www.yoka.com/dna/pics/ba17ac17/3/d3dbeaccd59d9be3591.jpg");
        // formData.append("content","引领自然发酵护肤理念的苏秘37°（SU:M37°）打破传统底妆局限，精心选取7种鲜花精萃,结合苏秘37°自然发酵核心成分Cytosis，缔造将护肤融于彩妆的空气质感系列，轻轻一抹，即可源源不断为肌肤注入水份与能量，深透卓效滋养肌肤。明星产品苏秘37°（SU:M37°）空气质感光彩镜垫粉底液集美妆和护肤于一体，专利镜垫设计使得轻松叠加不同功效的自然发酵护肤品成为可能。全新的使用方法完美根据肌肤状态深层酵醒肌肤，为不同肤质打造四季自在呼吸的灵动轻妆。");
        // formData.append("author","刘宾客");
        // formData.append("fromUrl","http://www.yoka.com/dna/d/396/281.html");
        // formData.append("type",0);
        // formData.append("recommendStatus",0);


        // formData.append("creatorId", 1 + "");
        // formData.append("title", "哈哈哈");
        let params2 = "creatorId=1&title=哈哈哈";
        fetch(HEAD_URL + "/addArticle", {
            //  fetch(HEAD_URL + "/postceshi", {
            method: "POST",
            headers: {
                // "Content-Type": "application/json",
                //   'Content-Type': 'application/x-www-form-urlencoded'
                // 'Content-Type':'multipart/form-data',
            },
            mode: "cors",
            body: formData,
            //  body: params2,
        }).then(function (res) {
            if (res.status === 200) {
                return res.json()
            } else {
                return Promise.reject(res.json())
            }
        }).then(function (data) {
            console.log(data);
            if(data.code==200){
                console.log('成功');
                curThis.props.dismissFormDialog();
            }else{
                console.log('server 出现异常');
            }


        }).catch(function (err) {
            console.log(err);
        });


    }

    handleValueChange(field, value, type = 'string') {
        //http://blog.csdn.net/awaw00/article/details/54710575?utm_source=itdadao&utm_medium=referral
        console.log("field=" + field + ", value = " + value)
        //  const {form: {name, age, gender}} = this.state;
        const {form: {title, subTitle, coverImgUrl, content, author, fromUrl}} = this.state;

        switch (field) {
            case inputTypeName.title:
            {
                console.log("=============title============");
                title.value = value;
                title.valid = true;
                if (value.length >= 100) {
                    title.error = 'title最多100个字符';
                    title.valid = false;
                } else if (value.length === 0) {
                    title.error = '请输入title';
                    title.valid = false;
                } else {
                    console.log("title=" + value)

                }
                break;
            }
            case inputTypeName.subTitle:
            {
                console.log("=============subTitle============");
                subTitle.value = value;
                subTitle.valid = true;
                if (value.length >= 150) {
                    subTitle.error = 'subTitle最多150个字符';
                    subTitle.valid = false;
                } else if (value.length === 0) {
                    subTitle.error = '请输入subTitle';
                    subTitle.valid = false;
                } else {
                    console.log("subTitle=" + value)

                }
                break;
            }
            case inputTypeName.coverImgUrl:
            {
                console.log("=============coverImgUrl============");
                coverImgUrl.value = value;
                coverImgUrl.valid = true;
                if (value.length === 0) {
                    coverImgUrl.error = '请输入coverImgUrl';
                    coverImgUrl.valid = false;
                } else {
                    console.log("coverImgUrl=" + value)

                }
                break;
            }
            case inputTypeName.content:
            {
                console.log("=============content============");
                content.value = value;
                content.valid = true;
                if (value.length === 0) {
                    content.error = '请输入用户名';
                    content.valid = false;
                } else {
                    console.log("content=" + value)

                }
                break;
            }
            case inputTypeName.author:
            {
                console.log("=============author============");
                author.value = value;
                author.valid = true;
                if (value.length >= 50) {
                    author.error = 'author最多50个字符';
                    author.valid = false;
                } else if (value.length === 0) {
                    author.error = '请输入author';
                    author.valid = false;
                } else {
                    console.log("author=" + value)

                }
                break;
            }
            case inputTypeName.fromUrl:
            {
                console.log("=============title============");
                fromUrl.value = value;
                fromUrl.valid = true;
                if (value.length === 0) {
                    fromUrl.error = '请输入用户名';
                    fromUrl.valid = false;
                } else {
                    console.log("fromUrl=" + value)

                }
                break;
            }
            default:
                break

        }


        this.setState({
            form: {
                title: {
                    valid: title.valid,
                    value: title.value,
                    error: title.error,
                },
                subTitle: {
                    valid: subTitle.valid,
                    value: subTitle.value,
                    error: subTitle.error,
                },
                coverImgUrl: {
                    valid: coverImgUrl.valid,
                    value: coverImgUrl.value,
                    error: coverImgUrl.error,
                },
                content: {
                    valid: content.valid,
                    value: content.value,
                    error: content.error,
                },
                author: {
                    valid: author.valid,
                    value: author.value,
                    error: author.error,
                },
                fromUrl: {
                    valid: fromUrl.valid,
                    value: fromUrl.value,
                    error: fromUrl.error,
                },

            }
        });


    }


    render() {


        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                // onClick={this.dismissLoginDialog.bind(this)}
                onClick={this.props.dismissFormDialog}
            />,
            <FlatButton
                label="Close"
                primary={true}
                // keyboardFocused={true}
                // onClick={this.dismissLoginDialog.bind(this)}
                onClick={this.props.dismissFormDialog}
                // onClick={(e) => this.handleSubmit(e)}
            />,
        ];

        const {form: {title, subTitle, coverImgUrl, content, author, fromUrl,}} = this.state;
        return (
            <div >

                <Dialog
                    title="Add an article"
                    actions={actions}
                    modal={false}
                    open={this.state.thisFromdialogIsShow}
                    // onRequestClose={this.dismissLoginDialog().bind(this)}
                    autoScrollBodyContent={true}
                >

                    <div id="formDialogAddArticle">

                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <br/>
                            <label class="lableStle">title：</label>
                            <input class="input"
                                   type="text"
                                   value={title.value}
                                   onChange={(e) => this.handleValueChange(inputTypeName.title, e.target.value)}
                            />
                            {!title.valid && <span class="spanError">{title.error}</span>}
                            <br/>
                            <br/>

                            <label class="lableStle">subTitle：</label>
                            <input
                                class="input"
                                type="text"
                                value={subTitle.value}
                                onChange={(e) => this.handleValueChange(inputTypeName.subTitle, e.target.value)}
                            />
                            {!subTitle.valid && <span class="spanError">{subTitle.error}</span>}
                            <br/>
                            <br/>

                            <label class="lableStle">coverImgUrl：</label>
                            <input
                                class="input"
                                type="text"
                                value={coverImgUrl.value}
                                onChange={(e) => this.handleValueChange(inputTypeName.coverImgUrl, e.target.value)}
                            />
                            {!coverImgUrl.valid && <span class="spanError">{coverImgUrl.error}</span>}
                            <br/>
                            <br/>

                            <label class="lableStle">content：</label>
                            <textarea
                                class="textarea"
                                type="text"
                                value={content.value}
                                onChange={(e) => this.handleValueChange(inputTypeName.content, e.target.value)}
                            />
                            {!content.valid && <span class="spanError">{content.error}</span>}
                            <br/>
                            <br/>

                            <label class="lableStle">author：</label>
                            <input
                                class="input"
                                type="text"
                                value={author.value}
                                onChange={(e) => this.handleValueChange(inputTypeName.author, e.target.value)}
                            />
                            {!author.valid && <span class="spanError">{author.error}</span>}
                            <br/>
                            <br/>

                            <label class="lableStle">fromUrl：</label>
                            <input
                                class="input"
                                type="text"
                                value={fromUrl.value}
                                onChange={(e) => this.handleValueChange(inputTypeName.fromUrl, e.target.value)}
                            />
                            {!fromUrl.valid && <span class="spanError">{fromUrl.error}</span>}
                            <br/>
                            <br/>

                            <input class="submit" type="submit" value="提交"/>
                        </form>
                    </div>


                </Dialog>
                <Snackbar
                    open={this.state.snackBarShow}
                    message="请填写正确的信息后重试"
                    autoHideDuration={2000}
                    onRequestClose={this.dismissSnackBar.bind(this)}
                />

            </div>
        );
    }

}