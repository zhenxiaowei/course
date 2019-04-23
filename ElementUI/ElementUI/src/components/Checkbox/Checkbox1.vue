<template>
  <div>
    <h3>Checkbox 多选框</h3>
    <h6>1.基础用法</h6>
    <p>单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。</p>
    <p>在el-checkbox元素中定义v-model绑定变量，单一的checkbox中，默认绑定变量的值会是Boolean，选中为true。</p>
    <!-- `checked` 为 true 或 false -->
    <el-checkbox v-model="checked">备选项</el-checkbox>
  </div>
</template>

<script>
  export default {
    name: "Checkbox",
    data() {
      return {
        checked: true,
      }
    }
  }
</script>

<style scoped>

</style>
