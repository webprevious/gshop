// 封装ajax模块 

//此粗略模块，执行ajax()方法后返回的是promise对象，想要获取后台传过来的数据还需要使用promise.data
import axios from 'axios'
export default function ajax(url,data={},type='GET'){
    let promise
    if(type==='GET'){
        //准备url query参数数据
        let dataStr = ''//数据拼接字符串
        Object.keys(data).forEach(key=>{
            dataStr += key + '=' + data[key] + '&'
        })
        if(dataStr !== ""){
            dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
            url = url + '?' + dataStr 
        }
        //发送get请求
        promise = axios.get(url)
    }else{
        //发送post请求
        promise = axios.post(url,data)
    }
    return promise
}

// 此版本是升级版本，返回值直接是数据data
import axios from 'axios'
export default function ajax(url,data={},type='GET'){
    return new Promise(function(resolve,reject){
        //执行ajax请求
        let promise
        if(type==='GET'){
            //准备url query参数数据
            let dataStr = ''//数据拼接字符串
            Object.keys(data).forEach(key=>{
                dataStr += key + '=' + data[key] + '&'
            })
            if(dataStr !== ""){
                dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr 
            }
            //发送get请求
            promise = axios.get(url)
        }else{
            //发送post请求
            promise = axios.post(url,data)
        }
        promise.then(function(response){
            //成功调用resolve
            resolve(response.data)
        }).catch(function(error){
            //失败调用reject
            reject(error)
        })
    })
}