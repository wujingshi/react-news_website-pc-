import React, { Component } from 'react';
import { Row, Col,Spin, Alert,Input,Calendar } from 'antd';

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
        let newTypeList=[];
        // 数据二次处理
        typeList.forEach(element => {
          switch (element) {
            case '头条':
                newTypeList.push({name:element,link:'/toutiao'})
                break;
            case '新闻':
                newTypeList.push({name:element,link:'/xinwen'})
                break;
            case '财经':
                newTypeList.push({name:element,link:'/caijing'})
                break;
            case '体育':
                newTypeList.push({name:element,link:'/tiyu'})
                break;
            case '娱乐':
                newTypeList.push({name:element,link:'/yule'})
                break;
            case '军事':
                newTypeList.push({name:element,link:'/junshi'})
                break;
            case '教育':
                newTypeList.push({name:element,link:'/jiaoyu'})
                break;
            case '科技':
                newTypeList.push({name:element,link:'/keji'})
                break;
            case 'NBA':
                newTypeList.push({name:element,link:'/nba'})
                break;
            case '股票':
                newTypeList.push({name:element,link:'/gupiao'})
                break;
            case '星座':
                newTypeList.push({name:element,link:'/xingzuo'})
                break;
            case '女性':
                newTypeList.push({name:element,link:'/nvxing'})
                break;
            case '健康':
                newTypeList.push({name:element,link:'/jiankang'})
                break;
            case '育儿':
                newTypeList.push({name:element,link:'/yuer'})
                break;
          }
        });
        // 加载判断
        _this.setState({
          isLoding:false,
          typeList:newTypeList
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
                            return <li key={i} className={this.state.userSelct==i?'active':' '}>
                              < Link to={item.link}>{item.name}</Link>
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
                  </div>
              </div>
          </div>
        </Router>
        )
      }
  }
}

export default App;
