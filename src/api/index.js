// 包含n个接口请求函数的模块
//函数返回值是promise对象
import ajax from './ajax'

//根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`/position/${geohash}`) //此处的geohash不是query参数，不是传给后台的数据

//获取食品分类列表
export const reqFoodTypes = () => ajax('/index_category')

//获取商家列表
export const reqShops = (lon,lat) => ajax('/shop',{lon,lat})