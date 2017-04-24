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
// import Tloader from 'react-touch-loader';
export  default class MobileList extends React.Component {



    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            articles: [],
            count: 5,
            hasMore: 0,
            initializing: 1,
            refreshedAt: Date.now(),
        };
    }

    componentWillMount() {
        this.fetchArticles(this.props.recommendStatus, 5);
    }



    fetchArticles(recommendStatus, size) {
        let curThis = this;
        var myFetchOptions = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        };
        //let http://localhost:8190/meizhuang/findarticlepagesquery1?page=0&size=10&recommendStatus=0&sortDirection=1
        let url = "http://localhost:8190/meizhuang/findarticlepagesquery1?page=0&size="+size+"&recommendStatus=" + recommendStatus + "&sortDirection=1";
        fetch(url, myFetchOptions)
            .then(function (res) {
                if (res.status === 200) {
                    return res.json()
                } else {
                    return Promise.reject(res.json())
                }
            }).then(function (json) {
            console.log(json);
            let contentList = json.content;
            curThis.setState({articles: contentList})
            for (var i = 0; i < contentList.length; i++) {
                var title = contentList[i].title;
                var content = contentList[i].content;
                // do something more...
                console.log("title=" + title);
                console.log("content=" + content);

            }


            // curThis.setState({articles: json})
            // for (var i = 0; i < json.length; i++) {
            //     var title = json[i].title;
            //     var content = json[i].content;
            //     // do something more...
            //     console.log("title=" + title);
            //     console.log("content=" + content);
            //
            // }
        }).catch(function (err) {
            console.log(err);
        });

    }

    
    render() {
        const articles = this.state.articles;
        const articleList = articles.length
            ? articles.map((article, index) => (
            <div>
                <MobileItem
                    author={article.author}
                    createTimeMillis={article.createTimeMillis}
                    title={article.title}
                    subTitle={article.subTitle}
                    content={article.content}
                    coverImgUrl={article.coverImgUrl}
                />
            </div>
        ))
            : <div>
            <Card style={styles.noDataStyle}>
                <CardText style={styles.noDataStyle}>
                    {"没用数据"}
                </CardText>
            </Card>
        </div>;


        let {hasMore, initializing, refreshedAt} = this.state;

        return (
            <MuiThemeProvider >
                <div>



                        {articleList}
                </div>
            </MuiThemeProvider>
        );
    }
// {articleList}
//
// <Tloader
//     initializing={initializing}
//     onRefresh={this.handleRefresh.bind(this)}
//     hasMore={hasMore}
//     onLoadMore={this.handleLoadMore.bind(this)}
//     className="tloader">
//     {articleList}
// </Tloader>

    handleRefresh() {

    }

    handleLoadMore(resolve) {
        // setTimeout(
        //     function () {
        //         var count = this.state.count;
        //         this.setState({
        //             count: count + 5,
        //         });
        //
        //         this.fetchArticles(this.props.recommendStatus, this.state.count);
        //
        //         this.setState({
        //             hasMore: count >0 &&count<50,
        //         });
        //
        //         resolve();
        //
        //     }, 1000);

    }


    componentDidMount() {
        // setTimeout(
        //     function () {
        //         this.setState({
        //             hasMore: 1,
        //             initializing: 2,
        //         });
        //
        //     }, 1000);

    }
}

//{articleList}
//autoLoadMore={autoLoadMore}
const styles = {
    noDataStyle: {
        justifyContent: "center",
        alignItems: 'center',
        height: 200,
        width: 1800,
    },

};

