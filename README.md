# 新闻网站（react-pc）
---
花了2个礼拜把node,express,mongdb一级react和react native自学了下，发现自己的自学能力还是挺强大的，在无聊的找工作期间，网上找了一个免费api，写了这个网站，希望对刚自学的你有帮助。
1.免费api地址：https://wx.jdcloud.com/market/datas/31/11073
2.react跨域的问题，采用node的反向代理

## 项目结构
>* --nodeServer      （node反向代理文件夹）
>* ----app.js(逻辑文件)
>* ----package.json(主体配置文件)
>* --src      （react完整嘎哈呢）
>* ----app.js(首页)
>* --server(api获取文件夹)
>* --staic(静态资源css文件夹)

---

## 项目启动方法
1.先进入文件夹后下包npm install
2.进入nodeServer文件夹，启动node反向代理：node app.js
3.启动react网站：npm start

---
## 项目一阶段结束总结
1.总体来说react学起来还不算难，毕竟vue有多借鉴到到react，入门不算难
2.就生命周期来看，确实跟vue有点区别，this的调取和跨页面传值也有点困难

---
**项目2.0待有空在继续更新吧中……**