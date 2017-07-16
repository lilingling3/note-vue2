<template>
<div class="dialog">
    <div class="dialog-wrap">
        <div class="dialog-header">
            <div class="dialog-header-tip">提示</div>
        </div>
        <!--非上传内容的  -->
        <div class="dialog-content" v-if="msg !== 'upload'">
            {{msg}}
        </div>
        <!--上传文件的内容  -->
        <div class="dialog-content" v-else>
            <input type="file" accept="*.text" @change="upload($event)"></input>
            <p>只允许下载由侧边栏下载的note.text文件</p>
            <p v-if="up_suc">数据读取成功，是否确定导入？</p>
            <p v-if="up_err">上传失败，只允许note.txt文件</p>
        </div>
        <div class="dialog-btns">
            <button type='button' class="cancel-btn" @click='cancelEvent'>取消</button>
            <button type='button' class="sure-btn" @click='sureEvent' v-if="msg !=='upload'">确定</button>
            <button type='button' class="sure-btn" @click='sureUpload' v-else>确定</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            up_suc:false,
            up_err:false,
            events:''
        }
    },
    props:['msg'],
    methods:{
        // 取消事件
        cancelEvent(){
            this.$emit('cancel')
        },
        // 不是上传 的确定事件
        sureEvent(){
            console.log('确定')
            this.$emit('sure')
        },
        // 确定上传的确定事件
        sureUpload(){
            if(this.up_suc){
                this.$store.dispatch('uploadEvent',this.events)
                this.cancelEvent()
            }
        },
        upload(event){
            const self = this,
                  evTarget = event.srcElement ? event.srcElement : event.target,
                  files = evTarget.files,
                  reader = new FileReader();
                  console.log(files)
                  if(files[0] && files[0].name.indexOf('note') !== -1){
                      reader.onload = function(ev){
                          console.log('上传文件 为note.text')
                          self.up_suc = true;
                          self.up_err = false;
                          self.events = ev.target.result;
                          console.log(self.events)// 上传文件内容
                      }
                      reader.readAsText(files[0]);// 读取文本 恢复数据
                  }else{
                      self.up_suc = false;
                      self.up_err = true;
                  }
        }
    },


}
</script>

<style lang="scss">
    .dialog{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        background: rgba(0, 0, 0, .4);
        z-index: 999;
        .dialog-wrap{
            position: absolute;
            left: 50%;
            top: 20%;
            width: 100%;
            max-width: 400px;
            transform: translateX(-50%);
            background: #fff;
            border-radius: 2px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
            animation: dialog .5s;
        }
        .dialog-header{
            padding: 20px 20px 0;
        }
        .dialog-content{
            padding: 30px 20px;
            color: #475669;
            font-size: 18px;
            text-align: center;
            p{
                font-size: 14px;
                margin-top: 10px;
            }
        }
        .dialog-btns{
            padding: 10px 20px 15px;
            text-align: center;
            button{
                font-size: 14px;
                width: 50px;
            }
            .cancel-btn{
                background: #fff;
                border: 1px solid #c0ccda;
                color:  #1f2d3d;
            }
            .sure-btn{
                color: #fff;
                margin-left: 5px;
                transition: background .3s ease-in;
            }
        }
    }

    @keyframes dialog {
        from {
            top: 15%;
        }
    }
</style>

