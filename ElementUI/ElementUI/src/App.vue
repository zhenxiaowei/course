<template>
  <div id="app">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu>
          <el-menu-item-group>
            <template slot="title">Basic</template>
            <el-submenu index="1">
              <template slot="title">Layout 布局</template>
              <el-menu-item @click="goTo('Layout1')" index="1-1">基础布局</el-menu-item>
              <el-menu-item @click="goTo('Layout2')" index="1-2">分栏间隔</el-menu-item>
              <el-menu-item @click="goTo('Layout3')" index="1-3">混合布局</el-menu-item>
              <el-menu-item @click="goTo('Layout4')" index="1-4">分栏偏移</el-menu-item>
              <el-menu-item @click="goTo('Layout5')" index="1-5">对齐方式</el-menu-item>
              <el-menu-item @click="goTo('Layout6')" index="1-6">响应式布局1</el-menu-item>
              <el-menu-item @click="goTo('Layout7')" index="1-7">响应式布局2</el-menu-item>
            </el-submenu>
            <el-menu-item>Container 布局容器</el-menu-item>
            <el-menu-item>Color 色彩</el-menu-item>
            <el-menu-item>Icon 图标</el-menu-item>
            <el-menu-item>Button 按钮</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group title="form">
            <el-menu-item>Radio 单选框</el-menu-item>
            <el-menu-item>Checkbox 多选框</el-menu-item>
            <el-menu-item>Input 输入框</el-menu-item>
            <el-menu-item>InputNumber 计数器</el-menu-item>
            <el-menu-item>Select 选择器</el-menu-item>
            <el-menu-item>Cascader 级联选择器</el-menu-item>
            <el-menu-item>Switch 开关</el-menu-item>
            <el-menu-item>Slider 滑块</el-menu-item>
            <el-menu-item>TimePicker 时间选择器</el-menu-item>
            <el-menu-item>DatePicker 日期选择器</el-menu-item>
            <el-menu-item>DateTimePicker 日期时间选择器</el-menu-item>
            <el-menu-item>Upload 上传</el-menu-item>
            <el-menu-item>Rate 评分</el-menu-item>
            <el-menu-item>ColorPicker 颜色选择器</el-menu-item>
            <el-menu-item>Transfer 穿梭框</el-menu-item>
            <el-menu-item>Form 表单</el-menu-item>
          </el-menu-item-group>
        </el-menu>
      </el-aside>

      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goTo(path){
      this.$router.push({
        path:path
      })
    }
  }
}
</script>

<style>
html,body,#app{
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
