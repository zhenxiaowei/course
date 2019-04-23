<template>
  <div>
    <h3>Checkbox 多选框</h3>
    <h6>禁用状态</h6>
<p>设置disabled属性即可。</p>
    <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
    <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
  </div>
</template>

<script>
  export default {
    name: "Checkbox",
    data() {
      return {
        checked1: false,
        checked2: true
      }
    }
  }
</script>

<style scoped>

</style>
