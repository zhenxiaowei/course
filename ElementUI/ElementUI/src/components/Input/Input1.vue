<template>
<div>
  <h3>基础用法</h3>
  <el-input v-model="input" placeholder="请输入内容"></el-input>
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
