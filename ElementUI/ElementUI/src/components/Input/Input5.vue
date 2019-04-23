<template>
  <div>
    <h3>带 icon 的输入框</h3>
    <p>带有图标标记输入类型</p>
    <p>可以通过 prefix-icon 和 suffix-icon 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。</p>
    <div class="demo-input-suffix">
      属性方式：
      <el-input
        placeholder="请选择日期"
        suffix-icon="el-icon-date"
        v-model="input1">
      </el-input>
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input2">
      </el-input>
    </div>
    <div class="demo-input-suffix">
      slot 方式：
      <el-input
        placeholder="请选择日期"
        v-model="input3">
        <i slot="suffix" class="el-input__icon el-icon-date"></i>
      </el-input>
      <el-input
        placeholder="请输入内容"
        v-model="input4">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
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
