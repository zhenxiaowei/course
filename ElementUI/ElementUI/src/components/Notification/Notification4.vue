<template>
  <div>
    <h3>自定义弹出位置</h3>
<p>让 Notification 偏移一些位置</p>
    <p>
      Notification 提供设置偏移量的功能，通过设置 offset 字段，可以使弹出的消息距屏幕边缘偏移一段距离。注意在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量。
    </p>
    <el-button
      plain
      @click="open11">
      偏移的消息
    </el-button>
  </div>
</template>

<script>
  export default {
    methods: {
      open11() {
        this.$notify({
          title: '偏移',
          message: '这是一条带有偏移的提示消息',
          offset: 100
        });
      }
    }
  }
</script>

<style scoped>

</style>
