<template>
  <div>
    <h3>文本域</h3>
    <p>用于输入多行文本信息，通过将 type 属性的值指定为 textarea。</p>
    <p>文本域高度可通过 rows 属性控制</p>
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
      v-model="textarea">
    </el-input>
  </div>
</template>

<script>
  export default {
    name: "Input1",
    data() {
      return {
        textarea: ''
      }
    }
  }
</script>

<style scoped>

</style>
