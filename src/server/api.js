// import fetchJsonp from 'fetch-jsonp';
import axios from 'axios';




export default {
    // 获取新闻种类列表
    getNewTypeList(){
        const promise = new Promise(function(resolve, reject) {
            const url='http://127.0.0.1:8088/newType'
            axios.get(url).then(res=>{
                resolve(res);
            }).catch(err=>{
                reject(err);
            })
        });

        return promise;
    },
    // 获取新闻详情
    getNewTopInfo(){
        const promise = new Promise(function(resolve, reject) {
            const url='http://127.0.0.1:8088/newInfoList'
            axios.get(url).then(res=>{
                resolve(res);
            }).catch(err=>{
                reject(err);
            })
        });

        return promise;
    }

}