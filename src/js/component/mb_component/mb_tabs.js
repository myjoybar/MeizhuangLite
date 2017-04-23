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

export  default class MobileTabs extends React.Component {


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            value: "1",
            articles: [],
        };
    }

    componentWillMount() {
        this.fetchArticles();
    }


    fetchArticles() {
        let curThis = this;

        var myFetchOptions = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        };

        let url = 'http://localhost:8190/meizhuang/articles';
        fetch(url, myFetchOptions)
            .then(function (res) {
                if (res.status === 200) {
                    return res.json()
                } else {
                    return Promise.reject(res.json())
                }
            }).then(function (json) {
            console.log(json);
            curThis.setState({articles: json})
            for (var i = 0; i < json.length; i++) {
                var title = json[i].title;
                var content = json[i].content;
                // do something more...
                console.log("title=" + title);
                console.log("content=" + content);

            }
        }).catch(function (err) {
            console.log(err);
        });

    }

    handleChange(value) {

        console.log("value=" + value);
        this.setState({value: value});
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

        const articles = this.state.articles;
        const articleList = articles.length
            ? articles.map((article, index) => (
            <div>
                <MobileItem
                    author={article.author}
                    createTimeMillis={article.createTimeMillis}
                    title={article.title}
                    content={article.content}
                />
            </div>
        ))
            : '没有加载到任何新闻';


        // <section key={index} className="m_article list-item special_section clearfix">
        //     <Link to={`details/${newsItem.uniquekey}`}>
        //         <div className="m_article_img">
        //             <img src={newsItem.thumbnail_pic_s} alt={newsItem.title} />
        //         </div>
        //         <div className="m_article_info">
        //             <div className="m_article_title">
        //                 <span>{newsItem.title}</span>
        //             </div>
        //             <div className="m_article_desc clearfix">
        //                 <div className="m_article_desc_l">
        //                     <span className="m_article_channel">{newsItem.realtype}</span>
        //                     <span className="m_article_time">{newsItem.date}</span>
        //                 </div>
        //             </div>
        //         </div>
        //     </Link>
        // </section>
        //


        return (
            <MuiThemeProvider >
                <div>
                    <div>
                        <Tabs
                            value={this.state.value}
                        >
                            <Tab label="未推荐" value="1"
                                 onClick={this.handleTabClick.bind(this,"1")}>
                                <div>
                                    {articleList}
                                </div>
                            </Tab>
                            <Tab label="已推荐" value="2"
                                 onClick={this.handleTabClick.bind(this,"2")}>
                                <div>
                                    {articleList}
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