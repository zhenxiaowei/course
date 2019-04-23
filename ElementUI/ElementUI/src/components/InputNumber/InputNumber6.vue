<template>
    <div>
      <h1>InputNumber 计数器</h1>
      <h3>按钮位置</h3>
      <p>
        设置 controls-position 属性可以控制按钮位置。
      </p>
      <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>

<style scoped>

</style>
