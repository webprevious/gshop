# gshop

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 项目开发准备
    项目描述 前后端分离的外卖项目，spa应用，项目开发模式：模块化 组件化 工程化
    技术选型 vue全家桶 前后端交互ajax使用的是axios库 自己封装适合自己开发的ajax库promise 接口的测试 模拟数据 stylus库
    api接口 前后台交互接口 url 请求方式 请求参数 返回数据格式 接口一般有接口文档 postman测试接口

# 开启项目开发
    使用脚手架创建项目
    安装依赖
    开发环境运行
    生产环境打包发布

# 搭建项目整体界面结构
    stylus的理解和使用
        结构化 变量 函数/minxin
    vue-router的理解使用
        $router 路由器对象，包含操作路由的功能函数，实现页面跳转
        $route 当前路由对象，包含当前路由信息数据的容器 path/meta/query/params
    项目路由拆分
    底部导航组件
    导航路由组件

# 抽取组件
    头部组件 通过slot来实现组件之间的标签通信
    商家列表组件

# 登录路由组件
    静态组件
    底部导航的显示和隐藏：通过路由的meta

# 后台项目
    启动后台项目 理解前后端分离
    测试后台接口 使用postman
    看接口文档是否有问题

# 前后端交互
    ajax请求库 axios
    封装适合自己的请求函数 axios+promise
    封装接口请求函数

# 跨域发送http请求是浏览器做的控制 解决跨域的方法
    1.服务器告诉浏览器允许他跨域 服务器端开发是加上头部允许
    2.懵逼浏览器 配置config文件夹中index.js文件的proxyTable然后在url上拼接上'./api'
    本质上是访问应用所在的前台服务器，内部存在代理转发，也就是配置的ProxyTable 代理运行在前台服务器，负责跨域转发，与服务器进行交换信息

# 设计vuex main.js中注册
    1.index.js 向外暴露store对象，引入vuex插件并使用vuex插件
    2.state.js 存放和向外暴露从服务器获取的数据，或者需要管理的数据
    3.actions.js 页面需要的执行方法 定义异步actions 发送ajax请求 提交commit给mutations
    4.mutations.js 处理数据的核心方法
    5.getters.js 存放所有计算属性 需要由state中数据计算得到的数据

# 读取vuex管理的数据有两种方法
    1.this.$store.state
    2.在组件的计算属性computed中...mapState(['要读取的数据'])但是要先引入import {mapState} from 'vuex'
    3.使用第二种方法读取数据需要将其扩展放入计算属性computed中，读取使用actions中方法需要将其扩展放入methods
    4.页面获取服务器数据步骤：
        0.一进入页面就需要执行的方法或者代码可以在生命周期mounted中执行
        1.发ajax请求 执行actions中对应的方法 使用this.$store.dispatch('')方法名 或者 mapActions
        2.读取state中数据
        3.渲染到页面

# 组件异步显示数据
    1.在mounted中通过$store.dispatch('actionsName')异步获取后台数据到state中
    2.mapState(['xxx'])读取state中的数据到组件中
    3.在模板中显示数据

# 模板中显示的数据来源
    1.data 自身所带的data
    2.props 外部传入
    3.computed 根据data props 别的compute其他计算属性，多个计算属性 vuex中的state getters

# 渲染轮播图
    1.需求：每8个小分类一页，如果是17个小分类那么第三页就是一个，后台返回来的数据就是直接17扔过来，因此需要对扔过来的数组进行处理，
    2.处理思路：二维数组，数组里面保存数组，最后进行嵌套遍历
        v-for="(xxx,index) in maxArr" 
        v-for="(yyy,index) in xxx" 
    3.数据渲染完成后发现轮播图不能正常
        1.产生原因：swiper在mounted生命周期就加载了，但此时数据并没有渲染完毕，刚开始数组是空的，后面数组有了数据
        2.解决办法：监视数组数据 watch + $nextTick() 
        

# 渲染商家列表
    1.主要是v-for

