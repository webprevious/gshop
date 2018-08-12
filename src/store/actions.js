// 通过mutations模块间接更新数据状态模块
import {RECIVE_ADDRESS,RECIVE_CATEGROYS,RECIVE_SHOPS,RECIVE_USER_INFO,RESET_USER_INFO, RECIVE_GOODS, RECIVE_RATING, RECIVE_INFO, INCREMENT_FOOD_COUNT,DECREMENT_FOOD_COUNT, CLEAR_CART} from './mutations_type'
import {reqAddress,reqFoodCategorys,reqShops,reqUserInfo,reqLogout,reqShopInfo,reqShopGoods,reqShopRating} from '../api'

export default{
    //异步获取地址
    async getAddress({commit,state}){
        const geohash = state.lat + ',' + state.lon
        const result = await reqAddress(geohash)
        if(result.code===0){
            const address = result.data
            commit(RECIVE_ADDRESS,{address})
        }
    },
    //异步获取食品分类
    async getCategroys({commit}){
        const result = await reqFoodCategorys()
        if(result.code===0){
            const categroys = result.data
            commit(RECIVE_CATEGROYS,{categroys})
        }
    },
    //异步获取商家列表
    async getShops({commit,state}){
        const {lon,lat} = state
        const result = await reqShops(lon,lat)
        if(result.code===0){
            const shops = result.data
            commit(RECIVE_SHOPS,{shops})
        }
    },
    //同步记录用户信息
    recordUser({commit},userInfo){
        commit(RECIVE_USER_INFO,{userInfo})
    },
    //异步获取用户信息，app一打开就需要加载
    async getUserInfo({commit}){
        const result = await reqUserInfo()
        if(result.code===0){
            const userInfo = result.data
            commit(RECIVE_USER_INFO,{userInfo})
        }    
    },
    //异步登出
    async logout({commit}){
        const result = await reqLogout()
        if(result.code===0){
            const userInfo = result.data
            //重置用户信息，清除用户信息的commit
            commit(RESET_USER_INFO)
        }    
    },
    //异步获取商家信息
    async getShopInfo({commit}){        
        const result = await reqShopInfo()
        if(result.code===0){
            const info = result.data
            commit(RECIVE_INFO,{info})
        }    
    },
    //异步获取商品列表
    async getShopGoods({commit},callback){
        const result = await reqShopGoods()
        if(result.code===0){
            const goods = result.data
            commit(RECIVE_GOODS,{goods})
            callback && callback()//异步展现数据时将需要执行的代码作为传递的数据传过来
        }    
    },
    //异步获取评价列表
    async getShopRating({commit},callback){
        const result = await reqShopRating()
        if(result.code===0){
            const rating = result.data
            commit(RECIVE_RATING,{rating})
            callback && callback()//异步展现数据时将需要执行的代码作为传递的数据传过来
        }    
    },
    //同步更新food中的count值
    updateFoodcount({commit},{isAdd,food}){
        if(isAdd){
            commit(INCREMENT_FOOD_COUNT,{food})
        }else{
            commit(DECREMENT_FOOD_COUNT,{food})
        }
    },
    //同步清空购物车
    clearCart({commit}){
        commit(CLEAR_CART)
    },
}