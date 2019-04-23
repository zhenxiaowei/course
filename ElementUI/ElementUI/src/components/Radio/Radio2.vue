<template>
  <div>
    <h3>Radio 单选框</h3>

    <p>
      2.单选框组 <br>
      适用于在多个互斥的选项中选择的场景
    </p>
    <p>
      结合el-radio-group元素和子元素el-radio可以实现单选组，在el-radio-group中绑定v-model，在el-radio中设置好label即可，无需再给每一个el-radio绑定变量，另外，还提供了change事件来响应变化，它会传入一个参数value。
    </p>
    <el-radio-group v-model="radio2">
      <el-radio :label="3">备选项</el-radio>
      <el-radio :label="6">备选项</el-radio>
      <el-radio :label="9">备选项</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
  export default {
    name: "Radio",
    data() {
      return {
        radio1: '1',
        radio2:3,
        radio3: '上海',
        radio4: '上海',
        radio5: '上海',
        radio6: '上海'
      };
    }
  }
</script>

<style scoped>

</style>
