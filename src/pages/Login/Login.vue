<template>
    <div>
        <h1><button @click="$router.back()">退出</button></h1>
        <div class="login_head">
            <span class="login_item" :class="{on:isShow}" @click="isShow=true">短信登录</span>
            <span class="login_item" :class="{on:!isShow}" @click="isShow=false">密码登录</span>
        </div>
        <div class="login_content">
            <div :class="{show:!isShow}">
                <p>短信登录</p>
                <div style="height: 100px;"><input type="text" v-model="phone"><button class="btn" :class="{btnon:right_phone}" :disabled="!right_phone" @click.prevent="getCode">{{computeTime?`已发送${computeTime}s`:'获取验证码'}}</button></div>
            </div>
            <div :class="{show:isShow}">
                <p>密码登录</p>
                <div style="height: 100px;">
                    <input type="text" v-model="pwd" v-if="!isShowSwitch">
                    <input type="password" v-model="pwd" v-else>
                    <button class="btnswitch" @click="isShowSwitch=!isShowSwitch" :class="{on:!isShowSwitch}">
                        <span :class="{circle:isShowSwitch,circleright:!isShowSwitch}"></span>
                    </button>
                </div>
            </div>
            <div><button style="width: 80px;height: 30px;text-align: center;background: green;color: white;outline: none;border: none;" @click="login">登录</button></div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                isShow:true,
                phone:'',
                computeTime:0,//计时
                isShowSwitch:true,
                pwd:''
            }
        },
        computed:{
            right_phone(){
                return /^1\d{10}$/.test(this.phone)
            }
        },
        methods:{
            getCode(){
                //如果当前没有计时
                if(!this.computeTime){
                    //启动倒计时
                    this.computeTime = 30
                    const timer = setInterval(()=>{
                        this.computeTime--
                        if(this.computeTime<=0){
                            clearInterval(timer)
                        }
                    },1000)
                    //发送ajax请求
                    }
            },
            login(){
                //点击登录按钮时对数据进行在客户验证合法性
                //重点是收集数据
                //判断不同的登录方式然后对数据进行检查并给出相应的提示
                //先显示提示框，根据状态标识和展示数据对提示框进行控制是否显示，以及显示什么内容，展示后要关闭提示框，通过点击提示框上确定按钮分发一个自定义事件this.$emit('事件名')，然后在login界面的组件上监听
                //提示框组件分发事件 login界面使用提示框组件进行监听事件
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .login_head
        width 100%
        text-align center
    
    .login_item
        padding 4px 10px 
        font-size 20px
    
    .on
        border-bottom 2px solid red
    
    .show
        display none
    
    .login_content
        height 100px
        line-height 100px
        text-align center
    .btn
        border 1px solid #eee
        &.btnon
            color red
    .btnswitch
        width 30px
        height 12px
        background white
        border 1px solid gray
        border-radius 3px 3px
        position relative
        outline none
        &.on
            background green
    .circle
        border-radius 50%
        width 8px
        height 8px
        background white
        border 1px solid gray
        position absolute
        top 0
        left 0
    .circleright
        border-radius 50%
        width 8px
        height 8px
        background white
        border 1px solid gray
        position absolute
        top 0
        right 0
</style>