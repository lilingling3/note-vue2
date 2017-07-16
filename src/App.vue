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
                    @uploadData='uploadDialogData'
                    @cleardialog='clearData'
                    @opentable='openTable'
        ></n-slidebar>
     </section>
    <!--
       dialog 动画
      -->
    <transition name='dialog'>
        <n-dialog v-show="dialog" :msg='tips' @cancel = 'cancelUpload' @sure='sureDialog'></n-dialog>
    </transition>
    
     <n-table :is-show='table' @deldialog='delDialog'></n-table>

     <n-theme :is-show='theme'></n-theme>

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
import nDialog from '@/components/dialog'
import nTable from '@/components/event-table'

export default {
  data(){
    return {
        tools:false,// 默认隐藏
        theme:false,
        dialog:false,
        dialog_type:'',
        tips:'',
        table:false,
        del_info: {
            index: 0,
            id: 0
        }
    }
  },
  components:{nHeader,nFooter,nAdd,nList,nSlidebar,nTheme,nDialog,nTable},
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
        }else if(this.table){
            this.table = !this.table
        }else{
            this.tools = !this.tools;
        }
    },
    openTheme(){
        this.theme = true;//主题页面打开
        this.tools = false;//slidebar隐藏
    },
    uploadDialogData(){
        this.tools = false;
        this.dialog = true;
        this.dialog_type = 'upload';
        this.tips = 'upload';
    },
    cancelUpload(){
        this.dialog = false;
    },
    // 不是 上传 的确定事件
    sureDialog(){
        const self = this;
        switch(self.dialog_type){
            case 'clear':
                console.log('llll')
                self.$store.dispatch('clearEvent');
                break;
            case 'del':
                 self.$store.dispatch('delEvent',self.del_info)
                 break;
        }
        self.dialog = false;
    },
    clearData(){
        this.tools = false;
        this.dialog = true;
        this.dialog_type = 'clear';
        this.tips = '清空后无法恢复，确认清空吗？'
    },
    openTable(){
        this.table = true;
        this.tools = false;
    },
    delDialog(index,id){
        this.dialog = true;
        this.dialog_type = 'del';
        this.tips = '删除后无法恢复，确认删除吗？';
        this.del_info = {
             index: index,
             id: id
        }
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
.dialog-enter-active, .dialog-leave-active {
    transition: opacity .3s;
}
.dialog-enter, .dialog-leave-to{
    opacity: 0;
}
</style>
