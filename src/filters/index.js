import Vue from 'vue'
import moment from 'moment'

// // 自定义过滤器
Vue.filter('data-fromat',function (value,formatStr='YYYY-MM-DD HH:mm:ss') { 
    return moment(value).format(formatStr)
})

// 过滤器模块只需要加载就OK
// import './src/filters'
// Vue.filter('dateFormat',function(value){
//     return timestampToTime(value)
// })

// function timestampToTime(timestamp) {
//     var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
//     Y = date.getFullYear() + '-';
//     M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
//     D = date.getDate() + ' ';
//     h = date.getHours() + ':';
//     m = date.getMinutes() + ':';
//     s = date.getSeconds();
//     return Y+M+D+h+m+s;
// }