# svg显示加载中 比如网速慢，数据还没有回来，总不能让页面空着
    1.目的是提供用户体验
    2.使用方法，将需要替换的标签加上v-if="判断是否加载完数据" 同级添加一个同样的标签v-else


# 注册登录
    1.前台界面功能
        1.切换登录 包括手机号+短信验证码登录 手机号+密码+图片验证码
            实现方法通过动态类名和一个标识当前为何种登录方式

        2.手机号合法性检查
        3.短信验证码倒计时效果
        4.登录密码的显示或隐藏
        5.前台验证
    
    2.后台数据交互
        1.动态一次性图形验证码
        2.动态一次性短信验证码
        3.短信登录
        4.密码登录
        5.获取用户信息，实现自动登录
        6.退出登录

# 登录成功需要把用户数据记录到state中userInfo{}
    1.新增一个action以及对于的mutations和mutationstype
    2.在登录组件相应位置执行记录用户信息的actions this.$router.dispatch('recordUser',记录的用户信息data)
    3.然后在相应需要读取用户信息的界面读取用户数据，比如在profile中先使用mapState引入vuex
    4.渲染到页面上 分手机号登录和用户名登录
        1.手机号登录就展示手机号
        2.用户名登录就展示用户名，暂未绑定手机号
        3.实现过程
            <p v-if="!userInfo.phone">{{userInfo.name||"登录/注册"}}</p>
            <p><span>{{userInfo.phone||"暂未绑定手机号"}}</span></p>
        4.还得修改相应的路由，之前一进来profile就是点击"登录/注册"进入login页面，现在已经登录成功，点击应该是进入个人详细信息
        5.实现过程：写一个判断进行3目运算userInfo._id?'/userinfo':'/login' 然后绑定到路由组件的router-link 的to属性上
        6.首页界面左上角的登录注册也需要根据是否登录进行相应的显示，登录了就显示已登录图标，未登录就显示 登录/注册
        7.实现过程：依然是根据userInfo进行判断，路由也进行相应的判断切换，通过slot进行传递的标签就需要改成router-link才有to属性，直接把相应的router-link传给子组件的slot标签，router-link其实就是a标签

# 登录成功后，刷新之后信息就不在了，不能保持登录状态
    1.保持登录状态实现
        1.登录成功后记录user_id
        2.添加获取用户信息的actions并将获取的信息存入state
        3.在App的mounted中执行获取用户信息的函数

# 退出登录
    1.要求：未登录前不显示，登录后显示，
    2.实现：v-if

# vue中使用mint-ui
    1.下载npm install mint-ui --save
    2.下载按需打包插件npm install --save-dev babel-plugin-component
    3.修改babel配置使插件生效，根目录下的.babellrc文件，在plugin配置项加入["component",[{
        "libraryName":"mint-ui",
        "style":true
    }]]
    4.mint-ui是要在全局中使用组件插件，因此需要去main.js中注册
        import {Button} from 'mint-ui' //按需加载
        Vue.component(Button.name,Button) //映射成全局组件


# 一次性验证码 图形验证码为后台生成的SVG 返回值就是一个svg图
    1.要求：图形验证码有效性只有一次，点击获取新的图形验证码
    2.实现方法
        1.返回直接是svg图因此直接访问相应的网址即可获取
        2.点击切换 添加点击事件，更改事件对象e.target.src = 'http://www.baidu.com?time='+Data.now()
        3.要获取不同的验证码，因此每次的src必须不同，但是url是固定的，那么可以加上一个时间参数

# 如果多个方法函数需要使用到同一个新定义的变量，但是此变量没有在data，props，computed中，可以直接使用this.变量名，相当于把这个变量变成全局变量

# mock模拟数据
    1.下载npm install mock --save
    2.创建mock文件夹，创建相应mockServer.js 引入mock和数据，写好拦截请求的url
    3.在main.js中引入

# 异步显示数据 数据都是先获取后显示 有个前后关系 没有数据之前就显示就会报错
    1.一般是在于多层次，比较深的数据需要有异步获取和展示
    2.没有数据之前可以使用v-if进行判断是否展示相应标签

