import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Spin, Alert } from 'antd';
import { Carousel } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import api from './server/api'

class App extends Component {

  constructor(){
    super();
    // 初始化数据存储，类似于vue的data；
    this.state={
      isLoding:true,
      typeList:[],
      topList:[],
      userSelct:0
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
    // 获取头条
    let newTop=api.getNewTopInfo();
    newTop.then(res=>{
      let topList=res.data.result.result.list;
      console.log(topList)
      // 数据二次处理
      topList.forEach(element => {
        
      });
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
                      {/* 轮播图 */}
                      <div className="swiper">
                        <Carousel vertical autoplay>
                          {
                            this.state.topList.map((item,i)=>{
                              return <div key={i}>
                                <Link to='/'>
                                  <img src={item.pic}></img>
                                  <h2>{item.title}</h2>
                                </Link>
                              </div>
                            })
                          }
                        </Carousel>
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
