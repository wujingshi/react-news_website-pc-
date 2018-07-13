import React, { Component } from 'react';
import { Row, Col,Spin, Alert,Input,Calendar,BackTop  } from 'antd';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import api from './server/api'

const Search = Input.Search;


class App extends Component {

  constructor(){
    super();
    // 初始化数据存储，类似于vue的data；
    this.state={
      isLoding:true,
      typeList:[],
      topList:[],
      userSelct:0,
    }
  }


  // 生命周期
  componentWillMount(){
    let _this=this;
    // 获取新闻类型
    let newType=api.getNewTypeList();
    newType.then(res=>{
        let typeList=res.data.result.result;
        // 加载判断
        _this.setState({
          isLoding:false,
          typeList:typeList
        })
    })
    // 获取新闻内容
    let newTop=api.getNewTopInfo('新闻');
    newTop.then(res=>{
      let topList=res.data.result.result.list;
      // 加载判断
      _this.setState({
        topList:topList
      })
    })
  }



  render() {
      if(this.state.isLoding){
        return (
          <Spin tip="Loading...">
            <Alert
              message="奴家正在努力的加载中…………………………"
              description="客官，请淡定，奴家正在努力的加载中…………………………………………"
              type="info"
            />
          </Spin>
        )
      }else{
        return (
          <Router>
          <div>
              <div className="header">
                  <Row>
                    <Col span={12}>厦门：晴 20°/30°</Col>
                    <Col span={12}>侵权投诉</Col>
                  </Row>
              </div>
              <div className="main w">
              {/* 左侧菜单 */}
                  <aside className="typeListInfo">
                    <ul>
                      {
                        this.state.typeList.map((item,i)=>{
                            return <li key={i} className={this.state.userSelct==i?'active':' '} onClick={()=>this.getNewListInfo(item,i)}>
                              <a href="javascript:;">{item}</a>
                            </li>
                        })
                      }
                    </ul>
                  </aside>
                  <div className="content">
                      <ul>
                        {
                          this.state.topList.map((item,i)=>{
                              return <li key={i} className={this.state.userSelct==i?'active':' '}>
                                <a href={item.weburl}>
                                    <img src={item.pic||'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531460565316&di=28a3cc57e70a1d0113d5750820a52748&imgtype=0&src=http%3A%2F%2Fimg.sc115.com%2Fuploads%2Fshows%2F150317%2F201503171175.jpg'}></img>
                                    <div className="rightText clearfix">
                                      <h2>{item.title}</h2>
                                      <div>
                                        <span>{item.src}</span>
                                        <span>{item.time}</span>
                                      </div>
                                    </div>
                                </a>
                              </li>
                          })
                        }
                      </ul>
                  </div>
                  <div className="rightType">
                      <div className="top">
                        <Search
                          placeholder="输入关键字查找你想要的新闻吧"
                          enterButton="搜索"
                          size="large"
                          onSearch={value => console.log(value)}
                        />
                      </div>
                      <div className="dateInfo">
                          <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4,margin: 20,background:'#fff' }}>
                          <Calendar fullscreen={false}/>
                        </div>
                      </div>
                      <div className="gonggao">
                          <div className="info">
                            <h3>页面说明</h3>
                            <p>本人自学react第一个项目，目的在于了解react一些基础的东西，希望对你也有帮助。</p>
                          </div>
                      </div>
                  </div>
              </div>
              {/* 返回顶部 */}
              <BackTop />
                  Scroll down to see the bottom-right
              <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
          </div>
        </Router>
        )
      }
  }

  getNewListInfo(name,id){
    console.log(name)
    console.log(id)
      let _this=this;
      let newList=api.getNewTopInfo(name);
      newList.then(res=>{
            let topList=res.data.result.result.list;
          // 加载判断
          _this.setState({
            topList:topList,
            userSelct:id
          })
      })
  }



}

export default App;
