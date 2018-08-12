<template>
    <section class="msite">
        <div :title="title">
           <span class="header_search" slot="left">
            <i class="iconfont icon-sousuo"></i>
          </span>
          <span class="header_login" slot="right">
            <span class="header_login_text">登录|注册</span>
          </span>
        </div>
        <!--首页导航-->
        <nav class="msite_nav">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/1.jpg">
                  </div>
                  <span>甜品饮品</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/2.jpg">
                  </div>
                  <span>商超便利</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/3.jpg">
                  </div>
                  <span>美食</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/4.jpg">
                  </div>
                  <span>简餐</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/5.jpg">
                  </div>
                  <span>新店特惠</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/6.jpg">
                  </div>
                  <span>准时达</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/7.jpg">
                  </div>
                  <span>预订早餐</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/8.jpg">
                  </div>
                  <span>土豪推荐</span>
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/9.jpg">
                  </div>
                  <span>甜品饮品</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/10.jpg">
                  </div>
                  <span>商超便利</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/11.jpg">
                  </div>
                  <span>美食</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/12.jpg">
                  </div>
                  <span>简餐</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/13.jpg">
                  </div>
                  <span>新店特惠</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/14.jpg">
                  </div>
                  <span>准时达</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/1.jpg">
                  </div>
                  <span>预订早餐</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/2.jpg">
                  </div>
                  <span>土豪推荐</span>
                </a>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          <ShopList/>
        </div>
    </section>
</template>

<script>
    // import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
    import ShopList from '../../components/ShopList/ShopList.vue'
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    import {mapState} from 'vuex'
    export default {
      data() {
        return {
          title: "江西省南昌市江西农业大学"
        }
      },
      mounted() {
        new Swiper('.swiper-container', {
            loop: true,  // 可以循环轮播
            pagination: {
              el: ".swiper-pagination"
            }
          })
        //获取地址信息，因为现在位置是直接固定值，没有加入自动定位，只需要直接读取数据，如果是动态的就需要执行相应的方法

        //执行actions中获取分类的方法
        this.$store.dispatch('getCategroys')
      },
      components: {
        // HeaderTop,
        ShopList
      },
      computed:{
        ...mapState(['address','categroys']),
        categroysArr(){
          const {categroys} = this
          //准备空的二维数组
          const arr = []
          //准备小数组长度为8
          let minArr = []
          categroys.forEach(c => {
            //如果小数组长度等于8就创建一个新的小数组
            if(minArr.length===8){
              minArr = []
            }
            //如果minArr是空的就与大数组进行关联
            if(minArr.length===0){
              arr.push(minArr)
            }
            //将当前的分类保存到小数组
            minArr.push(c)
          })
          return arr
        }
      },
      watch:{
        categroys(value){
          // 创建一个swiper实例对象，来实现轮播
          // 此处虽然数据已经有了但是数据有了和界面更新是2个步骤：数据有了之后然后是异步更新界面显示
          // 直接这样创建轮播图是实现不了所要的效果，必须要异步

          /*
          new Swiper('.swiper-container', {
            loop: true,  // 可以循环轮播
            pagination: {
              el: ".swiper-pagination"
            }
          })
          */

          //必须异步，setTimeout虽然可以实现，但是给时间是固定值，比如某个设备性能很好，所需时长短，那么...

          /*
          setTimeout(()=>{
            new Swiper('.swiper-container', {
              loop: true,  // 可以循环轮播
              pagination: {
                el: ".swiper-pagination"
              }
            })
          },100)
          */

          //vue提供了一个更好的方法那就是当组件界面更新显示的时候的一个回调函数this.$nextTick(()=>{})
          //此方法适用于数据更新后立马调用此方法
          this.$nextTick(()=>{
            new Swiper('.swiper-container', {
              loop: true,  // 可以循环轮播
              pagination: {
                el: ".swiper-pagination"
              }
            })
          })

        }
      },
    }
  </script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
      .msite 
          width 100%
          .msite_nav
            bottom-border-1px(#e4e4e4)
            margin-top 45px
            height 200px
            background #fff
            .swiper-container
              width 100%
              height 100%
              .swiper-wrapper
                width 100%
                height 100%
                .swiper-slide
                  display flex
                  justify-content center
                  align-items flex-start
                  flex-wrap wrap
                  .link_to_food
                    width 25%
                    .food_container
                      display block
                      width 100%
                      text-align center
                      padding-bottom 10px
                      font-size 0
                      img
                        display inline-block
                        width 50px
                        height 50px
                    span
                      display block
                      width 100%
                      text-align center
                      font-size 13px
                      color #666
              .swiper-pagination
                >span.swiper-pagination-bullet-active
                  background #02a774
          .msite_shop_list
            top-border-1px(#e4e4e4)
            margin-top 10px
            background #fff
            .shop_header
              padding 10px 10px 0
              .shop_icon
                margin-left 5px
                color #999
              .shop_header_title
                color #999
                font-size 14px
                line-height 20px
    </style>