<template>
  <div id="app" :class="[getTheme]">
      <!--
          父子组件传递信息 @tools='changePages' 子组件 向组件传递数据 通过事件 触发
      -->
     <n-header  @tools='changePages'></n-header>
     <section class="container">
        <n-add></n-add>
        <n-list></n-list>
        <!-- 父组件向子组件传递数据
         @cleardialog='clearData'
                    @uploadData='uploadData'
                    @opentable='openTable'
                    @opentheme='openTheme'-->
        <n-slidebar :is-show='tools'
                    @opentheme='openTheme'
        ></n-slidebar>
     </section>
     <n-theme :is-show='theme'
     ></n-theme>
     <n-footer></n-footer>

      <!--<router-view></router-view>-->
  </div>
</template>

<script>
// 驼峰命名 在页面 是-连接
// 向子组件中传递的数据也是
import nHeader from '@/components/header'
import nFooter from '@/components/footer'
import nAdd from '@/components/event-add'
import nList from '@/components/event-list'
import nSlidebar from '@/components/slidebar'
import nTheme from '@/components/theme'

export default {
  data(){
    return {
        tools:false,// 默认隐藏
        theme:false,
    }
  },
  components:{nHeader,nFooter,nAdd,nList,nSlidebar,nTheme},
  computed:{
    getTheme(){
        // 获取主题的颜色
      return this.$store.getters.getTheme;
    }
  },
  methods:{
    changePages(){
        // 只会执行一个 不会冲突
        if(this.theme){
            this.theme = !this.theme
        }else{
            this.tools = !this.tools;
        }

    },
    openTheme(){
        this.theme = true;//主题页面打开
        this.tools = false;//slidebar隐藏
    }
  },
}
</script>

<style lang="scss" rel="stylesheet/scss" src="../static/theme.scss"></style>
<style>
html,body,ul,li,input,p{
    margin:0;
    padding:0;
}
body{
    font-size: 16px;
    font-family: "Helvetica Neue", Helvetica, "microsoft yahei", arial, STHeiTi, sans-serif;
}
input,button{
    -webkit-tap-highlight-color: transparent;
}
input[type=text]{
    -webkit-appearance: none;
}
button{
    padding:7px 0;
    outline: none;
    text-align: center;
    border-radius: 4px;
    box-sizing: border-box;
    font:{
        size:inherit;
        family: inherit;
    }
    cursor: pointer;
}
html,body{
    height: 100%;
}
::-webkit-scrollbar{
    width: 0;
}
body,#app{
    width:100%;
    overflow-x: hidden;
}
#app{
    height: 100%;
    padding-bottom: 60px;
    box-sizing: border-box;
}

ul{
    list-style: none;
}
.container{
  width: 100%;
  padding: 0 10px;
  max-width:800px;
  margin: auto;
  box-sizing: border-box
}
</style>