# vue自带动画标签，用于解决比较生硬的显示和隐藏
    1.将需要显示和隐藏的内容放入<transition name="fade"><div class="test"></div></transition>
    2.给test的class下级样式加入
        &.fade-enter-active,&.fade-leave-active
            transition opacity 0.5s
        &.fade-enter,&.fade-leave-to
            opacity 0

# 店铺页面 当前分类和分类下商品展示相应变化
    1.展示当前分类应该有一个差别与其他分类的样式
    2.当点击左侧某个分类时，右侧商品应该自动滑动到相应分类
    3.当滑动右侧商品时，到达某个分类时左侧应该自动滑到相应分类
    实现过程
        1.当前分类通过一个类名current样式类来区别于其他分类
        2.设计一个当前分类索引用于记录当前所在分类的计算属性currentIndex
            此计算属性由：右侧滑动的Y轴坐标scrollY，滑动实时在变化，右侧分类每个分类的高度tops，tops在读取完数据就可以确定高度
    实现方法
        1.滑动过程中实时收集scrollY
        2.列表第一次展示后收集tops
        3.实现currentIndex计算逻辑

# 滑动插件better-scroll使用 弹动效果
    1.npm install better-scroll --save
    2.import BScroll from 'better-scroll'
    3.const bs = new BScroll('元素选择器',{配置对象}),只需要选中需要滑动的内容的整体标签标识
    4.但是需要数据有了之后再展现，不然会报错，先要有列表数据，然后展现
    5.以往实现通过watch+$nextTick()
    6.现在使用当触发异步获取商品列表时
    this.$store.dispatch('getShopGoods',()=>{
        this.$nextTick(()=>{
            new BScroll('元素选择器')
        })
    })

    7.BScroll的实例上有很多方法，比如绑定事件监听on方法等，scrollY滑动多少就可以在此处计算得到
    8.解决惯性滑动，scrollY并未发生改变，可以绑定scrollEnd事件，得到滚动停止时的scrollY
    9.滚动到指定位置的事件scrollTo

# 计算tops
    1.根据每个li的高度，选取li时的技巧，为快速定位，需要给ul加一个标识ref="foodsUl" 然后选取this.$refs.foodUl.getElementsByClassName('li的类名')或者this.$refs.foodUl.children()
    2.实现代码
    const tops = []
    let top = 0
    const lis = this.$refs.foodUl.getElementsByClassName('li的类名')
    Array.prototype.slice.call(lis).forEach(li=>{
        top += li.clientHeight
        tops.push(top)
    })
    收集完成后更新数据
    this.tops = tops

# 计算当前index 根据scrollY 和 tops进行计算得到
    currentIndex(){
        const {scrollY,tops} = this
        const index = tops.findIndex((top,index)=>{
            return scrollY>=top && scrollY<=tops[index+1]
        })
        return index
    }

# 当拿不到变量或者组件方法时，前面加上this.将其变成全局

# 当在某个组件要更新数据时且该数据是state里面数据，那就应该是要触发actions调用

# vue对于state对象中的对象后期新增加的数据属性是没有数据绑定的
    解决办法
    Vue.set(state中要增加属性的对象，要增加的属性名，属性值)

# 面试之学习过程中遇到问题
    1.对于vue中已经有数据绑定的对象想要给他新加一个属性，虽然可以新加但是没有数据绑定，也就是数据变化，界面不更新
    2.对于先有实例创建，但是实例中所需的数据需要从后台获取还未产生到位，导致所创建实例并没有相应的功能，这个就可能导致本应该有的功能没有甚至还会报错，解决办法是watch+$nextTick(()=>{})
    
# 解决BScroll多例创建现象 目标实现单例创建
    1.问题出现：当将一件商品加入购物车时，就会创建一个BScroll实例，添加多个商品就会创建多个BScroll实例，
    导致点一下加号出现一次加好几个
    2.解决办法，先判断是否已经创建过实例
    this.$nextTick(()=>{
        //先判断是否存在该实例
        if(!this.scroll){
            //先保存起来
            this.scroll = new BScroll('',{
                click:true
            })
        }else{
            //实例已经创建，重新统计高度看是否需要进行滚动
            this.scroll.refresh() //刷新重新统计高度
        }
    })

