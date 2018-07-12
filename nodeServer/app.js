// 解决跨域问题，服务端反向代理

const express=require('express');
const request=require('request');

const app=express();

//设置一下，允许我们自己的浏览器访问我们自己的服务器
app.all('*',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// 获取新闻类型
app.get('/newType',(req,res)=>{
    const url ='https://way.jd.com/jisuapi/channel?appkey=30426c00452566d49f1a4f5f12c94c22';

    //找豆瓣服务器要数据
    request(url, function (error, response, body) {
        res.setHeader("Content-Type","application/json;charset=utf-8")
        res.end(body)
    })
})
// 获取头条新闻
app.get('/newInfoList',(req,res)=>{
    const url ='https://way.jd.com/jisuapi/get?channel=%E5%A4%B4%E6%9D%A1&num=5&start=0&appkey=30426c00452566d49f1a4f5f12c94c22';

    //找豆瓣服务器要数据
    request(url, function (error, response, body) {
        res.setHeader("Content-Type","application/json;charset=utf-8")
        res.end(body)
    })
})

app.listen(8088,"127.0.0.1",(err)=>{
  if(err){
    console.log(err)
    return
  }
  console.log("服务器启动了！")
})