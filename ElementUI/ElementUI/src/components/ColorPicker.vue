<template>
<div>
  <h3>1.基础用法</h3>
  <p>用于颜色选择，支持多种格式。</p>
  <p>使用 v-model 与 Vue 实例中的一个变量进行双向绑定，绑定的变量需要是字符串类型。</p>
  <div class="block">
    <span class="demonstration">有默认值</span>
    <el-color-picker v-model="color1"></el-color-picker>
  </div>
  <div class="block">
    <span class="demonstration">无默认值</span>
    <el-color-picker v-model="color2"></el-color-picker>
  </div>
<h3>2.选择透明度</h3>
  <p>ColorPicker 支持普通颜色，也支持带 Alpha 通道的颜色，通过show-alpha属性即可控制是否支持透明度的选择。</p>
  <el-color-picker v-model="color3" show-alpha></el-color-picker>
  <h3>3.不同尺寸</h3>
  <el-color-picker v-model="color4"></el-color-picker>
  <el-color-picker v-model="color4" size="medium"></el-color-picker>
  <el-color-picker v-model="color4" size="small"></el-color-picker>
  <el-color-picker v-model="color4" size="mini"></el-color-picker>
</div>
</template>

<script>
  export default {
    data() {
      return {
        color1: '#409EFF',
        color2: null,
        color3: 'rgba(19, 206, 102, 0.8)',
        color4: '#409EFF'
      }
    }
  };
</script>

<style scoped>

</style>
