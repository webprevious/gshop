<template>
    <div>
        <p>
            <mt-button type="default" @click="openLogin" style="width: 100%">登录/注册</mt-button>
        </p>
        <p>
            <mt-button type="danger" style="width: 100%" @click="logout">退出登录</mt-button>
        </p>
    </div>
</template>

<script>
    import { MessageBox } from 'mint-ui'
    export default{
        methods:{
            openLogin(){
                this.$router.push('/login')
            },
            logout(){
                MessageBox.confirm('确定退出?').then(
                    action=>{
                        // alert('点击了确定按钮')
                        //请求退出
                        this.$store.dispatch('logout')
                    },
                    action=>{
                        alert('点击了取消按钮')
                    })
            }
        },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    
</style>