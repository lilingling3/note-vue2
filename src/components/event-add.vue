<template>
    <div class="event-add">
        <input type="text" class="add-input" v-model="content" @keyup.enter="submit" placeholder="待办事项"></input>
        <button class="add-btn" @click="submit">提交</button>
    </div>
</template>

<script>
export default {
  data(){
    return {
      content:''
    }
  },
  methods:{
    submit(){
      let self = this,
          params = {
            id:0,
            type:1,
            content:'',
          }
      self.content = self.content.trim();
      if(self.content){
        params.content = self.content;
        // 获得 store => actions 分发触发
        self.$store.dispatch('addEvent',params)
        self.content = ''
      }

    }
  }
}
</script>

<style lang="scss" ref="stylesheet/scss">
.event-add{
  position: relative;
  font-size:16px;
  padding: 30px 90px 30px 0;
  .add-input{
    width: 100%;
    height: 40px;
    padding: 7px 10px;
    line-height: 26px;
    border:1px solid #c0ccda;
    border-radius: 4px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    box-sizing: border-box;
    font-size: inherit;
    &:focus{
      outline: none
    }
  }
  .add-btn{
    position: absolute;
    right: 0;
    top: 30px;
    width: 80px;
    height: 40px;
    line-height: 26px;
    color: #fff;
    font-size: inherit
  }
}
</style>

