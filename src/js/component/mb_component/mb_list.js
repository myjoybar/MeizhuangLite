/**
 * Created by joybar on 09/04/2017.
 */
import React  from 'react'
import ReactDom  from 'react-dom'
// import { Router, Route, Switch } from 'react-router'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Tloader from 'react-touch-loader';
import MobileItem from '../sub_mb_component/mb_item';

import {HEAD_URL,MB_PAGE_LOAD_SIZE} from '../../config/configs'


import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
var offsetTopHeight = 0;
export  default class MobileList extends React.Component {



    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            articles: [],
            page: 0,
            size: MB_PAGE_LOAD_SIZE,
            hasMore: false,
            isFirstLoad: true,
            isRefresh: false,
            initializing: 1,
            refreshedAt: Date.now()
        };
    }


    handleRefresh(resolve, reject) {
        console.log("refresh");
        console.log("offsetTopHeight=" + offsetTopHeight);
        if (offsetTopHeight > 5) {
            setTimeout(() => {
                resolve();
            }, 2e3);

        } else {
            this.setRefreshState(true);
            setTimeout(() => {
                this.setState({
                    page: 0,
                    refreshedAt: Date.now()
                });
                this.clearArticles();
                this.fetchArticles(this.props.recommendStatus, this.state.page);
                this.setRefreshState(false);
                resolve();
            }, 2e3);
        }


    }

    handleLoadMore(resolve) {
        console.log("loadMore");

        let screenToTopHeight = window.screenTop;
        console.log(" window.screenTop=" + screenToTopHeight);


        setTimeout(() => {
            this.setState({
                page: this.state.page + 1,
            });
            this.fetchArticles(this.props.recommendStatus, this.state.page);
            resolve();
        }, 2e3);
    }

    clearArticles() {
        this.setState({
            articles: [],
        });
    }

    setFirstLoadState(isFirstLoad) {
        this.setState({
            refresh: isFirstLoad,
        });
    }

    setRefreshState(refresh) {
        this.setState({
            isRefresh: refresh,
        });
    }


    handleScroll(e) {
        // console.log('浏览器滚动事件'+  e.pageX);
    }


    componentWillMount() {
        console.log("componentWillMount");
        this.fetchArticles(this.props.recommendStatus, this.state.page);
        //  this.handleRefresh();
    }

    componentDidMount() {
        console.log("componentDidMount");
        setTimeout(() => {
            this.setState({
                initializing: 2, // initialized
            });
        }, 2e3);

        window.addEventListener('scroll', this.handleScroll.bind(this));

        window.addEventListener('scroll', function () {
            var obj = document.getElementById('refresh_view');
            offsetTopHeight = -(obj.offsetTop - document.body.scrollTop)
            console.log("offsetTopHeight=" + offsetTopHeight);

        })


    }


    fetchArticles(recommendStatus, page) {
        console.log("fetchArticles");
        let curThis = this;
        var myFetchOptions = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        };
        //let http://localhost:8190/meizhuang/findarticlepagesquery1?page=0&size=10&recommendStatus=0&sortDirection=1
        let url = HEAD_URL + "/findarticlepagesquery1?page=" + page + "&size=" + this.state.size + "&recommendStatus=" + recommendStatus + "&sortDirection=0";
        // let url = "http://10.88.1.79:8190/meizhuang/findarticlepagesquery1?page=0&size="+size+"&recommendStatus=" + recommendStatus + "&sortDirection=1";
        fetch(url, myFetchOptions)
            .then(function (res) {
                if (res.status === 200) {
                    return res.json()
                } else {
                    return Promise.reject(res.json())
                }
            }).then(function (json) {
            console.log(url);
            // console.log(json);
            let contentList = json.data.content;
            // curThis.setState({articles: contentList});
            let mergeArticles = curThis.state.articles.concat(contentList);
            curThis.setState({articles: mergeArticles});
            curThis.setState({getSize: contentList.length});
            curThis.setState({hasMore: contentList.length == curThis.state.size});
            console.log("getSize=" + curThis.state.getSize);
            console.log("hasMore=" + curThis.state.hasMore);
        }).catch(function (err) {
            console.log(err);
        });

    }

    render() {
        console.log("render");


        var {hasMore, initializing, refreshedAt} = this.state;
        var {handleRefresh, handleLoadMore,} = this;//下拉与刷新会有问题
        const emptyStateUI = this.state.isRefresh
            ? <div>
        </div>
            : <div>
            <Card style={styles.noDataStyle}>
                <CardText style={styles.noDataStyle}>
                    {"没有数据"}
                </CardText>
            </Card>
        </div>;


        const articles = this.state.articles;
        const articleList = articles.length
            ? articles.map((article, index) => (
            <div>
                <MobileItem
                    articleItemData = {article}
                />
            </div>
        ))
            : <div>
            {emptyStateUI}
        </div>;


        return (
            <div className="view" id="refresh_view">
                <Tloader className="main"
                         onRefresh={this.handleRefresh.bind(this)}
                         onLoadMore={this.handleLoadMore.bind(this)}
                         hasMore={hasMore}
                         initializing={initializing}>
                    {articleList}
                </Tloader>
            </div>
        );
    };
}

const styles = {
    noDataStyle: {
        justifyContent: "center",
        alignItems: 'center',
        height: 200,
    },

};

