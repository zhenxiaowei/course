<template>
  <div>
    <h3>Radio 单选框</h3>
    <p>
      1.基础用法 <br>
      由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。
    </p>
    <p>
      要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean。
    </p>
    <el-radio v-model="radio1" label="1">备选项</el-radio>
    <el-radio v-model="radio1" label="2">备选项</el-radio>

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
