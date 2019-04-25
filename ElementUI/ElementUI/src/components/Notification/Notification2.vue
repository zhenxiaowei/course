<template>
  <div>
    <h3>带有倾向性</h3>
    <p>
      带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息
    </p>
<p>
  Element 为 Notification 组件准备了四种通知类型：success, warning, info, error。通过type字段来设置，除此以外的值将被忽略。同时，我们也为 Notification 的各种
  type 注册了方法，可以在不传入type字段的情况下像open5和open6那样直接调用。
</p>
    <el-button
      plain
      @click="open3">
      成功
    </el-button>
    <el-button
      plain
      @click="open4">
      警告
    </el-button>
    <el-button
      plain
      @click="open5">
      消息
    </el-button>
    <el-button
      plain
      @click="open6">
      错误
    </el-button>
  </div>
</template>

<script>
  export default {
    methods: {
      open3() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },

      open4() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning'
        });
      },

      open5() {
        this.$notify.info({
          title: '消息',
          message: '这是一条消息的提示消息'
        });
      },

      open6() {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息'
        });
      }
    }
  }
</script>

<style scoped>

</style>
