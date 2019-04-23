<template>
    <div>
      <h1>InputNumber 计数器</h1>
      <h3>步数</h3>
      <p>
        允许定义递增递减的步数控制
      </p>
      <p>设置step属性可以控制步长，接受一个Number。</p>
      <el-input-number v-model="num" :step="2"></el-input-number>
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
