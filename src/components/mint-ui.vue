<template>
<div>
    <div id="btn" @click="openToast">
      点击
      </div>
      <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
      <mt-palette-button content="+">
      <div class="my-icon-button"></div>
      <div class="my-icon-button"></div>
      <div class="my-icon-button"></div>

    </mt-palette-button>
    <mt-spinner type="snake" color="#26a2ff"></mt-spinner>
<mt-spinner type="double-bounce"></mt-spinner>
<mt-spinner type="triple-bounce"></mt-spinner>
<mt-spinner type="fading-circle"></mt-spinner>
<mt-search
  v-model="value"
  cancel-text="取消"
  placeholder="搜索">
</mt-search>
</div>
</template>

<script>
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';



export default {
  data() {
    return {
      slots: [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
    };
  },
  methods:{

    openToast(){
      // Toast({
      //    message: '操作成功',
      //    iconClass: 'icon icon-success'
      // });
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });

      setTimeout(function() {
          Indicator.close();
      }, 3000);
    },
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">

</style>
