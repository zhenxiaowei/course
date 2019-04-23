<template>
<div>
  <h3>禁用状态</h3>
  <p>通过 disabled 属性指定是否禁用 input 组件</p>
  <el-input v-model="input" placeholder="请输入内容" :disabled="true"></el-input>
</div>
</template>

<script>
    export default {
        name: "Input1",
      data() {
        return {
          input: '1'
        }
      }
    }
</script>

<style scoped>

</style>
