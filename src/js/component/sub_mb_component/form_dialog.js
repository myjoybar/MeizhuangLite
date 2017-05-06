/**
 * Created by joybar on 09/04/2017.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export  default class FromDialog extends React.Component {


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dialogIsShow: true,
            form: {
                name: {
                    valid: false,
                    value: '',
                    error: ''
                },
                age: {
                    valid: false,
                    value: 0,
                    error: ''
                },
                gender: {
                    valid: false,
                    value: '',
                    error: ''
                }
            }
        };
    }

    componentWillMount() {

    }

    componentDidMount() {

    }


    //http://www.tuicool.com/articles/YRvUVfz
    handleSubmit(e) {
        let curThis = this;
        console.log('handleSubmit');
        e.preventDefault();
        const {form: {name, age, gender}} = this.state;
        if (!name.valid || !age.valid || !gender.valid) {
            // alert('请填写正确的信息后重试');
            console.log('showSnackBar');
            curThis.showSnackBar();
            return;
        }

        console.log('name:' + name.value);
        console.log('age:' + age.value);
        console.log('gender:' + gender.value);


        //
        // fetch("http://localhost:8190/meizhuang/articles", {
        //     method: "get",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     // mode: "cors",
        //     // body: JSON.stringify({
        //     //     content: "留言内容"
        //     // })
        // }).then(function (res) {
        //     if (res.status === 200) {
        //         return res.json()
        //     } else {
        //         return Promise.reject(res.json())
        //     }
        // }).then(function (data) {
        //     console.log(data);
        //     for (var i = 0; i < data.length; i++) {
        //         var title = data[i].title;
        //         var content = data[i].content;
        //         // do something more...
        //         console.log("title=" + title);
        //         console.log("content=" + content);
        //         curThis.dismissLoginDialog();//不知道为什么不可以
        //         this.dismissLoginDialog();//不可以
        //         // this.setState({loginDialogShow: false});//不知道为什么不可以
        //         localStorage.content = data[i].content;
        //
        //     }
        // }).catch(function (err) {
        //     console.log(err);
        // });


    }

    handleValueChange(field, value, type = 'string') {
        //http://blog.csdn.net/awaw00/article/details/54710575?utm_source=itdadao&utm_medium=referral
        console.log("field=" + field + ", value = " + value)
        const {form: {name, age, gender}} = this.state;
        switch (field) {
            case 'name':
            {
                console.log("=============name============");
                name.value = value;
                name.valid = true;
                if (value.length >= 5) {
                    name.error = '用户名最多4个字符';
                    name.valid = false;
                } else if (value.length === 0) {
                    name.error = '请输入用户名';
                    name.valid = false;
                } else {
                    console.log("value=" + value)

                }
                break;
            }
            case 'age':
            {
                age.value = value;
                age.valid = true;
                console.log("=============age============");

                if (value > 100 || value <= 0) {
                    age.error = '请输入1~100之间的数字';
                    age.valid = false;
                }
                break;
            }
            case 'gender':
            {
                gender.value = value;
                gender.valid = true;
                console.log("=============gender============");

                if (!value) {
                    gender.error = '请选择性别';
                    gender.valid = false;
                }
                break;
            }

        }


        this.setState({
            form: {
                name: {
                    valid: name.valid,
                    value: name.value,
                    error: name.error,
                },
                age: {
                    valid: age.valid,
                    value: age.value,
                    error: age.error,
                },
                gender: {
                    valid: gender.valid,
                    value: gender.value,
                    error: gender.error,
                }
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

        const {form: {name, age, gender}} = this.state;
        return (
            <div >

                <Dialog
                    title="登陆"
                    actions={actions}
                    modal={false}
                    open={this.state.dialogIsShow}
                    // onRequestClose={this.dismissLoginDialog().bind(this)}
                    autoScrollBodyContent={true}
                >

                    <div>
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <label>用户名：</label>
                            <input
                                type="text"
                                value={name.value}
                                onChange={(e) => this.handleValueChange('name', e.target.value)}
                            />
                            {!name.valid && <span>{name.error}</span>}
                            <br/>
                            <label>年龄：</label>
                            <input
                                type="number"
                                value={age.value || ''}
                                onChange={(e) => this.handleValueChange('age', e.target.value, 'number')}
                            />
                            {!age.valid && <span>{age.error}</span>}
                            <br/>
                            <label>性别：</label>
                            <select
                                value={gender.value}
                                onChange={(e) => this.handleValueChange('gender', e.target.value)}
                            >
                                <option value="">请选择</option>
                                <option value="male">男</option>
                                <option value="female">女</option>
                            </select>
                            {!gender.valid && <span>{gender.error}</span>}
                            <br/>
                            <br/>
                            <input type="submit" value="提交"/>
                        </form>
                    </div>


                </Dialog>


            </div>
        );
    }

}