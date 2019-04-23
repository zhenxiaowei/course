<template>
    <div>
      <h1>InputNumber 计数器</h1>
      <h3>精度</h3>
      <p>
        设置 precision 属性可以控制数值精度，接收一个 Number。
      </p>
      <p>precision 的值必须是一个非负整数，并且不能小于 step 的小数位数。</p>
      <el-input-number v-model="num" :precision="2" :step="0.1" :max="10"></el-input-number>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        num: 1
      };
    }
  };
</script>

<style scoped>

</style>
