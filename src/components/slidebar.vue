<template>
<div class="event-tools" :class="{'show-event-tools':isShow}">
    <ul class="tools-sidebar">
      <li>
        <button class="tools-btn" @click="openTheme()">切换主题</button>
      </li>
      <li>
        <button class="tools-btn" @click="downloadData('note.text',getDate)">下载数据</button>
      </li>
      <li>
        <button class="tools-btn" @click="uploadData()">导入数据</button>
      </li>
      <li>
        <button class="tools-btn" @click="openTable()">编辑数据</button>
      </li>
      <li>
        <button class="tools-btn" @click="showDialog()">清空数据</button>
      </li>
    </ul>
</div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  props:['isShow'],
  computed:{
    getDate(){
      const self = this;
      return JSON.stringify(self.$store.state)
    }
  },
  methods:{
    // 切换主题
    openTheme(){
        console.log('主题页面打开');
        this.$emit('opentheme');// 触发父组件 打开 主题页面事件
    },
    // 下载数据
    downloadData(fileName,content){
        console.log('下载数据');
        let aTag = document.createElement('a');
        let blob = new Blob([content]); // Blob 返回二进制数据
        aTag.download = fileName;
        aTag.href = URL.createObjectURL(blob);
        aTag.click()
        URL.revokeObjectURL(blob);// 释放 blob 对象
    },
    // 导入数据
    uploadData(){

    },
    showDialog(){

    },
    openTable(){

    }
  }
}
</script>
<style lang="scss" >
.event-tools{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  padding: 100px 20px 30px;
  box-sizing: border-box;
  transform: translateX(-200px);
  transition: transform .3s;
  text-align: center;
  background: rgba(0, 0, 0, .5);
  font-size: 16px;
  z-index: 9;
  &.show-event-tools{
    transform: translateX(0)
  }
  .tools-sidebar{
    &>li{
      line-height: 60px
    }
    .tools-btn{
      width: 100px;
      height: 40px;
      line-height: 26px;
      color: #fff;
      transition: background .3s ease-in;
    }
  }
}
</style>
