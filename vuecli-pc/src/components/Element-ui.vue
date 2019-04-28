<template>
  <div class="element-ui">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside>Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Element-ui'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .el-header{
   line-height: 60px;
   background: #1f79ec;
   text-align: center;
 }
 .el-aside{
   text-align: center;
   background: #1d7db1;
 }
 .el-main{
   text-align: center;
   background: #26b1ac;
 }
  .el-footer{
    line-height: 60px;
    background: #35b1ec;
    text-align: center;
  }
</style>
