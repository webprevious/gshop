// 包含多个基于state的getter计算属性对象
export default{
    //计算购物车中食物列表个数
    totalCount(state){
        return state.cartFoods.reduce((preTotal,food)=>
            preTotal + food.count
        ,0)
    },
    //计算购物车中食物列表总价格
    totalPrice(state){
        return state.cartFoods.reduce((preTotal,food)=>
            preTotal + food.count*food.price
        ,0)
    },
    positiveSize(state){
        return state.ratings.reduce((preTotal,rating)=>preTotal + (rating.rateType===0?1:0),0)
    }
}