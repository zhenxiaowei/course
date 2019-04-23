<template>
  <div>
    <h3>Checkbox 多选框</h3>
    <h6>可选项目数量的限制</h6>
    <p>使用 min 和 max 属性能够限制可以被勾选的项目的数量。</p>
    <el-checkbox-group
      v-model="checkedCities"
      :min="1"
      :max="2">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data() {
      return {
        checkedCities: ['上海', '北京'],
        cities: cityOptions
      };
    }
  };
</script>

<style scoped>

</style>
