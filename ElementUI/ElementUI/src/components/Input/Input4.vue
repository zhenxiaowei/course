<template>
<div>
  <h3>密码框</h3>
  <p>使用show-password属性即可得到一个可切换显示隐藏的密码框</p>
  <el-input v-model="input" placeholder="请输入内容" show-password></el-input>
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
