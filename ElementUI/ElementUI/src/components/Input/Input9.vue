<template>
  <div>
    <h3>尺寸</h3>
    <p>可通过 size 属性指定输入框的尺寸，除了默认的大小外，还提供了 large、small 和 mini 三种尺寸。</p>
    <div class="demo-input-size">
      <el-input
        placeholder="请输入内容"
        suffix-icon="el-icon-date"
        v-model="input1">
      </el-input>
      <el-input
        size="medium"
        placeholder="请输入内容"
        suffix-icon="el-icon-date"
        v-model="input2">
      </el-input>
      <el-input
        size="small"
        placeholder="请输入内容"
        suffix-icon="el-icon-date"
        v-model="input3">
      </el-input>
      <el-input
        size="mini"
        placeholder="请输入内容"
        suffix-icon="el-icon-date"
        v-model="input4">
      </el-input>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Input1",
    data() {
      return {
        input1: '',
        input2: '',
        input3: '',
        input4: ''
      }
    }
  }
</script>

<style scoped>


</style>
