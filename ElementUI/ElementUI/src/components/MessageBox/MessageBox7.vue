<template>
<div>
  <h3>
    全局方法
  </h3>
  <p>如果你完整引入了 Element，它会为 Vue.prototype 添加如下全局方法：$msgbox, $alert, $confirm 和 $prompt。因此在 Vue instance 中可以采用本页面中的方式调用 MessageBox。调用参数为：</p>
  <p>
    $msgbox(options) <br>
    $alert(message, title, options) 或 $alert(message, options)<br>
    $confirm(message, title, options) 或 $confirm(message, options)<br>
    $prompt(message, title, options) 或 $prompt(message, options)<br>
  </p>
  <h3>单独引用</h3>
  <p>import { MessageBox } from 'element-ui';</p>
  <p>那么对应于上述四个全局方法的调用方法依次为：MessageBox, MessageBox.alert, MessageBox.confirm 和 MessageBox.prompt，调用参数与全局方法相同。</p>
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
