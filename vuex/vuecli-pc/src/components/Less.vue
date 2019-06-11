<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside>Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "Less"
    }
</script>

<style scoped lang="less">
.el-container{
  .el-header{
    line-height: 60px;
    background: #1d7db1;
  }
  .el-container{
    .el-aside{
      background: #00A5FF;
    }
  }
}
</style>
