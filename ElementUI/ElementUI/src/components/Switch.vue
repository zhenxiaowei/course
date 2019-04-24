<template>
<div>
  <h3>1.基本用法</h3>
  <p>绑定v-model到一个Boolean类型的变量。可以使用active-color属性与inactive-color属性来设置开关的背景色。</p>
  <el-switch
    v-model="value2"
    active-color="#13ce66"
    inactive-color="#ff4949">
  </el-switch>
  <h3>2.文字描述</h3>
  <p>使用active-text属性与inactive-text属性来设置开关的文字描述。</p>
  <el-switch
    v-model="value3"
    active-text="按月付费"
    inactive-text="按年付费">
  </el-switch>
  <el-switch
    style="display: block"
    v-model="value4"
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-text="按月付费"
    inactive-text="按年付费">
  </el-switch>
  <h3>3.扩展的 value 类型</h3>
  <p>设置active-value和inactive-value属性，接受Boolean, String或Number类型的值</p>
  <el-tooltip :content="'Switch value: ' + value5" placement="top">
    <el-switch
      v-model="value5"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-value="100"
      inactive-value="0">
    </el-switch>
  </el-tooltip>
  <h3>4.禁用状态</h3>
  <p>设置disabled属性，接受一个Boolean，设置true即可禁用。</p>
  <el-switch
    v-model="value6"
    disabled>
  </el-switch>
  <el-switch
    v-model="value7"
    disabled>
  </el-switch>
</div>
</template>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true,
        value3: true,
        value4: true,
        value5: '100',
        value6: true,
        value7: false
      }
    }
  };
</script>

<style scoped>

</style>
