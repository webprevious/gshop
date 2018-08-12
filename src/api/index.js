// 包含n个接口请求函数的模块
//函数返回值是promise对象
import ajax from './ajax'

const BASE_URL = '/api'

//根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(BASE_URL+`/position/${geohash}`) //此处的geohash不是query参数，不是传给后台的数据

//根据经纬度关键字搜索商铺列表
export const reqSearchShop = (geohash,keyword) => ajax(BASE_URL+`/searchshop`,{geohash,keyword})

//获取食品分类列表
export const reqFoodCategorys = () => ajax(BASE_URL+'/index_category')

//根据经纬度获取商家列表
export const reqShops = (lon,lat) => ajax(BASE_URL+'/shop',{lon,lat})

//密码登录
export const reqPwdLogin = ({name,pwd,captcha}) => ajax(BASE_URL+'/login_pwd',{name,pwd,captcha},'POST')

//发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL+'/sendcode',{phone})

//短信验证码登录
export const reqSmsLogin = ({phone,code}) => ajax(BASE_URL+'/login_sms',{phone,code},'POST')

//根据会话获取用户信息
export const reqUserInfo = () => ajax(BASE_URL+'/userinfo')

//用户登出
export const reqLogout = () => ajax(BASE_URL+'/logout')


//获取商家信息
export const reqShopInfo = ()=>ajax('/info')
    
//获取评价信息
export const reqShopRating = ()=>ajax('/rating')

//获取商品信息
export const reqShopGoods = ()=>ajax('/goods')