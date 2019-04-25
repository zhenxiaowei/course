<template>
<div>
  <h3>
    居中布局
  </h3>
  <p>内容支持居中布局</p>
  <p>
    将 center 设置为 true 即可开启居中布局
  </p>
  <el-button type="text" @click="open6">点击打开 Message Box</el-button>
</div>
</template>

<script>
  export default {
    methods: {
      open6() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>

<style scoped>

</style>
