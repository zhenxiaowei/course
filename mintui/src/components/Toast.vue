<template>
  <div>
    简短的消息提示框，支持自定义位置、持续时间和样式。
  </div>
</template>

<script>
  import {Toast} from 'mint-ui';
  export default {
    name: "Toast",
    mounted() {
      Toast({
        message: '文本内容',//文本内容
        position: 'bottom',//Toast 的位置
        duration: -1,//持续时间（毫秒），若为 -1 则不会自动关闭
        className:"aa1",//需要去掉scoped，才有作用
        iconClass:"mint-toast-icon mintui mintui-success"
      });
    }
  }
</script>

<style>
.aa1{
  background: crimson !important;
}
</style>
