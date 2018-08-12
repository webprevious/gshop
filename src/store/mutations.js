// 直接更新数据模块
import Vue from 'vue'
import {RECIVE_ADDRESS,RECIVE_CATEGROYS,RECIVE_SHOPS,RECIVE_USER_INFO,RESET_USER_INFO, RECIVE_GOODS, RECIVE_RATING, RECIVE_INFO, INCREMENT_FOOD_COUNT, DECREMENT_FOOD_COUNT, CLEAR_CART} from './mutations_type'

export default{
    [RECIVE_ADDRESS] (state,{address}){
        state.address = address
    },
    [RECIVE_CATEGROYS] (state,{categroys}){
        state.categroys = categroys
    },
    [RECIVE_SHOPS] (state,{shops}){
        state.shops = shops
    },
    [RECIVE_USER_INFO] (state,{userInfo}){
        state.userInfo = userInfo
    },
    [RESET_USER_INFO] (state){
        state.userInfo = {}
    },
    [RECIVE_GOODS] (state,{goods}){
        state.goods = goods
    },
    [RECIVE_RATING] (state,{rating}){
        state.ratings = rating
    },
    [RECIVE_INFO] (state,{info}){
        state.info = info
    },
    [INCREMENT_FOOD_COUNT] (state,{food}){
        if(!food.count){//第一次点，要先判断是否有值
            // food.count = 1 //count是新增加的数据，它没有数据绑定
            Vue.set(food,'count',1)//这个方法就可以实现新加的属性也有数据绑定，vue框架就会知道
            state.cartFoods.push(food)//第一次点加号就需要添加到购物车，count是引用值，count自动变化，cartFoods自动可以得到
        }else{
            food.count++
        }
    },
    [DECREMENT_FOOD_COUNT] (state,{food}){
        if(food.count){//是否大于0
            food.count--
            if(food.count===0){
                //将food从cartFoods中移除
                state.cartFoods.splice(state.cartFoods.indexOf(food),1)
            }
        }
    },
    [CLEAR_CART](state){
        //因为count被food引用，所以先要清除count
        state.cartFoods.forEach(food=>food.count = 0)
        //移除所有购物车中购物项
        state.cartFoods = []
    }
}