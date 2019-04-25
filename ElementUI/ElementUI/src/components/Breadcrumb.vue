<template>
<div>
  <h3>
    基础用法
  </h3>
  <p>
    在el-breadcrumb中使用el-breadcrumb-item标签表示从首页开始的每一级。Element 提供了一个separator属性，在el-breadcrumb标签中设置它来决定分隔符，它只能是字符串，默认为斜杠/。
  </p>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
  </el-breadcrumb>
  <h3>
    图标分隔符
  </h3>
  <p>通过设置 separator-class 可使用相应的 iconfont 作为分隔符，注意这将使 separator 设置失效</p>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
  </el-breadcrumb>
</div>
</template>

<script>
    export default {
        name: "Breadcrumb"
    }
</script>

<style scoped>

</style>
