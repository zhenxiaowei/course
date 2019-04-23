<template>
<div>
  <h3>可清空</h3>
  <p>使用clearable属性即可得到一个可清空的输入框</p>
  <el-input v-model="input" placeholder="请输入内容" clearable></el-input>
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
