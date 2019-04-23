<template>
    <div>
      <h1>InputNumber 计数器</h1>
      <h3>基础用法</h3>
      <p>要使用它，只需要在el-input-number元素中使用v-model绑定变量即可，变量的初始值即为默认值。</p>
      <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
