<template>
    <div>
      <h1>InputNumber 计数器</h1>
      <h3>禁用状态</h3>
      <p>
        disabled属性接受一个Boolean，设置为true即可禁用整个组件，如果你只需要控制数值在某一范围内，可以设置min属性和max属性，不设置min和max时，最小值为 0。
      </p>
      <el-input-number v-model="num" :disabled="true"></el-input-number>
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