# 遇到根据条件切换不同的样式，需要把这些样式类名存到一个数组里面

# 解决BScroll水平滑动时因为ul宽度小于内部多个li的宽度，导致不能水平滑动
    解决办法
        动态计算ul的宽度并且修改ul的宽度

# 先点击A页面数据会加载到位，但是B页面会使用A页面中的数据，如果直接在B页面刷新就会报错
    解决办法：
        在B页面数据用到处加条件判断，如果没有数据直接return出去

# 形成列表，列表带路由跳转
    :to="'/shop?id='+item.id"
    <router-link to="{path:'shop',query:{id:item.id}}" tag="li" v-for="item in searchFoods" :key="item.id">

    </router-link>

# 路由组件之前切换都是重新加载一次组件，有时候切换又不想重新加载，想要他保持之前的状态，
    解决办法
    将该组将放到<keep-alive>放入此处就可以保持状态不会被重新加载，原理是把之前状态缓存了起来，不会进行再次加载</keep-alive>

    此办法名称：缓存路由组件对象<keep-alive></keep-alive>

# 路由组件懒加载 组件按需加载
    需求：开发环境，第一次打开应用会把所有js文件我们写的，第三方的都打包到一个文件，但是我们第一次仅仅是想显示第一个首页，这也为了更好的用户体验，按需加载

    解决方案：
    主要是按需加载生产版本的static/js/app.js中的代码
    按路由组件来拆，进入router文件夹处理index.js
    const MSite = ()=>import('../pages/MSite/MSite.vue')
    const Search = ()=>import('../pages/Search/Search.vue')
    const Order = ()=>import('../pages/Order/Order.vue')
    const Profile = ()=>import('../pages/Profile/Profile.vue')
    因此路由配置里面的component中的组件就是一个函数表达式，只有执行了函数表达式才会去加载路由组件

# 图片懒加载 使用的是vue的插件vue-lazyload
    1.npm install --save vue-lazyload
    可能整个项目都会使用到图片懒加载所以在入口main.js中注册
    2.import VueLazyload from 'vue-lazyload'
    3.Vue.use(VueLazyload,{配置，有个非常好的配置项，加载中显示一个指定图片})
    4.在需要懒加载的图片img标签使用v-lazy替代图片的src属性 

# 缓存路由组件和路由组件懒加载是两码事
    1.缓存路由组件：是在浏览器内存将获取的数据进行缓存，不再进行发送数据请求ajax
    2.路由组件懒加载是真正的通过函数表达式进行按需加载所需要的的组件

# 页面后退问题，回到上一个页面
    问题产生：
    店铺页面，展示了3个子组件路由，每次切换使用的是push方法，每点一次就是新加一个窗口，
    而后退是后退一个push

    问题解决办法：给router-link标签加一个replace属性就可以解决了
    给<router-link to="/shop" replace></router-link>

# vue项目生产版本各文件说明 共static文件夹一个和index.html文件一个
    1.static中的js文件夹
        app.js 项目中我们手写的js代码
        mainfest.js webpack的模板文件
        vendor.js 引入的第三方库插件以及各个模块


# 项目使用git进行管理
    #1 传输到git上需要忽略的文件夹，在.gitignore中配置
    #2 传输步骤1：将本文件夹初始化为本地git仓库git init然后git add *然后进行一次本地提交git commit -m "提交"
    #3 传输步骤2：创建远程仓库会生成关联地址然后与本地仓库进行关联git remote add origin https://github.com/webprevious/gshop.git然后git push origin master提交

# vue项目打包分析工具 可以看出页面使用过的库 打包出来是个图片 称为可视化打包
    npm run build --report

    图形化看出项目所用插件或者第三方库大小，考虑换掉大的库，比如moment比较大，推荐替代date-fns