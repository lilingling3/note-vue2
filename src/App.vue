<template>
  <div id="app" :class="[getTheme]">
     <n-header></n-header>
     <section class="container">

     </section>
     <n-footer></n-footer>
  </div>
</template>

<script>
import nHeader from '@/components/header'
import nFooter from '@/components/footer'

export default {
  data(){
    return {

    }
  },
  components:{nHeader,nFooter},
  computed:{
    getTheme(){
      return this.$store.getters.getTheme;
    }
  }
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
